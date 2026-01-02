#!/usr/bin/env tsx
// Seed script for BlowTheDam sources database
// Run with: SUPABASE_SERVICE_ROLE_KEY=xxx npx tsx scripts/seed-sources.ts

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials');
  console.error('Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const sources = [
  // Manatees, Habitat, & Connectivity
  {
    slug: 'smith-1997',
    title: 'The Effects of Proposed Restoration on Manatees and Manatee Habitat',
    author: 'Kent Smith',
    publication: 'Florida DEP',
    year: 1997,
    source_type: 'agency' as const,
    category_slug: 'manatees-habitat',
    pdf_url: 'https://myfwc.com/media/7274/manatee_rodman.pdf',
    description: 'Analysis of Rodman/Ocklawaha manatee use and restoration implications.',
    sort_order: 1,
  },
  {
    slug: 'usfws-recovery',
    title: 'Florida Manatee Recovery Plan (Third Revision)',
    author: 'U.S. Fish & Wildlife Service',
    publication: 'USFWS',
    year: 2001,
    source_type: 'agency' as const,
    category_slug: 'manatees-habitat',
    pdf_url: 'https://ecos.fws.gov/docs/recovery_plan/011030.pdf',
    description: 'Comprehensive recovery plan addressing warm-water refuges and habitat connectivity.',
    sort_order: 2,
  },
  {
    slug: 'save-the-manatee',
    title: 'Protecting Manatees with Policy and Purpose',
    author: 'Save the Manatee Club',
    year: 2025,
    source_type: 'advocacy' as const,
    category_slug: 'manatees-habitat',
    url: 'https://savethemanatee.org/protecting-manatees-with-policy-and-purpose/',
    description: 'Policy and advocacy discussion explicitly referencing breaching the dam and restoring access.',
    sort_order: 3,
  },
  {
    slug: 'defenders-wildlife',
    title: 'Great Florida Riverway: Great Potential for Manatees',
    author: 'Defenders of Wildlife',
    year: 2020,
    source_type: 'advocacy' as const,
    category_slug: 'manatees-habitat',
    url: 'https://defenders.org/blog/2020/11/great-florida-riverway-great-potential-manatees',
    description: 'Analysis of manatee habitat potential and benefits of dam removal.',
    sort_order: 4,
  },
  {
    slug: 'defenders-endangered',
    title: 'Ocklawaha River Named Among America's Most Endangered Rivers of 2020',
    author: 'Defenders of Wildlife',
    year: 2020,
    source_type: 'advocacy' as const,
    category_slug: 'manatees-habitat',
    url: 'https://defenders.org/newsroom/ocklawaha-river-named-among-americas-most-endangered-rivers-of-2020',
    description: 'Information on flooding impacts, river miles, and Cross Florida Barge Canal legacy.',
    sort_order: 5,
  },
  {
    slug: 'marine-mammal',
    title: 'Taylor Report on Springs Accessibility',
    author: 'Marine Mammal Commission',
    year: 2006,
    source_type: 'agency' as const,
    category_slug: 'manatees-habitat',
    pdf_url: 'https://www.mmc.gov/wp-content/uploads/taylorFLspringsreport.pdf',
    description: 'Research on Florida springs accessibility and "thermal network" for manatees.',
    sort_order: 6,
  },

  // Drawdowns, Hydrology, & Springs
  {
    slug: 'sjrwmd-drawdown',
    title: 'Technical Fact Sheet: Rodman Reservoir Drawdown (2015–2016)',
    author: 'SJRWMD',
    publication: 'St. Johns River Water Management District',
    year: 2017,
    source_type: 'agency' as const,
    category_slug: 'drawdowns-hydrology',
    pdf_url: 'https://aws.sjrwmd.com/SJRWMD/publications/SJ2017-FS2.pdf',
    description: 'Official data summary on drawdown mechanics, frequency, and water quality impacts.',
    sort_order: 1,
  },
  {
    slug: 'uf-caip',
    title: 'Drawdowns: A Brief Look at Rodman Reservoir',
    author: 'UF/IFAS CAIP',
    publication: 'University of Florida Conflict Assessment and Intervention Program',
    year: 2021,
    source_type: 'agency' as const,
    category_slug: 'drawdowns-hydrology',
    url: 'https://blogs.ifas.ufl.edu/caip/2021/08/16/drawdowns-a-brief-look-at-rodman-reservoir/',
    description: 'Educational overview of drawdown frequency, duration, and mechanics.',
    sort_order: 2,
  },
  {
    slug: 'fl-state-parks',
    title: 'Rodman Reservoir Drawdown FAQ',
    author: 'Florida State Parks',
    source_type: 'agency' as const,
    category_slug: 'drawdowns-hydrology',
    url: 'https://www.floridastateparks.org/learn/rodman-reservoir-drawdown-faq',
    description: 'Official information including drawdown schedule details and reasons.',
    sort_order: 3,
  },
  {
    slug: 'fwc-rodman',
    title: 'Rodman Reservoir',
    author: 'Florida Fish and Wildlife Conservation Commission',
    source_type: 'agency' as const,
    category_slug: 'drawdowns-hydrology',
    url: 'https://myfwc.com/fishing/freshwater/sites-forecasts/ne/rodman-reservoir/',
    description: 'Notes on drawdown timing and details for aquatic plant control and habitat.',
    sort_order: 4,
  },

  // Water Quality, Algae, & SAV
  {
    slug: 'riverkeeper-algae',
    title: 'Algae Blooms: What You Need to Know',
    author: 'St. Johns Riverkeeper',
    source_type: 'advocacy' as const,
    category_slug: 'water-quality',
    url: 'https://stjohnsriverkeeper.org/algae-blooms-what-you-need-to-know/',
    description: 'How nutrients (N & P) fuel blooms and sources of nutrient pollution.',
    sort_order: 1,
  },
  {
    slug: 'sjrwmd-algae',
    title: 'Algae & Nutrients Overview',
    author: 'SJRWMD',
    publication: 'St. Johns River Water Management District',
    source_type: 'agency' as const,
    category_slug: 'water-quality',
    url: 'https://www.sjrwmd.com/education/algae/',
    description: 'Official water management district information on algae blooms and nutrient dynamics.',
    sort_order: 2,
  },
  {
    slug: 'sjrwmd-sav',
    title: 'Tracking Aquatic Vegetation in the Lower St. Johns River',
    author: 'SJRWMD',
    publication: 'SJRWMD Streamlines',
    source_type: 'agency' as const,
    category_slug: 'water-quality',
    url: 'https://www.sjrwmd.com/streamlines/beneath-the-surface-tracking-aquatic-vegetation-in-the-lower-st-johns-river/',
    description: 'Hurricane Irma's impact: tannins/dark water → light limitation → SAV stress.',
    sort_order: 3,
  },
  {
    slug: 'riverkeeper-sav',
    title: 'Submerged Aquatic Vegetation (SAV)',
    author: 'St. Johns Riverkeeper',
    source_type: 'advocacy' as const,
    category_slug: 'water-quality',
    url: 'https://stjohnsriverkeeper.org/about-us/our-issues/submerged-aquatic-vegetation-sav/',
    description: 'Submerged aquatic vegetation decline post-Irma with light limitation and eelgrass habitat details.',
    sort_order: 4,
  },
  {
    slug: 'apms-journal',
    title: 'SAV Patterns & Tannins Study',
    author: 'Journal of Aquatic Plant Management',
    publication: 'APMS',
    year: 2020,
    source_type: 'peer_reviewed' as const,
    category_slug: 'water-quality',
    pdf_url: 'https://apms.org/wp-content/uploads/japm-58-02-135-full.pdf',
    description: 'Peer-reviewed research on SAV patterns, tannins, and light dynamics.',
    sort_order: 5,
  },

  // Dam History & Context
  {
    slug: 'wuft-dam',
    title: 'On Both Sides of the Dam',
    author: 'WUFT',
    source_type: 'news' as const,
    category_slug: 'dam-history',
    url: 'https://www.wuft.org/on-both-sides-of-the-dam',
    description: 'Comprehensive narrative with key figures: 7,500 acres flooded, 20 springs submerged.',
    sort_order: 1,
  },
  {
    slug: 'audubon-dam',
    title: 'Has One Florida Dam's Day Finally Come?',
    author: 'Audubon Magazine',
    source_type: 'news' as const,
    category_slug: 'dam-history',
    url: 'https://www.audubon.org/magazine/has-one-florida-dams-day-finally-come',
    description: 'Overview and argument that Rodman is a vestigial canal-era dam without modern purpose.',
    sort_order: 2,
  },
  {
    slug: 'sjrwmd-marion',
    title: 'Marion County & Moss Bluff Lock',
    author: 'SJRWMD',
    publication: 'St. Johns River Water Management District',
    source_type: 'agency' as const,
    category_slug: 'dam-history',
    url: 'https://www.sjrwmd.com/district-counties/marion-county/',
    description: 'Moss Bluff Lock & Dam purpose and history: "reconstructed in 1968" for navigation purposes.',
    sort_order: 3,
  },

  // Additional Context & Resources
  {
    slug: 'fl-health-advisories',
    title: 'Fish Consumption Advisories',
    author: 'Florida Department of Health',
    source_type: 'agency' as const,
    category_slug: 'additional-resources',
    url: 'https://www.floridahealth.gov/programs-and-services/prevention/healthy-weight/nutrition/seafood-consumption/fish-advisories-page.html',
    description: 'Official guidance on health impacts and management of harmful algal blooms.',
    sort_order: 1,
  },
  {
    slug: 'fwc-mercury',
    title: 'Mercury Testing & Advisory Context',
    author: 'Florida Fish and Wildlife Conservation Commission',
    source_type: 'agency' as const,
    category_slug: 'additional-resources',
    url: 'https://myfwc.com/research/freshwater/freshwater-projects/water/mercury-testing/',
    description: 'Florida Fish and Wildlife Conservation Commission's mercury testing program for freshwater fish.',
    sort_order: 2,
  },
  {
    slug: 'fl-health-guidebook',
    title: 'Florida Fish Consumption Advisories Guidebook',
    author: 'Florida Department of Health',
    year: 2025,
    source_type: 'agency' as const,
    category_slug: 'additional-resources',
    pdf_url: 'https://www.floridahealth.gov/%5C/programs-and-services/prevention/healthy-weight/nutrition/seafood-consumption/_documents/Florida-Fish-Consumption-Recommendations-Guidebook.pdf',
    description: 'Comprehensive guidebook on fish consumption advisories.',
    sort_order: 3,
  },
  {
    slug: 'fl-springs-institute',
    title: 'Ocklawaha River and Springs Environmental Analysis / Synoptic Study',
    author: 'Florida Springs Institute',
    year: 2020,
    source_type: 'advocacy' as const,
    category_slug: 'additional-resources',
    pdf_url: 'https://floridaspringsinstitute.org/wp-content/uploads/2020/06/Ocklawaha-Synoptic-Study_final-002.pdf',
    description: 'Scientific research and advocacy for Florida springs restoration and protection.',
    sort_order: 4,
  },
];

async function seed() {
  console.log('🌱 Starting seed process...\n');

  // Get category IDs
  const { data: categories, error: catError } = await supabase
    .from('source_categories')
    .select('id, slug');

  if (catError) {
    console.error('❌ Error fetching categories:', catError);
    process.exit(1);
  }

  if (!categories || categories.length === 0) {
    console.error('❌ No categories found. Migration may not have run correctly.');
    process.exit(1);
  }

  const categoryMap = new Map(categories.map(c => [c.slug, c.id]));
  console.log(`📂 Found ${categories.length} categories\n`);

  let inserted = 0;
  let updated = 0;
  let errors = 0;

  for (const source of sources) {
    const { category_slug, ...sourceData } = source;
    const category_id = categoryMap.get(category_slug);

    if (!category_id) {
      console.error(`❌ Category not found: ${category_slug}`);
      errors++;
      continue;
    }

    const { error } = await supabase
      .from('sources')
      .upsert(
        {
          ...sourceData,
          category_id,
        },
        { onConflict: 'slug' }
      );

    if (error) {
      console.error(`❌ Error inserting ${source.slug}:`, error.message);
      errors++;
    } else {
      // Check if it was insert or update
      const { count } = await supabase
        .from('sources')
        .select('*', { count: 'exact', head: true })
        .eq('slug', source.slug);

      if (count === 1) {
        console.log(`✓ ${source.slug}`);
        inserted++;
      } else {
        console.log(`↻ ${source.slug} (updated)`);
        updated++;
      }
    }
  }

  console.log(`\n✅ Seed complete!`);
  console.log(`   Inserted: ${inserted}`);
  console.log(`   Updated: ${updated}`);
  if (errors > 0) {
    console.log(`   Errors: ${errors}`);
    process.exit(1);
  }
}

seed().catch((err) => {
  console.error('❌ Seed failed:', err);
  process.exit(1);
});
