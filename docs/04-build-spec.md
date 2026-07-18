# Existing Build Specification

## Document control

| Field | Value |
| --- | --- |
| Status | Verified existing-build record; business facts and client approval remain pending |
| Implementation | `site/` |
| Project type | Existing prospect redesign mockup / free preview |
| Last updated | `2026-07-17` |
| Approved by | Not approved |
| Purpose | Describe the current implementation for audit; do not prescribe a replacement build |

## File and asset structure

| Role | Path |
| --- | --- |
| Page markup | `site/index.html` |
| Tailwind/source CSS entry | `site/css/input.css` |
| Compiled/minified CSS loaded by the page | `site/css/styles.css` |
| Vanilla JavaScript | `site/js/script.js` |
| Selected presentation images | `site/images/` |
| Original/reference asset library | `assets/` |
| Preserved earlier implementation | `source/` |
| Source/reference screenshots | `screenshots/` |

## Current page structure

The implementation is one static home page in this order:

1. Skip link and header/navigation
2. Hero with primary program and tryout actions
3. `Start Here` choice paths
4. All Star pathways: Novice, Prep, and Elite
5. Training: tumbling, lessons, clinics, and camps
6. Tryouts and placement sequence
7. About/athlete-development values
8. Moments gallery
9. Contact and location section
10. Footer with program and contact links

This order records the existing implementation; it is not an approved site plan. Route, section-purpose, and primary-action approval is controlled by `docs/12-site-plan.md`, and every public business claim remains subject to `docs/11-business-truth.md`.

## Navigation and anchors

| Purpose | Target |
| --- | --- |
| Skip link | `#main-content` |
| Home/hero | `#top` |
| Start paths | `#start` |
| Programs | `#programs` |
| Training | `#training` |
| Tryouts | `#tryouts` |
| About | `#about` |
| Contact | `#contact` |

The desktop header also links directly to the existing site’s tryout information page.

## Header and mobile navigation

- The header begins over the hero and gains a fixed dark background after the page scrolls more than 16 pixels.
- Below 960 pixels, a menu button controls a full-width navigation panel.
- JavaScript updates `aria-expanded`, toggles the open class, and prevents body scrolling while the menu is open.
- While open, the menu makes the skip link, main content, and footer inert and hidden from the accessibility tree; focus moves to the first navigation link and is contained within the visible header/menu controls.
- The menu closes when a navigation link is selected, Escape is pressed, or the viewport reaches 960 pixels.
- Escape, link activation, and button closing restore focus to the menu button; desktop reset removes isolation without moving focus to the hidden button.
- At 960 pixels and above, the menu button is hidden and inline navigation plus the header action is displayed.

## Contact and action paths

| Action | Current implementation |
| --- | --- |
| Programs | Internal anchors and contact prompts |
| Tryout information | `https://www.big10cheer.com/Class-Schedule` |
| Tumbling registration | GoMotion class-registration URL |
| Private/semi-private lessons | GoMotion booking URL |
| Clinics/camps | Internal contact anchor |
| Email | `mailto:CheerMagic207@outlook.com` |
| Phone | `tel:+12076050096` |
| Directions | Google Maps query for the Hermon address |

All business facts and external destinations remain unverified pending confirmation.

## Responsive behavior

- Base styles are mobile first with a minimum body width of 320 pixels.
- At 640 pixels, actions may become rows, program paths become multi-column, and contact/footer layouts expand.
- At 768 pixels, the hero, headings, training area, and gallery move into larger asymmetric compositions.
- At 960 pixels, desktop navigation appears and the major content grids receive wider layouts.
- At 1280 pixels, hero/image positioning and training spacing receive final wide-screen adjustments.
- Required future audit widths are approximately 375, 390, 768, 1024, and 1440 pixels, plus content-driven breakpoints.

The complete page was checked at requested browser viewports of 375, 390, 768, 1024, and 1440 pixels on `2026-07-17`. No document-level horizontal overflow was detected. Final full-page captures are recorded at the requested 390px and 1440px viewports.

## JavaScript behavior

- Mobile menu open/close state and body-scroll control.
- Escape-key menu dismissal with focus returned to the menu button.
- Automatic menu dismissal at the desktop breakpoint.
- Scrolled-header state.
- Current-year insertion in the footer.
- IntersectionObserver-based reveal behavior with a timed visibility fallback.
- Reduced-motion detection that avoids initializing reveal observation.

No form submission, analytics, client account, or data-storage behavior exists in the current JavaScript.

## CSS relationship and build tooling

- `site/css/input.css` imports `tailwindcss`, declares `site/index.html` and `site/js/script.js` as sources, and contains the authored design tokens and component CSS.
- `site/css/styles.css` is the file loaded by the page and identifies itself as minified Tailwind CSS `v4.3.2` output.
- Both files are tracked at the rollback commit.
- Verified executable: `C:\Users\Luke Venable\Documents\ServiceSide Projects\servicesidesites-redesign\tailwindcss.exe`.
- Verified executable SHA-256: `224A62A8351D3B8DA9D950A4EB1D7176DC901DC4735B47F816F3DFCBC67D8654`.
- Run from `site/`: `& "C:\Users\Luke Venable\Documents\ServiceSide Projects\servicesidesites-redesign\tailwindcss.exe" -i .\css\input.css -o .\css\styles.css --minify`.
- The approved refinement build reported Tailwind CSS `v4.3.2`; the executable remains outside this repository and is not committed.

## Presentation image delivery

- Original logo: `site/images/cheer-magic-logo.png`, 2700×1475, 398,744 bytes, transparent.
- Delivery logo: `site/images/cheer-magic-logo.webp`, 640×350, 45,798 bytes, transparency preserved.
- Original athlete image: `site/images/young-athlete.png`, 786×720, 532,961 bytes; its alpha channel is fully opaque.
- Delivery athlete image: `site/images/young-athlete.webp`, 786×720, 60,044 bytes.
- The original files remain in place. Markup uses the derivatives with accurate intrinsic dimensions; other images were not converted merely for consistency.

## Metadata

### Present

- HTML language: English
- UTF-8 charset
- Responsive viewport declaration
- Page title
- Meta description
- PNG favicon using the supplied logo
- Google Fonts preconnect and stylesheet links

### Missing or undocumented

- Canonical URL
- Open Graph metadata
- Twitter/social-card metadata
- Robots/indexing decision
- Sitemap
- Production URL and hosting target
- Social sharing image
- Analytics requirement

Missing metadata is an audit subject, not authorization to add it.

Any future metadata, canonical, robots/indexing, social-card, favicon, sitemap, or structured-data change requires an approved project-specific record in `docs/13-seo-requirements.md`. The current build record does not supply production values.

## Forms and integrations

- No contact form is present.
- No form provider, validation states, spam protection, or delivery destination is configured.
- Registration and appointment actions leave the static site for GoMotion.
- Tryout information uses the existing Big10 website.
- Google Maps is used through a search URL.
- Google Fonts is the only externally loaded presentation dependency identified in the page head.

## Known implementation boundaries

- Audit `site/` as a complete single-page mockup.
- Preserve `source/` without merging, comparing away, or deleting it.
- Use `screenshots/` only as source/reference evidence.
- Do not assume the mockup has been deployed because the repository has a remote or links to a live existing website.
- Do not add pages, forms, tracking, integrations, claims, schedules, or deployment configuration during audit.
- Do not reorganize assets to match the reusable template’s blank-project folders.
- Do not replace the existing build; future changes must map to explicitly approved audit findings.
- Do not treat existing claims as approved business truth; consult `docs/11-business-truth.md`.
- Do not add or expand routes absent from an approved `docs/12-site-plan.md`.
- Do not add production SEO values absent from approved `docs/13-seo-requirements.md` records.

## Current acceptance boundary

The read-only audit is complete and the explicitly approved F02–F07 corrections have been implemented. F01 remains a separate client-fact and asset-rights verification task. Do not use this build record as approval of business copy, facts, external destinations, branding rights, deployment, or launch.
