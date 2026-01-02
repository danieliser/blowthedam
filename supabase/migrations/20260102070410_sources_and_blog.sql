-- ============================================
-- BlowTheDam.com Database Schema
-- Sources, Citations, Blog, and Media
-- ============================================

-- ============================================
-- ENUM TYPES
-- ============================================

-- Source classification for credibility context
CREATE TYPE source_type AS ENUM (
  'peer_reviewed',  -- Academic journals, published research
  'agency',         -- Government/official agency reports
  'advocacy',       -- Think tanks, advocacy organizations
  'news',           -- News articles, journalism
  'legal',          -- Court documents, legislation
  'other'
);

-- Blog post workflow status
CREATE TYPE post_status AS ENUM (
  'draft',
  'published',
  'archived'
);

-- ============================================
-- SOURCE CATEGORIES
-- ============================================

CREATE TABLE source_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  description TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for ordering
CREATE INDEX idx_source_categories_sort ON source_categories(sort_order);

COMMENT ON TABLE source_categories IS 'Topic groupings for sources (manatees, water quality, etc.)';

-- ============================================
-- SOURCES
-- ============================================

CREATE TABLE sources (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,

  -- Core metadata
  title TEXT NOT NULL,
  short_title TEXT,  -- For compact citation display
  author TEXT,
  publication TEXT,  -- Journal, agency, publisher name
  year INTEGER,

  -- Classification
  source_type source_type DEFAULT 'other',
  category_id UUID REFERENCES source_categories(id) ON DELETE SET NULL,

  -- URLs
  url TEXT,          -- Primary link (web page)
  pdf_url TEXT,      -- Direct PDF link if available
  doi TEXT,          -- Digital Object Identifier

  -- Content
  description TEXT,  -- Brief summary for display
  full_citation TEXT, -- Complete formatted citation

  -- Display control
  is_featured BOOLEAN DEFAULT FALSE,
  sort_order INTEGER DEFAULT 0,

  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_sources_category ON sources(category_id);
CREATE INDEX idx_sources_slug ON sources(slug);
CREATE INDEX idx_sources_type ON sources(source_type);
CREATE INDEX idx_sources_featured ON sources(is_featured) WHERE is_featured = TRUE;
CREATE INDEX idx_sources_sort ON sources(category_id, sort_order);

COMMENT ON TABLE sources IS 'Primary source/reference storage with full metadata';

-- ============================================
-- SOURCE PASSAGES
-- ============================================

CREATE TABLE source_passages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  source_id UUID NOT NULL REFERENCES sources(id) ON DELETE CASCADE,

  -- The quoted content
  quote_text TEXT NOT NULL,
  context TEXT,  -- Brief explanation of what this quote establishes

  -- Direct link to the text (Google Text Fragment)
  fragment_url TEXT,  -- Full URL with #:~:text= fragment

  -- Location within source
  page_number TEXT,  -- Can be "5" or "5-7" or "Section 3.2"
  section TEXT,      -- Named section/chapter

  -- Usage guidance
  usage_hint TEXT,   -- When to use this passage

  -- Display control
  sort_order INTEGER DEFAULT 0,

  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_passages_source ON source_passages(source_id);

COMMENT ON TABLE source_passages IS 'Specific quoted passages from sources with direct link fragments';

-- ============================================
-- BLOG CATEGORIES
-- ============================================

CREATE TABLE blog_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  description TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_blog_categories_sort ON blog_categories(sort_order);

COMMENT ON TABLE blog_categories IS 'Blog post categorization';

-- ============================================
-- BLOG POSTS
-- ============================================

CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,

  -- Content
  title TEXT NOT NULL,
  excerpt TEXT,           -- Short summary for listings
  content TEXT NOT NULL,  -- Full post content (markdown/HTML)

  -- SEO metadata
  meta_title TEXT,        -- Override page title
  meta_description TEXT,  -- Meta description tag
  og_image_url TEXT,      -- Open Graph image
  canonical_url TEXT,     -- Canonical URL if cross-posted

  -- Categorization
  category_id UUID REFERENCES blog_categories(id) ON DELETE SET NULL,
  tags TEXT[] DEFAULT '{}',

  -- Featured image
  featured_image_url TEXT,
  featured_image_alt TEXT,

  -- Publishing workflow
  status post_status DEFAULT 'draft',
  published_at TIMESTAMPTZ,

  -- Author (simple string for now)
  author_name TEXT DEFAULT 'BlowTheDam Team',

  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_blog_posts_status ON blog_posts(status);
CREATE INDEX idx_blog_posts_published ON blog_posts(published_at DESC)
  WHERE status = 'published';
CREATE INDEX idx_blog_posts_category ON blog_posts(category_id);
CREATE INDEX idx_blog_posts_tags ON blog_posts USING GIN(tags);

COMMENT ON TABLE blog_posts IS 'Blog posts with full SEO and publishing support';

-- ============================================
-- MEDIA LIBRARY
-- ============================================

CREATE TABLE media (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Supabase Storage reference
  storage_path TEXT NOT NULL,  -- Path within bucket
  bucket TEXT NOT NULL DEFAULT 'media',

  -- File metadata
  filename TEXT NOT NULL,
  mime_type TEXT,
  file_size INTEGER,  -- Bytes

  -- Image dimensions (if applicable)
  width INTEGER,
  height INTEGER,

  -- Display metadata
  alt_text TEXT,
  caption TEXT,

  -- Computed public URL
  public_url TEXT,

  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_media_bucket ON media(bucket);
CREATE INDEX idx_media_mime ON media(mime_type);

COMMENT ON TABLE media IS 'Tracks files uploaded to Supabase Storage';

-- ============================================
-- AUTO-UPDATE TRIGGERS
-- ============================================

CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER sources_updated_at
  BEFORE UPDATE ON sources
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER source_categories_updated_at
  BEFORE UPDATE ON source_categories
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER source_passages_updated_at
  BEFORE UPDATE ON source_passages
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER blog_categories_updated_at
  BEFORE UPDATE ON blog_categories
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================
-- HELPER VIEWS
-- ============================================

-- Sources with their category info joined
CREATE VIEW sources_with_category AS
SELECT
  s.*,
  sc.slug AS category_slug,
  sc.name AS category_name,
  sc.sort_order AS category_sort_order
FROM sources s
LEFT JOIN source_categories sc ON s.category_id = sc.id
ORDER BY sc.sort_order, s.sort_order;

-- Published blog posts only
CREATE VIEW published_blog_posts AS
SELECT
  bp.*,
  bc.slug AS category_slug,
  bc.name AS category_name
FROM blog_posts bp
LEFT JOIN blog_categories bc ON bp.category_id = bc.id
WHERE bp.status = 'published'
  AND bp.published_at <= NOW()
ORDER BY bp.published_at DESC;

-- ============================================
-- ROW LEVEL SECURITY
-- ============================================

ALTER TABLE source_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE sources ENABLE ROW LEVEL SECURITY;
ALTER TABLE source_passages ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE media ENABLE ROW LEVEL SECURITY;

-- Public read access for all tables
CREATE POLICY "Public read source_categories" ON source_categories
  FOR SELECT USING (true);

CREATE POLICY "Public read sources" ON sources
  FOR SELECT USING (true);

CREATE POLICY "Public read source_passages" ON source_passages
  FOR SELECT USING (true);

CREATE POLICY "Public read blog_categories" ON blog_categories
  FOR SELECT USING (true);

-- Blog posts: only published posts are public
CREATE POLICY "Public read published blog_posts" ON blog_posts
  FOR SELECT USING (status = 'published' AND published_at <= NOW());

CREATE POLICY "Public read media" ON media
  FOR SELECT USING (true);

-- ============================================
-- SEED DATA: Categories
-- ============================================

INSERT INTO source_categories (slug, name, description, sort_order) VALUES
  ('manatees-habitat', 'Manatees, Habitat, & Connectivity', 'Research on manatee populations, habitat requirements, and ecosystem connectivity', 1),
  ('drawdowns-hydrology', 'Drawdowns, Hydrology, & Springs', 'Information on reservoir management, water flow, and spring systems', 2),
  ('water-quality', 'Water Quality, Algae, & SAV', 'Water quality data, algae blooms, and submerged aquatic vegetation', 3),
  ('dam-history', 'Dam History & Context', 'Historical background on Rodman Dam and the Cross Florida Barge Canal', 4),
  ('economics-fishing', 'Economics & Fishing', 'Economic impact studies and fishery management research', 5),
  ('additional-resources', 'Additional Context & Resources', 'Supplementary sources and background information', 6);

INSERT INTO blog_categories (slug, name, description, sort_order) VALUES
  ('news', 'News & Updates', 'Latest developments in the restoration effort', 1),
  ('research', 'Research & Science', 'Deep dives into scientific studies and data', 2),
  ('action', 'Take Action', 'How you can help the restoration effort', 3),
  ('stories', 'Stories & Perspectives', 'Personal stories and community perspectives', 4);
