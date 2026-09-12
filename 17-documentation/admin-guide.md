# Ameen Admin Guide

Status: Draft v1.0  
Owner: Product / Customer Success  
Audience: Customer administrators, implementation partners, support teams

---

## Purpose

This guide explains how a customer administrator should operate Ameen during a pilot or early production deployment.

The goal is to keep administration simple, controlled, and aligned with trust requirements.

---

## Administrator Responsibilities

The customer administrator is responsible for:

- Creating and maintaining the organization workspace.
- Managing users and roles.
- Controlling which documents are uploaded.
- Confirming which framework is in scope.
- Reviewing AI provider or analyzer settings.
- Ensuring sensitive documents follow the approved data-handling model.
- Monitoring readiness progress.
- Coordinating human review of evidence.
- Exporting reports only when approved internally.

---

## Recommended Roles

Ameen should use clear roles:

### Organization Admin

Owns workspace configuration, user access, and high-level settings.

### Compliance Lead

Owns the assessment process, control review, evidence collection, and report readiness.

### Control Owner

Uploads evidence and confirms operational status for assigned controls.

### Evidence Reviewer

Reviews and accepts or rejects evidence.

### Executive Viewer

Views dashboards and executive summaries without editing evidence or mappings.

---

## Organization Setup

The administrator should configure:

- Organization name.
- Sector.
- Primary compliance owner.
- Pilot or production mode.
- Framework scope.
- Analyzer mode.
- Data-handling restrictions.
- Report-export permission.

For sensitive customers, default to the most conservative model until the customer approves otherwise.

---

## Framework Scope

The administrator must confirm which frameworks are in scope.

The platform should clearly separate:

- Available frameworks.
- Imported but not yet customer-published frameworks.
- Roadmap frameworks.

Ameen must not present an unsupported framework as active.

---

## AI and Analyzer Settings

The administrator should be able to understand:

- Whether the local analyzer is used.
- Whether an external AI provider is used.
- Which provider is active.
- Whether customer documents leave the customer-controlled environment.
- Whether customer-specific AI keys are used.

For government, banking, healthcare, and sensitive enterprise customers, the preferred pilot model is customer-controlled deployment with local analysis unless the customer explicitly approves another model.

---

## Document Upload Controls

Before uploading documents, administrators should confirm:

- The document is within pilot scope.
- The document classification is approved for the deployment model.
- The document owner agrees it can be used in the assessment.
- Personal or unnecessary confidential information has been removed when possible.

Ameen should encourage evidence discipline, not uncontrolled document dumping.

---

## Evidence Review Process

The recommended process is:

1. AI suggests document-control mapping.
2. Compliance lead reviews the suggestion.
3. Control owner adds evidence or explanation.
4. Evidence reviewer accepts or rejects.
5. Readiness dashboard updates.
6. Report is generated only after internal approval.

AI suggestion alone is not enough to mark a control as verified.

---

## Reporting Rules

Administrators should apply these rules:

- Draft reports stay internal.
- Reports must include disclaimers.
- Reports must show assessment date and scope.
- Reports must distinguish documented, implemented, evidenced, and verified.
- Reports must not claim regulatory certification unless formally obtained from the relevant authority.

---

## Security Expectations

Administrators should verify that the deployment model matches customer sensitivity.

For regulated or sensitive customers, the following should be addressed before broad production use:

- Encryption at rest.
- Access control.
- Audit logging.
- Read-event logging.
- Backup and retention.
- AI provider isolation.
- Data residency expectations.
- Incident escalation.

---

## Pilot Exit Criteria

A pilot should not be called successful only because the software works.

A successful pilot should prove:

- The customer understood the results.
- The AI suggestions were useful.
- False positives were controlled.
- Evidence collection improved.
- Reports were trusted by compliance and technology teams.
- The customer can see a path to paid renewal or expansion.

---

## Admin Principle

The administrator experience should make the customer feel in control.

Ameen must never make hidden compliance decisions on behalf of the organization.
