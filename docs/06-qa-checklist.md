# QA Checklist

> Migration status: not run. Every item remains unchecked. Code presence or repository evidence alone is not a substitute for responsive, browser, keyboard, accessibility, performance, metadata, link, or form testing.

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

- [ ] Heading hierarchy is consistent.
- [ ] Section labels have a clear purpose.
- [ ] Repeated visual patterns are not excessive.
- [ ] Each section has an intentional composition.
- [ ] Protected design elements remain intact.
- [ ] Text does not overlap or clip.
- [ ] Images do not overlap captions or controls.
- [ ] Image crops are appropriate at required viewports.
- [ ] Spacing is consistent and content-driven.
- [ ] Calls to action are clear.
- [ ] The design remains specific to Big10/Cheer Magic and does not appear to be an unmodified generic template.

## Responsive behavior

- [ ] No horizontal scrolling.
- [ ] Navigation works at mobile and desktop widths.
- [ ] Text remains readable.
- [ ] Buttons and links remain usable.
- [ ] Images do not overflow.
- [ ] Layouts work at approximately 375, 390, 768, 1024, and 1440 pixels.
- [ ] Long contact information and external-link labels do not break layouts.
- [ ] Header and menu state changes do not cause overlap or inaccessible content.

### Viewport evidence

| Width | Browser/device | Page reviewed | Result | Notes or screenshot |
| --- | --- | --- | --- | --- |
| 375px | Not recorded | `site/index.html` | Not tested |  |
| 390px | Not recorded | `site/index.html` | Not tested |  |
| 768px | Not recorded | `site/index.html` | Not tested |  |
| 1024px | Not recorded | `site/index.html` | Not tested |  |
| 1440px | Not recorded | `site/index.html` | Not tested |  |

## Functionality

- [ ] Internal navigation links work.
- [ ] Mobile menu opens, closes, and reports state correctly.
- [ ] Mobile menu closes after navigation, on Escape, and at the desktop breakpoint.
- [ ] Header scroll-state behavior works.
- [ ] Phone links work.
- [ ] Email links work.
- [ ] Registration, booking, tryout, and map links behave as intended.
- [ ] Current-year insertion works.
- [ ] Reveal behavior does not hide content when JavaScript or observation fails.
- [ ] No console errors appear.
- [ ] No broken asset paths or failed required requests exist.
- [ ] Contact-form testing is documented as not applicable unless a form is later approved and added.

## Accessibility

- [ ] Semantic landmark and heading structure is appropriate.
- [ ] Skip link works and becomes visible on focus.
- [ ] Keyboard focus is visible.
- [ ] All navigation and controls work by keyboard.
- [ ] Menu focus behavior is usable and does not strand the user.
- [ ] Informative images have appropriate alternative text.
- [ ] Decorative images and marks are hidden appropriately.
- [ ] Color contrast is acceptable in default, hover, focus, and scrolled-header states.
- [ ] Reduced-motion preferences are respected in CSS and JavaScript.
- [ ] Tap targets are usable.
- [ ] External-link behavior is understandable.
- [ ] Form labels and states are documented as not applicable unless a form is later approved and added.

## Technical and performance

- [ ] Page title exists and is accurate.
- [ ] Meta description exists and is accurate.
- [ ] Canonical/indexing requirements are decided and implemented if approved.
- [ ] Open Graph/social metadata requirements are decided and implemented if approved.
- [ ] Favicon loads and is suitable.
- [ ] Images have appropriate formats, dimensions, loading behavior, and file weight.
- [ ] CSS output is current relative to `site/css/input.css`.
- [ ] The Tailwind build command is documented before CSS changes are made.
- [ ] JavaScript and CSS weight are reasonable for the page.
- [ ] No unused temporary files are included in the presentation build.
- [ ] Repository status is understood.
- [ ] No unrelated or protected files were modified.

## Presentation

- [ ] Desktop screenshot reviewed.
- [ ] Mobile screenshot reviewed.
- [ ] Final screenshots depict `site/`, not the preserved `source/` implementation or source/reference captures.
- [ ] No browser chrome appears in portfolio screenshots.
- [ ] Screenshots use documented viewport sizes and descriptive filenames.
- [ ] Read-only audit findings were addressed or intentionally declined.
- [ ] Final commit exists.
- [ ] Working-tree state is clean and reported.

## QA summary

| Field | Result |
| --- | --- |
| Date | Not run |
| Tester | Not assigned |
| Commit tested | Not recorded |
| Passed | No determination |
| Known limitations | Read-only audit, browser testing, responsive testing, accessibility testing, link verification, metadata review, and presentation screenshots remain pending |
| Items not verified | All checklist items |
| Follow-up | Run only after approved refinements, using the complete checklist |
