# Architecture styles

An architecture style describes a family of systems that share structural characteristics and constraints. Styles are useful design tools, not mutually exclusive product categories. A real application may use layered organization inside a modular monolith, apply Clean Architecture dependency rules to selected modules, and use events for integration.

## The five reference styles

| Style | Main organizing idea | A useful starting question |
|---|---|---|
| [Layered](layered.md) | Separate responsibilities into horizontal layers | Are responsibilities and dependencies clear? |
| [Modular monolith](modular-monolith.md) | One deployment unit with explicit internal modules | Do we need strong boundaries without distributed deployment? |
| [Microservices](microservices.md) | Independently deployable services around business capabilities | Do independent ownership and deployment justify distributed-systems costs? |
| [Clean Architecture](clean-architecture.md) | Direct source dependencies toward business policy | Can business rules remain independent of external details? |
| [Event-driven](event-driven.md) | Components react to published events | Do workflows benefit from asynchronous, decoupled reactions? |

## How to use these references

Each page explains the structure, dependency model, benefits, costs, failure modes, and conditions that make the style a reasonable choice. Use the pages as decision support, not as a ranking.

!!! warning "No universal winner"
    A style does not guarantee performance, security, scalability, or maintainability. Those outcomes depend on the concrete design, implementation, workload, team, and operating environment.

Start with the [architecture decision process](../fundamentals/decision-process.md), then use the [comparison guide](../comparisons/choosing-an-architecture.md) to evaluate alternatives.
