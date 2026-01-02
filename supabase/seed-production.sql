-- Production Seed Data for Sources
-- Run this in Supabase SQL Editor: https://supabase.com/dashboard/project/rwtysdparowmnmniqmbd/sql

-- Get category IDs (they should already exist from migration)
DO $$
DECLARE
  cat_manatees UUID;
  cat_drawdowns UUID;
  cat_water_quality UUID;
  cat_dam_history UUID;
  cat_additional UUID;
BEGIN
  -- Get category IDs
  SELECT id INTO cat_manatees FROM source_categories WHERE slug = 'manatees-habitat';
  SELECT id INTO cat_drawdowns FROM source_categories WHERE slug = 'drawdowns-hydrology';
  SELECT id INTO cat_water_quality FROM source_categories WHERE slug = 'water-quality';
  SELECT id INTO cat_dam_history FROM source_categories WHERE slug = 'dam-history';
  SELECT id INTO cat_additional FROM source_categories WHERE slug = 'additional-resources';

  -- Insert sources (using ON CONFLICT DO UPDATE to handle re-runs)

  -- Manatees, Habitat, & Connectivity
  INSERT INTO sources (slug, title, author, publication, year, source_type, category_id, pdf_url, url, description, sort_order)
  VALUES
    ('smith-1997', 'The Effects of Proposed Restoration on Manatees and Manatee Habitat', 'Kent Smith', 'Florida DEP', 1997, 'agency', cat_manatees, 'https://myfwc.com/media/7274/manatee_rodman.pdf', NULL, 'Analysis of Rodman/Ocklawaha manatee use and restoration implications.', 1),
    ('usfws-recovery', 'Florida Manatee Recovery Plan (Third Revision)', 'U.S. Fish & Wildlife Service', 'USFWS', 2001, 'agency', cat_manatees, 'https://ecos.fws.gov/docs/recovery_plan/011030.pdf', NULL, 'Comprehensive recovery plan addressing warm-water refuges and habitat connectivity.', 2),
    ('save-the-manatee', 'Protecting Manatees with Policy and Purpose', 'Save the Manatee Club', NULL, 2025, 'advocacy', cat_manatees, NULL, 'https://savethemanatee.org/protecting-manatees-with-policy-and-purpose/', 'Policy and advocacy discussion explicitly referencing breaching the dam and restoring access.', 3),
    ('defenders-wildlife', 'Great Florida Riverway: Great Potential for Manatees', 'Defenders of Wildlife', NULL, 2020, 'advocacy', cat_manatees, NULL, 'https://defenders.org/blog/2020/11/great-florida-riverway-great-potential-manatees', 'Analysis of manatee habitat potential and benefits of dam removal.', 4),
    ('defenders-endangered', 'Ocklawaha River Named Among America''s Most Endangered Rivers of 2020', 'Defenders of Wildlife', NULL, 2020, 'advocacy', cat_manatees, NULL, 'https://defenders.org/newsroom/ocklawaha-river-named-among-americas-most-endangered-rivers-of-2020', 'Information on flooding impacts, river miles, and Cross Florida Barge Canal legacy.', 5),
    ('marine-mammal', 'Taylor Report on Springs Accessibility', 'Marine Mammal Commission', NULL, 2006, 'agency', cat_manatees, 'https://www.mmc.gov/wp-content/uploads/taylorFLspringsreport.pdf', NULL, 'Research on Florida springs accessibility and "thermal network" for manatees.', 6)
  ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    author = EXCLUDED.author,
    publication = EXCLUDED.publication,
    year = EXCLUDED.year,
    source_type = EXCLUDED.source_type,
    category_id = EXCLUDED.category_id,
    pdf_url = EXCLUDED.pdf_url,
    url = EXCLUDED.url,
    description = EXCLUDED.description,
    sort_order = EXCLUDED.sort_order,
    updated_at = NOW();

  -- Drawdowns, Hydrology, & Springs
  INSERT INTO sources (slug, title, author, publication, year, source_type, category_id, pdf_url, url, description, sort_order)
  VALUES
    ('sjrwmd-drawdown', 'Technical Fact Sheet: Rodman Reservoir Drawdown (2015–2016)', 'SJRWMD', 'St. Johns River Water Management District', 2017, 'agency', cat_drawdowns, 'https://aws.sjrwmd.com/SJRWMD/publications/SJ2017-FS2.pdf', NULL, 'Official data summary on drawdown mechanics, frequency, and water quality impacts.', 1),
    ('uf-caip', 'Drawdowns: A Brief Look at Rodman Reservoir', 'UF/IFAS CAIP', 'University of Florida Conflict Assessment and Intervention Program', 2021, 'agency', cat_drawdowns, NULL, 'https://blogs.ifas.ufl.edu/caip/2021/08/16/drawdowns-a-brief-look-at-rodman-reservoir/', 'Educational overview of drawdown frequency, duration, and mechanics.', 2),
    ('fl-state-parks', 'Rodman Reservoir Drawdown FAQ', 'Florida State Parks', NULL, NULL, 'agency', cat_drawdowns, NULL, 'https://www.floridastateparks.org/learn/rodman-reservoir-drawdown-faq', 'Official information including drawdown schedule details and reasons.', 3),
    ('fwc-rodman', 'Rodman Reservoir', 'Florida Fish and Wildlife Conservation Commission', NULL, NULL, 'agency', cat_drawdowns, NULL, 'https://myfwc.com/fishing/freshwater/sites-forecasts/ne/rodman-reservoir/', 'Notes on drawdown timing and details for aquatic plant control and habitat.', 4)
  ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    author = EXCLUDED.author,
    publication = EXCLUDED.publication,
    year = EXCLUDED.year,
    source_type = EXCLUDED.source_type,
    category_id = EXCLUDED.category_id,
    pdf_url = EXCLUDED.pdf_url,
    url = EXCLUDED.url,
    description = EXCLUDED.description,
    sort_order = EXCLUDED.sort_order,
    updated_at = NOW();

  -- Water Quality, Algae, & SAV
  INSERT INTO sources (slug, title, author, publication, year, source_type, category_id, pdf_url, url, description, sort_order)
  VALUES
    ('riverkeeper-algae', 'Algae Blooms: What You Need to Know', 'St. Johns Riverkeeper', NULL, NULL, 'advocacy', cat_water_quality, NULL, 'https://stjohnsriverkeeper.org/algae-blooms-what-you-need-to-know/', 'How nutrients (N & P) fuel blooms and sources of nutrient pollution.', 1),
    ('sjrwmd-algae', 'Algae & Nutrients Overview', 'SJRWMD', 'St. Johns River Water Management District', NULL, 'agency', cat_water_quality, NULL, 'https://www.sjrwmd.com/education/algae/', 'Official water management district information on algae blooms and nutrient dynamics.', 2),
    ('sjrwmd-sav', 'Tracking Aquatic Vegetation in the Lower St. Johns River', 'SJRWMD', 'SJRWMD Streamlines', NULL, 'agency', cat_water_quality, NULL, 'https://www.sjrwmd.com/streamlines/beneath-the-surface-tracking-aquatic-vegetation-in-the-lower-st-johns-river/', 'Hurricane Irma''s impact: tannins/dark water → light limitation → SAV stress.', 3),
    ('riverkeeper-sav', 'Submerged Aquatic Vegetation (SAV)', 'St. Johns Riverkeeper', NULL, NULL, 'advocacy', cat_water_quality, NULL, 'https://stjohnsriverkeeper.org/about-us/our-issues/submerged-aquatic-vegetation-sav/', 'Submerged aquatic vegetation decline post-Irma with light limitation and eelgrass habitat details.', 4),
    ('apms-journal', 'SAV Patterns & Tannins Study', 'Journal of Aquatic Plant Management', 'APMS', 2020, 'peer_reviewed', cat_water_quality, 'https://apms.org/wp-content/uploads/japm-58-02-135-full.pdf', NULL, 'Peer-reviewed research on SAV patterns, tannins, and light dynamics.', 5)
  ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    author = EXCLUDED.author,
    publication = EXCLUDED.publication,
    year = EXCLUDED.year,
    source_type = EXCLUDED.source_type,
    category_id = EXCLUDED.category_id,
    pdf_url = EXCLUDED.pdf_url,
    url = EXCLUDED.url,
    description = EXCLUDED.description,
    sort_order = EXCLUDED.sort_order,
    updated_at = NOW();

  -- Dam History & Context
  INSERT INTO sources (slug, title, author, publication, year, source_type, category_id, pdf_url, url, description, sort_order)
  VALUES
    ('wuft-dam', 'On Both Sides of the Dam', 'WUFT', NULL, NULL, 'news', cat_dam_history, NULL, 'https://www.wuft.org/on-both-sides-of-the-dam', 'Comprehensive narrative with key figures: 7,500 acres flooded, 20 springs submerged.', 1),
    ('audubon-dam', 'Has One Florida Dam''s Day Finally Come?', 'Audubon Magazine', NULL, NULL, 'news', cat_dam_history, NULL, 'https://www.audubon.org/magazine/has-one-florida-dams-day-finally-come', 'Overview and argument that Rodman is a vestigial canal-era dam without modern purpose.', 2),
    ('sjrwmd-marion', 'Marion County & Moss Bluff Lock', 'SJRWMD', 'St. Johns River Water Management District', NULL, 'agency', cat_dam_history, NULL, 'https://www.sjrwmd.com/district-counties/marion-county/', 'Moss Bluff Lock & Dam purpose and history: "reconstructed in 1968" for navigation purposes.', 3)
  ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    author = EXCLUDED.author,
    publication = EXCLUDED.publication,
    year = EXCLUDED.year,
    source_type = EXCLUDED.source_type,
    category_id = EXCLUDED.category_id,
    pdf_url = EXCLUDED.pdf_url,
    url = EXCLUDED.url,
    description = EXCLUDED.description,
    sort_order = EXCLUDED.sort_order,
    updated_at = NOW();

  -- Additional Context & Resources
  INSERT INTO sources (slug, title, author, publication, year, source_type, category_id, pdf_url, url, description, sort_order)
  VALUES
    ('fl-health-advisories', 'Fish Consumption Advisories', 'Florida Department of Health', NULL, NULL, 'agency', cat_additional, NULL, 'https://www.floridahealth.gov/programs-and-services/prevention/healthy-weight/nutrition/seafood-consumption/fish-advisories-page.html', 'Official guidance on health impacts and management of harmful algal blooms.', 1),
    ('fwc-mercury', 'Mercury Testing & Advisory Context', 'Florida Fish and Wildlife Conservation Commission', NULL, NULL, 'agency', cat_additional, NULL, 'https://myfwc.com/research/freshwater/freshwater-projects/water/mercury-testing/', 'Florida Fish and Wildlife Conservation Commission''s mercury testing program for freshwater fish.', 2),
    ('fl-health-guidebook', 'Florida Fish Consumption Advisories Guidebook', 'Florida Department of Health', NULL, 2025, 'agency', cat_additional, 'https://www.floridahealth.gov/%5C/programs-and-services/prevention/healthy-weight/nutrition/seafood-consumption/_documents/Florida-Fish-Consumption-Recommendations-Guidebook.pdf', NULL, 'Comprehensive guidebook on fish consumption advisories.', 3),
    ('fl-springs-institute', 'Ocklawaha River and Springs Environmental Analysis / Synoptic Study', 'Florida Springs Institute', NULL, 2020, 'advocacy', cat_additional, 'https://floridaspringsinstitute.org/wp-content/uploads/2020/06/Ocklawaha-Synoptic-Study_final-002.pdf', NULL, 'Scientific research and advocacy for Florida springs restoration and protection.', 4)
  ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    author = EXCLUDED.author,
    publication = EXCLUDED.publication,
    year = EXCLUDED.year,
    source_type = EXCLUDED.source_type,
    category_id = EXCLUDED.category_id,
    pdf_url = EXCLUDED.pdf_url,
    url = EXCLUDED.url,
    description = EXCLUDED.description,
    sort_order = EXCLUDED.sort_order,
    updated_at = NOW();

END $$;

-- Verify the data was inserted
SELECT
  sc.name as category,
  COUNT(s.id) as source_count
FROM source_categories sc
LEFT JOIN sources s ON s.category_id = sc.id
GROUP BY sc.id, sc.name, sc.sort_order
ORDER BY sc.sort_order;
