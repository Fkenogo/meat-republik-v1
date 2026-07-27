# Repository Engineering Report

**Sprint:** MR-ARCH-001-ENG-01

**Date:** 2026-07-27

**Engineering approach:** Founder-approved preservation-first

**Constitutional content changes:** None

## Executive Result

The supplied repository corpus has been placed under version control, protected
by a reproducible baseline, and subjected to deterministic structural,
integrity, metadata, and traceability checks.

The sole constitutional placement correction moved CX-001 from the Brand domain
to the Experience domain. Git records the change as a 100% rename, and the
file's SHA-256 hash is unchanged.

## Baseline Established

The repository began on an unborn `main` branch with 34 untracked Markdown
files and no Git history. Before any engineering edit:

- all 34 supplied non-`.DS_Store` files were SHA-256 checksummed;
- all 34 checksums were verified against the staged files;
- the untouched corpus was committed as `0ecc355`;
- the sprint branch `codex/mr-arch-001-eng-01` was created;
- pre-existing trailing whitespace was preserved rather than silently altering
  Founder material.

The baseline makes every later change traceable and reversible.

## Implemented Work

| Change | Implementation | Validation |
|---|---|---|
| Repository baseline | Added the untouched 34-file corpus to Git | 34/34 pre-commit SHA-256 checks passed |
| Metadata-noise control | Added root `.gitignore` for `.DS_Store` | Existing macOS metadata is ignored |
| Experience domain placement | Moved CX-001 to `knowledge-repository/03-experience/constitution/` | Git 100% rename; SHA-256 unchanged |
| Constitutional validator | Added `scripts/validate-constitutional-repository.mjs` | Red test detected old CX path; green test passed after move |
| Constitutional content protection | Baseline-hash checks cover the nine primary artefact files and FCDP-001 Parts I–IX | 18/18 protected constitutional files pass |
| Machine-readable evidence | Added `validation-evidence.json` | Deterministic output; zero blocking failures |
| Sprint controls | Added approved design and incremental execution plan | Both committed before structural implementation |
| Assurance reports | Added the four Gate G1 sprint deliverables | Report completeness and whitespace checks applied |

## Folders Created

- `knowledge-repository/03-experience/constitution/`
- `scripts/`
- `reports/MR-ARCH-001-ENG-01/`
- `docs/superpowers/specs/`
- `docs/superpowers/plans/`

The repository already contained empty future-domain folders. No placeholder
constitutional documents were created in them.

## File Moved

From:

```text
knowledge-repository/02-brand/constitution/
CX-001-Republic-Experience-Constitution.md
```

To:

```text
knowledge-repository/03-experience/constitution/
CX-001-Republic-Experience-Constitution.md
```

The filename and content were preserved. Both baseline and current SHA-256 are:

```text
fce526e1a0ffeceaa0a49d7318d13c9e2068a80fea097812bb9293b7a9421bbf
```

## Engineering Decisions

1. The nine named constitutional artefact IDs define the primary validation
   scope. FCDP-001 Parts I–IX are additionally protected as constituent
   constitutional files.
2. The remaining 16 Markdown files are preserved as legacy Founder working
   material. They are assessed for repository-health risk but are not promoted,
   moved, or normalized.
3. Missing metadata is inventoried, not supplied. Values such as Version,
   Repository Domain, Document Family, approval status, and effective date
   require constitutional authority.
4. Authority-chain disagreements are conditions for Founder determination, not
   engineering corrections.
5. Empty domain folders are not populated with invented documents or
   placeholder constitutional content.

## Commit Sequence

| Commit | Purpose |
|---|---|
| `0ecc355` | Establish untouched constitutional repository baseline |
| `02621be` | Record the approved preservation-first design |
| `e01ae35` | Record the incremental execution plan |
| `da6164a` | Exclude `.DS_Store` metadata noise |
| `3a6d2de` | Add the constitutional repository validator |
| `7266ea6` | Move CX-001 into the governed Experience domain |
| `b6f7688` | Extend baseline protection to all 18 constitutional files |

The report-publication and any push-status reconciliation commits are recorded
in the Final Summary.

## Work Deliberately Not Implemented

- No constitutional sentence, heading, or metadata field was rewritten.
- No approved constitutional filename was renamed.
- No legacy working document was reclassified or moved.
- No governance register was invented.
- No authority parent was changed.
- No version, status, approval, domain, or family value was inferred.

These decisions preserve Founder authority and constitutional meaning.
