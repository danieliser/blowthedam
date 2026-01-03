-- Rename image fields to remove _url suffix
-- SupaMode Image picker stores JSON object (not just URL) in TEXT fields

-- Drop dependent view first
DROP VIEW IF EXISTS published_blog_posts;

-- Rename columns
ALTER TABLE blog_posts RENAME COLUMN featured_image_url TO featured_image;
ALTER TABLE blog_posts RENAME COLUMN og_image_url TO og_image;

-- Recreate view
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
