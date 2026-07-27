# Gate G1 Founder Decision Pack

**Pack ID:** MR-G1-FDR-001

**Gate:** G1 — Constitutional Platform Readiness

**Prepared:** 2026-07-27

**Document type:** Non-constitutional decision support

**Approval status:** No Founder disposition recorded

> Preparation of this pack does not approve a recommendation, amend a
> constitutional artefact, authorize a register, dispose of legacy material, or
> close Gate G1.

## Executive Summary

The engineering sprint MR-ARCH-001-ENG-01 established a reliable constitutional
repository and concluded **PASS WITH CONDITIONS**. Engineering controls pass:

- 18/18 protected constitutional files match baseline commit `0ecc355`;
- 9/9 approved artefacts occupy their approved paths;
- 9/9 approved identifier declarations are unique;
- 9/9 approved artefacts pass the orphan check;
- the validator reports no blocking repository-integrity failure;
- no constitutional wording was changed.

The remaining work is Founder-controlled. Seven bounded decisions are required
to make authority, classification, metadata, governance activation, and legacy
disposition explicit. This pack presents evidence, options, implications,
recommendations, and blank fields for genuine Founder input.

## Gate G1 Current State

| Item | Verified state |
|---|---|
| Engineering sprint closure HEAD | `d0958a6` |
| Factual closure reconciliation | `5dc39f3` |
| Branch | `codex/mr-arch-001-eng-01` |
| Sprint validation outcome | PASS WITH CONDITIONS |
| Constitutional integrity | PASS, 18/18 protected files |
| Approved placement | PASS, 9/9 artefacts |
| Repository blockers | 0 |
| Founder decisions outstanding | 7 |
| Gate disposition | Not selected |

## Evidence Base

- [Constitutional Validation Report](../MR-ARCH-001-ENG-01/Constitutional-Validation-Report.md)
- [Repository Health Report](../MR-ARCH-001-ENG-01/Repository-Health-Report.md)
- [Repository Engineering Report](../MR-ARCH-001-ENG-01/Repository-Engineering-Report.md)
- [Final Summary](../MR-ARCH-001-ENG-01/Final-Summary.md)
- [Machine-readable validation evidence](../MR-ARCH-001-ENG-01/validation-evidence.json)
- Nine approved constitutional artefacts and FCDP-001 Parts I–IX
- Sixteen preserved legacy Founder working files
- Active Git history and repository state

Where the programme brief and current constitutional metadata differ, neither is
silently preferred. The variance is presented for Founder disposition.

## Decision Principles

1. One primary parent should identify the source of authority.
2. `Derived From` may identify material interpretive or design dependencies.
3. `Related Authority` may identify relevant governed artefacts that do not
   confer primary authority.
4. Administrative metadata may have constitutional effect when it changes
   authority, lineage, approval, or status.
5. Recommendations in this pack have no authority until the Founder records a
   disposition and rationale.

---

## FDR-G1-001 — Enterprise Primary-Parent Chain

**Decision ID:** FDR-G1-001

**Matter:** Select the authoritative primary-parent model for KR-001, CDM-001,
AUTH-001, and MR-GOV-001.

### Evidence

The programme brief describes:

```text
FCDP-001 → KR-001 → CDM-001 → AUTH-001 → MR-GOV-001
```

Current metadata declares:

```text
KR-001      Parent Authority: FCDP-001
CDM-001     Parent Authority: FCDP-001; Related Authority: KR-001
AUTH-001    Parent Authority: KR-001; Related Authority: CDM-001
MR-GOV-001  no Parent Authority; aggregate Authority references all four
```

All references resolve. The condition is ambiguity, not a broken link.

### Why a Decision Is Required

Parent authority determines which document prevails, who may authorize change,
and how future artefacts trace back to constitutional authority. Two plausible
models currently coexist.

### Options

#### Option A — Adopt the Linear Chain

```text
FCDP-001 → KR-001 → CDM-001 → AUTH-001 → MR-GOV-001
```

- **Rationale:** Makes the programme model and document metadata identical.
- **Implications:** CDM-001, AUTH-001, and MR-GOV-001 primary-parent metadata
  would require governed amendment. Existing references could remain as
  `Derived From` or `Related Authority`.
- **Documents affected:** CDM-001, AUTH-001, MR-GOV-001, validation manifest,
  future REG-001.
- **Risks:** Treats CDM-001 as the authority source for AUTH-001 even though
  AUTH-001 currently says KR-001 is its parent; may make architectural sequence
  equivalent to constitutional authority without an explicit rationale.
- **Traceability impact:** Simplest single chain; easy to automate and explain.

#### Option B — Preserve Current Declared Parents

```text
FCDP-001 ─┬→ KR-001 → AUTH-001
          └→ CDM-001

MR-GOV-001: aggregate authority only
```

- **Rationale:** Minimizes constitutional document amendment and respects
  current declarations.
- **Implications:** The programme model must be revised to show a non-linear
  architecture. MR-GOV-001 still needs a rule explaining aggregate authority
  without a primary parent.
- **Documents affected:** Programme model, CDM-001 relationship explanation,
  MR-GOV-001, validator logic.
- **Risks:** Aggregate authority can make conflict resolution and amendment
  authority unclear; future documents may imitate a parentless pattern.
- **Traceability impact:** Preserves current links but requires graph-aware
  validation and an exception for MR-GOV-001.

#### Option C — Adopt a Hybrid Primary-Parent Model

Proposed model for consideration:

```text
FCDP-001
    ↓
KR-001
    ├──→ CDM-001
    └──→ AUTH-001
              ↓
          MR-GOV-001
```

Proposed secondary relations:

```text
CDM-001     Derived From: FCDP-001
AUTH-001    Derived From or Related Authority: CDM-001
MR-GOV-001  Derived From: FCDP-001, KR-001, CDM-001
```

- **Rationale:** Gives every artefact one primary parent while preserving the
  functional distinction between the Knowledge Constitution, the derivation
  map, the authority hierarchy, and governance implementation.
- **Implications:** CDM-001 would change parent from FCDP-001 to KR-001;
  AUTH-001 would retain KR-001; MR-GOV-001 would gain AUTH-001 as parent.
- **Documents affected:** CDM-001, AUTH-001 relationship metadata,
  MR-GOV-001, programme model, validator, future REG-001.
- **Risks:** Less visually simple than Option A; requires precise definitions
  of Parent, Derived From, and Related Authority.
- **Traceability impact:** One authoritative edge per artefact plus preserved
  secondary dependencies; suitable for deterministic validation.

### Analysis

| Criterion | Option A | Option B | Option C |
|---|---|---|---|
| Single primary parent | Strong | Weak for MR-GOV-001 | Strong |
| Preserves current declarations | Low | Strong | Moderate |
| Conflict resolution clarity | Strong | Weak | Strong |
| Functional accuracy | Moderate | Moderate | Strong |
| Validator simplicity | Strong | Moderate | Strong |
| Amendment scope | Highest | Lowest | Moderate |

### Recommended Option

**Option C — Hybrid primary-parent model.**

This recommendation best separates primary authority from secondary derivation
while preserving AUTH-001's current direct relationship to KR-001. It is not a
Founder decision and must not be implemented without approval.

### Founder-Controlled Fields

- **Founder disposition:** ________________________________________________
- **Founder rationale:** _________________________________________________
- **Conditions:** ________________________________________________________
- **Effective date:** ____________________________________________________

---

## FDR-G1-002 — CX-001 Classification

**Decision ID:** FDR-G1-002

**Matter:** Resolve CX-001's title, class, and authority level.

### Evidence

- CX-001 title: `Republic Experience Constitution`.
- CX-001 authority level: `Constitutional Framework (B1)`.
- CDM-001 name for CX-001: `Republic Experience Framework`.
- CX-001 defines enduring principles, declares constitutional standing, and
  authorizes future frameworks, standards, and guides.
- Repository placement:
  `knowledge-repository/03-experience/constitution/`.

### Why a Decision Is Required

Title, function, authority level, and CDM-001 terminology do not align.
Downstream authority cannot be normalized until the Founder determines whether
CX-001 is itself a constitution or a framework.

### Options

#### Option A — A2 Domain Constitutional Instrument

- **Title alignment:** Retains `Republic Experience Constitution`.
- **Repository placement:** Current `constitution/` placement remains aligned.
- **Constitutional function:** Matches its enduring principles and authority to
  authorize downstream frameworks and standards.
- **Authority impact:** Places CX-001 with constitutional systems at A2.
- **Downstream impact:** A future Experience Architecture Framework would
  normally derive at B1, followed by B2 standards and lower artefacts.
- **Documents affected:** CX-001 metadata, CDM-001 terminology and family map,
  validator, future REG-001.
- **Risk:** Requires changing the current B1 declaration and confirming whether
  domain constitutions are included within AUTH-001's A2 model.

#### Option B — B1 Constitutional Framework

- **Title alignment:** CDM-001 aligns; CX-001 title would need governed change
  or an approved exception.
- **Repository placement:** A move to `frameworks/` may be considered but is not
  required solely by authority level.
- **Constitutional function:** Treats the document as interpretation rather than
  a constitutional instrument.
- **Authority impact:** Retains the current B1 declaration.
- **Downstream impact:** Standards may derive directly, but the document's
  stated authorization of a future Experience Architecture Framework creates
  potential B1-to-B1 derivation.
- **Documents affected:** CX-001 title or exception, repository convention,
  validator, CDM-001 only if terminology is clarified.
- **Risk:** Weak alignment with the document's repeated constitutional language.

#### Option C — Another Existing AUTH-001 Class

The only other plausible higher class is A1 Constitutional Blueprint.

- **Title alignment:** Would require reclassification as a blueprint or an
  exception.
- **Repository placement:** Current domain placement could remain.
- **Constitutional function:** Poor fit; CX-001 does not define the whole
  Republic's foundational identity.
- **Authority impact:** Would elevate a domain document to the same class as
  FCDP-001.
- **Downstream impact:** Creates multiple A1 roots or requires a subordinate A1
  rule not present in AUTH-001.
- **Risk:** Fragments the constitutional root and conflicts with FCDP-001's role.

### Analysis

| Criterion | A2 instrument | B1 framework | A1 blueprint |
|---|---|---|---|
| Current title fit | Strong | Weak | Weak |
| Current content fit | Strong | Moderate | Weak |
| Current placement fit | Strong | Moderate | Moderate |
| Downstream hierarchy | Strong | Conditional | Weak |
| Amendment scope | Moderate | Moderate | High |

### Recommended Option

**Option A — A2 domain constitutional instrument.**

The recommendation follows CX-001's title, constitutional function, placement,
and express authorization of downstream frameworks. Founder approval is
required before any metadata or CDM-001 change.

### Founder-Controlled Fields

- **Founder disposition:** ________________________________________________
- **Founder rationale:** _________________________________________________
- **Conditions:** ________________________________________________________
- **Effective date:** ____________________________________________________

---

## FDR-G1-003 — Same-Level B1 Brand Derivation

**Decision ID:** FDR-G1-003

**Matter:** Determine whether and how B1 artefacts may derive from other B1
artefacts.

### Evidence

```text
FCDP-001 → BC-001 → BF-001 → BE-001
```

BC-001, BF-001, and BE-001 all declare `Constitutional Framework (B1)`.
AUTH-001 describes B1 as one framework layer and says each level derives
legitimacy from the level immediately above. It does not authorize or prohibit
same-level specialization.

### Why a Decision Is Required

The present chain works as a content dependency but is ambiguous as an authority
chain. The answer becomes precedent for every future constitutional family.

### Options

#### Option A — Allow Controlled Same-Level Specialisation

- Add a governed rule that B1 may derive from B1 when the child narrows scope,
  does not supersede the parent, and retains the same higher constitutional
  parent.
- **Coherence:** Preserves current Brand metadata with a documented exception.
- **Future families:** Enables nested frameworks but may encourage deep chains.
- **Standards and guides:** Remain below the terminal B1 framework.
- **Validator:** Must distinguish permitted specialization from circular or
  conflicting same-level authority.
- **Conflict resolution:** The narrower B1 child yields to its B1 parent.
- **Risk:** Authority levels no longer fully determine precedence.

#### Option B — Assign Distinct Authority Levels

- Possible treatment: BC-001 at A2, BF-001 at B1, and BE-001 at a newly defined
  sublevel or B2 if its function is changed.
- **Coherence:** Creates strict vertical precedence.
- **Future families:** Provides a reusable layered pattern.
- **Standards and guides:** Reclassifying BE-001 as B2 would blur framework and
  standard functions.
- **Validator:** Simple if every level is unique.
- **Conflict resolution:** Clear by level.
- **Risk:** AUTH-001 does not currently define B1 sublevels; B2 is explicitly
  Standards, not Frameworks.

#### Option C — Redesign the Brand-Family Derivation Model

Proposed model for consideration:

```text
FCDP-001
    ↓
BC-001 (A2)
    ├──→ BF-001 (B1)
    └──→ BE-001 (B1)

BE-001 Derived From: BF-001
```

- **Coherence:** Makes BC-001 the domain constitution; BF-001 and BE-001 become
  sibling B1 frameworks with an explicit design dependency.
- **Future families:** Provides a repeatable constitution-to-framework pattern.
- **Standards and guides:** Each B1 framework can authorize its own B2/C1
  descendants.
- **Validator:** Enforces one primary parent while allowing same-level
  `Derived From` references that do not confer precedence.
- **Conflict resolution:** BC-001 governs both; BF-001 informs BE-001 without
  becoming its primary authority.
- **Risk:** Requires Founder-approved metadata changes to BC-001 and BE-001 and
  precise meaning for `Derived From`.

#### Option D — Temporary Recorded Exception

- Retain all current classifications and parents for a defined period.
- **Coherence:** No immediate constitutional amendment.
- **Future families:** Exception must not become precedent.
- **Standards and guides:** May proceed only if the accepted authority path is
  recorded.
- **Validator:** Requires an explicit exception identifier and expiry/review
  condition.
- **Conflict resolution:** Must state that BC-001 prevails over BF-001 and
  BE-001.
- **Risk:** Temporary ambiguity can become permanent if closure responsibility
  and evidence are not assigned.

### Analysis

| Criterion | A | B | C | D |
|---|---|---|---|---|
| Minimal change | Strong | Weak | Moderate | Strongest |
| Reusable family pattern | Moderate | Moderate | Strong | Weak |
| Fits existing AUTH levels | Conditional | Weak | Strong | Conditional |
| Conflict clarity | Moderate | Strong | Strong | Conditional |
| Long-term scalability | Moderate | Moderate | Strong | Weak |

### Recommended Option

**Option C — Redesign the Brand-family derivation model.**

This recommendation treats a Constitution as A2 and frameworks as B1, while
preserving BF-001's substantive influence on BE-001 through `Derived From`.
It must not be implemented without Founder approval.

### Founder-Controlled Fields

- **Founder disposition:** ________________________________________________
- **Founder rationale:** _________________________________________________
- **Conditions:** ________________________________________________________
- **Effective date:** ____________________________________________________

---

## FDR-G1-004 — Canonical Metadata Model

**Decision ID:** FDR-G1-004

**Matter:** Approve a canonical metadata schema and disposition process for all
governed documents.

### Evidence

The validator reports 35 missing applicable requested fields across the nine
approved artefacts. AUTH-001 additionally requires approval, effective-date,
and supersession metadata. Labels and status vocabulary are inconsistent.

### Why a Decision Is Required

Automated lineage, approval, version, supersession, and conflict checks require
stable field meanings. Populating the fields would itself assign authority and
therefore cannot occur before Founder approval.

### Proposed Canonical Schema

| Field | Purpose | Requirement | Permitted format | Cardinality | Responsible authority | Character |
|---|---|---|---|---|---|---|
| Document ID | Stable governed identity | Mandatory | Uppercase approved prefix plus numeric sequence; existing stable IDs preserved | One | Repository governance assigns; approval authority confirms | Administrative metadata |
| Title | Canonical human-readable name | Mandatory | Approved title in title case | One | Document owner proposes; approval authority confirms | Administrative metadata |
| Version | Identifies a governed revision | Mandatory | `MAJOR.MINOR`, unless a governed alternative is approved | One current value | Document custodian records; approval authority authorizes release | Administrative metadata |
| Status | Controls lifecycle state | Mandatory | Value from an approved lifecycle vocabulary | One | Document custodian records; approval authority authorizes transitions | Administrative metadata with governance effect |
| Authority Level | Determines precedence and amendment authority | Mandatory | Exact code and label from AUTH-001 | One | Founder for A1–B1; delegated authority only where AUTH-001 permits | Constitutional-governance metadata |
| Parent Authority | Identifies the single source of primary authority | Mandatory except constitutional root | One existing Document ID | One | Founder for A1–B1 | Constitutional-governance metadata |
| Derived From | Records material sources that shape the document without being its primary parent | Conditional | Existing Document IDs; section references where useful | Multiple | Document owner proposes; approval authority confirms | Constitutional-governance metadata |
| Related Authority | Records relevant governed artefacts that neither parent nor materially derive the document | Conditional | Existing Document IDs | Multiple | Document custodian, subject to governance review | Administrative traceability metadata |
| Repository Domain | Assigns one primary knowledge domain | Mandatory | Exact value from an approved domain catalogue | One | Founder approves catalogue; repository governance applies it | Administrative metadata |
| Document Family | Groups a document within an approved constitutional or implementation family | Mandatory | Exact approved family name or ID | One primary; secondary relations use Related Authority | Founder for constitutional families | Constitutional-governance metadata |
| Approval Authority | Identifies who may approve the current version | Mandatory | Approved role or authority name, not an unevidenced person | One | AUTH-001 and Founder determine | Constitutional-governance metadata |
| Effective Date | States when the approved version takes effect | Conditional on approval | ISO `YYYY-MM-DD` | One per approved version | Approval authority; register custodian records evidence | Administrative metadata with governance effect |
| Supersedes | Identifies immediately prior governed version or document | Conditional | Document ID plus version | One or multiple only where consolidation is approved | Approval authority | Administrative traceability metadata |
| Superseded By | Identifies the approved successor | Conditional | Document ID plus version | One or multiple only where split is approved | Register custodian based on approval evidence | Administrative traceability metadata |

`Authority Level`, `Parent Authority`, `Document Family`, and
`Approval Authority` are metadata rather than philosophical prose, but changing
them changes constitutional effect and requires the same approval discipline as
the governed document.

### Options

#### Option A — Approve the Proposed Schema as the Canonical Minimum

- Apply prospectively to all governed documents.
- Populate the nine artefacts only through recorded Founder dispositions.
- **Risk:** Requires a controlled migration and register support.

#### Option B — Approve a Reduced Gate G1 Schema

- Gate fields: ID, Title, Version, Status, Authority Level, Parent Authority,
  Repository Domain, Document Family, Approval Authority, Effective Date.
- Defer derivation, relation, and supersession fields.
- **Risk:** Gate can proceed sooner, but traceability remains incomplete.

#### Option C — Defer Schema Approval

- Preserve existing metadata and use narrative reports.
- **Risk:** Prevents reliable governance activation and should result in Gate G1
  deferral unless expressly accepted as a blocking condition.

### Analysis

Option A best matches KR-001, CDM-001, AUTH-001, and MR-GOV-001. Option B is a
controlled transitional choice but does not satisfy full traceability. Option C
preserves ambiguity.

### Recommended Option

**Option A — Approve the proposed schema as the canonical minimum**, with all
artefact values remaining `Pending Founder Decision` until separately
dispositioned. The proposed matrix is in
[Proposed Metadata Disposition Matrix](Proposed-Metadata-Disposition-Matrix.md).

### Founder-Controlled Fields

- **Founder disposition:** ________________________________________________
- **Founder rationale:** _________________________________________________
- **Conditions:** ________________________________________________________
- **Effective date:** ____________________________________________________

---

## FDR-G1-005 — MR-GOV-001 Classification

**Decision ID:** FDR-G1-005

**Matter:** Determine MR-GOV-001's governed class, identifier label, authority
level, parent, domain, family, lifecycle, and title treatment.

### Evidence

MR-GOV-001:

- uses `Programme ID`;
- declares no primary parent;
- uses one aggregate `Authority` statement;
- establishes constitutional governance mechanisms;
- is located under Enterprise Governance;
- requires four absent governance registers;
- remains `Draft --- Founder Design`.

### Why a Decision Is Required

If MR-GOV-001 is only a programme, it may coordinate work but cannot
automatically serve as a constitutional authority under AUTH-001. If it is a
governed document, its class and primary parent must be explicit before its
registers can derive authority.

### Options

#### Option A — B1 Governance Framework

- **Identifier label:** `Document ID`.
- **Authority level:** B1 Constitutional Framework.
- **Primary parent:** AUTH-001 under the recommended FDR-G1-001 hybrid model.
- **Derived From:** FCDP-001, KR-001, CDM-001.
- **Domain:** Recommended `Enterprise`.
- **Family:** Recommended `Enterprise Constitutional Platform`.
- **Lifecycle:** Founder approval required; downstream controls and registers
  remain lower-authority artefacts.
- **Title:** `Constitutional Governance Foundation` may remain; the title does
  not falsely claim to be a constitution.
- **Risk:** Requires metadata correction and confirmation that a "Foundation"
  can be classified as a Framework.

#### Option B — Governance Programme

- **Identifier label:** Retain `Programme ID`.
- **Authority level:** Programme classification would sit outside the current
  AUTH-001 document hierarchy unless separately defined.
- **Primary parent:** Programme sponsor/governing document must be identified.
- **Domain:** Enterprise Governance.
- **Family:** Governance programme.
- **Lifecycle:** Manages delivery; a separate governed framework would be needed
  to confer authority on registers.
- **Title:** May remain.
- **Risk:** MR-GOV-001 cannot alone activate constitutional governance unless a
  new authoritative document is created.

#### Option C — A2 Constitutional Instrument

- **Identifier label:** `Document ID`.
- **Authority level:** A2.
- **Primary parent:** FCDP-001 or KR-001, subject to FDR-G1-001.
- **Domain:** Enterprise or Governance.
- **Family:** Enterprise Constitutional Platform.
- **Lifecycle:** Founder-controlled constitutional amendment process.
- **Title:** May remain or be aligned with the selected class.
- **Risk:** Elevates implementation governance alongside constitutions and may
  overlap KR-001 and AUTH-001.

#### Option D — B2 Governance Standard

- **Identifier label:** `Document ID`.
- **Authority level:** B2 Standard.
- **Primary parent:** A B1 governance framework would be required.
- **Domain:** Governance.
- **Family:** Governance implementation.
- **Lifecycle:** Delegated governance may maintain it after initial authority is
  established.
- **Title:** `Foundation` would poorly describe a mandatory standard.
- **Risk:** No current B1 governance parent exists unless another option or
  document is approved.

### Analysis

| Criterion | B1 framework | Programme | A2 instrument | B2 standard |
|---|---|---|---|---|
| Fits current function | Strong | Moderate | Moderate | Weak |
| Fits AUTH-001 | Strong | Weak | Strong | Conditional |
| Can authorize registers | Strong | Weak alone | Strong | Conditional |
| Avoids overlap | Strong | Moderate | Weak | Moderate |
| Current title can remain | Strong | Strong | Moderate | Weak |

### Recommended Option

**Option A — B1 Governance Framework**, with `Document ID: MR-GOV-001`,
`Parent Authority: AUTH-001`, and secondary derivation retained. This is a
recommendation only.

### Founder-Controlled Fields

- **Founder disposition:** ________________________________________________
- **Founder rationale:** _________________________________________________
- **Conditions:** ________________________________________________________
- **Effective date:** ____________________________________________________

---

## FDR-G1-006 — Governance Register Authorisation

**Decision ID:** FDR-G1-006

**Matter:** Decide whether and under what authority to create REG-001, VER-001,
AMD-001, and APR-001.

### Evidence

MR-GOV-001 names all four registers and states that governance is complete only
when the registers exist, constitutional documents are registered, and approval
and amendment processes are operational. No register exists.

### Why a Decision Is Required

Registers cannot be created or populated without authority, a custodian, update
rules, and evidence standards. Their absence prevents full governance
activation.

### Common Proposed Authority Model

- Registers derive from the Founder-approved classification of MR-GOV-001.
- Register entries are evidence records; they do not create constitutional
  authority by themselves.
- Recommended operational classification: D2 Operational Record, with schema
  controlled by MR-GOV-001 until a B2 governance standard is authorized.
- Primary custodian: `Designated Constitutional Repository Custodian —
  Pending Founder Decision`.
- Historical claims may be entered only when supported by repository, approval,
  or Founder evidence. Absence of evidence must be recorded as `Not evidenced`,
  never reconstructed.

### Proposed Authorisation — REG-001

- **Purpose:** Master inventory of governed constitutional artefacts.
- **Authority:** Derived from MR-GOV-001; proposed D2 operational register.
- **Minimum fields:** Document ID, Title, Authority Level, Knowledge/Repository
  Domain, Document Family, Parent Authority, Current Version, Status,
  Repository Location.
- **Primary custodian:** Pending Founder Decision.
- **Update trigger:** Authorized creation, metadata amendment, relocation,
  approval, supersession, or retirement of a governed document.
- **Initial population:** The nine approved artefacts only; FCDP Parts I–IX
  recorded as constituent files, not separate authorities, unless the Founder
  decides otherwise.
- **Validator relationship:** Proposed source for manifest IDs, expected paths,
  and canonical metadata; validator reports discrepancies but does not mutate
  the register.
- **Historical rule:** Record only evidence-supported status and approval.
- **Authorisation disposition:** __________________________________________

### Proposed Authorisation — VER-001

- **Purpose:** Evidence-backed version history for each governed document.
- **Authority:** Derived from MR-GOV-001; proposed D2 operational register.
- **Minimum fields:** Document ID, Version, Effective Date, Approval Authority,
  Change Summary, Superseded Version.
- **Primary custodian:** Pending Founder Decision.
- **Update trigger:** Approval, publication, correction, or supersession of a
  governed version.
- **Initial population:** Current declared versions only; missing versions
  remain `Pending Founder Decision`; baseline Git hashes may be referenced as
  engineering evidence but not treated as approvals.
- **Validator relationship:** Validator may compare current declared versions
  and hashes with the register.
- **Historical rule:** Do not infer versions or effective dates from filenames
  or commit dates.
- **Authorisation disposition:** __________________________________________

### Proposed Authorisation — AMD-001

- **Purpose:** Record every authorized constitutional amendment and its
  rationale.
- **Authority:** Derived from MR-GOV-001; proposed D2 operational register.
- **Minimum fields:** Amendment ID, Affected Document, Rationale, Decision,
  Approval Authority, Effective Date, Traceability.
- **Primary custodian:** Pending Founder Decision.
- **Update trigger:** Founder-approved or otherwise authorized amendment to a
  governed artefact.
- **Initial population:** Empty prospective register unless documentary
  evidence supports a historical amendment; engineering placement moves are
  not constitutional amendments.
- **Validator relationship:** Validator may confirm that a constitutional hash
  change has a corresponding approved amendment record.
- **Historical rule:** No rationale or decision may be fabricated from a Git
  diff.
- **Authorisation disposition:** __________________________________________

### Proposed Authorisation — APR-001

- **Purpose:** Auditable evidence of constitutional approvals.
- **Authority:** Derived from MR-GOV-001; proposed D2 operational register.
- **Minimum fields:** Document ID, Version, Approver, Approval Date, Effective
  Date, Approval Status.
- **Primary custodian:** Pending Founder Decision.
- **Update trigger:** Approval, conditional approval, revocation, expiry, or
  supersession supported by authorized evidence.
- **Initial population:** No approval is backfilled merely because a document
  exists or is Founder-controlled. Current draft artefacts remain unapproved
  unless evidence is supplied.
- **Validator relationship:** Validator may reconcile Status, Version, Approval
  Authority, and Effective Date against the register.
- **Historical rule:** Historical approval may be recorded only from genuine
  Founder-origin or governed approval evidence.
- **Authorisation disposition:** __________________________________________

### Options

#### Option A — Authorize All Four After FDR-G1-004 and FDR-G1-005

Creates the complete governance evidence set under approved metadata and
MR-GOV authority.

#### Option B — Authorize REG-001 and APR-001 First

Establishes inventory and approval evidence before version and amendment
history. Faster, but governance activation remains partial.

#### Option C — Defer Register Authorization

Preserves current state. Gate G1 should be deferred unless the Founder expressly
accepts absence of operational governance as a named condition.

### Analysis

Authorizing all four registers produces the complete evidence system described
by MR-GOV-001, but only after FDR-G1-004 and FDR-G1-005 settle their schema and
authority. A REG/APR-first sequence offers earlier inventory and approval
control, yet leaves version and amendment history incomplete. Deferral avoids
premature register creation but cannot support unconditional governance
activation.

### Recommended Option

**Option A — Authorize all four after the metadata model and MR-GOV-001
classification are approved.** Initial population must remain evidence-only.
No register is created by this recommendation.

### Founder-Controlled Fields

- **Founder disposition:** ________________________________________________
- **Founder rationale:** _________________________________________________
- **Conditions:** ________________________________________________________
- **Effective date:** ____________________________________________________

---

## FDR-G1-007 — Legacy Working Draft Disposition

**Decision ID:** FDR-G1-007

**Matter:** Determine how sixteen legacy Founder working files remain available
without being mistaken for approved constitutional authority.

### Evidence

The files contain competing authority taxonomies, identifiers, folder maps,
domain names, and lifecycle assumptions. `MR-BF-001` and `MR-BF-002` each
appear in two legacy files. All sixteen have historical and design value, but
repository presence does not grant authority.

### Why a Decision Is Required

Leaving the files undifferentiated in active domain roots creates accidental
reliance risk. Moving or deleting them without review may destroy context,
relationships, or Founder intent.

### Options

#### Option A — Retain In Place as Non-Authoritative Working Material

- **Confusion risk:** High unless every file and index clearly marks status.
- **Historical value:** Fully visible.
- **Traceability:** Paths remain stable.
- **Reconciliation:** Easy to compare with approved artefacts.
- **Discoverability:** High, including accidental discovery.
- **Accidental reliance:** Highest.

#### Option B — Move to a Governed Archive

Example:

```text
archive/
└── founder-working-drafts/
```

- **Confusion risk:** Reduced.
- **Historical value:** Preserved in working tree and Git.
- **Traceability:** Requires governed move records and link updates.
- **Reconciliation:** Still available but less prominent.
- **Discoverability:** Controlled.
- **Accidental reliance:** Lower.

#### Option C — Review and Disposition Each File Before Any Move

- **Confusion risk:** Remains temporarily but can be controlled by a decision
  register or explicit review notice.
- **Historical value:** Best protected during assessment.
- **Traceability:** Each final move or retention has a rationale.
- **Reconciliation:** Strongest.
- **Discoverability:** Unchanged during review.
- **Accidental reliance:** Moderate until review closes.

#### Option D — Preserve in Git History and Remove from Active Tree

- **Confusion risk:** Lowest in the current tree.
- **Historical value:** Preserved only for users able to inspect Git history.
- **Traceability:** Commit provides evidence, but ordinary links break.
- **Reconciliation:** Harder.
- **Discoverability:** Lowest.
- **Accidental reliance:** Lowest, with higher loss-of-context risk.

### Analysis

The corpus is heterogeneous. Some files are obsolete architecture candidates;
others contain substantial constitutional thought that may inform future
families. A single bulk disposition would treat unlike material as equivalent.

### Recommended Option

**Option C — Review and disposition each file individually before any move.**

The itemized preliminary assessment is in
[Legacy Working Draft Inventory](Legacy-Working-Draft-Inventory.md). No move,
rename, deletion, status change, or archive decision is made by this pack.

### Founder-Controlled Fields

- **Founder disposition:** ________________________________________________
- **Founder rationale:** _________________________________________________
- **Conditions:** ________________________________________________________
- **Effective date:** ____________________________________________________

---

## Gate G1 Outcome Options

No outcome is selected by this pack.

### Outcome A — Gate G1 Approved

Use only when:

- all blocking conditions are resolved;
- constitutional classifications and primary authority are usable;
- canonical metadata is approved and populated through governance;
- governance activation requirements are satisfied;
- closure evidence exists.

**Founder selection:** _________________________________________________

### Outcome B — Gate G1 Approved with Conditions

Use only when:

- every remaining condition is explicitly named;
- the Founder expressly accepts each condition;
- closure responsibility is assigned;
- closure evidence is defined;
- no unresolved contradiction makes the authority model unusable.

**Founder selection:** _________________________________________________

### Outcome C — Gate G1 Deferred

Use where constitutional classifications, authority, metadata, or governance
remain too ambiguous for controlled approval.

**Founder selection:** _________________________________________________

## Overall Founder Record

- **Selected Gate outcome:** ______________________________________________
- **Founder observations:** _______________________________________________
- **Founder rationale:** __________________________________________________
- **Accepted conditions:** ________________________________________________
- **Closure responsibilities:** ___________________________________________
- **Required closure evidence:** __________________________________________
- **Gate effective date:** ________________________________________________

> Founder observations and rationale must be genuine Founder-origin input.
> Blank fields remain blank until the Founder provides a disposition. Approval
> is not implied by preparation of this pack.
