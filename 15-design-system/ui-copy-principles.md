# Ameen UI Copy Principles

## Purpose

This document defines how Ameen speaks inside the product interface.

The user interface must reduce fear, explain decisions, and avoid exaggerated compliance claims.

Ameen should sound like a careful compliance advisor, not like a chatbot, marketing page, or generic SaaS tool.

## Core Voice

Ameen's product voice should be:

- Clear
- Calm
- Evidence-based
- Direct
- Professional
- Respectful
- Conservative with claims

## The Golden Rule

Every important system statement should answer:

> What did Ameen find, why does it matter, and what should the user do next?

## Preferred Language

Use:

- Based on uploaded documents
- Evidence suggests
- Ameen found
- Human review required
- Readiness indicator
- Gap identified
- Evidence recommended
- Requires approval
- Not yet verified

Avoid:

- You are compliant
- Certified
- Guaranteed
- Fully approved
- AI confirms compliance
- Passed audit
- Regulator accepted
- Legally compliant

## Status Labels

Recommended status labels:

### For Controls

- Not Started
- Documented
- Evidence Needed
- Under Review
- Verified
- Gap Identified
- Not Applicable - Pending Approval

### For AI Suggestions

- Suggested by AI
- Needs Human Review
- Accepted
- Rejected
- Needs More Evidence

### For Documents

- Uploaded
- Classified
- Mapped to Controls
- Needs Review
- Archived

### For Evidence

- Evidence Uploaded
- Evidence Linked
- Evidence Insufficient
- Evidence Verified
- Evidence Rejected

## Explanation Pattern

Use this structure when explaining AI output:

1. Finding
2. Source
3. Reason
4. Confidence
5. Recommended next action

Example:

> Ameen found password management content in this policy and mapped it to ECC access control requirements. The mapping is based on sections that mention password complexity, authentication, and user account controls. Please review and approve before it affects readiness scoring.

## Empty States

Empty states should guide the user, not blame them.

Bad:

> No data found.

Better:

> No documents have been uploaded yet. Upload a policy, procedure, or evidence file to begin the readiness assessment.

Bad:

> No controls mapped.

Better:

> Ameen has not mapped this document to any controls yet. Try uploading a more specific policy or review the document classification.

## Error Messages

Error messages should be human-readable.

Bad:

> 500 Internal Server Error

Better:

> Ameen could not complete this action. Please try again. If the issue continues, contact support and include the time of the request.

## Warning Messages

Warnings should explain risk without panic.

Example:

> This evidence may not fully satisfy the control requirement. Ameen found relevant content, but the document does not clearly show implementation, ownership, or approval. Please review before marking this item as verified.

## AI Confidence Language

Ameen should avoid false precision.

Use:

- High confidence
- Medium confidence
- Low confidence

Do not use exact percentages unless they are tied to a measurable algorithmic score and explained.

## Human Approval Language

Ameen must always show that AI does not make final compliance decisions.

Recommended text:

> AI suggestions do not change verified readiness until approved by an authorized reviewer.

## Official vs Advisory Language

Ameen must separate official framework requirements from Ameen guidance.

Recommended labels:

- Official Requirement
- Ameen Advisory Guidance
- Customer Evidence
- Human Review Decision

## Readiness Language

Use readiness carefully.

Good:

> Your organization appears 62% ready based on reviewed documents and approved evidence.

Bad:

> Your organization is 62% compliant.

## Dashboard Language

Dashboard cards should be short and actionable.

Examples:

- Controls with documentation
- Controls needing evidence
- AI suggestions pending review
- Verified readiness
- High-priority gaps
- Documents not yet reviewed

## Call to Action Language

Use verbs that guide work:

- Upload document
- Review suggestion
- Link evidence
- Request verification
- Export report
- View control
- Explain mapping

## Bilingual Considerations

Ameen must eventually support Arabic and English UI.

Arabic UI should avoid literal translation of English SaaS phrases.

The tone should sound like a Saudi compliance advisor speaking clearly to a professional team.

## Forbidden Product Claims

Never use UI copy that suggests:

- Ameen certifies compliance.
- Ameen replaces auditors.
- Ameen is endorsed by regulators unless formally true.
- Ameen guarantees audit success.
- AI decisions are final.

## Final Principle

Ameen UI copy should make users feel:

> I understand where we stand, why Ameen reached this conclusion, and what I need to do next.