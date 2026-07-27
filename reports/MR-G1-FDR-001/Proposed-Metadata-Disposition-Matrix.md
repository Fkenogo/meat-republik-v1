# Proposed Metadata Disposition Matrix

**Pack ID:** MR-G1-FDR-001

**Status:** Proposal only — no metadata amendment authorized

## Reading the Matrix

- **E:** Existing declared value.
- **R:** Recommended disposition for Founder consideration.
- **A:** Approval state. `Pending Founder Decision` means the recommendation has
  no authority.
- **Not applicable:** The field does not apply if the proposed relationship is
  approved.
- An absent field is not silently filled by this matrix.

The canonical field definitions, formats, cardinality, responsible authority,
and constitutional/administrative character appear in FDR-G1-004 of the
[Gate G1 Founder Decision Pack](Gate-G1-Founder-Decision-Pack.md).

## Identity and Lifecycle

| Artefact | Document ID | Title | Version | Status |
|---|---|---|---|---|
| FCDP-001 | E: FCDP-001; R: retain; A: Founder confirmation required | E: The Constitutional Blueprint of the Republic; R: retain; A: Founder confirmation required | E: 0.1; R: confirm 0.1 or approve next controlled version; A: Pending Founder Decision | E: Founder Design Draft; R: retain draft until genuine approval evidence supports transition; A: Pending Founder Decision |
| KR-001 | E: KR-001; R: retain; A: Founder confirmation required | E: Knowledge Repository Constitution; R: retain; A: Founder confirmation required | E: absent; R: Pending Founder Decision | E: Draft — Founder Design; R: retain draft until approval evidence; A: Pending Founder Decision |
| CDM-001 | E: CDM-001; R: retain; A: Founder confirmation required | E: Constitutional Derivation Map; R: retain; A: Founder confirmation required | E: absent; R: Pending Founder Decision | E: Draft — Founder Design; R: retain draft until approval evidence; A: Pending Founder Decision |
| AUTH-001 | E: AUTH-001; R: retain; A: Founder confirmation required | E: Repository Authority Hierarchy; R: retain; A: Founder confirmation required | E: absent; R: Pending Founder Decision | E: Draft — Founder Design; R: retain draft until approval evidence; A: Pending Founder Decision |
| MR-GOV-001 | E: MR-GOV-001 under `Programme ID`; R: retain ID under canonical `Document ID` if FDR-G1-005 Option A is approved; A: Pending Founder Decision | E: Constitutional Governance Foundation; R: retain; A: Pending Founder Decision with classification | E: absent; R: Pending Founder Decision | E: Draft — Founder Design; R: retain draft until approval evidence; A: Pending Founder Decision |
| BC-001 | E: BC-001; R: retain; A: Founder confirmation required | E: Brand Constitution; R: retain; A: Founder confirmation required | E: absent; R: Pending Founder Decision | E: Draft — Founder Design; R: retain draft until approval evidence; A: Pending Founder Decision |
| BF-001 | E: BF-001; R: retain; A: Founder confirmation required | E: Brand Architecture Framework; R: retain; A: Founder confirmation required | E: absent; R: Pending Founder Decision | E: Draft — Founder Design; R: retain draft until approval evidence; A: Pending Founder Decision |
| BE-001 | E: BE-001; R: retain; A: Founder confirmation required | E: Brand Expression Framework; R: retain; A: Founder confirmation required | E: absent; R: Pending Founder Decision | E: Draft — Founder Design; R: retain draft until approval evidence; A: Pending Founder Decision |
| CX-001 | E: CX-001; R: retain; A: Founder confirmation required | E: Republic Experience Constitution; R: retain under recommended A2 classification; A: Pending Founder Decision | E: absent; R: Pending Founder Decision | E: Draft — Founder Design; R: retain draft until approval evidence; A: Pending Founder Decision |

## Authority and Lineage

| Artefact | Authority Level | Parent Authority | Derived From | Related Authority |
|---|---|---|---|---|
| FCDP-001 | E: `Authority: Founder Constitutional Design` without AUTH level; R: A1 Constitutional Blueprint; A: Pending Founder Decision | E: absent; R: Not applicable — constitutional root; A: Founder confirmation required | E: absent; R: Not applicable — constitutional root; A: Founder confirmation required | E: absent; R: none unless Founder identifies a relation; A: Pending Founder Decision |
| KR-001 | E: Constitutional Instrument; R: A2 Constitutional Constitution/Instrument aligned to AUTH-001 terminology; A: Pending Founder Decision | E: FCDP-001; R: retain; A: Founder confirmation required | E: absent; R: not required if parent fully expresses source; A: Pending Founder Decision | E: absent; R: none currently evidenced; A: Pending Founder Decision |
| CDM-001 | E: Constitutional Architecture; R: B1 constitutional architecture framework; A: Pending Founder Decision | E: FCDP-001; R: KR-001 under recommended hybrid model; A: Pending Founder Decision | E: absent; R: FCDP-001; A: Pending Founder Decision | E: KR-001; R: replace with other approved relations after KR-001 becomes parent; A: Pending Founder Decision |
| AUTH-001 | E: Constitutional Architecture; R: B1 constitutional architecture framework; A: Pending Founder Decision | E: KR-001; R: retain under recommended hybrid model; A: Pending Founder Decision | E: absent; R: CDM-001; A: Pending Founder Decision | E: CDM-001; R: retain as Related Authority if not selected as Derived From; A: Pending Founder Decision |
| MR-GOV-001 | E: aggregate `Authority` only; R: B1 Governance Framework; A: Pending Founder Decision | E: absent; R: AUTH-001; A: Pending Founder Decision | E: aggregate reference to FCDP-001, KR-001, CDM-001, AUTH-001; R: FCDP-001, KR-001, CDM-001 with AUTH-001 as parent; A: Pending Founder Decision | E: absent; R: relations not selected as parent or derivation only; A: Pending Founder Decision |
| BC-001 | E: Constitutional Framework (B1); R: A2 domain constitution under recommended Brand redesign; A: Pending Founder Decision | E: FCDP-001; R: retain; A: Pending Founder Decision | E: absent; R: not required if parent expresses source; A: Pending Founder Decision | E: KR-001, CDM-001, AUTH-001; R: retain; A: Pending Founder Decision |
| BF-001 | E: Constitutional Framework (B1); R: retain B1; A: Pending Founder Decision | E: BC-001; R: retain; A: Pending Founder Decision | E: FCDP-001; R: retain; A: Pending Founder Decision | E: absent; R: none currently required; A: Pending Founder Decision |
| BE-001 | E: Constitutional Framework (B1); R: retain B1; A: Pending Founder Decision | E: BF-001; R: BC-001 under recommended sibling-framework model; A: Pending Founder Decision | E: BC-001, FCDP-001; R: BF-001 and FCDP-001, with BC-001 as parent; A: Pending Founder Decision | E: absent; R: none currently required; A: Pending Founder Decision |
| CX-001 | E: Constitutional Framework (B1); R: A2 domain constitutional instrument; A: Pending Founder Decision | E: FCDP-001; R: retain; A: Pending Founder Decision | E: absent; R: not required if parent expresses source; A: Pending Founder Decision | E: BC-001, BE-001; R: retain; A: Pending Founder Decision |

## Domain, Family, and Approval

| Artefact | Repository Domain | Document Family | Approval Authority | Effective Date |
|---|---|---|---|---|
| FCDP-001 | E: absent; R: Enterprise; A: Pending Founder Decision | E: absent; R: Enterprise Constitutional Platform; A: Pending Founder Decision | E: Owner Founder, but no Approval Authority field; R: Founder; A: Pending Founder Decision | E: absent; R: Pending Founder Decision; no date inferred |
| KR-001 | E: absent; R: Enterprise; A: Pending Founder Decision | E: absent; R: Enterprise Constitutional Platform; A: Pending Founder Decision | E: absent; R: Founder under A2; A: Pending Founder Decision | E: absent; R: Pending Founder Decision; no date inferred |
| CDM-001 | E: absent; R: Enterprise; A: Pending Founder Decision | E: absent; R: Enterprise Constitutional Platform; A: Pending Founder Decision | E: absent; R: Founder under recommended B1; A: Pending Founder Decision | E: absent; R: Pending Founder Decision; no date inferred |
| AUTH-001 | E: absent; R: Enterprise; A: Pending Founder Decision | E: absent; R: Enterprise Constitutional Platform; A: Pending Founder Decision | E: absent; R: Founder under recommended B1; A: Pending Founder Decision | E: absent; R: Pending Founder Decision; no date inferred |
| MR-GOV-001 | E: absent; R: Enterprise; A: Pending Founder Decision | E: absent; R: Enterprise Constitutional Platform; A: Pending Founder Decision | E: absent; R: Founder under recommended B1; A: Pending Founder Decision | E: absent; R: Pending Founder Decision; no date inferred |
| BC-001 | E: absent; R: Brand; A: Pending Founder Decision | E: absent; R: Brand Constitutional Family; A: Pending Founder Decision | E: absent; R: Founder; A: Pending Founder Decision | E: absent; R: Pending Founder Decision; no date inferred |
| BF-001 | E: absent; R: Brand; A: Pending Founder Decision | E: absent; R: Brand Constitutional Family; A: Pending Founder Decision | E: absent; R: Founder; A: Pending Founder Decision | E: absent; R: Pending Founder Decision; no date inferred |
| BE-001 | E: absent; R: Brand; A: Pending Founder Decision | E: absent; R: Brand Constitutional Family; A: Pending Founder Decision | E: absent; R: Founder; A: Pending Founder Decision | E: absent; R: Pending Founder Decision; no date inferred |
| CX-001 | E: absent; R: Experience; A: Pending Founder Decision | E: absent; R: Experience Constitutional Family; A: Pending Founder Decision | E: absent; R: Founder; A: Pending Founder Decision | E: absent; R: Pending Founder Decision; no date inferred |

## Supersession

| Artefact | Supersedes | Superseded By |
|---|---|---|
| FCDP-001 | E: absent; R: Not applicable unless evidence identifies a predecessor; A: Pending Founder Decision | E: absent; R: Not applicable unless an approved successor exists; A: Pending Founder Decision |
| KR-001 | E: absent; R: Not applicable unless evidence identifies a predecessor; A: Pending Founder Decision | E: absent; R: Not applicable unless an approved successor exists; A: Pending Founder Decision |
| CDM-001 | E: absent; R: Not applicable unless evidence identifies a predecessor; A: Pending Founder Decision | E: absent; R: Not applicable unless an approved successor exists; A: Pending Founder Decision |
| AUTH-001 | E: absent; R: Not applicable unless evidence identifies a predecessor; A: Pending Founder Decision | E: absent; R: Not applicable unless an approved successor exists; A: Pending Founder Decision |
| MR-GOV-001 | E: absent; R: Not applicable unless evidence identifies a predecessor; A: Pending Founder Decision | E: absent; R: Not applicable unless an approved successor exists; A: Pending Founder Decision |
| BC-001 | E: absent; R: Not applicable unless evidence identifies a predecessor; A: Pending Founder Decision | E: absent; R: Not applicable unless an approved successor exists; A: Pending Founder Decision |
| BF-001 | E: absent; R: Not applicable unless evidence identifies a predecessor; A: Pending Founder Decision | E: absent; R: Not applicable unless an approved successor exists; A: Pending Founder Decision |
| BE-001 | E: absent; R: Not applicable unless evidence identifies a predecessor; A: Pending Founder Decision | E: absent; R: Not applicable unless an approved successor exists; A: Pending Founder Decision |
| CX-001 | E: absent; R: Not applicable unless evidence identifies a predecessor; A: Pending Founder Decision | E: absent; R: Not applicable unless an approved successor exists; A: Pending Founder Decision |

## Dependency Warning

Recommended values for Parent Authority, Authority Level, Derived From, Document
Family, and Approval Authority depend on Founder dispositions under FDR-G1-001,
FDR-G1-002, FDR-G1-003, and FDR-G1-005. They must not be copied into
constitutional documents before those decisions are recorded.

## Founder Metadata Disposition

- **Schema disposition:** _________________________________________________
- **Artefact exceptions:** ________________________________________________
- **Migration authority:** ________________________________________________
- **Required evidence:** __________________________________________________
- **Effective date:** ____________________________________________________
