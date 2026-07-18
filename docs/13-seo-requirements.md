# SEO Requirements — Big10 Cheer Prospect Preview

## Document control

| Field | Value |
| --- | --- |
| Status | Draft; no production SEO approval |
| Project type | Prospect/free-preview mockup |
| Implementation reviewed | `site/index.html` |
| Owner | Not assigned |
| Last updated | `2026-07-17` |
| Approved by | Not approved |
| Approval date | Not approved |

## Purpose and approval gate

This register records the current metadata and indexing state and controls any future SEO implementation. It does not authorize a production URL, canonical tag, robots directive, social metadata, favicon change, sitemap, structured data, analytics, Search Console, verification file, or deployment.

**No production SEO value may be added unless it is supported by approved business truth in `docs/11-business-truth.md`, an approved route in `docs/12-site-plan.md`, approved copy, and an explicit approved requirement here.**

## Current state

- An active title and meta description exist in `site/index.html`, but both contain unapproved public business, service, and location claims.
- No approved production URL or hosting target exists.
- No canonical URL is approved or implemented.
- No preview or production robots/indexing policy is approved.
- No Open Graph or Twitter/X metadata is implemented or approved.
- A PNG logo is referenced as a favicon, but no favicon approval or asset-rights record exists.
- No sitemap policy or sitemap file is approved.
- No structured-data type or implementation is approved.
- No analytics, Search Console, verification-file, domain, or external-account action is approved.
- This remains a prospect/mockup project with no launch authorization.

## Site-wide requirements

| Requirement | Current Big10 decision | Source or dependency | Approval status | Validation status |
| --- | --- | --- | --- | --- |
| Language attribute | English is active in existing markup | `site/index.html` | Existing implementation; not client-approved | Source-inspected |
| Semantic HTML and logical headings | Required for any approved continuation | `docs/04-build-spec.md`; `docs/06-qa-checklist.md` | Workflow requirement | Previously checked in approved F02–F07 scope |
| Mobile viewport and responsive presentation | Required | `docs/04-build-spec.md`; `docs/06-qa-checklist.md` | Workflow requirement | Previously checked at recorded viewports |
| Descriptive links and working contact paths | Must match approved copy and business truth | `docs/02-approved-copy.md`; `docs/11-business-truth.md` | Not approved | Existing destinations tested; factual approval open |
| Useful alternative text | Must match approved asset identity and rights | `docs/11-business-truth.md`; `docs/06-qa-checklist.md` | Asset rights not approved | Existing markup previously checked; rights open |
| Reduced-motion support | Required and must be emulated before presentation-ready sign-off | `docs/06-qa-checklist.md`; `docs/10-definition-of-done.md` | Workflow requirement | Source-inspected; emulation not performed |
| Consistent business information | Must match approved records in `docs/11-business-truth.md` | F01 verification | Not approved | Not validated |
| Preview indexing policy | Separate decision required for any hosted preview | Approved preview environment | Not approved | Not validated |
| Production indexing policy | Separate decision required after production scope and URL approval | Approved launch scope | Not approved | Not validated |
| Canonical behavior | No canonical until the exact production URL and route are approved | `docs/12-site-plan.md`; production approval | Not approved | No active canonical found |
| Robots policy | Must be reviewed with preview/production indexing and canonical decisions | Approved environment policy | Not approved | No active policy found |
| Open Graph and Twitter/X | Require approved wording, absolute URL, and approved social image | Approved copy; asset rights; production URL | Not approved | Not implemented |
| Favicon | Existing logo reference is not an approved favicon decision | Logo rights; approved formats and paths | Not approved | Existing reference loads per prior QA |
| Sitemap policy | No sitemap until approved production routes and URLs exist | `docs/12-site-plan.md`; approved production URL | Not approved | No sitemap present |
| Structured-data eligibility | No type is approved; visible approved truth must support any future type | `docs/11-business-truth.md`; visible content | Not approved | No structured data present |
| Analytics and Search Console | No setup or account action is authorized | Explicit external-account approval | Not approved | Not applicable to current mockup |

## Page-level requirements

| Route | Title | Meta description | Canonical URL | Robots directive | Open Graph title | Open Graph description | Open Graph image | Structured-data type | Sitemap inclusion | Source | Approval status | Validation status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `/` proposed | Existing draft: `Cheer Magic All Stars \| Cheer & Tumbling in Hermon, Maine` | Existing draft: `Explore Cheer Magic All Stars cheer, tumbling, training, and tryout information in Hermon, Maine.` | None approved | None approved | None approved | None approved | None approved | None approved | Undecided; no sitemap authorized | `site/index.html`; `docs/02-approved-copy.md`; `docs/12-site-plan.md` | Existing title and description are unapproved; all production fields unapproved | Title/description present; production SEO not validated |

## Governing rules

- Lighthouse is a technical diagnostic, not a ranking guarantee.
- Do not promise rankings or first-place search results.
- Do not add fake schema values, ratings, reviews, prices, hours, addresses, coordinates, programs, or service claims.
- Do not add hidden keyword text or keyword stuffing.
- No placeholder, preview, localhost, staging, or example URL may become a production canonical.
- Structured data must match visible, approved business truth.
- Preview indexing and production indexing are separate decisions.
- Do not require `llms.txt`.
- Do not create pages solely to increase keyword coverage or page count.
- Do not create a sitemap until approved production routes and URLs exist.
- Canonical and robots decisions must be reviewed together for the approved environment.
- Do not change a domain, DNS, analytics, Search Console, Google Business Profile, or other external account without explicit approval naming the account and action.

## Environment and indexing review

| Item | Prospect or preview state | Production state | Approved source | Approval status | Validation evidence |
| --- | --- | --- | --- | --- | --- |
| Production URL | None approved | None approved | No production authorization | Not approved | None |
| Indexing policy | Undecided | Undecided | Environment-specific approval required | Not approved | None |
| Robots directive | None approved | None approved | Must follow approved indexing policy | Not approved | No directive identified in active markup |
| Canonical URL | None approved | None approved | Approved route and production URL required | Not approved | No canonical identified in active markup |
| Sitemap | Not authorized | Not authorized | Approved production route set required | Not approved | No sitemap present |

## Structured-data review

Absence of structured data is preferable to unsupported or misleading structured data. The current page is not eligible for an approved implementation because public identity, contact, location, programs, destinations, and asset rights remain unapproved.

| Route | Proposed type | Visible supporting content | Business-truth records | Eligible | Approved to implement | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| `/` proposed | None | Existing draft content only | No approved public records | No | No | Do not add schema merely to satisfy a validator |

## Final SEO approval

| Field | Value |
| --- | --- |
| Overall status | Draft; no production SEO approval |
| Approved routes covered | None |
| Approved production URL | None |
| Approved indexing environment | None |
| Approved canonical | None |
| Approved sitemap policy | None |
| Approved structured data | None |
| Remaining blockers | F01 business truth and asset rights; approved route; approved copy; environment, indexing, canonical, social-image, and favicon decisions |
| Approved by | Not approved |
| Approval date | Not approved |
| Approval evidence | None recorded |
