# Data Handling Statement

**Ameen Operating System**  
**Document Owner:** Commercial / Security / Legal  
**Status:** Draft for review  
**Version:** 0.1

---

## Purpose

This document defines how Ameen should explain data handling to customers, especially during pilots and early enterprise deployments.

The purpose is to build trust, reduce risk, and make clear what data is processed, where it is processed, and who controls it.

---

## Trust Position

Ameen should be sold as a privacy-conscious compliance readiness platform.

For sensitive customers such as government entities, universities, banks, healthcare organizations, and critical infrastructure operators, Ameen should prefer a customer-controlled deployment model and local analysis by default.

---

## Core Message

Suggested customer-facing statement:

> Ameen analyzes customer-provided compliance documents and evidence to support readiness assessment, control mapping, gap analysis, and reporting. Data handling depends on the selected deployment model. For sensitive environments, Ameen can operate in a customer-controlled deployment with local analysis by default, reducing the need to send documents to external AI providers.

---

## Data Categories

Ameen may process the following categories of data:

1. Organization profile data.
2. User account data.
3. Uploaded policies and procedures.
4. Uploaded evidence files.
5. Control mapping decisions.
6. Assessment answers.
7. AI-generated observations.
8. Human review decisions.
9. Audit events.
10. System logs.

---

## Data Ownership

Customer owns:

- Uploaded documents.
- Uploaded evidence.
- Organization-specific assessments.
- Customer-specific reports.
- Customer-specific user and organization data.

Ameen owns:

- Platform software.
- Product design.
- Assessment workflow.
- AI and deterministic analysis methods.
- Generic templates.
- Generic product improvements.

---

## Deployment Models

### 1. Customer-Controlled Deployment

Ameen is deployed in an environment controlled by the customer or customer's approved hosting provider.

Recommended for:

- Government.
- Regulated enterprises.
- Universities.
- Banks and financial institutions.
- Healthcare.
- Critical infrastructure.

Default position:

- Local analyzer enabled.
- External AI disabled unless approved.
- Customer controls infrastructure access.
- Customer controls network access.
- Customer controls data retention where contractually agreed.

### 2. Dedicated Ameen-Hosted Deployment

Ameen hosts a dedicated deployment for one customer.

Recommended for:

- Enterprise pilots.
- Design partners.
- Customers without internal hosting capacity.

Required clarifications:

- Hosting region.
- Backup handling.
- Support access.
- Encryption status.
- Data deletion process.
- AI provider configuration.

### 3. Shared SaaS Deployment

Multiple customers use a shared Ameen-hosted environment.

Current commercial stance:

Shared regulated production deployment should not be the default for sensitive customers until enterprise-grade controls are fully closed, including encryption at rest, tenant-specific AI key isolation, read-event audit trail, MFA/SSO, and independent penetration testing.

---

## AI Processing Modes

### Local / Deterministic Mode

Documents are analyzed locally using deterministic matching and local processing logic.

This is the preferred default for pilots involving sensitive documents.

### External AI Mode

Documents or document excerpts may be sent to external AI providers only when:

- Customer explicitly approves.
- Provider is documented.
- Processing location and jurisdiction are disclosed where known.
- Contractual data terms are accepted.
- Sensitive data restrictions are respected.

### Customer-Owned AI Keys

Preferred future enterprise model:

- Customer provides and controls its own AI provider keys.
- Customer decides which provider is allowed.
- Customer accepts provider-specific data processing terms.

---

## Human Approval

Ameen AI output is advisory until reviewed.

Ameen should maintain a clear distinction between:

- AI-suggested mapping.
- Human-approved mapping.
- Uploaded evidence.
- Verified evidence.
- Final readiness reporting.

---

## Data Retention

Pilot contracts should define:

- How long documents are retained.
- How logs are retained.
- Whether backups include uploaded evidence.
- When deletion occurs.
- Whether export is available.
- Who confirms deletion.

Recommended pilot position:

> Pilot data should be deleted or returned within an agreed period after pilot completion unless converted into a paid production agreement.

---

## Support Access

Support access should be limited, logged, and approved.

For sensitive customers:

- No direct support access by default.
- Customer-supervised troubleshooting preferred.
- Temporary access only with approval.
- Access activity should be logged.

---

## Security Roadmap Disclosures

Ameen should be honest about security status during early pilots.

Customer-facing materials should avoid overstating security readiness. If a control is not yet complete, it should be described as planned, in progress, or not included in the pilot scope.

---

## Do Not Say

Ameen should not say:

- Your data never leaves your environment unless technically guaranteed.
- We are fully compliant with all regulations unless formally verified.
- External AI providers never store data unless confirmed by contract.
- Ameen replaces your legal, audit, or compliance teams.

---

## Safe Statement

Use this language:

> Ameen supports privacy-conscious deployment models. For sensitive customers, we recommend a dedicated customer-controlled deployment with local analysis by default and explicit approval before enabling any external AI provider.

---

## Required Review

This document must be reviewed by security, legal, and product leadership before being included in proposals or customer agreements.
