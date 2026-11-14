# Open Architecture Intelligence — Knowledge

The curated, evidence-aware reference for software architecture, implementation approaches, and engineering decisions.

**Read the documentation website:** [Open Architecture Intelligence](https://sandhiya0305.github.io/open-architecture-knowledge/)

This repository is the source of truth for the public knowledge portal. It contains the reviewed Markdown pages and the MkDocs configuration used to build the site.

## What you'll find

- Architecture references: layered, modular monolith, microservices, Clean Architecture, and event-driven.
- Fundamentals: architecture vocabulary, quality attributes, and decision-making.
- Technology ecosystem guidance for Node.js, Python, Java, and PHP.
- Comparisons and evidence policy.
- Contribution and editorial standards.

## Content quality

OAI distinguishes architectural guidance, adoption signals, and measured performance. Popularity is not performance evidence. Benchmark claims require workload, environment, versions, methodology, results, date, and source. Generated changes require human review before merging.

## Local preview

```bash
python -m pip install -r requirements.txt
mkdocs serve
```

Build the production site:

```bash
mkdocs build --strict
```

## Companion research engine

The [open-architecture-intelligence](https://github.com/Sandhiya0305/open-architecture-intelligence) repository discovers candidate information and prepares research for review. This repository contains the curated knowledge presented to readers.
