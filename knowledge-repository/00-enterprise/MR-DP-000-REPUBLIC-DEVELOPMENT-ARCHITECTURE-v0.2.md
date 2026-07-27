# MR-DP-000 — REPUBLIC DEVELOPMENT ARCHITECTURE

**Subtitle:** Constitutional Knowledge Architecture of the Meat Republik Repository

**Version:** 0.2  
**Status:** Founder Working Draft

---

# Executive Summary

The Republic Development Architecture defines the permanent knowledge architecture for Meat Republik. It specifies the repository structure, documentation taxonomy, document lifecycle, naming standards and traceability model upon which every future document will be built.

This architecture is intended to remain largely stable. Individual documents and programmes may evolve, but they should do so within this architectural framework.

---

# 1. Architectural Layers

```
Republic Manifesto
        │
        ▼
Development Architecture
        │
        ▼
Master Development Programme
        │
        ▼
Knowledge Domains
        │
        ▼
Document Families
        │
        ▼
Individual Documents
        │
        ▼
Implementation
```

---

# 2. Repository Domains

| Code | Domain | Primary Purpose |
|------|---------|-----------------|
| MR-DP | Development Programme | Programme governance and repository management |
| MR-BF | Brand Foundation | Constitutional identity of the Republic |
| MR-CX | Citizen Experience | Citizen journeys and experiences |
| MR-PD | Products & Menu | Product philosophy and menu architecture |
| MR-BM | Business Model | Value creation and commercial model |
| MR-CM | Commercial | Pricing, partnerships and growth |
| MR-OPS | Operations | Operational excellence |
| MR-MKT | Marketing & Communications | Brand expression and campaigns |
| MR-DIG | Digital Republic | Digital experiences |
| MR-TEC | Technology | Engineering and technical architecture |
| MR-DAT | Data & Insights | Measurement and analytics |
| MR-PC | People & Culture | Leadership and culture |
| MR-GOV | Governance | Decisions, policies and governance |
| MR-REF | Reference Library | Templates, standards and reusable references |

---

# 3. Document Classes

1. Constitutional
2. Governance
3. Foundation
4. Operational
5. Implementation
6. Reference

Every document belongs to exactly one domain and one primary class.

---

# 4. Document Lifecycle

```
Proposed
   ↓
Working Draft
   ↓
Founder Draft
   ↓
Founder Approved
   ↓
Repository Validated
   ↓
Controlled
   ↓
Superseded
   ↓
Archived
```

---

# 5. Naming Standard

Filename format:

`<DOCUMENT-ID>-<DOCUMENT-TITLE>.md`

Examples:

- MR-BF-000-THE-REPUBLIC-MANIFESTO.md
- MR-DP-000-REPUBLIC-DEVELOPMENT-ARCHITECTURE.md
- MR-DP-001-MASTER-DEVELOPMENT-PROGRAMME.md

Markdown (.md) is the authoritative source format.

---

# 6. Traceability Model

Every document should record:

- Parent document(s)
- Governing document(s)
- Child document(s)
- Related document(s)
- Successor document(s) where applicable

No document should exist in isolation.

---

# 7. Repository Principles

- Architecture before documentation.
- Stable identifiers.
- Single authoritative source.
- Markdown-first.
- Traceability by design.
- Founder-led governance.
- Repository-managed consistency.

---

# 8. Future Expansion

The architecture anticipates additional domains without renumbering existing documents. New domains should be added only through Founder approval and reflected in this document before use.

---
## Future Framework Alignment

The repository architecture defined within this document is the project-specific baseline for Meat Republik.

It has been intentionally designed to support the current needs of the Republic while remaining compatible with future Founder Engineering Framework (FEF) standards.

Should the Founder Repository Architecture Standard (FRAS) be adopted through the FEF governance process, this architecture will be reviewed and aligned where appropriate.

Until such time, this document remains the authoritative repository architecture for Meat Republik.
# Founder Notes

This document defines the structure of the Republic's knowledge, not the content within each domain. It should change infrequently and only when the architecture of the repository itself evolves.
