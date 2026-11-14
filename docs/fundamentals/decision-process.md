# A practical architecture decision process

Architecture decisions should begin with the problem and constraints—not with a fashionable pattern or a preferred framework.

## 1. Understand the system

Describe the product, users, critical workflows, domain concepts, external integrations, data sensitivity, and expected change. Identify what is known and what remains an assumption.

## 2. Capture constraints

Typical constraints include:

- Team size, experience, and ownership boundaries.
- Delivery deadline and available budget.
- Existing systems, contracts, and migration requirements.
- Hosting environment and operational capabilities.
- Regulatory, security, privacy, and data-residency requirements.
- Expected workload and growth uncertainty.

A design that is technically elegant but impossible for the team to operate is not a good fit.

## 3. Prioritize quality attributes

Select a small set of high-impact attributes and define measurable scenarios. Avoid treating every attribute as equally important.

## 4. Identify candidate structures

Consider the simplest structures that could meet the requirements. Candidates may combine styles; for example, a modular monolith can use layered boundaries internally and event-driven integration for selected workflows.

## 5. Compare consequences

For each candidate, record:

- What becomes easier?
- What becomes harder?
- Which new failure modes appear?
- What operational capabilities are required?
- How reversible is the decision?
- What evidence supports the assumptions?

## 6. Validate risky assumptions

Use a prototype, load test, dependency test, threat model, or operational exercise where appropriate. Record the workload, environment, versions, method, and results. A prototype is evidence about its tested scope—not proof that every production system will behave the same way.

## 7. Record the decision

An Architecture Decision Record (ADR) should include:

- **Context:** the problem and constraints.
- **Decision:** what was selected.
- **Alternatives:** what else was considered.
- **Consequences:** benefits, costs, and risks.
- **Evidence:** sources, experiments, and assumptions.
- **Status:** proposed, accepted, superseded, or rejected.

## Decision checklist

- [ ] The problem and system boundaries are clear.
- [ ] Constraints and assumptions are documented.
- [ ] Important quality attributes have measurable scenarios.
- [ ] At least one simpler alternative was considered.
- [ ] Operational costs and failure modes are understood.
- [ ] Risky assumptions have a validation plan.
- [ ] The decision and its consequences are recorded.

## Further reading

- [Martin Fowler: Architecture Decision Records](https://martinfowler.com/articles/architecture-decision-records.html)
