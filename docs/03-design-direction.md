# Existing Design Direction

## Document control

| Field | Decision |
| --- | --- |
| Status | Existing direction recorded; not client-approved or locked |
| Implementation documented | `site/` |
| Evidence sources | `project.md`; `site/index.html`; `site/css/input.css`; `site/js/script.js` |
| Last updated | `2026-07-17` |
| Client approval | None recorded |

## Audience and visual intent

| Field | Existing direction |
| --- | --- |
| Intended audience | Parents exploring cheer or tumbling programs; children and teenagers interested in competitive cheer; current families seeking program information |
| Brand personality | Energetic, athletic, modern, custom, confident, and clear to parents |
| Visual concept | Bold photo-driven cheer presentation with layered compositions, strong hierarchy, and distinct program paths |
| Desired impression | High energy without sacrificing trust, clarity, or approachable next steps |
| Explicit avoidance | Generic corporate layouts, a basic AI-generated appearance, ordinary repeated rounded cards, and reuse of unrelated ServiceSide site compositions |

These statements record the tracked project brief and current implementation. They are not evidence of client sign-off.

## Color and typography

| Element | Existing implementation |
| --- | --- |
| Foundation | Near-black `#09090d` and soft black `#15141b` |
| Light surfaces | Paper `#f7f6f9` and white `#ffffff` |
| Teal accents | `#0ca6a6` and `#24d1cd` |
| Coral accents | `#f04464` and darker `#c92d4b` |
| Violet accent | `#756eeb` |
| Muted text | `#696572` plus controlled translucent white values on dark sections |
| Display typography | Barlow Condensed, weights 600–900, usually condensed uppercase headings |
| Body typography | Manrope, weights 400–800 |
| Font delivery | Google Fonts links in `site/index.html`; licensing and offline fallback strategy have not been documented |
| Type scale | Fluid `clamp()`-based display scale with smaller uppercase contextual labels and restrained body widths |

## Distinctive composition to protect

The following elements are successful, intentional characteristics. Audit findings must identify a concrete defect or requirement before recommending changes to them.

- Black athletic visual foundation with coral, teal, and violet accent relationships.
- Condensed uppercase display typography paired with a quieter body face.
- Clipped hero stunt photograph with a teal edge and layered dark gradient.
- Oversized `MAGIC` word treatment.
- Star mark, Hermon/Maine location stamp, and angled coral/teal accent lines.
- Different section compositions rather than a repeated universal card pattern.
- `Start Here` paths that separate All Star Cheer, Tumbling & Lessons, and Tryout Information.
- Novice, Prep, and Elite progression with differentiated color, height, and emphasis.
- Full-height training photography paired with a numbered list treatment.
- Three-step tryout sequence and high-contrast teal CTA block.
- About-values list with alternating star accents.
- Staggered two-image moments gallery and `Together in motion` overlay.
- Direct registration, booking, tryout, email, phone, and directions paths.
- Section-specific spacing and transitions that preserve visual rhythm.

## Components and behavior

| Field | Existing direction |
| --- | --- |
| Layout | Mobile-first grids that become asymmetric multi-column compositions at larger breakpoints |
| Buttons | Compact uppercase actions with minimal rounding; coral, dark, and outlined treatments |
| Border radius | Restrained; used for controls or selected details rather than generic rounded cards |
| Borders and shadows | Fine high-contrast rules, colored top/side borders, and selective depth |
| Image treatment | Dynamic crops, clipped hero geometry, overlays, strong object positioning, and staggered gallery placement |
| Icon/decorative style | Text arrows, star glyphs, simple line details, and no external icon kit |
| Heading hierarchy | One hero `h1`, section `h2` headings, and contextual `h3` headings |
| Section labels | Small uppercase eyebrow labels used for context; audit should assess usefulness without automatically removing or multiplying them |
| Motion | Scroll-reveal transitions, hover movement, header state change, and explicit reduced-motion overrides |

## Mobile and accessibility behavior to protect and verify

- Mobile navigation uses a labeled button with `aria-expanded` and `aria-controls`.
- The menu closes after navigation, on Escape, and when resizing to the desktop breakpoint.
- The header changes to a fixed scrolled state.
- A skip link targets the main content.
- Focus-visible outlines are authored for links and buttons.
- Informative images have alternative text; decorative marks use `aria-hidden`.
- Reduced-motion CSS disables smooth scrolling and shortens transitions; JavaScript avoids reveal observation when reduced motion is requested.
- The layout defines content changes at 640, 768, 960, and 1280 pixels.

Code presence is not proof that these behaviors pass real browser, keyboard, contrast, or viewport testing. The read-only audit must verify them.

## Protection rule

The repeatable workflow controls process, evidence, and safety. It is not permission to turn Big10 Cheer into a generic ServiceSide Sites visual theme. Refinement must preserve this project-specific direction, and optional preferences must be separated from defects affecting facts, function, accessibility, trust, responsiveness, or presentation readiness.

## Open decisions

- Client approval of the visual direction is not recorded.
- Final font sourcing/license documentation is missing.
- Exact production image optimization requirements are not documented.
- The preferred implementation is provisional until `site/` is confirmed after audit.
- No design decision is formally client-locked; the protected elements above are migration safeguards, not fabricated client approvals.
