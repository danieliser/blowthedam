-- ============================================
-- Convert Image Fields to JSONB for SupaMode
-- ============================================
-- This migration converts TEXT image URL fields to JSONB
-- to support SupaMode's image upload format

-- Step 1: Drop dependent view
DROP VIEW IF EXISTS published_blog_posts;

-- Step 2: Add new JSONB columns
ALTER TABLE blog_posts
  ADD COLUMN featured_image JSONB,
  ADD COLUMN og_image JSONB;

-- Step 3: Migrate existing data (if any URLs exist, convert to JSONB format)
UPDATE blog_posts
SET featured_image = jsonb_build_object('url', featured_image_url)
WHERE featured_image_url IS NOT NULL;

UPDATE blog_posts
SET og_image = jsonb_build_object('url', og_image_url)
WHERE og_image_url IS NOT NULL;

-- Step 4: Drop old TEXT columns
ALTER TABLE blog_posts
  DROP COLUMN featured_image_url,
  DROP COLUMN og_image_url;

-- Step 5: Recreate view with new schema
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

-- Step 6: Update comments
COMMENT ON COLUMN blog_posts.featured_image IS 'SupaMode Image: { url, filename, size, contentType }';
COMMENT ON COLUMN blog_posts.og_image IS 'SupaMode Image: { url, filename, size, contentType }';
