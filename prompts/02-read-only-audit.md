# Prompt: Big10 Cheer Read-Only Site Audit

Perform one complete read-only audit of the existing Big10 Cheer prospect presentation build.

## Repository and target

- Repository: `C:\Users\Luke Venable\Documents\ServiceSide Projects\big10-cheer-preview`
- Audit target: the complete `site/` implementation
- Preserved historical implementation: `source/`
- Source/reference materials: `assets/` and `screenshots/`

`site/` is the provisional audit target. Do not merge it with `source/`, compare the site into a redesign, or treat `screenshots/` as proof that responsive presentation screenshots already exist.

## Non-mutation rule

Make no file, Git, repository configuration, browser-storage, deployment, remote, account, or sibling-repository changes. Do not format, fix, stage, commit, switch branches, create screenshots, update documentation, rebuild CSS, or test submissions that could change external state. Use only read-only inspection and testing that does not alter project state.

Record the branch, HEAD, and complete Git status before and after. Stop if repository identity is uncertain or the starting state is not clean and understood.

## Required preparation

1. Confirm the exact repository path and Git top-level path.
2. Confirm the branch, HEAD, remote, tracked changes, staged changes, and untracked files.
3. Read `AGENTS.md` and every file in `docs/` completely.
4. Inspect all files under `site/` before reporting findings.
5. Read `README.md` and `project.md` as original project evidence.
6. Use `source/` only for historical context when it materially clarifies provenance; make no recommendation merely to combine the two implementations.
7. Use `screenshots/` only as source/reference material for factual comparison. They are not the final desktop/mobile screenshot set for `site/`.
8. Treat `docs/01-client-intake.md` as repository-backfilled discovery and consult `docs/11-business-truth.md` for approval status, `docs/12-site-plan.md` for route/page-purpose status, and `docs/13-seo-requirements.md` for metadata and indexing status.

## Audit scope

Review the complete `site/` page for:

- Content accuracy and consistency with repository-confirmed facts.
- Clear separation between repository evidence, reasonable inference, and client-unverified facts.
- Unsupported claims, outdated details, or misleading trust signals.
- Information hierarchy, semantic heading order, and section flow.
- Visual composition and preservation of the documented design direction.
- Responsive behavior and content-driven breakpoints.
- Keyboard operation, focus visibility, skip-link behavior, semantics, alternative text, decorative-image handling, contrast, tap targets, and reduced-motion behavior.
- Header and mobile-menu behavior, including Escape, link selection, and desktop resize states.
- Internal anchors, registration, booking, tryout, email, phone, and directions paths.
- Page title, meta description, favicon, canonical behavior, indexing decisions, Open Graph/social metadata, and other relevant presentation metadata.
- Image dimensions, crops, formats, loading behavior, and file weight.
- CSS/JavaScript weight, compiled/source CSS relationship, browser behavior, console errors, and asset requests.
- Presentation readiness, including whether final desktop and mobile screenshots can responsibly be produced after refinement.
- Compliance with `docs/01-client-intake.md`, `docs/02-approved-copy.md`, `docs/03-design-direction.md`, `docs/04-build-spec.md`, and explicit exclusions.
- Consistency with `docs/11-business-truth.md`, including absence of claims sourced only from intake, historical material, screenshots, or current markup.
- Consistency of the existing route and section purposes with `docs/12-site-plan.md`; do not treat the built page as automatic route approval or recommend unapproved routes.
- Consistency of metadata, canonical, robots/indexing, social metadata, favicon, sitemap, and structured-data state with `docs/13-seo-requirements.md`; do not propose invented production values.

There is no contact form in the current implementation. Confirm that fact; do not invent form findings or recommend a form unless a concrete approved requirement supports it.

Do not implement or strengthen an unsupported claim, add an unapproved route, add a production SEO value without approval, or change any protected path. The audit is read-only and grants no implementation authority.

## Required viewport review

Review the complete page at approximately:

- 375 pixels
- 390 pixels
- 768 pixels
- 1024 pixels
- 1440 pixels

Also inspect any content-driven breakpoint where the header, hero, program progression, training area, gallery, contact information, or footer changes materially. Record the browser and exact viewport used for every observed responsive finding.

## Design protection

Protect the successful choices recorded in `docs/03-design-direction.md`, including:

- Black athletic foundation with coral, teal, and violet accents.
- Condensed uppercase display typography.
- Clipped hero stunt photograph and oversized `MAGIC` treatment.
- Star mark, location stamp, and angled accent lines.
- Distinct section compositions.
- `Start Here` paths and Novice/Prep/Elite progression.
- Training photo/list treatment, tryout sequence, and high-contrast CTA.
- About-values treatment and staggered gallery.
- Direct contact and registration paths.
- Existing accessibility and mobile-menu behavior that tests successfully.

Do not suggest a generic ServiceSide Sites theme, subjective restyling, a replacement hero, homogenized sections, or aesthetic changes without a concrete user, business, accessibility, responsive, or presentation benefit.

## Findings limit and classification

Return no more than 12 total actionable findings. Separate defects from preferences:

- `Must fix`: blocks factual accuracy, responsible delivery, core function, accessibility, or the prospect definition of done.
- `Should fix`: materially affects trust, clarity, usability, responsiveness, or presentation readiness.
- `Optional`: a low-risk preference or enhancement with a specific benefit. Do not include subjective polish for its own sake.

If an observed issue cannot be confirmed without missing client information, identify the evidence gap and the safest non-mutating next step rather than guessing.

## Finding format

Assign each actionable finding a stable number and include:

- Priority
- Defect or optional preference classification
- Exact location: page section, element, file, and line when available
- Evidence: observed behavior, source document, and viewport/input where relevant
- User or business impact
- Exact recommended correction
- Regression risk: successful behavior or design that must remain protected

## Report structure

### Must fix

Confirmed defects blocking accuracy, function, accessibility, or responsible presentation.

### Should fix

Meaningful defects affecting trust, clarity, usability, responsive quality, or presentation readiness.

### Optional

Clearly labeled preferences with a specific benefit. Omit this section if none are justified.

### Keep unchanged

List successful, intentional choices that the refinement pass must protect. These do not count toward the 12-finding limit and are not implementation work.

### Consolidated refinement list

End with one numbered list containing only exact proposed corrections, preserving finding numbers and priorities. Make each item suitable for explicit approval or rejection without further interpretation. Do not include `Keep unchanged` items.

### Repository state

Report the ending branch, HEAD, tracked changes, staged changes, and untracked files. Confirm whether the ending state exactly matches the starting state and explicitly confirm that no audit change was made.
