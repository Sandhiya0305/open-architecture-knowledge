# Technology ecosystem guides

Architecture is a set of structural decisions; a programming language or framework is an implementation choice. The same architecture style can be implemented in different ecosystems, and one framework can support several architectural styles.

OAI initially tracks four ecosystems:

| Ecosystem | Common application frameworks (examples) | What to evaluate |
|---|---|---|
| Node.js | Express, NestJS, Fastify | Module boundaries, async I/O, runtime operations, package governance |
| Python | Django, FastAPI, Flask | Package structure, application services, async/sync boundaries, runtime operations |
| Java | Spring Boot, Jakarta EE, Quarkus | Package/module boundaries, dependency injection, transaction management, JVM operations |
| PHP | Laravel, Symfony, Slim | Namespace boundaries, service container usage, persistence boundaries, deployment/runtime model |

These are examples, not recommendations or endorsements. Framework selection should follow project requirements, team familiarity, ecosystem support, security posture, and operational constraints.

## How to read an ecosystem guide

A complete guide should explain:

- Language and runtime characteristics relevant to architecture.
- How packages, modules, and dependency boundaries are represented.
- Framework conventions and what they do—or do not—enforce.
- Testing and dependency-management approaches.
- Data access, messaging, and integration options.
- Deployment, observability, and security considerations.
- Official documentation and support lifecycle.

## Current scope

The four ecosystem entries are a research scope, not a claim that OAI has completed comparative implementation studies. Detailed ecosystem-specific guides will be published as they are researched and reviewed.

## Useful official starting points

- [Node.js documentation](https://nodejs.org/docs/latest/api/)
- [Python documentation](https://docs.python.org/3/)
- [Java documentation](https://dev.java/learn/)
- [PHP documentation](https://www.php.net/docs.php)
- [Spring Boot reference](https://docs.spring.io/spring-boot/index.html)
- [Django documentation](https://docs.djangoproject.com/)
- [NestJS documentation](https://docs.nestjs.com/)
- [Laravel documentation](https://laravel.com/docs)
