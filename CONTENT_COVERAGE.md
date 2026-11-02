# Protocol content coverage — 2 November 2026

All content below is presented as native website content in English and Arabic, not as download buttons.

| Supplied source | Website destination |
| --- | --- |
| Website Protocol Guide | Header groups, homepage overview, contact details and routes below |
| Leadership Profiles | Three `/leadership/` pages, expanded with career, governance, research and operational context |
| Longevity PPT (final) Summary | `/longevity-model`: rationale, four steps, digital destination, population insight and intended outcomes |
| Corporate Annual Report | `/programmes/corporate-health`: protocols, continuing engagement, reach, review, schools and recognition |
| Community Weight Loss Challenge | `/programmes/weight-loss-challenge`: objectives, six formats, measurements, eligibility and recognition |
| Community Diabetes Challenge | `/programmes/diabetes-challenge`: objectives, four formats, review, learning, clinical consent and recognition |
| Both community programmes | `/programmes/community-health` overview and links |
| UAE Industrial Study | `/research/uae-industrial-health`: population, comparisons, repeat participants, organisational review, graphs and limitations |
| Urban Health Study | `/research/urban-lifestyle`: population, nutrition, habits, stress, health measures, graphs and limitations |
| Child vs Adult | `/research/child-vs-adult`: populations, food patterns, fitness, support and graphs |
| Male vs Female | `/research/male-vs-female`: population, body composition, fitness, habits and graphs |
| Age Related | `/research/ageing-and-health`: age bands, food, activity, stress, graphs and source inconsistency note |
| Academic Prospectus | `/academia/lifestyle-medicine`: two pathways, objectives, curriculum, materials, faculty, assessment and applications |
| Workshops | `/academia/health-workshops`: all 13 source topics with descriptions |

## Editorial treatment

- This is an adapted website presentation, not a verbatim reproduction of every source sentence or internal operational instruction.
- Historical event prizes, dates, free-testing arrangements, admissions, fees and affiliations are not represented as current confirmed offers.
- The prospectus contains inconsistent duration and award descriptions. The page explains that current details need confirmation rather than choosing one without evidence.
- Proposed longevity benefits are aspirations, not guaranteed years of life or financial savings. No fabricated voice presentation is included; that optional asset was described as still being prepared.
- Confidential employer case material, bank/payment details and participant-level records are not reproduced publicly.
- Arabian Life remains excluded from the associate list per the user's later instruction. GAIP and Active Life logos retain external links.
- Hero, real leadership portraits, research graphs, approved footer, bilingual direction and the language dropdown are retained.

## In-article visual summaries

- Corporate Health: programme cadence table.
- Community Health: challenge comparison table.
- Weight Loss: six-format participation table and measurement sequence.
- Diabetes: four-format participation table and three-phase programme sequence.
- Lifestyle Medicine: pathway comparison and assessment sequence.
- Health Workshops: four-theme, 13-topic linked guide.
- Longevity Model: four-stage process diagram inside the article; homepage remains a single image card.
- Leadership: source-based experience summaries on all three profiles, without fabricated ratings or timelines.
- Research: five study-design tables; existing five source-based graphs now follow the findings rather than sitting at the end of each article.
- All additions have English and Arabic copy, native table semantics, and responsive layouts. Quantitative graphs use reported figures only. The visual summaries do not claim new outcomes or change historical event availability.

## Further source-only article expansion

`lib/document-enrichment.ts` adds approximately 2,500 English words and parallel Arabic translations in 26 sections. Its sources are the supplied corporate report, both challenge documents, the academic prospectus and the five research reports. It adds no web research. Short source files are not expanded with invented material.

The new `ArticleIndex` is shared by all article pages. It tracks the reader's current section, sets `aria-current="location"`, animates one marker, and scrolls only the index when an entry is outside its own viewport. Passive scrolling is throttled to animation frames, and reduced-motion preferences disable smooth marker/index movement. Existing paragraph, image, table and chart layouts are retained.

## Programme gateway redesign

The homepage programme area now uses a full-width, viewport-height photographic split: Corporate Health and Community Health. Each image has a translucent ivory bottom panel with a short source-based description and an arrow to the full programme page. On mobile the images stack. Arabic follows RTL order. Participation figures, fuller descriptions and challenge access remain on the programme pages and grouped navigation. Portrait images were generated with the built-in ImageGen tool; prompts and asset paths are recorded in `ASSET_SOURCES.md`.
