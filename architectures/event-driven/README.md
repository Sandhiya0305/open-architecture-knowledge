# Event-Driven Architecture

## Definition
Event-Driven Architecture structures communication around events: records that something meaningful has happened. Producers publish events and consumers react, often asynchronously.

## Common components
- Event producers.
- Event channels or brokers (optional in simpler designs).
- Event consumers and handlers.
- Event schemas and versioning rules.
- Observability, retries, and dead-letter handling where needed.

## Strengths
- Temporal decoupling between producers and consumers.
- Supports asynchronous workflows and fan-out.
- Can integrate independently owned components.

## Trade-offs
- Eventual consistency and harder end-to-end reasoning.
- Duplicate delivery, ordering, retries, and idempotency concerns.
- Schema evolution and event observability require discipline.

## Use when
Workflows benefit from asynchronous processing, event propagation, or multiple independent consumers.

## Watch for
An event bus does not automatically make a system event-driven in a coherent way. Define event ownership, delivery guarantees, and failure handling.

## Evidence status
General architectural guidance; not a measured performance comparison.
