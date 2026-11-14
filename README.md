# Open Architecture Knowledge

A documentation site covering software architecture, engineering decisions, and frameworks and tools used to build applications.

**Website:** https://sandhiya0305.github.io/open-architecture-knowledge/

## Contents

- **Architecture patterns** — layered architecture, modular monoliths, microservices, Clean Architecture and event-driven architecture.
- **Frameworks and libraries** — Java, Python, Node.js/TypeScript and PHP ecosystems, plus cross-stack tools.
- **Engineering decisions** — architecture comparisons, quality attributes and decision-making.
- **Foundations** — architecture terminology and design principles.

Technology pages link to project documentation. The [catalogue review log](docs/technologies/review-log.md) records the review date, scope and changes; the catalogue is checked manually, not refreshed automatically.

The production site currently uses MkDocs 1.6.1 and Material for MkDocs 9.8.1. Material for MkDocs reaches end of life on 5 May 2027; CI also builds the site with Zensical 0.1.1 as a migration compatibility check. Zensical remains on its 0.x release line, so it is not the production deployment until the rendered site and customizations have been reviewed.

## Local preview

Requires Python 3.11+ and [uv](https://docs.astral.sh/uv/).

```bash
uv sync --locked
uv run mkdocs serve
```

Build the site:

```bash
uv run mkdocs build --strict
```

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) before proposing content changes. Keep articles concise, check sources and links, and run a strict documentation build.

## Related project

[Open Architecture Intelligence](https://github.com/Sandhiya0305/open-architecture-intelligence) contains the collection and reporting tools used to support knowledge review.

## License

Original written content in `docs/` is licensed under [CC BY 4.0](docs/licensing.md). Source code, scripts and site configuration are licensed under the [MIT License](LICENSE). Third-party material remains subject to its own terms.
