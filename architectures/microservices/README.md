# Microservices

## Definition
Microservices organize a system as a set of small, independently deployable services aligned to business capabilities. Services communicate over network boundaries and commonly own their data.

## Core characteristics
- Independent deployment and lifecycle.
- Explicit service contracts and network communication.
- Data ownership and consistency decisions per service.
- Operational automation, observability, and resilience practices.

## Strengths
- Independent release and scaling where boundaries are well chosen.
- Team autonomy around service ownership.
- Fault and change isolation when resilience is designed correctly.

## Trade-offs
- Network latency and partial failures.
- Distributed data consistency and transaction complexity.
- Higher demands on deployment automation, observability, security, and operations.
- Service boundaries and ownership can be difficult to get right.

## Use when
Independent deployment, scaling, or team ownership needs justify the distributed-systems cost.

## Watch for
Microservices are not automatically faster, cheaper, or more scalable. Those outcomes depend on workload, architecture, and operational maturity.

## Evidence status
General architectural guidance; not a measured performance comparison.
