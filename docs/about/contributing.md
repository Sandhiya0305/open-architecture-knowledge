# Contributing

Help make architecture knowledge clearer, more useful and easier to verify. Contributions should improve a reader's understanding or help them make a better engineering decision.

## Writing style

- Keep explanations concise and use plain, precise language.
- Explain technical terms when readers may not know them.
- Focus on the concept and the engineering problem it addresses.
- Use diagrams, examples or code only when they clarify the subject.
- Explain meaningful trade-offs without presenting a pattern as a universal solution.
- Avoid promotional language and unsupported claims.

## Sources and accuracy

- Link sources that were actually consulted and support the content.
- Prefer official documentation, specifications, original research and first-hand engineering case studies.
- Do not invent references, statistics, quotations or adoption claims.
- If sources disagree or evidence is incomplete, state the uncertainty.
- Use original wording and avoid reproducing substantial third-party text.

## Technology catalogue updates

Review the framework, library and tool pages once a month.

1. Check each project's official documentation and release notes.
2. Update descriptions or links when the project changes in a meaningful way.
3. Remove projects that are archived, unsupported or no longer relevant.
4. Update the page's **Last reviewed** date.

Keep this manual and lightweight. Do not add version numbers unless a page specifically needs a version comparison.

## Performance claims

Popularity, stars, downloads and mentions are not performance measurements. A performance claim needs workload, hardware and environment, software versions, methodology, results, measurement date, source and limitations. Leave unsupported comparisons out.

## Before submitting

- Check that the explanation is accurate and useful.
- Remove repeated or unnecessary sections.
- Verify links and examples.
- Represent trade-offs fairly.
- Run a strict documentation build:

```bash
mkdocs build --strict
```
