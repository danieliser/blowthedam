-- Auto-set published_at when status changes to 'published' (if not already set)
-- Allows manual scheduling (set published_at first) or instant publish (leave empty)

CREATE OR REPLACE FUNCTION set_published_at()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.status = 'published' AND NEW.published_at IS NULL THEN
    NEW.published_at = NOW();
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER blog_posts_set_published_at
  BEFORE INSERT OR UPDATE ON blog_posts
  FOR EACH ROW EXECUTE FUNCTION set_published_at();
