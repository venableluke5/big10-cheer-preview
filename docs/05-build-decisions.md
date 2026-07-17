# Build Decisions

This log begins with the workflow migration on `2026-07-17`. It does not reconstruct or backdate undocumented design/build decisions. Entries authorized for this migration are not client approvals.

## Decision log

### Decision 001 — Preserve both implementations

| Field | Entry |
| --- | --- |
| Date | `2026-07-17` |
| Phase | Workflow migration |
| Decision | Preserve both `site/` and `source/` byte-for-byte during migration. |
| Reason | Both are complete tracked implementations and their history/relationship is not formally documented. |
| Source | Workflow migration request; completed read-only assessment |
| Decision type | Task-authorized migration decision; not client-approved |
| Files affected | Documentation only |
| Follow-up | Confirm implementation roles before approved refinement |

### Decision 002 — Audit `site/`

| Field | Entry |
| --- | --- |
| Date | `2026-07-17` |
| Phase | Workflow migration |
| Decision | Use the complete `site/` directory as the provisional read-only audit target. |
| Reason | Repository evidence indicates it is the more extensive presentation implementation. |
| Source | Workflow migration request; read-only repository assessment |
| Decision type | Confirmed workflow decision; provisional product inference |
| Files affected | `AGENTS.md`; workflow documents and prompts |
| Follow-up | Confirm `site/` as preferred before implementing refinements |

### Decision 003 — Treat `source/` as historical

| Field | Entry |
| --- | --- |
| Date | `2026-07-17` |
| Phase | Workflow migration |
| Decision | Treat `source/` as a preserved earlier implementation, not as the active audit target. |
| Reason | It is a distinct simpler implementation using overlapping assets. |
| Source | Workflow migration request; read-only repository assessment |
| Decision type | Task-authorized migration decision; not client-approved |
| Files affected | Documentation only |
| Follow-up | Do not merge, delete, or reorganize it without explicit approval |

### Decision 004 — Preserve existing repository organization

| Field | Entry |
| --- | --- |
| Date | `2026-07-17` |
| Phase | Workflow migration |
| Decision | Keep `README.md`, `project.md`, `audit/`, `assets/`, `screenshots/`, `site/`, and `source/` unchanged; do not migrate assets into blank-template folders. |
| Reason | The task is documentation-only and existing files are protected. |
| Source | Workflow migration request |
| Decision type | Explicit task authorization |
| Files affected | Documentation only |
| Follow-up | Any future change to a protected path requires exact approval |

### Decision 005 — Keep the existing README

| Field | Entry |
| --- | --- |
| Date | `2026-07-17` |
| Phase | Workflow migration |
| Decision | Do not copy or replace the reusable template README. |
| Reason | The existing README contains project-specific prospect status and restrictions. |
| Source | Workflow migration request; `README.md` |
| Decision type | Explicit task authorization |
| Files affected | Documentation only; `README.md` remains untouched |
| Follow-up | None for migration |

### Decision 006 — Enter at read-only audit

| Field | Entry |
| --- | --- |
| Date | `2026-07-17` |
| Phase | Workflow migration |
| Decision | Enter the reusable workflow at the read-only audit phase rather than rerunning intake or the blank initial-build prompt. |
| Reason | A complete implementation exists and the stated goal is to use it rather than rebuild it. |
| Source | Workflow migration request; read-only repository assessment |
| Decision type | Explicit task authorization |
| Files affected | Workflow documentation and prompts |
| Follow-up | Run `prompts/02-read-only-audit.md` after migration |

### Decision 007 — Record uncertainty without inventing history

| Field | Entry |
| --- | --- |
| Date | `2026-07-17` |
| Phase | Workflow migration |
| Decision | Mark current copy, business facts, design choices, and deployment details as unapproved or unverified where formal evidence is absent. |
| Reason | Existing implementation and screenshots do not establish client approval. |
| Source | Workflow migration request; project information-integrity rules |
| Decision type | Permanent workflow safeguard |
| Files affected | Workflow documentation only |
| Follow-up | Obtain confirmation before factual refinements or client-facing finalization |

### Decision 008 — Defer launch and handoff documents

| Field | Entry |
| --- | --- |
| Date | `2026-07-17` |
| Phase | Workflow migration |
| Decision | Do not add launch, handoff, maintenance, new-project, or initial-build workflow files yet. |
| Reason | The project is a prospect mockup entering read-only audit with no launch or paid-client evidence. |
| Source | Workflow migration request |
| Decision type | Explicit task authorization |
| Files affected | None; omitted files remain absent |
| Follow-up | Add only if project scope and approval state later justify them |

### Decision 009 — Implement F02–F07 without factual changes

| Field | Entry |
| --- | --- |
| Date | `2026-07-17` |
| Phase | Approved refinement |
| Decision | Implement only F02–F07; keep F01 as a separate unresolved verification checklist. |
| Reason | The approved pass authorized accessibility, build reproducibility, delivery-image, and screenshot work but explicitly excluded copy, business facts, links, claims, branding, and asset-rights changes. |
| Source | Approved refinement request; completed F01–F07 audit |
| Decision type | Explicit task authorization |
| Files affected | `site/` implementation, approved workflow documents, new final screenshots |
| Follow-up | Resolve F01 with client-confirmed evidence before presentation-ready sign-off |

### Decision 010 — Use the verified Tailwind v4.3.2 standalone executable

| Field | Entry |
| --- | --- |
| Date | `2026-07-17` |
| Phase | Approved refinement |
| Decision | Build from `site/` with `& "C:\Users\Luke Venable\Documents\ServiceSide Projects\servicesidesites-redesign\tailwindcss.exe" -i .\css\input.css -o .\css\styles.css --minify`. |
| Reason | The executable exists locally, reports Tailwind `v4.3.2`, matches the version identified by the prior compiled CSS, and follows the documented ServiceSide standalone pattern. |
| Source | Local executable inspection; reusable-template README; existing ServiceSide README |
| Decision type | Verified implementation decision |
| Files affected | `site/css/input.css`; generated `site/css/styles.css` |
| Follow-up | Keep the executable outside client repositories |

### Decision 011 — Add targeted WebP delivery derivatives

| Field | Entry |
| --- | --- |
| Date | `2026-07-17` |
| Phase | Approved refinement |
| Decision | Add a 640×350 transparent logo WebP and a 786×720 athlete WebP, update `site/` references, and retain both original PNGs. |
| Reason | The derivatives reduce 398,744 bytes to 45,798 bytes and 532,961 bytes to 60,044 bytes without changing the approved composition. |
| Source | F06 approval; local image dimension, alpha, visual, and browser-loading checks |
| Decision type | Explicit task authorization |
| Files affected | `site/index.html`; two new files in `site/images/` |
| Follow-up | Do not mass-convert the remaining images without a measured benefit |

### Decision 012 — Preserve references and add distinct final captures

| Field | Entry |
| --- | --- |
| Date | `2026-07-17` |
| Phase | Approved refinement |
| Decision | Keep every existing screenshot unchanged and add `big10-cheer-final-mobile-390.png` and `big10-cheer-final-desktop-1440.png`. |
| Reason | F07 requires final full-page presentation evidence without overwriting source/reference captures. |
| Source | F07 approval; final browser QA |
| Decision type | Explicit task authorization |
| Files affected | Two new files in `screenshots/` |
| Follow-up | Use these files only as evidence for the refined `site/` build |

## Unresolved but nonblocking decisions

| ID | Date | Question or gap | Conservative temporary decision | Review point | Status |
| --- | --- | --- | --- | --- | --- |
| U-001 | `2026-07-17` | Is `site/` formally the preferred implementation? | The approved refinement explicitly targeted `site/`; continue preserving `source/`. | Before approved refinement | Resolved for this workflow pass |
| U-002 | `2026-07-17` | Are brand, contact, location, program, and external-link facts current and client-approved? | Audit current copy as unverified; do not rewrite or strengthen it. | Before factual refinement/finalization | Open |
| U-003 | `2026-07-17` | Are all asset usage rights confirmed? | Preserve existing assets and do not add or repurpose them. | Before client delivery | Open |
| U-004 | `2026-07-17` | What Tailwind standalone executable and command produced the compiled CSS? | Use the verified v4.3.2 executable and command recorded in Decision 010. | Before any approved CSS refinement | Resolved |
| U-005 | `2026-07-17` | Has this mockup been deployed anywhere? | Record no confirmed deployment. | Before launch planning | Open |

## Superseded decisions

None recorded.
