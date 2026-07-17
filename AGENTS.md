# Big10 Cheer Project Instructions

These instructions apply to all work in this repository.

## Project identity and current phase

- Repository: `C:\Users\Luke Venable\Documents\ServiceSide Projects\big10-cheer-preview`
- Project type: prospect redesign mockup / free preview; this is not evidenced as a paid client project.
- Current workflow phase: workflow documentation migration, followed by one complete read-only audit.
- `site/` is the provisional audit target and presentation implementation.
- `source/` is a preserved historical implementation. It is not a cleanup target.
- `screenshots/` contains source/reference captures. They are not evidence that the mockup has passed desktop or mobile presentation review.

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
- `screenshots/` contains current-site and source-reference material. Do not mistake these files for final mockup screenshots, and do not overwrite them.
- During workflow migration, no file under `README.md`, `project.md`, `audit/`, `assets/`, `screenshots/`, `site/`, or `source/` may be modified.

## Information and approval integrity

- Never invent or infer business claims, services, service areas, reviews, licenses, certifications, insurance, employee counts, years in business, awards, guarantees, statistics, schedules, prices, testimonials, or deployment facts.
- Existing website copy and screenshots are evidence to inspect, not formal client approval.
- Treat facts as `Repository-confirmed`, `Unverified`, `Missing`, or `Not applicable` as defined in `docs/01-client-intake.md`.
- A blank field is unknown, not permission to infer a favorable fact.
- Draft or unverified copy may be audited, but it must not be represented as approved or published as final.
- Do not manufacture historical decisions, approval dates, or client sign-off.

## Workflow sequence for this existing project

1. Complete the workflow-document migration without changing existing implementation files.
2. Run `prompts/02-read-only-audit.md` against the complete `site/` implementation.
3. Present no more than 12 prioritized findings and one consolidated approval-ready refinement list.
4. Make no implementation change until findings are explicitly approved.
5. Run one scoped refinement pass using `prompts/03-approved-refinement.md`.
6. Complete the QA checklist and presentation screenshots only after approved refinements.
7. Stop at the prospect mockup-ready milestone unless later instructions explicitly expand the project.

## Design protection

- The workflow scaffold is not permission to turn this site into a generic ServiceSide Sites theme.
- Protect the project-specific design direction recorded in `docs/03-design-direction.md`.
- Avoid subjective redesign suggestions and changes that merely make sections more alike.
- Preserve successful section differences, brand color relationships, typography, photo treatments, contact paths, and accessibility behavior unless a documented defect requires correction.

## Technical boundaries

- The current project uses static HTML, Tailwind CSS v4 source and compiled CSS in `site/css/`, and minimal vanilla JavaScript in `site/js/`.
- Do not introduce React, Vite, npm, Bootstrap, jQuery, or an external UI kit without explicit approval.
- If `site/css/input.css` changes, confirm the approved Tailwind standalone executable and command before rebuilding `site/css/styles.css`; the command is currently undocumented.
- Verify responsive behavior at approximately 375, 390, 768, 1024, and 1440 pixels during audit or approved refinement.
- Verify keyboard operation, visible focus, semantic headings, alternative text, contrast, reduced-motion behavior, navigation, contact paths, and asset loading.

## Completion reporting

Report the files changed, checks run, viewports reviewed, screenshots created, assumptions, known limitations, items not verified, branch, commit hash when applicable, and complete Git status.
