# Claude Code Implementation Prompt: BlowTheDam Sources & Blog System

## Context

You are implementing a Supabase-backed sources and blog system for BlowTheDam.com, an environmental advocacy website for Rodman Dam removal. The project uses **Next.js 16 + React 19 + Tailwind 4 + Vercel + Supabase**.

**Critical Documentation:**
- `docs/PRD-sources-blog-system.md` - Requirements, user stories, migration plan
- `docs/SPEC-sources-blog-system.md` - Complete SQL schema, TypeScript types, React components

Read both documents completely before starting implementation.

---

## Architecture: Vercel + Supabase Preview Environments

This project uses **Vercel Preview Deployments** with **Supabase Branching** (or a shared dev database). Configure for:

1. **Production:** `main` branch → Production Supabase project
2. **Preview:** PR branches → Preview/Development Supabase (same schema)

### Environment Variable Strategy

```
# Vercel Environment Variables (set in Vercel Dashboard)
# Production + Preview + Development

NEXT_PUBLIC_SUPABASE_URL=         # Supabase project URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=    # Supabase anon/public key

# Optional: For admin scripts only (not exposed to browser)
SUPABASE_SERVICE_ROLE_KEY=        # Service role key for migrations/seeds
```

**Vercel will automatically use the correct env vars per environment.**

---

## Implementation Phases

### Phase 1: Project Setup & Supabase Integration

```yaml
tasks:
  - Install @supabase/supabase-js
  - Create lib/supabase.ts with client setup
  - Create types/database.ts with full TypeScript types
  - Create .env.local.example template
  - Update .gitignore for .env.local
```

**Validation:** `pnpm tsc --noEmit` passes

### Phase 2: Database Migration

```yaml
tasks:
  - Create supabase/migrations/001_sources_and_blog.sql
  - Copy complete SQL schema from SPEC document
  - Document manual step: Run migration in Supabase Dashboard
```

**Note:** Migration must be run manually in Supabase SQL Editor. Create a `supabase/README.md` with instructions.

### Phase 3: Data Fetching Layer

```yaml
tasks:
  - Create lib/sources.ts with all source query functions
  - Create lib/blog.ts with all blog query functions
  - Implement proper error handling and null safety
  - Add ISR revalidation hints for Next.js caching
```

**Key functions from SPEC:**
- `getSourcesByCategory()` - For sources page
- `getCitationData(slug)` - For citation popovers
- `getPublishedPosts()` - For blog listing
- `getPostBySlug(slug)` - For individual posts

### Phase 4: API Routes

```yaml
tasks:
  - Create app/api/citations/[slug]/route.ts
  - Implement caching headers (Cache-Control: public, s-maxage=3600)
  - Return 404 for missing sources
```

### Phase 5: React Components

```yaml
tasks:
  - Create components/citation.tsx (with Popover from existing Radix UI)
  - Create components/source-card.tsx
  - Create components/source-category-section.tsx
  - Ensure all components use existing UI primitives from components/ui/
```

**Important:** Project already has `@radix-ui/react-popover` installed. Use the existing pattern.

### Phase 6: Update Sources Page

```yaml
tasks:
  - Convert app/sources/page.tsx from hardcoded to database-driven
  - Keep the existing hero section and "approach to evidence" card
  - Replace hardcoded Card components with SourceCategorySection
  - Add revalidate = 3600 for ISR
  - Preserve scroll-to-anchor functionality (id attributes on cards)
```

**Critical:** Maintain all existing anchor IDs for backward compatibility with existing citations on other pages.

### Phase 7: Seed Data Script

```yaml
tasks:
  - Create scripts/seed-sources.ts
  - Extract ALL sources from current hardcoded page
  - Map to new schema format
  - Create scripts/source-data.json with full source data
  - Document: "Run with SUPABASE_SERVICE_ROLE_KEY set"
```

### Phase 8: Blog System (Basic)

```yaml
tasks:
  - Create app/blog/page.tsx (listing)
  - Create app/blog/[slug]/page.tsx (individual post)
  - Add generateStaticParams for static generation
  - Include SEO metadata handling
```

### Phase 9: Integration Testing

```yaml
tasks:
  - Verify sources page loads from database (after seeding)
  - Test citation popover on existing content pages
  - Verify anchor links work (/sources#slug)
  - Check mobile responsiveness
  - Run Lighthouse audit
```

---

## File Structure (Final State)

```
blowthedam/
├── app/
│   ├── api/
│   │   └── citations/
│   │       └── [slug]/
│   │           └── route.ts          # Citation data endpoint
│   ├── blog/
│   │   ├── page.tsx                  # Blog listing
│   │   └── [slug]/
│   │       └── page.tsx              # Individual post
│   ├── sources/
│   │   └── page.tsx                  # Updated (database-driven)
│   └── ...existing pages
├── components/
│   ├── citation.tsx                  # NEW
│   ├── source-card.tsx               # NEW
│   ├── source-category-section.tsx   # NEW
│   └── ui/                           # Existing Radix components
├── lib/
│   ├── supabase.ts                   # NEW
│   ├── sources.ts                    # NEW
│   ├── blog.ts                       # NEW
│   └── utils.ts                      # Existing
├── types/
│   └── database.ts                   # NEW
├── supabase/
│   ├── migrations/
│   │   └── 001_sources_and_blog.sql  # NEW
│   └── README.md                     # NEW (migration instructions)
├── scripts/
│   ├── seed-sources.ts               # NEW
│   └── source-data.json              # NEW
├── docs/
│   ├── PRD-sources-blog-system.md    # Reference
│   └── SPEC-sources-blog-system.md   # Reference
├── .env.local.example                # NEW
└── package.json
```

---

## Critical Implementation Notes

### 1. Preserve Backward Compatibility

The current site has inline citations linking to `/sources#anchor-id`. These MUST continue working:

```tsx
// Current pattern in content pages:
<a href="/sources#usfws-recovery-plan">manatee recovery plan</a>

// New SourceCard must include:
<Card id={source.slug} className="scroll-mt-24">
```

Map old IDs to new slugs:
- `smith-1997` → `smith-1997` ✓
- `usfws-recovery` → `usfws-recovery-2001` (redirect or alias needed)

### 2. Environment-Aware Supabase Client

```typescript
// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// For Server Components
export function createServerClient() {
  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: { persistSession: false },
  });
}
```

### 3. Vercel Preview URL Handling

Supabase RLS doesn't need special preview handling since we're using `anon` key for public read. But if you add auth later:

```typescript
// For future auth integration
const getRedirectUrl = () => {
  const isPreview = process.env.VERCEL_ENV === 'preview';
  const previewUrl = process.env.VERCEL_URL;
  const prodUrl = process.env.NEXT_PUBLIC_SITE_URL;
  
  return isPreview ? `https://${previewUrl}` : prodUrl;
};
```

### 4. ISR + On-Demand Revalidation

```typescript
// app/sources/page.tsx
export const revalidate = 3600; // Revalidate every hour

// For on-demand revalidation (future webhook from SupaMode):
// app/api/revalidate/route.ts
import { revalidatePath } from 'next/cache';

export async function POST(request: Request) {
  const { secret, path } = await request.json();
  if (secret !== process.env.REVALIDATION_SECRET) {
    return Response.json({ error: 'Invalid secret' }, { status: 401 });
  }
  revalidatePath(path);
  return Response.json({ revalidated: true });
}
```

### 5. Type Safety with Supabase

Generate types from Supabase for maximum safety:

```bash
# Optional: Generate types from Supabase schema
npx supabase gen types typescript --project-id YOUR_PROJECT_ID > types/supabase.ts
```

But the manual types in SPEC are sufficient for this project.

---

## Commit Strategy

Make atomic commits for each phase:

```
feat(db): add Supabase client and TypeScript types
feat(db): add SQL migration for sources and blog
feat(api): add citation data endpoint
feat(ui): add Citation, SourceCard, SourceCategorySection components
refactor(sources): convert sources page to database-driven
feat(blog): add blog listing and post pages
chore(scripts): add source seed script with migration data
docs: add Supabase migration instructions
```

---

## Testing Checklist Before PR

- [ ] `pnpm build` succeeds
- [ ] `pnpm lint` passes
- [ ] Sources page loads (even if empty before seeding)
- [ ] Citation popover works on hover
- [ ] Anchor links scroll to correct source
- [ ] Blog pages render (even if empty)
- [ ] Mobile responsive on all new components
- [ ] No TypeScript errors
- [ ] Environment variables documented

---

## Post-Implementation: Manual Steps

Document these for the developer/admin:

1. **Run Supabase Migration:**
   - Go to Supabase Dashboard → SQL Editor
   - Paste contents of `supabase/migrations/001_sources_and_blog.sql`
   - Execute

2. **Seed Source Data:**
   ```bash
   SUPABASE_SERVICE_ROLE_KEY=xxx npx tsx scripts/seed-sources.ts
   ```

3. **Configure Vercel:**
   - Add `NEXT_PUBLIC_SUPABASE_URL` to all environments
   - Add `NEXT_PUBLIC_SUPABASE_ANON_KEY` to all environments

4. **Configure SupaMode (Optional):**
   - Point SupaMode at your Supabase project
   - Tables will auto-discover

---

## Start Here

1. Read `docs/PRD-sources-blog-system.md` completely
2. Read `docs/SPEC-sources-blog-system.md` completely
3. Begin with Phase 1: `pnpm add @supabase/supabase-js`
4. Work through each phase sequentially
5. Commit after each phase
6. Test thoroughly before final PR

**Goal:** A working sources page pulling from Supabase, with reusable Citation component ready for content pages, and a basic blog system framework.
