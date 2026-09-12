# Claude Code Local Website Handoff

## Purpose
Claude Code is running Ameen development locally on the user's PC. This handoff defines exactly what Claude Code must produce so ChatGPT can create the first professional Ameen website prototype without guessing and without exposing sensitive data.

## Golden Rule
Use demo data only. Do not expose API keys, production credentials, real customer data, real compliance documents, or private environment values.

## Required Output Folder
Create this folder locally and commit it to the appropriate GitHub repository when safe:

```text
website-handoff/
  README.md
  product-status.md
  feature-reality-check.md
  trust-and-compliance-wording.md
  demo-story.md
  screenshots/
    01-login-or-entry.png
    02-create-organization.png
    03-organization-dashboard.png
    04-upload-documents.png
    05-document-analysis-result.png
    06-ai-control-mapping.png
    07-human-review.png
    08-evidence-upload.png
    09-readiness-dashboard.png
    10-control-detail.png
    11-framework-ecc.png
    12-ai-trust-provider.png
    13-audit-trail.png
```

If a screen is not available, do not fake it. Add the reason in `product-status.md`.

## Screenshots Required
Capture clean desktop screenshots, preferably 1440x900 or 1920x1080, with no developer console visible.

Required screenshots:

1. Login or app entry screen
2. Create Organization
3. Organization dashboard
4. Upload Documents
5. Document analysis result
6. AI control mapping
7. Human review / approve-reject mapping
8. Evidence upload
9. Readiness dashboard
10. Control detail page
11. Framework page showing ECC
12. AI trust/provider page, if available
13. Audit trail/activity log, if available

## Screenshot Metadata
In `README.md`, create a table with:

| File | Screen Title | Caption | Business Value Proven |
|---|---|---|---|

Example:

| `09-readiness-dashboard.png` | Readiness Dashboard | Shows documented, implemented, evidenced, and verified readiness. | Proves Ameen does not treat a policy as full compliance. |

## product-status.md
Include:

- GitHub repository
- branch
- latest commit
- current product version
- local run command
- local URL
- demo username/password, if available
- database reset/demo seed command
- QA command
- QA result
- known blockers
- known commercial risks

## feature-reality-check.md
Separate features into:

1. Working now
2. Partially working
3. Not ready
4. Must not be promised on the website

Use plain CEO language. Do not overstate readiness.

## trust-and-compliance-wording.md
Provide safe website wording for:

- NCA ECC 2:2024
- AI-assisted readiness
- human review
- evidence-based assessment
- customer-controlled deployment
- local analyzer
- legal/compliance boundaries

Also list unsafe claims to avoid:

- NCA approved
- NCA certified
- guaranteed compliance
- replaces auditor
- legal advice
- automatic certification
- regulator endorsed

## demo-story.md
Create one fictional demo customer story:

- customer name
- industry
- situation
- uploaded documents
- mapped controls
- readiness result
- business outcome

Use Saudi-relevant but fictional data only.

## Website Builder Notes
The website must communicate:

Ameen is a Saudi AI Compliance Readiness Platform that turns existing documents into explainable control readiness.

Do not position Ameen as:

- an auditor
- a regulator
- a legal advisor
- a certification body
- a SIEM
- an EDR
- a vulnerability scanner
- a generic ticketing tool

## Final Claude Code Response Required
When done, return this summary:

```text
WEBSITE HANDOFF STATUS
Repository:
Branch:
Commit:
Local URL:
Screenshots created:
Screenshots missing:
QA result:
Known blockers:
Ready for ChatGPT website builder: Yes/No
```
