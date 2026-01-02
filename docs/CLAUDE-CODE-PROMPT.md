# Claude Code Implementation Prompt: BlowTheDam Sources & Blog System

## Context

You are implementing a Supabase-backed sources and blog system for BlowTheDam.com, an environmental advocacy website for Rodman Dam removal. The project uses **Next.js 16 + React 19 + Tailwind 4 + Vercel + Supabase**.

**Critical Documentation:**
- `docs/PRD-sources-blog-system.md` - Requirements, user stories, migration plan
- `docs/SPEC-sources-blog-system.md` - Complete SQL schema, TypeScript types, React components

Read both documents completely before starting implementation.

---

## Git Workflow

**Work in a feature branch. Create PR for preview deployment testing.**

```bash
# Start from main
git checkout main
git pull origin main

# Create feature branch
git checkout -b feature/supabase-sources-blog

# After implementation, push and create PR
git push -u origin feature/supabase-sources-blog
gh pr create --title "feat: Supabase sources & blog system" --body "..."
```

All commits go to the feature branch. Vercel will create a preview deployment for the PR.

---

## Supabase CLI Workflow

**Use Supabase CLI for all database operations. No manual SQL editor.**

### Initial Setup (if not already linked)

```bash
# Check if already linked
supabase status

# If not linked, link to project
supabase link --project-ref <project-id>

# Login if needed
supabase login
```

### Migration Workflow

```bash
# Create new migration
supabase migration new sources_and_blog

# This creates: supabase/migrations/<timestamp>_sources_and_blog.sql
# Copy SQL schema from SPEC into this file

# Push migration to remote database
supabase db push

# Or for local development first:
supabase start
supabase db reset  # Applies all migrations to local
```

### Type Generation

**Use Supabase Typegen. Do NOT write types manually.**

```bash
# Generate types from remote database (after migration is pushed)
supabase gen types typescript --project-id <project-id> > types/database.ts

# Or from local database
supabase gen types typescript --local > types/database.ts
```

After generating, you may want to add custom helper types (joins, etc.) in a separate file:

```typescript
// types/database-helpers.ts
import type { Database } from './database';

// Convenience aliases
export type Source = Database['public']['Tables']['sources']['Row'];
export type SourceInsert = Database['public']['Tables']['sources']['Insert'];
export type SourceCategory = Database['public']['Tables']['source_categories']['Row'];
// ... etc

// Joined types for queries
export interface SourceWithCategory extends Source {
  category: SourceCategory | null;
}
```

---

## Implementation Phases

### Phase 1: Branch & Project Setup

```bash
git checkout -b feature/supabase-sources-blog
pnpm add @supabase/supabase-js
```

```yaml
tasks:
  - Create feature branch
  - Install @supabase/supabase-js
  - Create lib/supabase.ts with client setup
  - Create .env.local.example template
  - Verify supabase CLI is linked
```

**Commit:** `feat(setup): add Supabase client and env template`

### Phase 2: Database Migration

```bash
supabase migration new sources_and_blog
# Edit the migration file with SQL from SPEC
supabase db push
```

```yaml
tasks:
  - Create migration file via CLI
  - Copy SQL schema from SPEC document (all tables, triggers, RLS, seed data)
  - Push migration to Supabase
  - Verify tables exist in Supabase Dashboard
```

**Commit:** `feat(db): add sources and blog schema migration`

### Phase 3: Type Generation

```bash
supabase gen types typescript --project-id <project-id> > types/database.ts
```

```yaml
tasks:
  - Generate types from Supabase
  - Create types/database-helpers.ts with convenience types
  - Verify types compile: pnpm tsc --noEmit
```

**Commit:** `feat(types): generate Supabase types`

### Phase 4: Data Fetching Layer

```yaml
tasks:
  - Create lib/sources.ts with all source query functions
  - Create lib/blog.ts with all blog query functions
  - Use generated types for full type safety
  - Add ISR revalidation hints
```

**Key functions:**
- `getSourcesByCategory()` - For sources page
- `getCitationData(slug)` - For citation popovers (lightweight)
- `getPublishedPosts()` - For blog listing
- `getPostBySlug(slug)` - For individual posts

**Commit:** `feat(data): add source and blog query functions`

### Phase 5: API Routes

```yaml
tasks:
  - Create app/api/citations/[slug]/route.ts
  - Implement caching headers (Cache-Control: public, s-maxage=3600)
  - Return 404 for missing sources
```

**Commit:** `feat(api): add citation data endpoint`

### Phase 6: React Components

```yaml
tasks:
  - Create components/citation.tsx (with existing Radix Popover)
  - Create components/source-card.tsx (with type badges)
  - Create components/source-category-section.tsx
  - Use existing UI primitives from components/ui/
```

**Commit:** `feat(ui): add Citation and Source display components`

### Phase 7: Update Sources Page

```yaml
tasks:
  - Convert app/sources/page.tsx from hardcoded to database-driven
  - Keep existing hero section and "approach to evidence" card
  - Replace hardcoded Cards with SourceCategorySection
  - Add revalidate = 3600 for ISR
  - CRITICAL: Preserve id attributes for backward-compatible anchors
```

**Backward Compatibility:** Current site has citations linking to `/sources#anchor-id`. These MUST work:
- Extract all existing `id` attributes from current file
- Ensure new slugs match OR create redirects

**Commit:** `refactor(sources): convert to database-driven page`

### Phase 8: Seed Data Script

```yaml
tasks:
  - Create scripts/seed-sources.ts
  - Extract ALL sources from current hardcoded page (22+ sources)
  - Map to new schema format with correct category slugs
  - Use Supabase service role for inserts
```

```bash
# Run seed script
SUPABASE_SERVICE_ROLE_KEY=xxx npx tsx scripts/seed-sources.ts
```

**Commit:** `chore(scripts): add source seed script`

### Phase 9: Blog System

```yaml
tasks:
  - Create app/blog/page.tsx (listing)
  - Create app/blog/[slug]/page.tsx (individual post)
  - Add generateStaticParams for static generation
  - Add generateMetadata for SEO
```

**Commit:** `feat(blog): add blog listing and post pages`

### Phase 10: Testing & PR

```yaml
tasks:
  - Run pnpm build (must succeed)
  - Run pnpm lint (must pass)
  - Test sources page loads from database
  - Test citation popover functionality
  - Test anchor links still work
  - Push branch and create PR
```

```bash
git push -u origin feature/supabase-sources-blog
gh pr create --title "feat: Supabase sources & blog system" \
  --body "## Summary
- Migrates hardcoded sources to Supabase database
- Adds Citation popover component
- Adds basic blog system
- Uses Supabase CLI for migrations and typegen

## Testing
- [ ] Sources page loads from database
- [ ] Citation popovers work on hover
- [ ] Anchor links scroll correctly
- [ ] Blog pages render
- [ ] Mobile responsive

## Migration
After merge, seed script needs to run:
\`\`\`
SUPABASE_SERVICE_ROLE_KEY=xxx npx tsx scripts/seed-sources.ts
\`\`\`"
```

---

## File Structure (Final State)

```
blowthedam/
├── app/
│   ├── api/
│   │   └── citations/
│   │       └── [slug]/
│   │           └── route.ts
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── sources/
│   │   └── page.tsx              # Updated (database-driven)
│   └── ...existing
├── components/
│   ├── citation.tsx              # NEW
│   ├── source-card.tsx           # NEW
│   ├── source-category-section.tsx # NEW
│   └── ui/                       # Existing
├── lib/
│   ├── supabase.ts               # NEW
│   ├── sources.ts                # NEW
│   ├── blog.ts                   # NEW
│   └── utils.ts                  # Existing
├── types/
│   ├── database.ts               # Generated by supabase gen types
│   └── database-helpers.ts       # NEW - convenience types
├── supabase/
│   ├── migrations/
│   │   └── <timestamp>_sources_and_blog.sql
│   ├── config.toml
│   └── seed.sql                  # Optional
├── scripts/
│   └── seed-sources.ts           # NEW
├── docs/
│   ├── PRD-sources-blog-system.md
│   ├── SPEC-sources-blog-system.md
│   └── CLAUDE-CODE-PROMPT.md
├── .env.local.example            # NEW
└── package.json
```

---

## Environment Variables

```bash
# .env.local.example

# Supabase - Required
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...

# Supabase - For admin scripts only (never expose to browser)
SUPABASE_SERVICE_ROLE_KEY=eyJ...

# Vercel provides these automatically in preview deployments
# VERCEL_ENV=preview|production|development
# VERCEL_URL=xxx.vercel.app
```

---

## Critical Implementation Notes

### 1. Supabase Client Setup

```typescript
// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/database';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

// Typed client
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

// For Server Components (no session persistence needed)
export function createServerClient() {
  return createClient<Database>(supabaseUrl, supabaseAnonKey, {
    auth: { persistSession: false },
  });
}
```

### 2. Preserve Anchor IDs

Extract current IDs from `app/sources/page.tsx`:
```
smith-1997, usfws-recovery, save-the-manatee, defenders-wildlife,
marine-mammal, fwc-report, sjrwmd-drawdown, uf-caip, fl-state-parks,
fwc-rodman, riverkeeper-algae, sjrwmd-algae, sjrwmd-sav, riverkeeper-sav,
apms-journal, wuft-dam, audubon-dam, defenders-endangered, sjrwmd-marion,
fl-health-advisories, fwc-mercury, fl-springs-institute
```

New slugs MUST match these exactly OR implement client-side redirect mapping.

### 3. Type-Safe Queries

```typescript
// lib/sources.ts
import { createServerClient } from './supabase';
import type { SourceWithCategory } from '@/types/database-helpers';

export async function getSourcesByCategory() {
  const supabase = createServerClient();
  
  const { data, error } = await supabase
    .from('sources')
    .select(`
      *,
      category:source_categories(*)
    `)
    .order('sort_order');
  
  if (error) throw error;
  return data as SourceWithCategory[];
}
```

---

## Commit Message Convention

```
feat(scope): description     # New feature
fix(scope): description      # Bug fix
refactor(scope): description # Code change that neither fixes nor adds
chore(scope): description    # Maintenance tasks
docs(scope): description     # Documentation only
```

Scopes: `setup`, `db`, `types`, `data`, `api`, `ui`, `sources`, `blog`, `scripts`

---

## Testing Checklist Before PR

- [ ] `pnpm build` succeeds
- [ ] `pnpm lint` passes
- [ ] `pnpm tsc --noEmit` passes
- [ ] Supabase migration applied successfully
- [ ] Types generated from database
- [ ] Sources page loads (works empty, works with data)
- [ ] Citation popover appears on hover
- [ ] Anchor links scroll to correct source
- [ ] Blog pages render
- [ ] Mobile responsive
- [ ] Vercel preview deployment works

---

## Start Here

1. `git checkout -b feature/supabase-sources-blog`
2. Read `docs/PRD-sources-blog-system.md` completely
3. Read `docs/SPEC-sources-blog-system.md` completely
4. Verify `supabase status` shows linked project
5. Begin Phase 1: `pnpm add @supabase/supabase-js`
6. Work through each phase, commit after each
7. Push and create PR when complete
