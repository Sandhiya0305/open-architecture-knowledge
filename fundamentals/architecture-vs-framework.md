# Architecture vs Framework vs Library

## Architecture
Architecture describes the high-level structure of a system: its components, responsibilities, boundaries, dependencies, communication paths, and quality goals.

## Architecture style or pattern
A reusable set of structural constraints and trade-offs. Examples include layered architecture, microservices, and event-driven architecture.

## Framework
A framework provides an application structure, conventions, and lifecycle that developers extend. Examples include Spring Boot, NestJS, Django, and Laravel. A framework can support multiple architectural approaches; it does not dictate the complete system architecture.

## Library
A library provides reusable capabilities that application code calls when needed. It generally does not own the application's overall control flow.

## Important distinction
Do not classify a framework or library as an architecture style. Record the architecture decision separately from the implementation technology.

## Review questions
- What are the system boundaries and deployment units?
- Which component owns each business capability?
- What dependencies are allowed?
- How do components communicate?
- Which quality attributes matter, and under what workload?
- What operational and organizational costs follow?
