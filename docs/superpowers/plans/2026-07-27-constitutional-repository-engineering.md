# Constitutional Repository Engineering & Validation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use
> superpowers:subagent-driven-development (recommended) or
> superpowers:executing-plans to implement this plan task-by-task. Steps use
> checkbox (`- [ ]`) syntax for tracking.

**Goal:** Engineer and validate the constitutional repository for Gate G1
without changing constitutional meaning.

**Architecture:** Preserve the supplied corpus in the baseline commit, then use
a dependency-free Node.js validator to protect constitutional bytes, placement,
metadata inventory, and authority references. Apply only the approved CX-001
placement correction and publish non-constitutional reports that separate
implemented changes from Founder recommendations.

**Tech Stack:** Git, Markdown, Node.js built-in modules, SHA-256

## Global Constraints

- Preserve constitutional intent and constitutional text.
- Do not rename approved constitutional documents.
- Do not invent authority, metadata values, governance, or document families.
- Report ambiguity rather than modifying it.
- Validate every logical change before proceeding.
- Maintain incremental, logically grouped commits.
- Use baseline commit `0ecc355` as the byte-preservation source.
- Store sprint evidence under `reports/MR-ARCH-001-ENG-01/`.

---

### Task 1: Repository Hygiene Boundary

**Files:**

- Create: `.gitignore`

**Interfaces:**

- Consumes: untracked `.DS_Store` files observed in the initial workspace
- Produces: a repository-wide exclusion rule for macOS metadata

- [ ] **Step 1: Add the exact ignore rule**

```gitignore
.DS_Store
```

- [ ] **Step 2: Verify operating-system metadata is ignored**

Run:

```bash
git check-ignore .DS_Store knowledge-repository/.DS_Store
git status --short
```

Expected: both `.DS_Store` paths are printed by `git check-ignore`, and no
`.DS_Store` path appears in `git status --short`.

- [ ] **Step 3: Verify the authored file**

Run:

```bash
git diff --check
git diff -- .gitignore
```

Expected: `git diff --check` exits 0 and the diff contains only `.DS_Store`.

- [ ] **Step 4: Commit**

```bash
git add .gitignore
git commit -m "chore: exclude repository metadata noise"
```

---

### Task 2: Constitutional Repository Validator

**Files:**

- Create: `scripts/validate-constitutional-repository.mjs`

**Interfaces:**

- Consumes: baseline commit `0ecc355`, approved artefact manifest embedded in
  the script, and the current repository tree
- Produces: JSON on standard output and, with
  `--output reports/MR-ARCH-001-ENG-01/validation-evidence.json`, a stable
  machine-readable evidence file
- Exit 0: no blocking repository-integrity failure
- Exit 1: missing/duplicate artefact, wrong approved path, altered
  constitutional bytes, broken approved authority reference, or orphan

- [ ] **Step 1: Implement the approved artefact manifest**

The manifest must contain these exact IDs and paths:

```text
FCDP-001 knowledge-repository/00-enterprise/founder-design/FCDP-001-CONSTITUTIONAL-BLUEPRINT-OF-THE-REPUBLIC.md
KR-001   knowledge-repository/00-enterprise/constitution/KR-001-Knowledge-Repository-Constitution.md
CDM-001  knowledge-repository/00-enterprise/constitution/CDM-001-Constitutional-Derivation-Map.md
AUTH-001 knowledge-repository/00-enterprise/constitution/AUTH-001-Repository-Authority-Hierarchy.md
MR-GOV-001 knowledge-repository/00-enterprise/governance/MR-GOV-001-Constitutional-Governance-Foundation.md
BC-001   knowledge-repository/02-brand/constitution/BC-001-Brand-Constitution.md
BF-001   knowledge-repository/02-brand/frameworks/BF-001-Brand-Architecture-Framework.md
BE-001   knowledge-repository/02-brand/frameworks/BE-001-Brand-Expression-Framework.md
CX-001   knowledge-repository/03-experience/constitution/CX-001-Republic-Experience-Constitution.md
```

CX-001 must declare its baseline path as
`knowledge-repository/02-brand/constitution/CX-001-Republic-Experience-Constitution.md`.
All other baseline paths equal their current expected paths.

- [ ] **Step 2: Implement byte and placement checks**

Use `git show 0ecc355:<baselinePath>` to load baseline bytes. Hash baseline and
current bytes using `crypto.createHash("sha256")`. Record both hashes and fail
when they differ. Scan tracked and untracked Markdown paths to ensure each
approved filename occurs exactly once.

- [ ] **Step 3: Implement metadata inventory**

Extract bold label metadata, FCDP-001's Document Control table, and MR-GOV-001's
`Programme ID` alias. Inventory these requested labels without supplying
defaults:

```text
Document ID
Title
Version
Status
Authority Level
Parent Authority
Derived From
Repository Domain
Document Family
```

Record aliases separately so a value under `Programme ID` or `Authority` does
not falsely satisfy the canonical field.

- [ ] **Step 4: Implement traceability checks**

Extract constitutional IDs from `Parent Authority`, `Derived From`,
`Related Authority`, and `Authority`. Confirm references to the nine approved
IDs resolve. Treat FCDP-001 as the root. Require every other approved artefact
to expose at least one resolvable upstream authority relation. Record, without
auto-correction, the brief-versus-document chain variance and the CX-001
Constitution-versus-Framework terminology variance.

- [ ] **Step 5: Verify syntax**

Run:

```bash
node --check scripts/validate-constitutional-repository.mjs
```

Expected: exit 0 with no syntax error.

- [ ] **Step 6: Run the pre-correction red test**

Run:

```bash
node scripts/validate-constitutional-repository.mjs
```

Expected: exit 1 identifying CX-001's missing expected Experience path and its
unexpected Brand path. No constitutional content-hash failure is expected.

- [ ] **Step 7: Commit**

```bash
git add scripts/validate-constitutional-repository.mjs
git commit -m "feat: add constitutional repository validator"
```

---

### Task 3: Approved Experience Placement

**Files:**

- Move:
  `knowledge-repository/02-brand/constitution/CX-001-Republic-Experience-Constitution.md`
  to
  `knowledge-repository/03-experience/constitution/CX-001-Republic-Experience-Constitution.md`
- Create: `reports/MR-ARCH-001-ENG-01/validation-evidence.json`

**Interfaces:**

- Consumes: validator from Task 2
- Produces: governed Experience placement and passing machine evidence

- [ ] **Step 1: Create the governed structural folder**

Run:

```bash
mkdir -p knowledge-repository/03-experience/constitution
```

- [ ] **Step 2: Move CX-001 without renaming it**

Run:

```bash
git mv knowledge-repository/02-brand/constitution/CX-001-Republic-Experience-Constitution.md knowledge-repository/03-experience/constitution/CX-001-Republic-Experience-Constitution.md
```

- [ ] **Step 3: Run the post-correction green test**

Run:

```bash
node scripts/validate-constitutional-repository.mjs --output reports/MR-ARCH-001-ENG-01/validation-evidence.json
```

Expected: exit 0; nine approved artefacts present; nine content hash checks
pass; no duplicate approved filename, broken approved reference, or orphan;
metadata omissions and Founder conditions remain recorded as non-blocking
conditions.

- [ ] **Step 4: Verify Git recognizes a pure rename**

Run:

```bash
git diff --summary
git diff --check
```

Expected: CX-001 is shown as a 100% rename; `git diff --check` exits 0 for the
new engineering evidence.

- [ ] **Step 5: Commit**

```bash
git add knowledge-repository/03-experience/constitution/CX-001-Republic-Experience-Constitution.md reports/MR-ARCH-001-ENG-01/validation-evidence.json
git commit -m "fix: place experience constitution in governed domain"
```

---

### Task 4: Gate G1 Engineering Reports

**Files:**

- Create: `reports/MR-ARCH-001-ENG-01/Repository-Engineering-Report.md`
- Create: `reports/MR-ARCH-001-ENG-01/Constitutional-Validation-Report.md`
- Create: `reports/MR-ARCH-001-ENG-01/Repository-Health-Report.md`
- Create: `reports/MR-ARCH-001-ENG-01/Final-Summary.md`

**Interfaces:**

- Consumes: baseline evidence, Git history, validator output, approved brief,
  constitutional texts, and legacy working-draft observations
- Produces: the four requested sprint deliverables

- [ ] **Step 1: Write the Repository Engineering Report**

Record baseline establishment, `.gitignore`, the CX-001 pure move, validator,
evidence file, unchanged constitutional bytes, files/folders created, commits,
and decisions deliberately not implemented.

- [ ] **Step 2: Write the Constitutional Validation Report**

Assess authority hierarchy, constitutional lineage, derivation model,
repository placement, and constitutional integrity as PASS, PASS WITH
CONDITIONS, or FAIL. Cite evidence for every condition and list unresolved
Founder decisions.

- [ ] **Step 3: Write the Repository Health Report**

Separate observations and recommendations under structural, naming, metadata,
scalability, and governance headings. Explicitly distinguish the approved
platform from legacy working drafts and distinguish recommendations from
implemented work.

- [ ] **Step 4: Write the Final Summary**

Record repository status, branch, Git status, commits, push status, validation
outcome, unresolved Founder decisions, and Gate G1 readiness. Use exact Git
evidence available immediately before the reporting commit.

- [ ] **Step 5: Verify report completeness**

Run:

```bash
rg -n "Repository Engineering Report|Constitutional Validation Report|Repository Health Report|Final Summary|Gate G1|Founder" reports/MR-ARCH-001-ENG-01
git diff --check
```

Expected: all required report concepts are present and no authored report has a
whitespace error.

- [ ] **Step 6: Re-run constitutional validation**

Run:

```bash
node scripts/validate-constitutional-repository.mjs --output reports/MR-ARCH-001-ENG-01/validation-evidence.json
```

Expected: exit 0 with unchanged structural and content-integrity results.

- [ ] **Step 7: Commit**

```bash
git add reports/MR-ARCH-001-ENG-01
git commit -m "docs: publish Gate G1 repository assurance reports"
```

---

### Task 5: Final Verification and Publication

**Files:**

- Modify only if evidence changed:
  `reports/MR-ARCH-001-ENG-01/Final-Summary.md`

**Interfaces:**

- Consumes: committed sprint branch
- Produces: verified final state and remote publication status

- [ ] **Step 1: Verify constitutional bytes and repository validation**

Run:

```bash
node scripts/validate-constitutional-repository.mjs
```

Expected: exit 0; nine of nine byte checks pass.

- [ ] **Step 2: Verify history and worktree**

Run:

```bash
git log --oneline --decorate --reverse
git status --short --branch
git diff --check HEAD^ HEAD
```

Expected: incremental logical commits are present and the tracked worktree is
clean.

- [ ] **Step 3: Push the sprint branch**

Run:

```bash
git push -u origin codex/mr-arch-001-eng-01
```

Expected: the branch is published and upstream tracking is configured. If the
remote is empty or rejects the push, record the exact failure without claiming
publication.

- [ ] **Step 4: Reconcile the Final Summary if push state changed**

Update only the push-status and exact final commit references if necessary,
then re-run validation and commit the factual reconciliation as:

```bash
git add reports/MR-ARCH-001-ENG-01/Final-Summary.md
git commit -m "docs: reconcile final sprint publication status"
git push
```

- [ ] **Step 5: Apply the completion gate**

Use `superpowers:verification-before-completion`, inspect every command result,
and make no completion or Gate G1 claim unsupported by fresh evidence.
