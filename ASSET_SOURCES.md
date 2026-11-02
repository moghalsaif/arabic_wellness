# Website asset sources

Leadership portraits are real photographs, not generated likenesses.

- Dr Raza Siddiqui: https://ihwcouncil.org/dr-raza-siddiqui/ — the page’s portrait image.
- Dr Aftab Hasan: https://www.gaip.co/team — official GAIP image asset `/assets/afthab-BIkWUZAe.webp`.
- Prof Adrian Kennedy: https://www.activelifehra.com/p1.pdf — portrait rendered from page 1 of the official profile brochure.
- GAIP logo: https://www.gaip.co/assets/logo-6XDlgTBw.webp
- Active Life logo: https://www.activelifehra.com/assets/img/rak.png
- Arabian Life lettering: supplied logo reference, rendered with an SVG luminance-to-alpha filter to remove its background without changing the lettering.
- His Highness portrait: supplied by the user, unchanged.

Research photography illustrates topics, not actual participants. The five photographs are from Unsplash image assets:

- Workplace: `photo-1497366216548-37526070297c`
- Urban: `photo-1519501025264-65ba15a82390`
- Childhood: `photo-1516627145497-ae6968895b74`
- Group: `photo-1529156069898-49953e39b3ac`
- Family/ageing: `photo-1511632765486-a01980e01a18`

## Generated footer artwork

Created with the built-in ImageGen tool and saved in `public/images/footer-falcon.png` and `public/images/footer-gazelle.png`.

Falcon prompt: a single anatomically accurate peregrine falcon in flight, three-quarter side view flying left, individually articulated primary feathers, hooked beak, compact head, tail feathers and tucked talons; a near-black wildlife silhouette on a true transparent background, with no text or scenery.

Gazelle prompt: a single Arabian gazelle running right in an extended gallop, side profile, long slender legs, split hooves, curved ringed horns, pointed ears and short tail; realistic proportions, near-black silhouette, true transparent background, with no text or scenery.

The footer applies a CSS silhouette treatment and restrained movement. The UAE flag remains a vector with a fixed pole and animated cloth.

## Written sources

## Full-screen programme showcase

Created with the built-in ImageGen tool; fictional illustrative Arab people in UAE settings. Saved as `public/images/programme-corporate-uae.webp` and `public/images/programme-community-uae.webp`. Portrait compositions keep faces visible above the translucent bottom panels.

- corporate: Use case: photorealistic-natural. Asset: portrait-format full-height website image for Arabian Life UAE corporate wellness. A candid conversation between an Emirati Arab male professional in a crisp white kandura and ghutra and an Arab female healthcare professional wearing a white medical coat and neutral hijab, holding a tablet, in a beautifully sunlit contemporary Dubai workplace lounge. Both people centred close together in the upper-middle of the portrait; clearly visible natural faces, calm professional expressions. Refined editorial photography, real skin texture, restrained sage, ivory and warm sandstone tones, subtle greenery and modern glass architecture. Compose for a tall half-screen website panel: keep all faces within the central 65% width and upper 55% height; bottom third shows only soft environmental detail for a translucent text overlay. Portrait 4:5 or 3:4, not landscape. No writing, no logo, no watermark, no charts, no staged medical procedure. Fictional illustrative people.
- community: Use case: photorealistic-natural. Asset: portrait-format full-height website image for Arabian Life UAE community wellness. A candid Emirati Arab family walking together on a landscaped UAE park path: father in white kandura and ghutra, mother in a graceful warm taupe abaya and headscarf, and their school-age daughter between them. People naturally close together and joyful, unposed connection, warm morning light, palms and sage greenery, pale stone architecture softly visible. Refined premium editorial photography with natural skin texture, ivory and sandstone colours. Compose for a tall half-screen website panel: all three faces within central 65% width and upper 55% height; lower third just clothing, path and greenery for a translucent text overlay. Portrait 4:5 or 3:4, not landscape. No text, logo, watermark or props. Fictional illustrative people.


Leadership biographies use the supplied `1. Leadership Profiles.docx`.
Research pages use the five supplied research documents, presented as native bilingual content with source-based charts. The interface has no document download buttons.
Arabic text is a translation of the English page content and should receive native editorial review before publication.

## UAE research imagery — current

Generated using the built-in ImageGen tool. Fictional Arab subjects and UAE settings; not actual study participants. Authentic leadership portraits are unchanged. Five optimised WebP files: `public/images/research-{industrial,urban,child,gender,ageing}-uae.webp`. These replace the former Unsplash research images listed above.

Shared prompt: photorealistic-natural editorial photography for a refined UAE longevity website; landscape composition; natural skin texture and anatomy; warm daylight; muted sage, ivory and sand; restrained bronze warmth; people visible at small card sizes; no text, logos or watermarks.

- industrial: An Arab male industrial engineer in appropriate safety helmet and neutral workwear having a routine noninvasive blood pressure screening by an Arab female healthcare professional in a bright contemporary UAE industrial workplace wellness room. Respectful natural candid interaction, realistic equipment.
- urban: Three adult Arab residents, men and women in modest contemporary clothing, walking along a landscaped Dubai pedestrian promenade at sunrise. Recognisable modern UAE architecture with palms and warm stone, natural candid wellbeing editorial, not a tourism advertisement.
- child: An Emirati Arab mother in a graceful neutral abaya and headscarf with her school-age daughter and son walking together through a landscaped UAE park, candid affectionate family interaction, modest age-appropriate clothing, realistic everyday healthy family life.
- gender: An adult Arab man and Arab woman, equal prominence, enjoying a brisk walk on a shaded landscaped UAE park path. Modest contemporary exercise clothing, natural candid expressions, balanced composition, healthy everyday movement.
  - Revised asset: `public/images/research-gender-uae-v2.webp`, edited with built-in ImageGen. Prompt: Remove only the man's white ghutra and black agal, replacing them with natural short dark hair appropriate to his casual exercise outfit; preserve his face, beard, pose, clothing, the woman and her hijab, Dubai park, skyline, lighting and composition. Used for the Male vs Female Health card/article and the shared Weight Loss Challenge image.
- ageing: An older Emirati Arab couple in their late sixties walking together in a beautiful shaded UAE garden. Man in white kandura and ghutra, woman in elegant neutral abaya and headscarf, naturally aged faces and grey beard, warm candid expressions, active independent daily life.

## Academia workshop illustration

`public/images/academia-workshop-uae.webp` was generated with the built-in ImageGen tool for the homepage Academia section. Fictional participants, not actual staff or an actual company workshop. Final prompt: photorealistic editorial lifestyle-medicine workshop in a sunlit Dubai education room with limestone, light oak and sage/ivory details; an Arab female health educator in a cream blazer and beige hijab teaching three Arab adult professionals, including a man in a complete white Emirati kandura and ghutra; natural discussion around an oak table with notebooks and fresh produce; realistic faces and hands; landscape 4:3 framing, no text, logos or watermarks.

## Chart provenance

`lib/research-data.ts` transcribes selected percentages from the five supplied research reports. It preserves period/group labels, includes worsening measures, distinguishes cumulative populations from matched follow-up, and does not claim causality. Charts use a common 0–100% scale and accessible tables. The age report's stated total and sex subtotals differ; the chart note discloses this source inconsistency.

