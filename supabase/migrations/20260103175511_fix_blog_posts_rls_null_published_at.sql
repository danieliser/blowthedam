-- Fix RLS policy to allow published posts with null published_at
-- Supports "publish immediately" workflow where date is not pre-set

DROP POLICY IF EXISTS "Public read published blog_posts" ON blog_posts;

CREATE POLICY "Public read published blog_posts" 
ON blog_posts 
FOR SELECT 
TO public 
USING (
  status = 'published'::post_status 
  AND (published_at IS NULL OR published_at <= now())
);
