# Contributing

OAI is a curated reference, not an unreviewed feed of generated summaries. Contributions should improve accuracy, traceability, and practical decision-making.

## Before proposing a change

1. Identify the architecture concept and distinguish it from frameworks, libraries, and deployment products.
2. Prefer primary sources: specifications, official documentation, source repositories, and reproducible research.
3. Record source URLs and publication or retrieval dates for time-sensitive claims.
4. Separate established principles from adoption signals and empirical measurements.
5. Do not infer runtime performance from stars, downloads, mentions, or popularity.
6. Explain why the change improves the reader's ability to understand or make a decision.

## Architecture page checklist

- Clear definition and scope.
- Core characteristics and common variants.
- Conceptual structure or diagram where useful.
- Benefits and trade-offs.
- Failure modes and warning signs.
- Appropriate and inappropriate use cases.
- Relationships to other styles.
- Source links for factual or time-sensitive statements.
- Explicit evidence limitations.

## Evidence requirements

For a performance or benchmark claim, include workload, hardware and environment, language/runtime/framework versions, methodology, results and units, measurement date, source, and limitations. If essential methodology is missing, label the claim unverified and do not use it to rank architectures.

## Writing standards

- Use original wording; do not copy substantial third-party text.
- Prefer precise, testable statements over promotional language.
- Explain context and scope.
- Avoid absolute words such as "always", "never", or "fastest" unless the statement is strictly justified.
- Use tables for concise comparisons, not as a substitute for explanation.
- Keep diagrams conceptual and label assumptions.

## Review and publishing

- Keep pull requests focused.
- Preserve historical observations; date-stamp time-sensitive reports.
- Generated content must be reviewed by a human.
- Do not automatically merge generated changes.
- Run the documentation build before requesting review.

## Local preview

Install the documentation dependencies and start the local server:

```bash
python -m pip install -r requirements.txt
mkdocs serve
```

Build the strict production version:

```bash
mkdocs build --strict
```
