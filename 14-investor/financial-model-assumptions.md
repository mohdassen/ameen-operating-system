# Ameen Financial Model Assumptions

## Purpose

This document defines the assumptions that should be used when building the first financial model for Ameen.

This is not a forecast. It is a planning structure. All numbers must be validated through real pilots, sales conversations, customer implementation data, and operating costs.

## Model Philosophy

The financial model should be conservative.

Ameen should not assume fast SaaS scale before it has:

- Paid pilots.
- Product usage evidence.
- Customer willingness to renew.
- Legal review.
- Security readiness.
- Repeatable onboarding process.
- Clear AI usage cost controls.

## Revenue Assumption Categories

### 1. Pilot Revenue

Pilot revenue should be modeled separately from recurring subscription revenue.

Variables:

- Number of pilots per quarter.
- Average pilot price.
- Pilot duration.
- Pilot gross margin.
- Conversion rate from pilot to annual contract.

Questions to validate:

- Will customers pay for a pilot?
- What price feels acceptable for a controlled readiness pilot?
- Does the pilot produce enough value to convert?
- How much support time does each pilot require?

### 2. Annual Subscription Revenue

Annual subscription revenue should be modeled after pilot conversion.

Variables:

- Number of customers.
- Average annual contract value.
- Renewal rate.
- Expansion rate.
- Number of frameworks per customer.
- Deployment model.

Potential price drivers:

- Organization size.
- Number of entities.
- Number of frameworks.
- Data sensitivity.
- Dedicated deployment needs.
- Support level.
- Integration requirements.

### 3. Professional Services Revenue

Professional services should support adoption but should not dominate the business long term.

Variables:

- Onboarding fee.
- Assessment support fee.
- Training fee.
- Custom deployment fee.
- Partner enablement fee.

Long-term objective:

- Reduce service effort through productization.
- Keep service quality high for strategic accounts.
- Avoid becoming a manual consulting business.

### 4. Partner Revenue

Partner revenue should be modeled only after direct pilots prove value.

Variables:

- Number of active partners.
- Number of customer accounts per partner.
- Revenue share percentage.
- Partner enablement cost.
- Partner support load.

## Cost Assumption Categories

### 1. Hosting and Infrastructure

Cost variables:

- Application hosting.
- Database hosting.
- File storage.
- Backup storage.
- Logging and monitoring.
- Dedicated deployment environments.

### 2. AI Usage

AI cost can become dangerous if uncontrolled.

Cost variables:

- Documents analyzed per customer.
- Average document size.
- Number of AI calls per assessment.
- Provider used.
- External model versus local analyzer.
- Re-analysis frequency.

Control rules:

- No unlimited external AI usage without pricing guardrails.
- Default sensitive deployments to local analyzer unless customer approves external provider.
- Track per-customer AI cost.
- Keep AI cost visible in pricing decisions.

### 3. People Cost

People cost variables:

- Engineering.
- Product.
- Compliance experts.
- Arabic reviewers.
- Customer success.
- Sales.
- Legal support.
- Security testing.

### 4. Expert Review Cost

Ameen needs human expert validation.

Cost variables:

- Saudi GRC practitioner review.
- Native Arabic review.
- Auditor output review.
- Framework validation.
- Legal opinion.

### 5. Sales and Marketing Cost

Cost variables:

- Founder-led sales time.
- Customer demos.
- Events.
- Website and content.
- Sales collateral.
- Partner development.

## Key SaaS Metrics to Track Later

Once Ameen has paying customers, track:

- ARR.
- MRR if monthly contracts exist.
- ACV.
- Gross margin.
- CAC.
- Payback period.
- Churn.
- Net revenue retention.
- Expansion revenue.
- Pilot-to-paid conversion.
- Sales cycle length.
- Support hours per customer.

## Early Metrics to Track Immediately

Before true SaaS metrics exist, track:

- Number of qualified customer conversations.
- Number of demos delivered.
- Number of pilots proposed.
- Number of pilots won.
- Number of documents analyzed per pilot.
- Time from upload to readiness dashboard.
- Manual time saved compared with consultant estimate.
- Customer feedback score.
- Customer willingness to continue.

## Conservative Modeling Guidance

Build three cases:

### Base Case

Slow but realistic adoption with founder-led sales and limited pilots.

### Upside Case

Strong pilot conversion and partner interest.

### Downside Case

Long sales cycles, legal/security delays, and high onboarding effort.

The company should survive the downside case.

## Do Not Fake Precision

The model must not pretend certainty.

Any number without customer evidence should be labeled as an assumption.

Every assumption should have a validation method.

## Example Assumption Table

| Assumption | Type | Confidence | Validation Method |
|---|---:|---:|---|
| Pilot customers will pay for controlled readiness assessment | Revenue | Medium | Test with 5 design partner proposals |
| External AI usage can be controlled by document limits | Cost | Medium | Measure per pilot |
| Dedicated deployments command premium pricing | Revenue | Medium | Discuss with government/regulatory customers |
| Consultants will use Ameen as a force multiplier | Channel | Low/Medium | Interview consulting partners |

## Financial Model Rule

Ameen should not scale sales faster than trust, security, and delivery quality.

## Core Financial Thesis

> Ameen begins with paid pilots, converts validated customers into annual subscriptions, uses services to accelerate adoption, and gradually improves margins by productizing repeated readiness work.
