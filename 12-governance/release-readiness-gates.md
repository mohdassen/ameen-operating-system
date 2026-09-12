# Ameen Release Readiness Gates

**Document owner:** Product / Engineering  
**Status:** Working Draft  
**Audience:** Founder, Engineering, QA, Sales, Customer Success

---

## Purpose

This document defines what must be true before Ameen releases a new version, starts a pilot, or sells to a regulated customer.

Ameen should never release based only on "the feature works."

A release must be safe, explainable, commercially honest, and supportable.

---

## Release Types

### Internal Build

Used by engineering and product only.

Requires:

- Core tests pass
- Known defects documented
- No customer-facing claims

### Demo Build

Used for product demos and sales conversations.

Requires:

- Demo flow works end-to-end
- Demo data is safe and fictional
- No misleading claims in UI
- Known limitations are understood by presenter

### Pilot Build

Used with controlled customer pilots.

Requires:

- Security gate passed
- Data handling statement available
- Pilot agreement in place
- Local analyzer or approved AI provider model defined
- Support model active
- Known limitations documented

### Production Build

Used for paid operational customers.

Requires:

- Full QA and regression complete
- Security issues closed or formally accepted
- Legal and commercial claims reviewed
- Customer support process ready
- Deployment model documented
- Backup and recovery approach documented

### Regulated Shared Production Build

Used for multi-customer regulated production.

This is the highest gate and should not be used until Ameen is significantly hardened.

Requires:

- Encryption at rest
- Strong tenant isolation evidence
- Read-event audit trail
- Independent security review
- Per-tenant AI isolation or approved architecture
- Strong admin governance
- Clear incident response process
- Formal legal review

---

## Readiness Gate Checklist

### Product Gate

- Customer journey remains simple.
- UI labels are accurate.
- Reports are understandable.
- Human approval is clear.
- AI does not overstate confidence.
- Framework version is visible where needed.

### Engineering Gate

- Automated tests pass.
- Regression tests pass.
- Security tests pass.
- Tenant isolation tests pass.
- No critical open defect.
- Known debt is documented.

### AI Gate

- Local analyzer behavior tested.
- AI mappings are explainable.
- Arabic and English behavior measured.
- False positives are checked.
- Provider configuration is safe for the deployment model.

### Framework Gate

- Official source recorded.
- Framework import validated.
- Clause count verified.
- Arabic/English content reviewed where applicable.
- Advisory guidance separated from official text.

### Legal Gate

- Legal disclaimer included.
- Regulatory content usage position documented.
- No certification/endorsement claim.
- Customer agreement matches deployment model.
- Data handling statement approved.

### Commercial Gate

- Sales deck matches actual product capability.
- Proposal scope is clear.
- Pricing assumptions documented.
- Pilot success criteria defined.
- Support obligations are realistic.

### Customer Success Gate

- Onboarding plan ready.
- Support path defined.
- Training material available.
- Customer responsibilities clear.
- Escalation path defined.

---

## Stop-Ship Conditions

A release must stop if any of the following is true:

- Known cross-tenant data exposure risk
- Known unauthorized data access risk
- Critical authentication defect
- Assessment output materially misrepresents readiness
- Framework content corruption
- Legal claim that implies certification or regulator endorsement
- AI configuration allows one customer to affect another customer's assessment
- Customer data handling is unclear

---

## Pilot Readiness Minimum

Ameen may enter a controlled pilot when:

1. Customer deployment model is defined.
2. Customer data handling is documented.
3. Local analyzer or approved AI path is configured.
4. Framework scope is limited and clear.
5. Pilot success criteria are agreed.
6. Legal disclaimer is included.
7. Support owner is assigned.
8. Known limitations are disclosed.

---

## Release Decision Format

Every release decision should record:

- Version
- Date
- Release type
- Customer exposure
- Passed gates
- Failed gates
- Accepted risks
- Decision owner
- Go / No-Go decision
- Next action

---

## Final Rule

Ameen should not ship because a feature is finished.

Ameen ships when the product is safe to trust for the intended use.
