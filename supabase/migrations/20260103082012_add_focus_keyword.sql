-- Add focus_keyword field for SEO image filenames
ALTER TABLE blog_posts ADD COLUMN focus_keyword TEXT;

COMMENT ON COLUMN blog_posts.focus_keyword IS 'SEO focus keyword for image filenames (e.g. florida-manatee-habitat)';
