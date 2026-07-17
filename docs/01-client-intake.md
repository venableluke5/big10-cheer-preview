# Client Intake

## Document metadata

| Field | Value |
| --- | --- |
| Status | Draft |
| Owner | Not assigned |
| Last updated | `2026-07-17` |
| Approved by | Not approved |
| Approval date | Not approved |

## Evidence rules

This intake was backfilled from tracked repository evidence for an existing prospect mockup. Existing website copy and screenshots are not formal client approval.

- `Repository-confirmed`: explicitly stated in tracked project documentation or directly observable as repository structure. This does not mean client-approved.
- `Unverified`: present in the mockup, linked public-site material, or screenshots, but not formally confirmed by the client.
- `Missing`: not supported by repository evidence.
- `Not applicable`: demonstrably outside the current mockup implementation.

## Identity and contact facts

| Field | Value | Source | Status | Confirmation needed |
| --- | --- | --- | --- | --- |
| Project name | Big10 Cheer Prospect Preview | `README.md`; `project.md` | Repository-confirmed | No for internal project identity |
| Project/domain reference | Big10 Cheer / `big10cheer.com` | `project.md` | Repository-confirmed | Confirm public naming before client delivery |
| Public-facing mockup brand | Cheer Magic All Stars | `project.md`; `site/index.html` | Repository-confirmed | Yes; not client-approved |
| Legal business name | Missing | No repository evidence | Missing | Yes |
| Primary client contact | Missing | No repository evidence | Missing | Yes |
| Phone | `207-605-0096` | `site/index.html`; reference screenshot | Unverified | Yes |
| Email | `CheerMagic207@outlook.com` | `site/index.html`; reference screenshot | Unverified | Yes |
| Address | `102 Freedom Parkway, Hermon, ME 04401` | `site/index.html`; reference screenshot | Unverified | Yes |
| Existing website | `https://www.big10cheer.com` | `project.md`; `README.md` | Repository-confirmed | Confirm ownership and current canonical URL |
| Domain owner | Missing | No repository evidence | Missing | Yes |
| Hosting provider | Missing | No repository evidence | Missing | Yes |
| Social profiles | Missing from the mockup documentation | A screenshot displays social icons/handle, but no approved register exists | Unverified | Yes |
| Google Business Profile | Missing | No repository evidence | Missing | Yes |

## Business, audience, and customer facts

| Field | Value | Source | Status | Confirmation needed |
| --- | --- | --- | --- | --- |
| Project classification | Prospect redesign mockup / free preview; not a paid client | `README.md`; `project.md` | Repository-confirmed | No for current internal workflow |
| Intended audience | Parents; children and teenagers interested in competitive cheer; current families seeking schedules or program information | `project.md` | Repository-confirmed | Yes before client-facing finalization |
| Primary actions | View programs; contact the gym; register or request information | `project.md` | Repository-confirmed | Yes before client-facing finalization |
| Business description | Cheer, tumbling, training, and tryout information presented under Cheer Magic All Stars | `site/index.html`; `project.md` | Unverified | Yes |
| Program pathways | Novice, Prep, and Elite All Star pathways | `site/index.html`; reference tryout material | Unverified | Yes |
| Other offerings | Tumbling classes; private and semi-private lessons; clinics and camps | `site/index.html`; linked registration/booking paths | Unverified | Yes |
| Service/location area | Hermon, Maine | `site/index.html`; reference screenshot | Unverified | Yes |
| Office hours | Missing from `site/`; an earlier implementation/reference screenshot contains hours | `source/index.html`; reference screenshot | Unverified | Yes; do not restore without approval |
| Years in business | Missing | No reliable repository evidence | Missing | Yes |
| Licenses/certifications/affiliations | Missing from approved project facts | Reference screenshot includes affiliation graphics only | Unverified | Yes; do not claim from imagery alone |
| Insurance status | Missing | No repository evidence | Missing | Yes |
| Reviews/testimonials | None approved or registered | `project.md` prohibits invented testimonials | Missing | Yes if later used |
| Prices and schedules | None approved | `project.md` prohibits invention; live links may change | Missing | Yes |

## Assets, systems, and requirements

| Field | Value | Source | Status | Confirmation needed |
| --- | --- | --- | --- | --- |
| Existing assets | Logo, athlete/team photographs, graphics, and reference screenshots | `assets/`; `site/images/`; `source/images/`; `screenshots/` | Repository-confirmed | Confirm ownership and usage permission |
| Asset ownership/permission | Missing | No repository evidence | Missing | Yes |
| Registration integration | GoMotion class-registration links | `site/index.html` | Unverified | Confirm URLs and intended destinations |
| Appointment integration | GoMotion booking link | `site/index.html` | Unverified | Confirm URL and intended destination |
| Tryout information | `https://www.big10cheer.com/Class-Schedule` | `site/index.html` | Unverified | Confirm it is the correct durable destination |
| Contact form | No form exists in `site/` | Direct repository inspection | Not applicable to current build | Confirm whether direct contact links are sufficient |
| Analytics | No analytics code or requirement is documented | Direct repository inspection | Missing | Yes if project scope expands |
| Accessibility requirements | Existing code includes semantic regions, a skip link, focus styles, alternative text, and reduced-motion handling; no formal target or test evidence exists | `site/` | Unverified | Confirm target and test during audit |

## Scope

| Field | Value | Source | Status | Confirmation needed |
| --- | --- | --- | --- | --- |
| Current scope | One static homepage prospect preview | `README.md`; `site/index.html` | Repository-confirmed | Confirm before any scope expansion |
| Pages included | Home page only | `site/` inventory | Repository-confirmed | Yes before client proposal |
| Explicit exclusions | No replacement build during migration; no launch, deployment, forms, analytics, new pages, asset reorganization, or unsupported claims | Migration instruction; existing docs | Repository-confirmed for this task | New approval required to expand |

## Reasonable inferences

| Inference | Evidence | How it must be handled |
| --- | --- | --- |
| `site/` is the preferred presentation implementation | It is more extensive and includes Tailwind source/compiled output and expanded sections | Use as provisional audit target; obtain confirmation before refinement |
| `source/` is an earlier implementation | It is a separate, simpler complete version using overlapping assets | Preserve unchanged; do not merge or delete |
| `screenshots/` contains source/reference captures | Filenames and contents correspond to existing-site information rather than documented mockup viewports | Use for factual comparison only, not as responsive QA proof |

## Confirmed repository facts

| Fact | Supporting source | Approval meaning |
| --- | --- | --- |
| This is a prospect/free preview and not a paid client project | `README.md` | Internal project fact, not client approval |
| The mockup should use Cheer Magic All Stars branding | `project.md` | Existing project instruction, not client sign-off |
| The design goal is modern, energetic, custom, photo-driven, and parent-clear | `project.md` | Existing design brief, not a locked client decision |
| Programs, registration, and contact paths should be easy to understand | `README.md`; `project.md` | Existing project goal |
| Programs, prices, schedules, credentials, and testimonials must not be invented | `project.md` | Permanent content restriction |

## Missing information and facts requiring confirmation

| Missing or unverified item | Why it matters | Blocks read-only audit? | Blocks approved finalization or launch? |
| --- | --- | --- | --- |
| Client identity, contact, and approval authority | Needed for formal approvals | No | Yes |
| Legal/public business naming | Prevents brand misrepresentation | No | Yes |
| Phone, email, address, hours, programs, and external link accuracy | Affects trust and conversion | No; flag as unverified | Yes |
| Asset ownership and permission | Affects lawful client delivery | No | Yes |
| Hosting, domain ownership, deployment target, and launch approval | Required for production work | No | Yes |
| Approved copy and trust claims | Required to represent content as final | No | Yes |
| Accessibility target and browser/device matrix | Required for completion evidence | No | Yes |
| Tailwind standalone executable and build command | Required for safe CSS refinements | No | Yes if CSS changes |

## Prohibited or unsupported claims

Until formally supported, do not add or strengthen claims about years in business, licensing, certifications, affiliations, insurance, awards, guarantees, athlete results, national status, family ownership, reviews, testimonials, prices, schedules, program eligibility, availability, or performance outcomes.
