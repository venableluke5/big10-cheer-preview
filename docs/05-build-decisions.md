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

## Unresolved but nonblocking decisions

| ID | Date | Question or gap | Conservative temporary decision | Review point | Status |
| --- | --- | --- | --- | --- | --- |
| U-001 | `2026-07-17` | Is `site/` formally the preferred implementation? | Audit it provisionally and preserve `source/`. | Before approved refinement | Open |
| U-002 | `2026-07-17` | Are brand, contact, location, program, and external-link facts current and client-approved? | Audit current copy as unverified; do not rewrite or strengthen it. | Before factual refinement/finalization | Open |
| U-003 | `2026-07-17` | Are all asset usage rights confirmed? | Preserve existing assets and do not add or repurpose them. | Before client delivery | Open |
| U-004 | `2026-07-17` | What Tailwind standalone executable and command produced the compiled CSS? | Do not change CSS until the command is confirmed. | Before any approved CSS refinement | Open |
| U-005 | `2026-07-17` | Has this mockup been deployed anywhere? | Record no confirmed deployment. | Before launch planning | Open |

## Superseded decisions

None recorded.
