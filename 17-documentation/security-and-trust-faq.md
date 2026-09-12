# Ameen Security and Trust FAQ

Status: Draft v1.0  
Owner: Product / Security / Sales  
Audience: CISOs, procurement, legal, compliance teams, partners

---

## Purpose

This FAQ prepares Ameen for serious security and procurement conversations.

It should be used carefully. All answers must remain aligned with the actual product state, deployment model, contracts, and security reviews.

---

## What is Ameen's security position?

Ameen's security position is trust-first and conservative.

Ameen should be introduced first through controlled pilots, especially for sensitive customers. For government, banking, healthcare, and regulated enterprises, the preferred approach is customer-controlled deployment with local analysis by default unless the customer approves another model.

---

## Does Ameen store customer documents?

Ameen may store uploaded documents and evidence depending on the deployment model.

For each customer, the commercial agreement must specify:

- Where documents are stored.
- Who can access them.
- How long they are retained.
- Whether they are encrypted.
- How they are deleted.
- Whether they are processed by external AI providers.

---

## Can Ameen be deployed inside the customer environment?

Yes, the recommended model for sensitive pilots is customer-controlled infrastructure.

This reduces concern around document exposure, regulatory sensitivity, and external AI processing.

---

## Does Ameen send data to external AI providers?

Ameen should not make a general claim without confirming the active deployment model.

Possible modes include:

- Local deterministic analysis.
- Customer-approved external AI provider.
- Customer-owned provider key.
- Dedicated deployment per customer.

Sales, website, and contracts must disclose the actual model used.

---

## Does Ameen use customer data to train AI models?

This must be answered based on the specific AI provider and deployment architecture.

The safest customer-facing rule is:

Ameen does not claim training behavior unless verified contractually and technically for the selected provider and deployment model.

For sensitive customers, prefer local analysis or customer-approved AI configuration.

---

## Is Ameen multi-tenant?

Ameen's commercial deployment model should be decided carefully.

For early pilots, the recommended model is one customer per deployment. Shared regulated production deployment should not be used until security, tenancy, encryption, logging, and independent testing gates are satisfied.

---

## Does Ameen support encryption at rest?

This must reflect the current product state at the time of sale.

If encryption at rest is not fully implemented and verified, it must be listed as a readiness gap and handled through deployment controls or pilot scope limitations.

---

## Does Ameen support audit logging?

Ameen should maintain audit trails for important actions. For regulated production readiness, audit logging should include both write events and important read events.

If read-event auditing is not complete in a given release, this must be disclosed internally and handled as an engineering readiness item.

---

## Does Ameen support SSO or MFA?

This must be answered based on the current release.

For enterprise production readiness, SSO and MFA are expected by many customers. If unavailable, they should be shown as roadmap or deployment-gate items rather than hidden.

---

## How does Ameen protect against false AI conclusions?

Ameen protects trust through:

- Explainable suggestions.
- Human approval.
- Separation of readiness dimensions.
- Confidence indicators.
- Evidence review.
- Conservative wording.
- Quality gates before release.

AI should assist analysis, not make final compliance claims.

---

## Can Ameen be used for official audits?

Ameen can support audit preparation and evidence organization.

Ameen should not be represented as replacing official audit procedures, regulatory certification, or independent auditor judgment.

---

## Has Ameen been independently penetration tested?

This answer must reflect the current state.

If an independent penetration test has not been completed, Ameen should not claim it has. For sensitive customers, independent testing should be part of the commercial readiness plan.

---

## Does Ameen reproduce official regulatory content?

Ameen may reference official Saudi frameworks, but commercial use of official text should be reviewed by legal counsel.

Safe wording:

Ameen assesses readiness against selected Saudi compliance frameworks as published by the relevant authority.

Unsafe wording:

Ameen is endorsed, certified, approved, or authorized by a regulator unless formally true and documented.

---

## What should sales say when asked if Ameen is safe?

Sales should say:

Ameen is built with a trust-first model. For early sensitive customers, we recommend a controlled pilot on customer-controlled infrastructure with local analysis by default, clear data-handling terms, and human review of all outputs.

Sales should not say:

Ameen is fully certified, regulator-approved, audit-proof, or safe for all regulated production environments.

---

## Trust Principle

Security credibility comes from honesty.

It is better to disclose a limitation and control it than to overpromise and lose trust.
