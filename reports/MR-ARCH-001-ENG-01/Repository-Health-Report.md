# Repository Health Report

**Sprint:** MR-ARCH-001-ENG-01

**Date:** 2026-07-27

**Health assessment:** Structurally sound with material governance conditions

## Scope Distinction

The repository contains 34 Markdown files:

- 18 protected constitutional files representing nine approved artefact IDs,
  including FCDP-001 Parts I–IX;
- 16 legacy Founder working files.

This distinction is essential. Presence in the repository does not itself grant
constitutional authority under KR-001.

## Implemented Improvements

- Established an immutable 34-file Git baseline.
- Excluded `.DS_Store` operating-system metadata.
- Corrected CX-001 placement without changing content or filename.
- Added deterministic placement, hash, identifier, metadata, reference, and
  orphan checks.
- Added machine-readable validation evidence.
- Added sprint design, plan, and assurance reports outside the constitutional
  knowledge hierarchy.

## Structural Observations

1. Enterprise, Brand, and Experience constitutional locations are now coherent
   with the programme brief.
2. Seventeen future or support folders exist only as empty local directories.
   Git does not preserve empty directories, so a clone will not reproduce that
   aspect of the folder architecture.
3. Legacy Enterprise and Brand working files sit directly at domain roots while
   approved artefacts use `founder-design/`, `constitution/`, `governance/`, and
   `frameworks/` subfolders.
4. The repository has no governed catalogue or navigation index identifying
   approved, legacy, superseded, and future material.
5. MR-GOV-001 specifies four governance registers under Enterprise Governance,
   but none is present.

## Naming Observations

1. The nine approved primary artefact filenames are stable and unambiguous.
2. Naming styles vary across the wider corpus: uppercase and title case,
   hyphens and spaces, three hyphens and em dashes in headings, and optional
   version suffixes in filenames.
3. `MR-BF-000 — THE REPUBLIC MANIFESTO.md` contains spaces and an em dash,
   unlike the filename pattern stated in MR-DP-000.
4. `MR-BF-001` and `MR-BF-002` each appear as the leading document identifier
   in two legacy files, one blueprint and one substantive document. Their
   authority and lifecycle relationship are not machine-resolvable.
5. Competing domain labels exist:
   - current structure uses `02-brand` and `03-experience`;
   - MR-EA-003 prescribes `02-brand-foundation` and
     `03-citizen-experience`;
   - MR-DP-000 uses yet another domain/prefix catalogue.

No filename was normalized because approved-document renaming and legacy
architecture selection require Founder authorization.

## Metadata Observations

1. Thirty-five requested applicable metadata fields are absent across the nine
   approved artefacts.
2. Version is present only on FCDP-001 among the approved primary files.
3. Repository Domain and Document Family are absent from all nine approved
   primary artefacts.
4. `Derived From` is explicit only in BF-001 and BE-001.
5. MR-GOV-001 uses `Programme ID` rather than `Document ID` and an aggregate
   `Authority` field rather than discrete authority metadata.
6. Status vocabulary varies between `Founder Design Draft`,
   `Draft --- Founder Design`, `Founder Working Draft`, and
   `Founder Working Blueprint`.
7. FCDP-001 Parts I–IX depend on the master file for document control and do not
   independently declare their composite relationship.
8. AUTH-001 requires Approval Authority, Effective Date, and supersession
   metadata, but those fields are not consistently present.

## Traceability Observations

1. Every non-root approved artefact references at least one existing approved
   upstream authority.
2. No approved artefact is orphaned and no approved identifier declaration is
   duplicated.
3. References are textual identifiers rather than path-based links. This keeps
   filenames decoupled but prevents ordinary Markdown link validation.
4. The brief's enterprise chain and declared Parent Authority fields differ.
5. Domain families frequently reference FCDP-001 directly, bypassing the
   governance sequence stated in the programme brief.
6. The legacy corpus contains competing authority taxonomies: the A0–A7 model
   in MR-DP-002 and the A1–D2 model in AUTH-001.

## Scalability Observations

1. Numbered top-level domains can scale to the planned constitutional families
   without immediate renumbering.
2. The current validator provides a repeatable admission gate for new approved
   artefacts, but its manifest must be governed as the platform expands.
3. Empty future-domain folders are not reproducible in Git.
4. Without REG-001 or an equivalent approved register, future families may
   become discoverable only by filesystem search.
5. Without canonical metadata, automated versioning, supersession, approval,
   and bidirectional traceability will remain fragile.
6. Separating engineering evidence under `reports/` prevents assurance outputs
   from appearing to possess constitutional authority.

## Governance Observations

1. Constitutional content is intact and protected from accidental engineering
   edits.
2. The approved platform remains entirely in draft status.
3. MR-GOV-001's own completion criteria are unmet because its registers and
   operational governance evidence are absent.
4. Legacy working drafts may be mistaken for current authority because they
   share the same domain folders and, in some cases, identifiers.
5. The repository lacks an approved mechanism that distinguishes constitutional
   status from mere file presence.

## Founder Recommendations — Not Implemented

### Priority 1: Gate G1 conditions

1. Resolve and approve the canonical enterprise primary-parent chain.
2. Approve versions, statuses, authority levels, domains, families, approval
   authorities, and effective dates for the nine primary artefacts.
3. Resolve CX-001's Constitution-versus-Framework classification.
4. Authorize the governance registers named by MR-GOV-001 and record the
   platform approvals.

### Priority 2: Authority clarity

5. Reconcile the AUTH-001 A1–D2 hierarchy with the legacy MR-DP-002 A0–A7
   hierarchy.
6. Confirm whether BF-001 and BE-001 may derive within B1 or require distinct
   authority levels.
7. Decide whether legacy `MR-BF-001` and `MR-BF-002` blueprints are retained,
   archived, or registered as separate lifecycle records.

### Priority 3: Maintainability

8. Authorize a constitutional document register as the single machine-readable
   source for ID, title, class, version, status, parent, domain, family, and
   repository path.
9. Define whether empty future-domain folders should be represented by
   non-constitutional structural markers or created only when the first
   authorized artefact exists.
10. Adopt one governed filename and heading punctuation standard prospectively;
    preserve existing approved filenames until separately authorized.
11. Add governed cross-reference conventions that support both stable IDs and
    verifiable Markdown links.

These recommendations are intentionally separate from implemented engineering
work.
