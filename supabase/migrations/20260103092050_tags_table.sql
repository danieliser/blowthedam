-- Convert tags from TEXT[] to proper table with junction
-- Better SupaMode UX: dropdown/multi-select of existing tags

-- Drop dependent view first
DROP VIEW IF EXISTS published_blog_posts;

-- Create tags table
CREATE TABLE tags (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_tags_slug ON tags(slug);

COMMENT ON TABLE tags IS 'Reusable tags for blog posts';

-- Create junction table
CREATE TABLE blog_post_tags (
  post_id UUID NOT NULL REFERENCES blog_posts(id) ON DELETE CASCADE,
  tag_id UUID NOT NULL REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, tag_id)
);

CREATE INDEX idx_blog_post_tags_post ON blog_post_tags(post_id);
CREATE INDEX idx_blog_post_tags_tag ON blog_post_tags(tag_id);

COMMENT ON TABLE blog_post_tags IS 'Junction table linking posts to tags';

-- Drop old TEXT[] column
ALTER TABLE blog_posts DROP COLUMN tags;

-- Recreate view without tags (tags fetched via junction)
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

-- RLS policies for tags
ALTER TABLE tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_post_tags ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Tags are viewable by everyone"
  ON tags FOR SELECT USING (true);

CREATE POLICY "Blog post tags are viewable by everyone"
  ON blog_post_tags FOR SELECT USING (true);
