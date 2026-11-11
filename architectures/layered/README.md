# Layered Architecture

## Definition
Layered Architecture organizes a system into horizontal layers, each responsible for a distinct kind of work. A common arrangement separates presentation, application or service coordination, domain/business logic, and data access.

## Typical dependency direction
A conventional implementation often has outer layers call inward-facing services, while the domain layer avoids depending on presentation or persistence details. Actual dependency rules vary by implementation and should be documented rather than assumed.

## Strengths
- Familiar separation of responsibilities.
- Straightforward onboarding and debugging for many business applications.
- Clear places to locate common concerns when boundaries are maintained.

## Trade-offs
- Changes can require coordinated edits across several layers.
- Layers can become pass-through abstractions with little value.
- Poor dependency control can produce tightly coupled code despite a layered folder structure.

## Use when
The application has understandable business workflows and the team benefits from conventional separation of UI, application logic, domain rules, and infrastructure.

## Watch for
Do not confuse folders named controller/service/repository with enforced architectural boundaries. Validate dependencies and ownership.

## Ecosystem mapping
Implementation details for Node.js, Python, Java, and PHP belong in the technology guides and should link back here.

## Evidence status
General architectural guidance; not a measured performance comparison.
