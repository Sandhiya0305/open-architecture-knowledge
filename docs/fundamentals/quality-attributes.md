# Quality attributes

Quality attributes describe how well a system performs important properties beyond its direct business functions. They are sometimes called non-functional requirements, although the term *quality attribute* is often more useful: these properties must be designed, measured, and tested.

A system does not become "high quality" by maximizing every attribute. Many attributes compete. Architecture makes those trade-offs explicit.

## Common quality attributes

| Attribute | Practical question | Typical architectural concerns |
|---|---|---|
| Performance efficiency | Does the system meet response-time and throughput goals? | Workload, algorithms, I/O, caching, contention |
| Scalability | Can capacity grow with demand? | Bottlenecks, partitioning, statelessness, data access |
| Availability | Can users access required functions when components fail? | Redundancy, failure domains, health checks, recovery |
| Reliability | Does the system behave correctly over time? | Fault handling, retries, idempotency, data integrity |
| Security | Are data and operations protected against threats? | Trust boundaries, identity, authorization, secrets, audit |
| Maintainability | Can the system be changed safely and efficiently? | Cohesion, coupling, modularity, tests, ownership |
| Testability | Can important behavior be verified in isolation? | Dependency boundaries, deterministic tests, test seams |
| Deployability | Can changes be released safely and predictably? | Deployment units, compatibility, automation, rollback |
| Observability | Can operators understand internal behavior from outputs? | Logs, metrics, traces, correlation identifiers |
| Portability | Can the system move between target environments? | Platform dependencies, interfaces, packaging, data formats |

## Turn vague goals into scenarios

"Fast", "secure", and "scalable" are not testable requirements. Write a scenario with a stimulus, context, expected response, and measurable result.

For example:

> During the weekday peak, when 500 requests per second arrive for the product search endpoint, 95% of requests should complete within 300 ms under the documented test environment.

This statement is useful because it identifies:

- The workload and operating context.
- The measured operation.
- The percentile and target.
- The environment that must be recorded.

The numbers above are an illustrative requirement, not a benchmark result or a claim about any architecture.

## Quality attributes create trade-offs

- Adding synchronous service calls may improve separation of ownership but increase latency and failure propagation.
- Caching may reduce repeated work but introduces invalidation and staleness concerns.
- Replication can improve read availability but makes consistency and conflict handling more complex.
- Strong module boundaries can improve maintainability but require deliberate interface design.
- Independent deployment can increase release autonomy while increasing operational coordination.

There is no universally optimal point. The correct balance depends on business priorities and constraints.

## A lightweight quality-attribute workshop

1. Identify the system's most important user and business journeys.
2. Ask stakeholders what failure or delay would be unacceptable.
3. Convert each concern into a measurable scenario.
4. Rank scenarios by business impact and risk.
5. Identify architectural decisions that influence each scenario.
6. Validate assumptions with prototypes, tests, and production measurements.

## Further Reading & References

### Official Standards & Models

- [ISO/IEC 25010:2023 - Product quality model](https://www.iso.org/standard/78176.html) - Published: 2023-11

### Official Documentation & Architecture Guides

- [Azure Architecture Center - Microsoft](https://learn.microsoft.com/en-us/azure/architecture/)
