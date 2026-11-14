# Contributing

Help make architecture knowledge clearer, more useful and easier to verify. Contributions should improve a reader's understanding or help them make a better engineering decision.

## Writing style

- Keep explanations concise and use plain, precise language.
- Explain technical terms when readers may not know them.
- Focus on the concept and the engineering problem it addresses.
- Use a diagram, analogy, code sample or practical example only when it genuinely clarifies the subject.
- Do not add sections merely to fill a template. Remove sections that do not add value.
- Explain meaningful trade-offs. Avoid presenting any pattern as a universal solution.
- Avoid promotional language and unsupported claims.

## Suggested article flow

Use the [reusable article template](https://github.com/Sandhiya0305/open-architecture-knowledge/blob/main/templates/architecture-article-template.md) as a starting point. These sections are guidance, not a mandatory checklist.

1. **At a Glance** — a short explanation of the concept.
2. **The Engineering Challenge** — the problem or constraint behind it.
3. **Architecture Blueprint** — the main components and how they interact.
4. **Where It Fits** — suitable scenarios and important constraints.
5. **Trade-offs & Pitfalls** — costs, limitations and common failure modes.
6. **Building It in Practice** — implementation guidance or an example when useful.
7. **Making the Choice** — relevant alternatives and decision criteria.
8. **Further Reading & References** — the sources used to prepare the article.

Not every article needs all eight sections. A short, accurate explanation is better than a long article padded with generic content.

## Source and accuracy requirements

- Cite sources that were actually consulted and that support the statements being made.
- Prefer original research, specifications, official documentation and first-hand engineering case studies.
- Link important factual or time-sensitive claims to the relevant source where practical.
- Group references by type, such as Official Documentation, Engineering Publications, Research, Case Studies, or Benchmarks.
- Include the title, author or organization, direct URL and publication/update date when available.
- Do not invent references, statistics, quotations, implementations or real-world adoption claims.
- If sources disagree or evidence is incomplete, state the uncertainty rather than guessing.
- Use original wording. Do not reproduce substantial third-party text.

## Performance and benchmark claims

Popularity, stars, downloads, mentions and adoption signals are not performance measurements.

A performance claim needs enough context to be interpreted: workload, hardware and environment, software versions, methodology, results and units, measurement date, source and limitations. If essential details are missing, label the claim unverified or leave it out. Do not rank architectures using unsupported performance claims.

## Review checklist

Before opening a pull request, check that:

- The article explains a real concept accurately.
- Each section contributes useful information.
- Examples and diagrams are correct and necessary.
- Trade-offs are represented fairly.
- References support the content and are grouped clearly.
- Uncertainty and evidence limitations are visible.
- No generated claim is treated as fact without human review.

## Preview locally

Install dependencies and run the documentation site:

```bash
python -m pip install -r requirements.txt
mkdocs serve
```

Build the production site:

```bash
mkdocs build --strict
```
