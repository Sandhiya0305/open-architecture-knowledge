# Architecture patterns

Architecture patterns describe recurring ways to organize software, define boundaries and manage dependencies. They are design tools, not ready-made solutions. Real systems often combine more than one.

## Explore the patterns

| Pattern | Core idea |
|---|---|
| [Layered architecture](layered.md) | Separate an application into responsibility-focused layers. |
| [Modular monolith](modular-monolith.md) | Keep one deployment unit while enforcing clear internal module boundaries. |
| [Microservices](microservices.md) | Organize a system into independently deployable services. |
| [Clean Architecture](clean-architecture.md) | Keep business policy independent from external details. |
| [Event-driven architecture](event-driven.md) | Coordinate components through events and asynchronous reactions. |

## A useful starting point

If you are choosing a structure for a new or existing application, begin with the [architecture comparison guide](../comparisons/choosing-an-architecture.md).

There is no universal winner. Choose the simplest design that meets the system's actual requirements and that the team can operate effectively.

## Further Reading

- [arc42 architecture documentation](https://docs.arc42.org/) - Practical guidance for describing building blocks, runtime views, quality requirements and architecture decisions.
- [Software Architecture Patterns - Mark Richards](https://www.oreilly.com/library/view/software-architecture-patterns/9781491971437/ch01.html) - A practitioner-oriented overview of common architecture patterns.

## References

### Standards and research

- [ISO/IEC/IEEE 42010:2022 - Architecture description](https://www.iso.org/standard/74393.html) - Defines requirements for expressing an architecture description; it does not prescribe a single architecture style.
- [The Architecture Tradeoff Analysis Method - Software Engineering Institute](https://www.sei.cmu.edu/library/the-architecture-tradeoff-analysis-method/) - A structured method for examining competing quality attributes and architectural risks.
