# Open Architecture Knowledge

A practical, source-backed knowledge hub for software architecture and engineering decisions.

**Website:** https://sandhiya0305.github.io/open-architecture-knowledge/

This repository contains the curated Markdown articles and MkDocs configuration used to publish the site.

## Explore the content

- **Architecture patterns:** layered architecture, modular monoliths, microservices, Clean Architecture and event-driven architecture.
- **Engineering decisions:** architecture comparisons, quality attributes and decision-making guidance.
- **Editorial guidance:** concise explanations, honest trade-offs and traceable references.

The site is intentionally focused. Full-stack and system-design topics will be added when there is useful, reviewed content to publish; empty categories and placeholder articles are avoided.

## Content quality

Articles should be clear, concise and accurate. Practical examples and diagrams are used when they improve understanding, not by default. References must be real, relevant and grouped by source type. Unsupported claims, invented citations and unverified benchmark comparisons are not accepted.

See the [contribution guide](docs/about/contributing.md) and the reusable [article template](templates/architecture-article-template.md).

## Preview locally

```bash
python -m pip install -r requirements.txt
mkdocs serve
```

Build the production site:

```bash
mkdocs build --strict
```

## Companion project

The [open-architecture-intelligence](https://github.com/Sandhiya0305/open-architecture-intelligence) repository contains the research and discovery tooling. This repository contains the curated knowledge published for developers.
