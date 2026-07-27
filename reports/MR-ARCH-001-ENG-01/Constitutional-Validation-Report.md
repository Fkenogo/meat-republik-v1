# Constitutional Validation Report

**Sprint:** MR-ARCH-001-ENG-01

**Date:** 2026-07-27

**Overall assessment:** PASS WITH CONDITIONS

## Assessment

| Validation area | Result | Evidence |
|---|---|---|
| Authority hierarchy | PASS WITH CONDITIONS | Every non-root approved artefact exposes a resolvable upstream approved authority, but current Parent Authority fields do not reproduce the programme brief's full linear enterprise chain |
| Constitutional lineage | PASS WITH CONDITIONS | 9/9 primary artefacts pass the orphan check; several domain documents derive directly from FCDP-001 instead of declaring the full platform chain |
| Derivation model | PASS WITH CONDITIONS | All declared approved references resolve; explicit `Derived From` metadata is missing where applicable in six non-root artefacts, and CX-001 terminology conflicts with CDM-001 |
| Repository placement | PASS | All nine primary artefacts occupy the approved governed paths after the CX-001 move |
| Constitutional integrity | PASS | 18/18 protected constitutional files are byte-identical to baseline commit `0ecc355` |

No orphan approved document, duplicate approved identifier declaration, broken
approved authority reference, content change, or remaining approved-placement
defect was detected.

## Validated Constitutional Platform

| ID | Declared primary parent | Other declared approved authority | Placement | Integrity |
|---|---|---|---|---|
| FCDP-001 | Root | None | PASS | PASS |
| KR-001 | FCDP-001 | None | PASS | PASS |
| CDM-001 | FCDP-001 | KR-001 | PASS | PASS |
| AUTH-001 | KR-001 | CDM-001 | PASS | PASS |
| MR-GOV-001 | Not declared | FCDP-001, KR-001, CDM-001, AUTH-001 through aggregate `Authority` field | PASS | PASS |
| BC-001 | FCDP-001 | KR-001, CDM-001, AUTH-001 | PASS | PASS |
| BF-001 | BC-001 | FCDP-001 | PASS | PASS |
| BE-001 | BF-001 | BC-001, FCDP-001 | PASS | PASS |
| CX-001 | FCDP-001 | BC-001, BE-001 | PASS | PASS |

## Authority-Chain Condition

The programme brief defines:

```text
FCDP-001 → KR-001 → CDM-001 → AUTH-001 → MR-GOV-001
```

Current primary-parent metadata differs at three points:

| Artefact | Parent expected by brief | Parent declared in document |
|---|---|---|
| CDM-001 | KR-001 | FCDP-001 |
| AUTH-001 | CDM-001 | KR-001 |
| MR-GOV-001 | AUTH-001 | None; aggregate derivation is declared instead |

The references are not broken, but the primary authority chain is ambiguous.
Changing it would alter constitutional meaning and therefore requires Founder
determination.

## Domain-Family Condition

The Brand family forms:

```text
FCDP-001 → BC-001 → BF-001 → BE-001
```

BC-001, BF-001, and BE-001 all declare authority level B1. AUTH-001 describes
B1 as a single framework layer and states that each level derives legitimacy
from the level immediately above. The same-level parent chain may be intended,
but the hierarchy does not currently explain it.

CX-001 declares itself the Republic Experience Constitution at B1. CDM-001
names CX-001 the Republic Experience Framework. Founder confirmation is
required before either title, class, or authority level can be standardized.

## Metadata Validation

The validator assessed the requested metadata fields at artefact level.
Thirty-five applicable fields are absent. No value was inferred.

| ID | Present core metadata | Missing applicable metadata |
|---|---|---|
| FCDP-001 | ID, Title, Version, Status | Authority Level, Repository Domain, Document Family |
| KR-001 | ID, Title, Status, Authority Level, Parent Authority | Version, Derived From, Repository Domain, Document Family |
| CDM-001 | ID, Title, Status, Authority Level, Parent Authority | Version, Derived From, Repository Domain, Document Family |
| AUTH-001 | ID, Title, Status, Authority Level, Parent Authority | Version, Derived From, Repository Domain, Document Family |
| MR-GOV-001 | Title, Status; ID exists under `Programme ID` | Version, Authority Level, Parent Authority, Derived From, Repository Domain, Document Family |
| BC-001 | ID, Title, Status, Authority Level, Parent Authority | Version, Derived From, Repository Domain, Document Family |
| BF-001 | ID, Title, Status, Authority Level, Parent Authority, Derived From | Version, Repository Domain, Document Family |
| BE-001 | ID, Title, Status, Authority Level, Parent Authority, Derived From | Version, Repository Domain, Document Family |
| CX-001 | ID, Title, Status, Authority Level, Parent Authority | Version, Derived From, Repository Domain, Document Family |

Additional AUTH-001-required fields—Approval Authority, Effective Date, and
supersession fields where applicable—are also not standardized across the
platform.

## Status and Governance Conditions

- All nine primary artefacts remain in a draft status.
- FCDP-001 is Version 0.1; KR-001 and CDM-001 describe their FCDP-001 parent as
  pending Version 1.0.
- MR-GOV-001 states that completion requires REG-001, VER-001, AMD-001, and
  APR-001. Those registers do not exist in the supplied repository.
- No approval or effective-date evidence was found for the platform.

These conditions prevent an unconditional Gate G1 pass even though repository
engineering and constitutional content integrity pass.

## Unresolved Founder Decisions

1. Confirm the authoritative primary-parent chain for CDM-001, AUTH-001, and
   MR-GOV-001.
2. Confirm whether same-level B1 derivation inside the Brand family is intended
   and how it relates to AUTH-001.
3. Confirm whether CX-001 is constitution, framework, or another governed class,
   and confirm its authority level.
4. Approve canonical Version, Status, Authority Level, Repository Domain,
   Document Family, approval, and effective-date metadata values.
5. Confirm whether MR-GOV-001 is a programme or governed document and assign its
   primary parent.
6. Authorize creation and population of the four governance registers required
   by MR-GOV-001.
7. Determine the authority and disposition of legacy working drafts with
   competing identifiers and architecture models.

## Gate G1 Validation Outcome

**PASS WITH CONDITIONS.**

The repository is structurally valid, traceable at the approved-reference
level, and constitutionally unchanged. Gate G1 should not be recorded as an
unconditional platform approval until the Founder decisions and governance
activation conditions above are resolved or expressly accepted as Gate
conditions.
