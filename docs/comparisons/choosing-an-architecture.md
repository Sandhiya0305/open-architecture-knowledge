# Choosing an architecture

## At a Glance

Architecture selection is a context-dependent decision. The goal is not to choose the most sophisticated style; it is to meet the system's important requirements with acceptable complexity and operational cost.

## Quick Comparison

| Concern | Layered application | Modular monolith | Microservices | Event-driven approach |
|---|---|---|---|---|
| Primary boundary | Responsibility layers | Business modules | Independently deployed services | Event producers, channels, consumers |
| Deployment | Usually one unit | One primary unit | Multiple service units | Independent of deployment style |
| Communication | In-process calls | In-process module contracts | Network APIs and/or messages | Event publication and consumption |
| Data ownership | Often centralized | Module-owned within one application | Service-owned | Depends on producer/consumer design |
| Operational burden | Usually lower | Usually lower to moderate | Usually higher | Varies; async operations add complexity |
| Main risk | Layer leakage and coupling | Boundary erosion | Distributed-systems complexity | Delivery, ordering, consistency, replay |

This table is a qualitative orientation, not a benchmark or universal ranking. Real systems vary significantly.

## Where Each Approach Fits

### Start with a layered application when

The domain is relatively straightforward, a single deployment unit is appropriate, and conventional responsibility separation is enough to keep change manageable.

### Prefer a modular monolith when

The domain needs clear business boundaries, but independent deployment and scaling are not yet necessary. This is often a strong default for a new product with an evolving domain.

### Consider microservices when

There are demonstrated needs for independent team ownership, release cadence, scaling, or isolation—and the organization can support distributed operations.

### Use event-driven communication when

Multiple components need to react to facts asynchronously, producers and consumers need decoupling, or event streams are central to the workflow. It can complement any of the deployment styles above.

### Apply Clean Architecture principles when

Business policy should remain independent from frameworks and infrastructure. This can be applied within a layered application or individual modules of a monolith or service.

## Decision Checklist

1. What business capabilities and invariants must the system protect?
2. Which changes need to be independent of one another?
3. Do teams genuinely need independent ownership and deployment?
4. Which operations require immediate consistency?
5. What failure modes can users and the business tolerate?
6. Can the team operate the required infrastructure and observability?
7. What is the simplest structure that meets the measured requirements?
8. Which assumptions should be tested before committing?

## Evolving the Architecture

A system can begin as a layered application, establish modular boundaries as the domain grows, and extract a service only when a concrete need justifies a distributed boundary. Event-driven integration can be introduced for workflows that benefit from asynchronous processing.

This is not a mandatory maturity ladder. Some systems should remain simple for their entire lifetime. Evolution should respond to evidence and changing constraints, not fashion.

## Performance Claims Need Evidence

Architecture labels do not determine performance. A meaningful comparison needs the same or clearly described workload, hardware, environment, software versions, implementation details, measurement method, results, and date. Without that information, OAI will not rank styles by speed or scalability.

## Further Reading & References

### Official Documentation & Architecture Guides

- [Architecture styles - Microsoft](https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/) - Updated: 2025-10-14
- [Choose how to segment your workload - AWS Well-Architected](https://docs.aws.amazon.com/wellarchitected/2024-06-27/framework/rel_service_architecture_monolith_soa_microservice.html)
