# Claude Development Guide

## Project Overview

BlowTheDam.com - Environmental advocacy website for Rodman Dam removal.

**Stack:** Next.js 16, React 19, Tailwind 4, Supabase, Vercel, SupaMode CMS

---

## Supabase & SupaMode

### Image Fields

SupaMode stores uploaded images as **JSON strings in TEXT columns**, not plain URLs:

\`\`\`json
{"url":"https://xxx.supabase.co/storage/...","filename":"hero.jpg","size":245678,"type":"image/jpeg"}
\`\`\`

**Always use the helper to extract URLs:**

\`\`\`tsx
import { getImageUrl } from '@/lib/utils'

// In component
const url = getImageUrl(post.featured_image)
{url && <Image src={url} alt={post.title} fill />}
\`\`\`

**Available helpers in `lib/utils.ts`:**

| Function | Returns | Use Case |
|----------|---------|----------|
| `getImageUrl(field)` | `string \| null` | Just need the URL |
| `getImageData(field)` | `SupaModeImage \| null` | Need filename, size, type too |

### Database Migrations

Use Supabase CLI, not manual SQL:

\`\`\`bash
supabase migration new <name>     # Create migration
supabase db push                  # Push to remote
supabase gen types typescript --linked > types/database.ts
\`\`\`

GitHub Action auto-runs `supabase db push` on merge to main when migrations change.

---

## Key Patterns

### Data Fetching

Server components fetch directly from Supabase:

\`\`\`tsx
// In app/page.tsx or similar
import { createServerClient } from '@/lib/supabase'

export default async function Page() {
  const supabase = createServerClient()
  const { data } = await supabase.from('sources').select('*')
  // ...
}
\`\`\`

### Citation Popovers

Use the `<Citation>` component for source references:

\`\`\`tsx
import { Citation } from '@/components/citation'

<Citation sourceSlug="smith-1997">
  Manatees have been documented in the area
</Citation>
\`\`\`

---

## File Structure

\`\`\`
app/              # Next.js App Router pages
components/       # React components
  ui/             # shadcn/ui primitives
lib/              # Utilities, Supabase client
types/            # TypeScript types (database.ts is auto-generated)
supabase/
  migrations/     # SQL migrations (use CLI to create)
\`\`\`

---

## Common Tasks

**Add a new source:** Use SupaMode CMS at /supamode

**Add a blog post:** Use SupaMode CMS at /supamode

**Update database schema:**
1. `supabase migration new <name>`
2. Edit the migration SQL
3. `supabase db push`
4. `supabase gen types typescript --linked > types/database.ts`
5. Commit and push
