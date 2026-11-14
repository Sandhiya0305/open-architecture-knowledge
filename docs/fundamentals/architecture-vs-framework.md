# Architecture vs framework vs library

These terms are related, but they describe different levels of a software system. Confusing them leads to weak architecture discussions—for example, claiming that using Spring Boot automatically means an application follows Clean Architecture.

## Architecture

Software architecture describes the important structures and decisions of a system: its components, responsibilities, boundaries, dependencies, communication paths, deployment units, and quality goals.

Architecture is visible in decisions such as:

- Whether the application is one deployable unit or several independently deployed services.
- Which component owns a business capability and its data.
- Which dependencies are permitted between modules.
- Whether components communicate synchronously, asynchronously, or both.
- How the system handles failure, security, scaling, and change.

## Architecture style or pattern

An architecture style is a recurring structural approach with characteristic constraints and trade-offs. Examples in this guide include:

- **Layered architecture:** organizes responsibilities into horizontal layers.
- **Modular monolith:** keeps one deployable application while enforcing internal module boundaries.
- **Microservices:** decomposes a system into independently deployable services.
- **Clean Architecture:** directs source-code dependencies toward inner business policy.
- **Event-driven architecture:** coordinates components through events and event channels.

A style is a design vocabulary, not a complete implementation specification. Real systems often combine styles.

## Framework

A framework provides reusable structure, conventions, and a lifecycle that application code extends or participates in. Examples include Spring Boot, Django, NestJS, and Laravel.

A framework influences implementation choices, but it does not decide the complete architecture. A Spring Boot application can be a layered monolith, a modular monolith, or one service in a microservices system. The same is true of Django, NestJS, and Laravel applications.

## Library

A library provides reusable functionality that application code calls. Examples include an HTTP client, date/time library, validation package, or logging API.

A library usually has a narrower responsibility than a framework and does not define the overall application lifecycle.

## A practical way to distinguish them

| Question | Primarily concerns |
|---|---|
| What are the system boundaries and deployment units? | Architecture |
| Which dependencies are allowed between business modules? | Architecture |
| How is the HTTP request lifecycle organized? | Framework |
| How do I parse a date or serialize JSON? | Library |
| Which component owns customer data? | Architecture |
| Which ORM maps objects to database records? | Framework or library |

## Why the distinction matters

Choosing a framework is not a substitute for designing boundaries. A project can use a modern framework and still have tightly coupled modules, unclear data ownership, and fragile deployment practices.

Likewise, adopting an architecture label does not prove that the implementation follows it. Inspect dependency direction, module interfaces, data ownership, tests, and deployment boundaries.

## Review questions

- What are the system's business capabilities?
- Which components own those capabilities and their data?
- What dependencies are allowed, and how are they enforced?
- How do components communicate?
- Which quality attributes matter most?
- Which constraints come from the team, budget, runtime, or operating environment?

## Further reading

- [Microsoft Azure Architecture Center: Architecture styles](https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/)
- [Martin Fowler: Inversion of Control](https://martinfowler.com/articles/injection.html)
