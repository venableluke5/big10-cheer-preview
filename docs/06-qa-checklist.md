# QA Checklist

> Approved-refinement QA run on `2026-07-17`. Checked items were exercised or directly inspected. Unchecked information-integrity items remain part of F01; reduced-motion emulation was unavailable and is not marked passed.

## Content

- [ ] No placeholder content remains.
- [ ] Business facts match confirmed intake evidence.
- [ ] No unsupported claims are present.
- [ ] Final copy matches approved copy.
- [ ] Phone number, email address, and physical address are confirmed and correct.
- [ ] Programs, offerings, and service/location statements are confirmed and correct.
- [ ] Registration, booking, tryout, map, email, and phone destinations are current.
- [ ] Footer information is correct.

## Visual quality

- [x] Heading hierarchy is consistent.
- [x] Section labels have a clear purpose.
- [x] Repeated visual patterns are not excessive.
- [x] Each section has an intentional composition.
- [x] Protected design elements remain intact.
- [x] Text does not overlap or clip.
- [x] Images do not overlap captions or controls.
- [x] Image crops are appropriate at required viewports.
- [x] Spacing is consistent and content-driven.
- [x] Calls to action are clear.
- [x] The design remains specific to Big10/Cheer Magic and does not appear to be an unmodified generic template.

## Responsive behavior

- [x] No horizontal scrolling.
- [x] Navigation works at mobile and desktop widths.
- [x] Text remains readable.
- [x] Buttons and links remain usable.
- [x] Images do not overflow.
- [x] Layouts work at approximately 375, 390, 768, 1024, and 1440 pixels.
- [x] Long contact information and external-link labels do not break layouts.
- [x] Header and menu state changes do not cause overlap or inaccessible content.

### Viewport evidence

| Width | Browser/device | Page reviewed | Result | Notes or screenshot |
| --- | --- | --- | --- | --- |
| 375px | Codex in-app browser, 375×812 requested viewport | `site/index.html` | Pass | 360px content width; no document overflow; mobile navigation state confirmed |
| 390px | Codex in-app browser, 390×844 requested viewport | `site/index.html` | Pass | 375px content width with scrollbar; full page and menu visually reviewed; `screenshots/big10-cheer-final-mobile-390.png` |
| 768px | Codex in-app browser, 768×900 requested viewport | `site/index.html` | Pass | 753px content width; no document overflow; tablet layout and mobile navigation breakpoint confirmed |
| 1024px | Codex in-app browser, 1024×900 requested viewport | `site/index.html` | Pass | 1009px content width; no document overflow; desktop navigation/reset confirmed |
| 1440px | Codex in-app browser, 1440×900 requested viewport | `site/index.html` | Pass | 1425px content width with scrollbar; full page visually reviewed; `screenshots/big10-cheer-final-desktop-1440.png` |

## Functionality

- [x] Internal navigation links work.
- [x] Mobile menu opens, closes, and reports state correctly.
- [x] Mobile menu closes after navigation, on Escape, and at the desktop breakpoint.
- [x] Header scroll-state behavior works.
- [x] Phone links use the expected `tel:+12076050096` destination; no operating-system phone handler was launched.
- [x] Email links use the expected `mailto:CheerMagic207@outlook.com` destination; no mail client was launched.
- [x] Registration, booking, tryout, and map URLs loaded successfully in browser checks.
- [x] Current-year insertion works.
- [x] Reveal behavior does not hide content when JavaScript or observation fails.
- [x] No console errors appear.
- [x] No broken asset paths or failed required requests exist.
- [x] Contact-form testing is documented as not applicable unless a form is later approved and added.

## Accessibility

- [x] Semantic landmark and heading structure is appropriate.
- [x] Skip link reaches `#main-content` and becomes visible on focus.
- [x] Keyboard focus is visible on tested light and dark surfaces.
- [x] Navigation and representative controls work by keyboard; mobile menu Tab and Shift+Tab boundaries were exercised.
- [x] Menu focus behavior is usable and does not strand the user.
- [x] Informative images have appropriate alternative text.
- [x] Decorative images and marks are hidden appropriately.
- [x] Color contrast is acceptable for the corrected coral CTA and tested focus states; white on `#c92d4b` is 5.30:1 and hover white on `#a8203e` is 7.14:1.
- [ ] Reduced-motion preferences are respected in CSS and JavaScript.
- [x] Tap targets are usable: no rendered interactive target was below 24px in both axes at 390px; three icon links measured 40×40px.
- [x] External-link behavior is understandable.
- [x] Form labels and states are documented as not applicable unless a form is later approved and added.

Reduced-motion note: the CSS rule and JavaScript branch were inspected, and the normal-motion branch rendered correctly. The available browser did not expose reduced-motion emulation, so the reduce preference was not actually activated and this item remains unchecked.

## Technical and performance

- [ ] Page title exists and is accurate.
- [ ] Meta description exists and is accurate.
- [ ] Canonical/indexing requirements are decided and implemented if approved.
- [ ] Open Graph/social metadata requirements are decided and implemented if approved.
- [x] Favicon loads and is suitable.
- [x] Images have appropriate formats, dimensions, loading behavior, and file weight.
- [x] CSS output is current relative to `site/css/input.css`.
- [x] The Tailwind build command is documented before CSS changes are made.
- [x] JavaScript and CSS weight are reasonable for the page.
- [x] No unused temporary files are included in the presentation build.
- [x] Repository status is understood.
- [x] No unrelated or protected files were modified.

## Presentation

- [x] Desktop screenshot reviewed.
- [x] Mobile screenshot reviewed.
- [x] Final screenshots depict `site/`, not the preserved `source/` implementation or source/reference captures.
- [x] No browser chrome appears in portfolio screenshots.
- [x] Screenshots use documented viewport sizes and descriptive filenames.
- [x] Approved F02–F07 read-only audit findings were addressed; F01 was intentionally excluded and remains open.
- [x] Final commit exists.
- [x] Working-tree state is clean and reported in the completion response.

## QA summary

| Field | Result |
| --- | --- |
| Date | `2026-07-17` |
| Tester | Codex |
| Commit tested | Working tree based on `7f8f4da429c1551aa1556f61f75a94fdc921aa97`; final local refinement commit follows this record |
| Passed | Approved F02–F07 implementation QA passed with the explicit limitations below; overall prospect sign-off is not complete |
| Known limitations | F01 business-fact, copy, destination approval, branding, and asset-rights verification remain open; reduced-motion preference was not emulated; phone/mail operating-system handlers were not launched |
| Items not verified | All Content-section approval items; canonical/social metadata because it was excluded; actual reduced-motion mode; client approval and launch state |
| Follow-up | Complete F01 with client evidence and run one reduced-motion emulation check before presentation-ready definition-of-done sign-off |
