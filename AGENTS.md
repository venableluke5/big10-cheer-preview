# Big10 Cheer Project Instructions

These instructions apply to all work in this repository.

## Project identity and current phase

- Repository: `C:\Users\Luke Venable\Documents\ServiceSide Projects\big10-cheer-preview`
- Project type: prospect redesign mockup / free preview; this is not evidenced as a paid client project.
- Current workflow phase: approved F02–F07 refinement is complete; documentation is aligned for unresolved F01 business-fact, route, SEO, and asset-rights approval work.
- `site/` is the active presentation implementation and the target for any future explicitly authorized audit or refinement.
- `source/` is a preserved historical implementation. It is not a cleanup target.
- `screenshots/` contains source/reference captures and the separately named final F02–F07 presentation captures. Only the documented final captures are presentation-review evidence.

## Permanent repository safety

- Before any implementation task, report the exact repository path, Git root, branch, HEAD, full status, tracked changes, and untracked files.
- Stop if repository identity is uncertain, the working tree contains unrelated changes, or untracked files could be affected.
- Never use destructive cleanup or history commands, including `git clean`, `git reset --hard`, forced checkout or switch, recursive deletion, purge, mirror, or synchronization commands.
- Never overwrite, move, rename, delete, reformat, or reorganize an existing file unless an explicit approved task names that exact action and target.
- Never modify a sibling repository or the reusable ServiceSide Sites template.
- Never push, merge, deploy, publish, tag, create or change a remote, or modify `main` without explicit written approval for that exact action.
- Work on a dedicated branch for approved changes. Do not treat branch creation as permission to expand scope.
- Review the complete diff before staging. Do not stage or commit unrelated work.

## Directory and asset roles

- `site/` contains the provisional preferred presentation site. Audit it completely before proposing refinements.
- `source/` contains an earlier implementation and must remain preserved for historical comparison.
- `assets/` contains original/reference material. Never overwrite, optimize in place, rename, move, or delete these files.
- `site/images/` contains the image copies selected for the presentation site. Do not replace or edit them unless an explicitly approved finding requires it.
- `screenshots/` contains source/reference material and separately named final captures. Do not treat reference files as final mockup evidence, and do not overwrite any existing capture.
- During documentation-only workflow alignment, no file under `README.md`, `project.md`, `audit/`, `assets/`, `screenshots/`, `site/`, or `source/` may be modified.

## Information and approval integrity

- Never invent or infer business claims, services, service areas, reviews, licenses, certifications, insurance, employee counts, years in business, awards, guarantees, statistics, schedules, prices, testimonials, or deployment facts.
- Existing website copy and screenshots are evidence to inspect, not formal client approval.
- Treat `docs/01-client-intake.md` as repository-backfilled discovery, not publishable truth.
- Use `docs/11-business-truth.md` as the approval register for public facts and claims, `docs/12-site-plan.md` for approved routes and page purposes, and `docs/13-seo-requirements.md` for approved metadata, indexing, canonical, sitemap, and structured-data decisions.
- No route or production SEO value may be implemented without the corresponding approved record. Stop when an implementation request depends on unresolved F01 facts, external destinations, branding, logo rights, or photo rights.
- A blank field is unknown, not permission to infer a favorable fact.
- Draft or unverified copy may be audited, but it must not be represented as approved or published as final.
- Do not manufacture historical decisions, approval dates, or client sign-off.

## Workflow sequence for this existing project

1. Preserve the completed workflow migration, read-only audit, and approved F02–F07 refinement evidence.
2. Resolve F01 through `docs/11-business-truth.md`, including public facts, destinations, branding, and asset rights.
3. Obtain approval for the existing or revised route plan in `docs/12-site-plan.md` and any applicable SEO requirements in `docs/13-seo-requirements.md`.
4. Make no further implementation change until exact findings or requirements are explicitly approved.
5. Use `prompts/02-read-only-audit.md` and `prompts/03-approved-refinement.md` only within their stated non-mutation and approved-scope boundaries.
6. Stop at the prospect presentation-ready milestone unless later instructions explicitly expand the project.

## Design protection

- The workflow scaffold is not permission to turn this site into a generic ServiceSide Sites theme.
- Protect the project-specific design direction recorded in `docs/03-design-direction.md`.
- Avoid subjective redesign suggestions and changes that merely make sections more alike.
- Preserve successful section differences, brand color relationships, typography, photo treatments, contact paths, and accessibility behavior unless a documented defect requires correction.

## Technical boundaries

- The current project uses static HTML, Tailwind CSS v4 source and compiled CSS in `site/css/`, and minimal vanilla JavaScript in `site/js/`.
- Do not introduce React, Vite, npm, Bootstrap, jQuery, or an external UI kit without explicit approval.
- If `site/css/input.css` changes, confirm the verified Tailwind standalone executable and command recorded in `docs/04-build-spec.md` before rebuilding `site/css/styles.css`.
- Verify responsive behavior at approximately 375, 390, 768, 1024, and 1440 pixels during audit or approved refinement.
- Verify keyboard operation, visible focus, semantic headings, alternative text, contrast, reduced-motion behavior, navigation, contact paths, and asset loading.

## Completion reporting

Report the files changed, checks run, viewports reviewed, screenshots created, assumptions, known limitations, items not verified, branch, commit hash when applicable, and complete Git status.
