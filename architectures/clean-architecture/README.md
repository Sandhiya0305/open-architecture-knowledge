# Clean Architecture

## Definition
Clean Architecture is a family of approaches that place business policy near the center and keep it independent from external details such as databases, web frameworks, and delivery mechanisms.

## Dependency rule
Source-code dependencies should point toward the inner policy layers. Outer mechanisms implement interfaces or ports defined by inner layers.

## Common elements
- Entities or domain model.
- Use cases or application services.
- Interface adapters.
- External frameworks and infrastructure.

## Strengths
- Domain logic can be tested without starting external infrastructure.
- Infrastructure choices can be changed behind stable boundaries.
- Dependencies and business rules can be made explicit.

## Trade-offs
- Additional interfaces and mapping can create unnecessary ceremony.
- Poorly chosen boundaries can make simple changes cumbersome.
- The pattern does not guarantee good domain modelling or maintainability.

## Use when
Business rules are significant and should remain independent of delivery and persistence technologies.

## Watch for
Clean Architecture is not a mandatory folder structure. Evaluate actual dependency direction and boundary enforcement.

## Evidence status
General architectural guidance; not a measured performance comparison.
