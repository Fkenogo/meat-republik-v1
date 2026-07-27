# Constitutional Repository Engineering & Validation Design

> Programme increment: MR-ARCH-001-ENG-01

## Purpose

Prepare the Meat Republik constitutional knowledge repository for Gate G1 —
Constitutional Platform Readiness through preservation-first repository
engineering, validation, traceability, and reporting.

This sprint engineers the repository that contains constitutional knowledge. It
does not author, reinterpret, or amend constitutional meaning.

## Scope

The approved constitutional platform in scope consists of:

- FCDP-001 — Constitutional Blueprint, including its existing Parts I–IX
- KR-001 — Knowledge Repository Constitution
- CDM-001 — Constitutional Derivation Map
- AUTH-001 — Repository Authority Hierarchy
- MR-GOV-001 — Constitutional Governance Foundation
- BC-001 — Brand Constitution
- BF-001 — Brand Architecture Framework
- BE-001 — Brand Expression Framework
- CX-001 — Republic Experience Constitution

The remaining supplied Markdown files are retained as legacy Founder working
material. They will be assessed for repository-health and authority-conflict
risk, but they will not be promoted into the approved platform or rewritten.

## Preservation Model

The untouched supplied corpus is preserved in the root commit
`0ecc355` (`chore: establish constitutional repository baseline`). Before that
commit, SHA-256 checksums were captured for every supplied non-`.DS_Store`
file and verified against the staged content.

All later engineering changes must be traceable to that baseline. Approved
constitutional filenames and file contents must remain unchanged. A structural
move may change a repository path, but not the filename or bytes.

## Repository Engineering

The only approved constitutional placement correction is:

```text
knowledge-repository/02-brand/constitution/
└── CX-001-Republic-Experience-Constitution.md

becomes

knowledge-repository/03-experience/constitution/
└── CX-001-Republic-Experience-Constitution.md
```

The move aligns CX-001 with the Experience domain named by KR-001 and CDM-001.
No other legacy document will be moved because the supplied working drafts
contain competing folder names, domain labels, identifiers, and authority
models requiring Founder determination.

A root `.gitignore` will exclude `.DS_Store` files so operating-system metadata
cannot enter the governed history.

## Validation Model

A deterministic validation script will:

- verify the nine approved constitutional artefact IDs are present exactly once;
- verify the approved file paths;
- compare constitutional file content hashes against the baseline commit so
  placement changes cannot conceal content changes;
- extract and inventory applicable metadata fields;
- evaluate declared parent and derivation references against the approved
  constitutional platform;
- identify missing metadata without inventing values;
- report duplicate approved identifiers, orphans, placement defects, and
  unresolved authority-chain differences;
- emit machine-readable evidence for review.

Validation will distinguish:

1. repository engineering checks that can pass objectively;
2. constitutional consistency checks that can pass, fail, or remain conditional;
3. Founder decisions that cannot be resolved by engineering.

## Known Conditions to Preserve and Report

- The programme brief states a linear enterprise chain of
  `FCDP-001 → KR-001 → CDM-001 → AUTH-001 → MR-GOV-001`, while current document
  metadata does not declare that exact sequence.
- CDM-001 calls CX-001 a Republic Experience Framework, while CX-001 calls
  itself a Republic Experience Constitution.
- Version, Repository Domain, and Document Family metadata are not consistently
  declared across the approved platform.
- MR-GOV-001 uses `Programme ID` and an aggregate `Authority` field rather than
  the metadata labels required by AUTH-001.
- Legacy working drafts define competing authority levels, identifiers, domain
  names, and folder mappings.

These are constitutional or Founder-controlled governance questions. The sprint
will not resolve them by editing the constitutional texts.

## Reports

The sprint will create non-constitutional engineering evidence under:

```text
reports/MR-ARCH-001-ENG-01/
```

The deliverables are:

- Repository Engineering Report
- Constitutional Validation Report
- Repository Health Report
- Final Summary
- machine-readable validation evidence

Implemented changes and recommendations will be separated. Each report will
reference the baseline and relevant commit identifiers.

## Verification

Before each logical commit:

- inspect the staged diff;
- run whitespace/error checks on newly authored engineering files;
- run the repository validator when available;
- confirm approved constitutional content is byte-identical to the baseline.

Final verification will confirm branch, commit history, worktree status, remote
push status, report completeness, validation results, unresolved Founder
decisions, and Gate G1 readiness.

## Acceptance

The Founder approved the preservation-first approach on 2026-07-27. This design
implements that approval without expanding constitutional scope.
