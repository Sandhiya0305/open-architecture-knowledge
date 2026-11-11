# Modular Monolith

## Definition
A Modular Monolith is one deployable application composed of distinct, cohesive modules with explicit interfaces and controlled dependencies.

## Core characteristics
- One primary deployment unit (which may include supporting infrastructure).
- Modules own related business capabilities and internal data rules.
- Inter-module communication uses deliberate interfaces rather than unrestricted access to internals.
- Modules can be tested independently while retaining a simpler deployment model than distributed services.

## Strengths
- Lower operational and distributed-systems overhead than many microservice deployments.
- Supports strong domain boundaries without requiring network calls between every module.
- Can be a practical evolutionary step before extracting a service, when justified.

## Trade-offs
- Module boundaries can erode without enforcement.
- Independent scaling and deployment are limited by the shared application unit.
- A poorly structured monolith can become a tightly coupled codebase.

## Use when
A team wants modularity and clear business boundaries but does not yet need independent service deployment.

## Watch for
Do not call a codebase modular merely because it has many folders. Look for enforced dependency rules, ownership, and tests.

## Evidence status
General architectural guidance; not a measured performance comparison.
