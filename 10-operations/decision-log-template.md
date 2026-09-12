# Ameen Decision Log Template

## Document Status

Owner: Operations / Product  
Applies to: All company, product, engineering, legal, and commercial decisions  
Version: 1.0  
Status: Active template

---

## Purpose

This template defines how Ameen records important decisions.

Ameen must not depend on memory, chat history, or undocumented assumptions. Every important decision should be captured in a simple, searchable, version-controlled format.

---

## When to Create a Decision Record

Create a decision record when the decision affects:

- Product direction.
- Customer journey.
- Security posture.
- Data handling.
- Compliance framework support.
- AI architecture.
- Pricing.
- Sales claims.
- Legal position.
- Pilot scope.
- Enterprise readiness.
- Market positioning.

Do not create a decision record for minor wording edits or simple operational tasks.

---

## File Naming Standard

Decision records should be stored under:

`11-decisions/`

Recommended naming:

`ADR-0001-short-decision-title.md`

Examples:

- `ADR-0001-saudi-first-positioning.md`
- `ADR-0002-local-analyzer-default-for-pilots.md`
- `ADR-0003-no-certification-claim.md`
- `ADR-0004-customer-journey-freeze.md`

---

## Decision Record Template

Copy the following structure for each decision.

```markdown
# ADR-0000: Decision Title

## Status

Proposed / Approved / Rejected / Superseded

## Date

YYYY-MM-DD

## Owner

Name or role

## Context

Explain the situation that required a decision.

What problem are we solving?
What options were considered?
What risk exists if we do not decide?

## Decision

State the decision clearly in one or two paragraphs.

## Rationale

Explain why this decision was made.

Include:

- Business reason.
- Product reason.
- Customer reason.
- Risk reason.

## Alternatives Considered

List the main alternatives and why they were not selected.

## Consequences

Explain the impact of the decision.

Include:

- Benefits.
- Trade-offs.
- Risks.
- Follow-up work required.

## What This Decision Does Not Mean

Clarify boundaries to avoid future misunderstanding.

## Review Trigger

When should this decision be reviewed again?

Examples:

- After first paid pilot.
- Before enterprise production launch.
- After legal review.
- After independent security test.

## Related Documents

Link related AOS documents or engineering issues.
```

---

## Decision Quality Standard

A good decision record should be:

- Clear.
- Short enough to read quickly.
- Strong enough to guide future work.
- Honest about trade-offs.
- Specific about what is decided.
- Specific about what is not decided.

---

## Decision Categories

Use these categories when helpful:

### Product Decision

Example:

- Freeze customer journey.
- Add framework support.
- Change dashboard structure.

### Engineering Decision

Example:

- Use local analyzer by default.
- Add encryption at rest.
- Change deployment model.

### Commercial Decision

Example:

- Offer paid pilots only.
- Do not publish public pricing yet.
- Target consultants as partners.

### Legal Decision

Example:

- Do not claim regulatory certification.
- Obtain legal opinion before broad selling.

### Security Decision

Example:

- One deployment per customer for early pilots.
- No shared regulated production environment before hardening.

---

## Current Critical Decisions to Record

The following decisions should be converted into formal ADRs:

1. Ameen is Saudi-first before global expansion.
2. Ameen is a readiness platform, not a certification authority.
3. Customer journey is frozen: create organization, upload documents, AI analyzes, AI maps, customer reviews, evidence upload, dashboard.
4. Early pilots should use customer-controlled infrastructure where possible.
5. Local analyzer should be default for sensitive pilots unless customer approves external AI.
6. Ameen must not claim NCA endorsement or approval.
7. Official regulatory text and Ameen advisory guidance must remain separated.
8. Engineering readiness and commercial readiness must be tracked separately.

---

## Final Standard

Ameen decisions must be recorded before they become tribal knowledge.

The decision log protects the company from repeating debates, forgetting why choices were made, and accidentally changing strategy without approval.