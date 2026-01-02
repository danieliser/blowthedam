# BlowTheDam.com - Sources & Blog System PRD

## Document Info

| Field | Value |
|-------|-------|
| **Project** | BlowTheDam.com |
| **Feature** | Sources Management & Blog System |
| **Version** | 1.0 |
| **Date** | 2025-01-02 |
| **Status** | Draft |
| **Priority** | P0 |

---

## 1. Executive Summary

### 1.1 Problem Statement

BlowTheDam.com is an environmental advocacy website supporting Rodman Dam removal and Ocklawaha River restoration. The site currently has **hardcoded sources** embedded directly in React components, making them difficult to maintain, update, and reference consistently across pages.

**Current Pain Points:**
- Sources are duplicated across multiple page files
- No centralized source of truth for citations
- Cannot easily add new sources without code changes
- No way to link directly to specific quotes/passages within sources
- No blog functionality for ongoing content updates
- Citation popovers require manual implementation per-use

### 1.2 Solution Overview

Implement a Supabase-backed content management system for:

1. **Sources Database** - Centralized, categorized source management with slugs for deep-linking
2. **Source Passages** - Specific quotes with Google Text Fragment URLs for direct citation
3. **Citation Components** - Reusable React components with dynamic popovers
4. **Blog System** - Full-featured blog with SEO, categories, and media management
5. **Media Library** - Supabase Storage integration for uploads

### 1.3 Success Metrics

- All existing sources migrated from hardcoded to database
- Citation popover component deployed on at least 3 pages
- Sources page renders dynamically from database
- Blog system functional with at least 1 published post
- < 200ms load time for source data (cached)

---

## 2. Current State Analysis

### 2.1 Tech Stack

| Component | Technology |
|-----------|------------|
| Framework | Next.js 16.0.10 |
| React | 19.2.0 |
| Styling | Tailwind CSS 4.1.9 |
| UI Components | Radix UI (shadcn/ui pattern) |
| Deployment | Vercel |
| Database | Supabase (to be integrated) |
| CMS | SupaMode (available) |

### 2.2 Current Source Implementation

Sources are hardcoded in `/app/sources/page.tsx` with this pattern:

```tsx
<Card id=\"smith-1997\" className=\"p-6 scroll-mt-24\">
  <h4 className=\"font-bold text-foreground\">
    Kent Smith (1997), FDEP — The Effects of Proposed Restoration...
  </h4>
  <p className=\"mt-2 text-sm text-muted-foreground\">
    Analysis of Rodman/Ocklawaha manatee use...
  </p>
  <a href=\"https://ufdcimages.uflib.ufl.edu/...\" ...>
    View Report (PDF) <ExternalLink />
  </a>
</Card>
```

### 2.3 Current Citation Pattern

Inline citations in content pages link to sources page anchors:

```tsx
<a
  href=\"/sources#usfws-recovery-plan\"
  target=\"_blank\"
  rel=\"noopener noreferrer\"
  className=\"text-secondary underline decoration-secondary/30 hover:decoration-secondary\"
  title=\"Source: USFWS Florida Manatee Recovery Plan\"
>
  Over 1,000 manatees died in 2021 alone
</a>
```

### 2.4 Existing Categories (from current sources page)

1. Manatees, Habitat, & Connectivity (6 sources)
2. Drawdowns, Hydrology, & Springs (4 sources)
3. Water Quality, Algae, & SAV (5 sources)
4. Dam History & Context (4 sources)
5. Additional Context & Resources (3 sources)

**Note:** Economics & Fishing category exists in planning docs but not yet on sources page.

---

## 3. Requirements

### 3.1 Functional Requirements

#### P0 - Must Have (This Sprint)

| ID | Requirement | Description |
|----|-------------|-------------|
| FR-01 | Source Categories Table | Store and manage source categories with slugs, names, descriptions, sort order |
| FR-02 | Sources Table | Store sources with full metadata, URLs, classification, category linkage |
| FR-03 | Source Passages Table | Store specific quotes with Google Text Fragment URLs |
| FR-04 | Dynamic Sources Page | Render sources page from database, grouped by category |
| FR-05 | Deep-linking | Each source has unique slug for URL anchors (`/sources#slug`) |
| FR-06 | Citation Popover Component | Reusable component showing source info on hover/click |
| FR-07 | Blog Posts Table | Store blog posts with content, SEO meta, status, publishing |
| FR-08 | Blog Categories Table | Organize blog posts by category |
| FR-09 | Media Table | Track uploaded files in Supabase Storage |
| FR-10 | TypeScript Types | Full type definitions for all database tables |

#### P1 - Should Have (Next Sprint)

| ID | Requirement | Description |
|----|-------------|-------------|
| FR-11 | Source Search | Search sources by title, author, description |
| FR-12 | Passage Tooltips | Show specific passage quotes in citation popovers |
| FR-13 | Blog RSS Feed | Generate RSS feed for blog posts |
| FR-14 | Blog Sitemap | Auto-generate sitemap entries for blog |
| FR-15 | Related Sources | Link related sources to each other |

#### P2 - Nice to Have (Future)

| ID | Requirement | Description |
|----|-------------|-------------|
| FR-16 | Source Analytics | Track which sources are most viewed/cited |
| FR-17 | Form Submissions | Store contact form submissions |
| FR-18 | Email Collection | Newsletter signup storage |
| FR-19 | Comments | Blog post comments with moderation |

### 3.2 Non-Functional Requirements

| ID | Requirement | Target |
|----|-------------|--------|
| NFR-01 | Page Load | Sources page < 1s initial load |
| NFR-02 | Popover Latency | Citation popover data < 200ms |
| NFR-03 | SEO | All pages server-rendered for SEO |
| NFR-04 | Accessibility | WCAG 2.1 AA compliance |
| NFR-05 | Mobile | Fully responsive, mobile-first |

---

## 4. User Stories

### 4.1 Content Manager (via SupaMode)

```
As a content manager,
I want to add new sources through SupaMode
So that I can update citations without code deployments.
```

```
As a content manager,
I want to add specific quoted passages from sources
So that I can create direct-link citations to exact text.
```

```
As a content manager,
I want to write and publish blog posts
So that I can share news and updates about the restoration effort.
```

### 4.2 Site Visitor

```
As a site visitor,
I want to hover over a citation and see source details
So that I can evaluate the credibility without leaving the page.
```

```
As a site visitor,
I want to click a citation and go directly to that source
So that I can read the original document.
```

```
As a site visitor,
I want to browse all sources by category
So that I can find research on specific topics.
```

### 4.3 Developer

```
As a developer,
I want a reusable Citation component
So that I can add properly-formatted citations with minimal code.
```

```
As a developer,
I want TypeScript types for all database tables
So that I have type safety when working with source data.
```

---

## 5. Data Model

### 5.1 Entity Relationship Diagram

```
┌─────────────────────┐
│  source_categories  │
├─────────────────────┤
│ id (PK)             │
│ slug                │
│ name                │
│ description         │
│ sort_order          │
│ created_at          │
│ updated_at          │
└─────────┬───────────┘
          │ 1:N
          │
┌─────────▼───────────┐
│      sources        │
├─────────────────────┤
│ id (PK)             │
│ slug                │
│ title               │
│ short_title         │
│ author              │
│ publication         │
│ year                │
│ source_type (enum)  │
│ category_id (FK)    │
│ url                 │
│ pdf_url             │
│ doi                 │
│ description         │
│ full_citation       │
│ is_featured         │
│ sort_order          │
│ created_at          │
│ updated_at          │
└─────────┬───────────┘
          │ 1:N
          │
┌─────────▼───────────┐
│  source_passages    │
├─────────────────────┤
│ id (PK)             │
│ source_id (FK)      │
│ quote_text          │
│ context             │
│ fragment_url        │
│ page_number         │
│ section             │
│ usage_hint          │
│ sort_order          │
│ created_at          │
│ updated_at          │
└─────────────────────┘


┌─────────────────────┐
│  blog_categories    │
├─────────────────────┤
│ id (PK)             │
│ slug                │
│ name                │
│ description         │
│ sort_order          │
│ created_at          │
│ updated_at          │
└─────────┬───────────┘
          │ 1:N
          │
┌─────────▼───────────┐
│     blog_posts      │
├─────────────────────┤
│ id (PK)             │
│ slug                │
│ title               │
│ excerpt             │
│ content             │
│ meta_title          │
│ meta_description    │
│ og_image_url        │
│ canonical_url       │
│ category_id (FK)    │
│ tags (array)        │
│ featured_image_url  │
│ featured_image_alt  │
│ status (enum)       │
│ published_at        │
│ author_name         │
│ created_at          │
│ updated_at          │
└─────────────────────┘


┌─────────────────────┐
│       media         │
├─────────────────────┤
│ id (PK)             │
│ storage_path        │
│ bucket              │
│ filename            │
│ mime_type           │
│ file_size           │
│ width               │
│ height              │
│ alt_text            │
│ caption             │
│ public_url          │
│ created_at          │
└─────────────────────┘
```

### 5.2 Enum Types

```sql
-- Source classification
CREATE TYPE source_type AS ENUM (
  'peer_reviewed',  -- Academic journals, published research
  'agency',         -- Government/official agency reports
  'advocacy',       -- Think tanks, advocacy organizations
  'news',           -- News articles, journalism
  'legal',          -- Court documents, legislation
  'other'
);

-- Blog post status
CREATE TYPE post_status AS ENUM (
  'draft',
  'published', 
  'archived'
);
```

---

## 6. API Design

### 6.1 Data Fetching Patterns

All data fetching uses Supabase client with server-side rendering for SEO.

#### Sources Page - Get All Sources Grouped

```typescript
// lib/sources.ts
export async function getSourcesByCategory() {
  const { data, error } = await supabase
    .from('sources')
    .select(`
      *,
      category:source_categories(id, slug, name)
    `)
    .order('category(sort_order)', { ascending: true })
    .order('sort_order', { ascending: true });
  
  // Group by category for rendering
  return groupBy(data, 'category.slug');
}
```

#### Citation Popover - Get Single Source

```typescript
// lib/sources.ts
export async function getSourceBySlug(slug: string) {
  const { data, error } = await supabase
    .from('sources')
    .select(`
      slug,
      title,
      short_title,
      author,
      year,
      source_type,
      url,
      description
    `)
    .eq('slug', slug)
    .single();
  
  return data;
}
```

#### Get Source with Passages

```typescript
// lib/sources.ts
export async function getSourceWithPassages(slug: string) {
  const { data, error } = await supabase
    .from('sources')
    .select(`
      *,
      passages:source_passages(*)
    `)
    .eq('slug', slug)
    .single();
  
  return data;
}
```

#### Blog - Get Published Posts

```typescript
// lib/blog.ts
export async function getPublishedPosts(limit?: number) {
  let query = supabase
    .from('blog_posts')
    .select(`
      *,
      category:blog_categories(slug, name)
    `)
    .eq('status', 'published')
    .lte('published_at', new Date().toISOString())
    .order('published_at', { ascending: false });
  
  if (limit) query = query.limit(limit);
  
  return query;
}
```

### 6.2 Caching Strategy

```typescript
// Use Next.js fetch caching for sources (rarely change)
export async function getSourceBySlug(slug: string) {
  // Revalidate every hour
  const res = await fetch(`${SUPABASE_URL}/rest/v1/sources?slug=eq.${slug}`, {
    headers: { apikey: SUPABASE_ANON_KEY },
    next: { revalidate: 3600 }
  });
  return res.json();
}
```

---

## 7. Component Specifications

### 7.1 Citation Component

A reusable component for inline citations with popover.

**File:** `components/citation.tsx`

```tsx
interface CitationProps {
  sourceSlug: string;           // Source slug for lookup
  passageId?: string;           // Optional specific passage
  children: React.ReactNode;    // The cited text
  className?: string;
}

// Usage:
<Citation sourceSlug=\"smith-1997\">
  manatee mortality at the Buckman Lock
</Citation>

// With specific passage:
<Citation sourceSlug=\"smith-1997\" passageId=\"abc123\">
  \"carcass damage consistent with trauma\"
</Citation>
```

**Behavior:**
- On hover (desktop): Show popover with source title, author, year, description
- On click: Navigate to `/sources#slug` OR open external URL
- If passageId provided: Show quote in popover, link to fragment_url if available

### 7.2 SourceCard Component

Renders a single source on the sources page.

**File:** `components/source-card.tsx`

```tsx
interface SourceCardProps {
  source: Source;
  showCategory?: boolean;
}

// Renders:
// - Title with source type badge
// - Author/year
// - Description
// - Link(s) to URL/PDF
// - id attribute for anchor linking
```

### 7.3 SourceCategorySection Component

Renders a category section with all its sources.

**File:** `components/source-category-section.tsx`

```tsx
interface SourceCategorySectionProps {
  category: SourceCategory;
  sources: Source[];
}
```

---

## 8. Migration Plan

### 8.1 Phase 1: Database Setup (Day 1)

1. Create Supabase migration file with all tables
2. Run migration in Supabase dashboard
3. Enable RLS with public read policies
4. Add `@supabase/supabase-js` to project

### 8.2 Phase 2: Seed Data (Day 1-2)

1. Create seed script to migrate existing hardcoded sources
2. Map current HTML IDs to slugs
3. Extract and normalize all source data
4. Run seed script

**Current Sources to Migrate:**

| Current ID | New Slug | Category |
|------------|----------|----------|
| smith-1997 | smith-1997 | manatees-habitat |
| usfws-recovery | usfws-recovery-2001 | manatees-habitat |
| save-the-manatee | save-the-manatee-2025 | manatees-habitat |
| defenders-wildlife | defenders-riverway-2020 | manatees-habitat |
| marine-mammal | mmc-taylor-2006 | manatees-habitat |
| fwc-report | fwc-manatee-rodman | manatees-habitat |
| sjrwmd-drawdown | sjrwmd-drawdown-2017 | drawdowns-hydrology |
| uf-caip | ufifas-drawdowns-2021 | drawdowns-hydrology |
| fl-state-parks | fl-parks-drawdown-faq | drawdowns-hydrology |
| fwc-rodman | fwc-rodman-reservoir | drawdowns-hydrology |
| riverkeeper-algae | sjrk-algae-explainer | water-quality |
| sjrwmd-algae | sjrwmd-algae-overview | water-quality |
| sjrwmd-sav | sjrwmd-sav-tracking | water-quality |
| riverkeeper-sav | sjrk-sav-eelgrass | water-quality |
| apms-journal | apms-sav-2020 | water-quality |
| wuft-dam | wuft-both-sides | dam-history |
| audubon-dam | audubon-dam-day | dam-history |
| defenders-endangered | defenders-endangered-2020 | dam-history |
| sjrwmd-marion | sjrwmd-marion-moss-bluff | dam-history |
| fl-health-advisories | fdoh-fish-advisories | additional-resources |
| fwc-mercury | fwc-mercury-testing | additional-resources |
| fl-springs-institute | fsi-synoptic-2020 | additional-resources |

### 8.3 Phase 3: Component Development (Day 2-3)

1. Create `lib/supabase.ts` with client setup
2. Create `lib/sources.ts` with data fetching functions
3. Create `components/citation.tsx`
4. Create `components/source-card.tsx`
5. Update sources page to fetch from database

### 8.4 Phase 4: Citation Migration (Day 3-4)

1. Update 1 content page to use new Citation component
2. Verify popover functionality
3. Roll out to remaining pages

### 8.5 Phase 5: Blog System (Day 4-5)

1. Create blog list page `/blog`
2. Create blog post page `/blog/[slug]`
3. Add blog data fetching functions
4. Test with sample post via SupaMode

---

## 9. File Structure

```
blowthedam/
├── app/
│   ├── blog/
│   │   ├── page.tsx              # Blog listing
│   │   └── [slug]/
│   │       └── page.tsx          # Individual post
│   ├── sources/
│   │   └── page.tsx              # Updated to use DB
│   └── ...existing pages
├── components/
│   ├── citation.tsx              # NEW
│   ├── source-card.tsx           # NEW
│   ├── source-category-section.tsx # NEW
│   └── ...existing components
├── lib/
│   ├── supabase.ts               # NEW - Client setup
│   ├── sources.ts                # NEW - Source queries
│   ├── blog.ts                   # NEW - Blog queries
│   └── utils.ts                  # Existing
├── types/
│   └── database.ts               # NEW - TypeScript types
├── supabase/
│   └── migrations/
│       └── 001_sources_and_blog.sql  # NEW
└── docs/
    └── PRD-sources-blog-system.md    # This file
```

---

## 10. Testing Strategy

### 10.1 Manual Testing Checklist

- [ ] Sources page loads with all categories
- [ ] Each source has working anchor link
- [ ] Citation popover shows on hover
- [ ] Citation click navigates correctly
- [ ] Blog listing shows published posts only
- [ ] Blog post page renders full content
- [ ] SEO meta tags present on blog posts
- [ ] Mobile responsive on all new components

### 10.2 Data Validation

- [ ] All existing source slugs map correctly
- [ ] No broken links after migration
- [ ] Categories sort in correct order
- [ ] Sources sort within categories

---

## 11. Rollback Plan

If issues arise after deployment:

1. Revert sources page to hardcoded version (git revert)
2. Keep database intact for debugging
3. Citation component can be removed without breaking pages (just renders children)

---

## 12. Future Considerations

### 12.1 Content Features (P1/P2)

- **Source-to-Page Tracking** - Know which pages cite which sources
- **Broken Link Detection** - Periodic check of external URLs
- **Source Versioning** - Track when sources are updated
- **Collaborative Editing** - Multiple editors via SupaMode

### 12.2 User Features (P2)

- **Form Submissions** - Contact form storage with email notifications
- **Email Collection** - Newsletter signup with double opt-in
- **Social Sharing** - Pre-formatted share cards for sources

### 12.3 Analytics (P2)

- **Source Views** - Track which sources are most accessed
- **Citation Clicks** - Track which citations get clicked
- **Blog Engagement** - Read time, scroll depth

---

## Appendix A: Existing Source Data Extract

*To be populated during migration phase with exact data from current sources page.*

---

## Appendix B: Google Text Fragment URL Format

For linking directly to text within a source document:

```
https://example.com/document.pdf#:~:text=exact%20phrase%20to%20highlight
```

Range format:
```
https://example.com/page#:~:text=start%20text,end%20text
```

Example for manatee mortality quote:
```
https://myfwc.com/media/7274/manatee_rodman.pdf#:~:text=manatee%20mortality,structural%20mechanisms
```

**Browser Support:** Chrome, Edge, Safari (partial), Firefox (behind flag)

---

## Appendix C: SupaMode Configuration

SupaMode will auto-detect tables. Recommended field configurations:

| Table | Field | SupaMode Widget |
|-------|-------|-----------------|
| sources | description | Textarea |
| sources | full_citation | Textarea |
| sources | source_type | Select |
| source_passages | quote_text | Textarea |
| blog_posts | content | Rich Text / Markdown |
| blog_posts | tags | Tag Input |
| blog_posts | status | Select |
| media | * | Auto (file upload) |