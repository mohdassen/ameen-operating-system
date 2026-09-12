# Ameen Quality and Trust Governance

**Document owner:** Product / Engineering / Compliance  
**Status:** Working Draft  
**Audience:** Founder, Engineering, QA, Compliance Reviewers, Sales

---

## Purpose

Ameen is a compliance readiness product. Quality is not only whether the software works. Quality also means the customer can trust the assessment.

This document defines the trust system that protects Ameen from overclaiming, weak assessments, poor framework content, and unsafe releases.

---

## Trust Principle

Ameen must be able to answer:

> Why did the platform reach this conclusion?

If Ameen cannot explain a result, the result should not be presented as trusted.

---

## Trust Layers

### 1. Source Trust

Ameen must know where framework content came from.

Required:

- Official source recorded
- Framework version recorded
- Source digest recorded where possible
- Import process reproducible
- Publication anomalies preserved and documented

### 2. Content Trust

Ameen must ensure the regulatory content and advisory guidance are not mixed incorrectly.

Required:

- Official clauses stored separately from Ameen guidance
- Official and advisory badges shown in UI where relevant
- Arabic and English alignment reviewed
- Control guidance marked by source and confidence

### 3. AI Trust

Ameen must show AI as assistance, not authority.

Required:

- AI suggestions explain why they were made
- Human review is required before relying on conclusions
- Confidence indicators are visible where useful
- AI uncertainty is not hidden
- Local analyzer option is available for sensitive use cases

### 4. Evidence Trust

Ameen must distinguish between documents, evidence, implementation, and verification.

Required:

- Policy documents do not equal implemented controls
- Evidence must support actual operational practice
- Verification must be separated from upload
- Readiness dimensions must be clear

### 5. Security Trust

Ameen must protect customer information.

Required:

- Tenant isolation testing
- Access control testing
- Encryption strategy
- Audit events
- Secure data handling statement
- No unsafe shared AI configuration for regulated customers

### 6. Commercial Trust

Sales and marketing must not overpromise.

Required:

- No certification claims
- No regulator endorsement claims
- No guaranteed audit pass claims
- Clear pilot scope
- Clear statement of assured and not assured items

---

## Quality Gates

### Gate 1: Development Quality

- Code reviewed
- Unit tests passed
- Regression tests passed
- No known critical security issue
- No known tenant isolation issue

### Gate 2: Assessment Quality

- Framework mapping tested
- Arabic and English behavior tested
- False positives measured
- Grounding checked
- Output language reviewed

### Gate 3: Content Quality

- Framework source confirmed
- Clause import checked
- Guidance reviewed or marked as advisory draft
- Expected evidence reviewed
- Translation issues documented

### Gate 4: Customer Quality

- User flow tested
- Demo scenario works
- Customer-facing labels are accurate
- Reports are understandable
- Support can explain the result

### Gate 5: Commercial Quality

- Claims reviewed
- Legal disclaimer included
- Data handling statement available
- Pilot limitations stated
- Pricing scope clear

---

## Trust Failure Examples

Ameen must treat these as serious failures:

- Cross-tenant data access
- AI result with no explanation
- Wrong framework version shown
- Official and advisory text mixed together
- Customer-facing claim that implies certification
- Evidence marked verified without reviewer action
- Arabic document behavior materially weaker without disclosure
- Shared AI key configuration risk in regulated deployment

---

## Trust Metrics

Ameen should track:

- False positive rate
- Top-1 mapping accuracy
- Shortlist mapping accuracy
- Arabic/English parity
- Framework import validation pass rate
- Regression test pass rate
- Security defect count
- Customer-reported assessment issues
- Pilot conversion rate
- Support escalations by category

---

## Sales Trust Rule

Sales may sell what is proven, not what is planned.

Planned roadmap items can be discussed only as roadmap, not as current product capability.

---

## Final Rule

In Ameen, trust is a product feature.

If a release improves features but weakens trust, it is not a good release.
