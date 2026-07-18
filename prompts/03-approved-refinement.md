# Prompt: Implement Approved Big10 Cheer Refinements

Replace the bracketed input with the exact numbered findings explicitly approved from the Big10 read-only audit.

## Approved findings

`[PASTE THE EXPLICITLY APPROVED NUMBERED LIST HERE]`

This list is the complete implementation scope. If it is missing, ambiguous, renumbered without audit context, internally conflicting, or unclear about protected facts/assets, stop and request one consolidated clarification before changing anything.

## Repository roles

- Repository: `C:\Users\Luke Venable\Documents\ServiceSide Projects\big10-cheer-preview`
- Active presentation implementation: `site/`
- Historical implementation: `source/` — preserve unchanged unless an approved finding explicitly and safely names it
- Original/reference assets: `assets/` — never overwrite, optimize in place, move, rename, or delete
- Selected presentation image copies: `site/images/`
- Source/reference captures: `screenshots/` — never overwrite existing files

## Required workflow

1. Run repository preflight before any change:
   - Report the exact repository path and Git top-level path.
   - Report branch, HEAD, full Git status, tracked changes, staged changes, and untracked files.
   - Confirm this is the intended Big10 repository and not the reusable template or a sibling project.
   - Stop if identity is uncertain, unrelated changes overlap the approved scope, or untracked work could be affected.
2. Read `AGENTS.md`, all project documents, including `docs/11-business-truth.md`, `docs/12-site-plan.md`, and `docs/13-seo-requirements.md`, the complete audit, the `Keep unchanged` list, and the exact approved findings.
3. Map each approved finding to exact files, behavior, tests, missing facts, and regression risks before editing.
4. Implement only the explicitly approved findings.
5. Do not redesign unaffected sections, add features, expand scope, rewrite unrelated copy, or implement an unapproved optional preference.
6. Preserve all `Keep unchanged` items and the existing design direction in `docs/03-design-direction.md`.
7. Do not invent or strengthen business information. Use only `Approved` or `Locked` records in `docs/11-business-truth.md`; if an approved finding requires an unresolved F01 fact, destination, brand, logo right, or photo right, stop that item and report the evidence needed.
8. Do not add or expand a route unless it is approved in `docs/12-site-plan.md`. Do not add production metadata, canonical, robots/indexing, social metadata, favicon changes, sitemap entries, or structured data unless the exact value and environment are approved in `docs/13-seo-requirements.md`.
9. Keep `README.md`, `project.md`, `audit/`, `assets/`, and `source/` unchanged unless an approved finding explicitly names an exact permitted change. Treat `screenshots/`, `site/`, and every other protected path as changeable only to the exact extent named by the approved finding; never infer broader authority or reorganize the repository.
10. Do not overwrite an existing source/reference screenshot. Add final screenshots only after implementation and QA, using descriptive new filenames.
11. If `site/css/input.css` changes, confirm the Tailwind standalone executable and exact command recorded in `docs/04-build-spec.md`, rebuild `site/css/styles.css`, and verify the compiled output corresponds to the source.
12. Test every affected success, failure, hover, focus, keyboard, menu, and reduced-motion state that applies.
13. Recheck the full page at approximately 375, 390, 768, 1024, and 1440 pixels, including regression checks outside the directly edited viewport.
14. Run the complete `docs/06-qa-checklist.md`, recording evidence and every item that cannot be verified or is not applicable.
15. Produce final desktop and mobile screenshots only when the page meets the approved prospect presentation milestone.
16. Update `docs/00-project-status.md`, append new decisions to `docs/05-build-decisions.md`, and update `docs/10-definition-of-done.md` only with evidence actually obtained.
17. Review the complete diff for scope creep, protected-file changes, unsupported claims, unapproved routes or SEO values, unapproved copy changes, secrets, placeholders, temporary artifacts, and accidental asset replacement.
18. Commit the approved refinement pass with a clear message. Do not merge it.

## Restrictions

- Do not implement any audit item that is not in the explicitly approved numbered list.
- Do not implement an unsupported claim, unapproved route, or unapproved production SEO value.
- Do not turn the reusable workflow into a generic visual redesign.
- Do not combine `site/` and `source/` or delete either implementation.
- Do not overwrite original/reference assets or existing screenshots.
- Do not add pages, forms, analytics, tracking, integrations, deployment configuration, packages, or frameworks unless an approved finding and explicit authority require them.
- Do not introduce React, Vite, npm, Bootstrap, jQuery, or an external UI kit.
- Do not push, merge, deploy, publish, tag, create or change a remote, or modify `main`.
- Do not use destructive Git or filesystem commands.
- Do not modify the reusable template or a sibling repository.

## Final report

Report:

- Each approved finding and its implementation result
- Every file changed and why
- Every protected or historical path checked
- Checks and tests run, with results
- Viewports and page states reviewed
- Desktop and mobile screenshot paths, if created
- QA result and intentionally declined or not-applicable items
- Facts confirmed, assumptions avoided, and unresolved information
- Known limitations and anything not verified
- Commit hash
- Current branch and complete Git status
- Confirmation that no unapproved finding or unrelated change was implemented
