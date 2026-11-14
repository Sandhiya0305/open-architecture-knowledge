# Evidence and research policy

OAI separates architectural explanation from empirical claims. A well-reasoned design principle is not the same thing as a measured performance result, and a popular repository is not proof that an architecture is technically superior.

## Evidence categories

| Category | Meaning | What it can support |
|---|---|---|
| Architectural guidance | Principles, patterns, and trade-offs explained by credible technical sources | Design reasoning within the stated scope |
| Adoption or interest signal | Mentions, repository activity, stars, downloads, discussions, or job listings | Evidence that a topic is being discussed or used in a sample |
| Empirical measurement | A documented experiment, benchmark, or production measurement | A result for the tested workload and environment |
| Corroboration lead | Similar claims found in independent sources | A prompt for review, not proof by itself |

## Evidence status vocabulary

- **Unverified:** discovered or recorded, but not sufficiently checked.
- **Corroborated:** supported by independent credible evidence for the same scoped claim. Corroboration still does not establish universal truth.
- **Methodology reviewed:** the empirical method has been examined and is sufficiently described for the stated scope. This is not a guarantee of generalizability.
- **Rejected:** misleading, unsupported, contradicted, or outside the knowledge base's scope.

A status must not be upgraded merely because a claim appears repeatedly in copied text or derivative discussions.

## Requirements for performance claims

A performance claim must identify:

1. Workload and tested operations.
2. Execution environment and relevant configuration.
3. Hardware, where relevant.
4. Language, runtime, framework, and dependency versions.
5. Methodology, including measurement approach and repetitions where relevant.
6. Results, units, and statistical context where available.
7. Measurement date.
8. Traceable source.

If essential fields are missing, the claim remains unverified. Do not fill gaps with guesses.

## Source quality

Prefer primary material:

- Official specifications and project documentation.
- Reproducible benchmark repositories and experiment reports.
- Peer-reviewed research, where relevant.
- Maintainer-authored technical explanations.
- Detailed engineering reports that disclose context and limitations.

Community discussions can reveal useful questions and real-world experiences, but they should be treated as leads until the underlying claim is checked.

## What OAI does not infer

- Stars, forks, downloads, and mentions do not measure runtime performance.
- A benchmark on one machine does not establish universal superiority.
- A framework's marketing description does not prove an application follows an architecture.
- Repeated claims are not independent corroboration unless source independence is examined.
- AI extraction is not fact verification.

## Provenance and editorial review

Research observations should retain source URLs, timestamps, identifiers, and the extraction context needed for review. Generated documentation proposals must link to their sources, explain the intended change, and be reviewed before merging.

## Scope and limitations

The research engine currently discovers candidate material from public repositories, discussions, and configured feeds. Search coverage is incomplete and biased by source availability, query terms, and platform ranking. Counts describe the collected sample only; they are not representative market estimates.

## Further reading

- [Microsoft: Architecture styles](https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/)
- [Google Benchmark: User guide](https://github.com/google/benchmark/blob/main/docs/user_guide.md)
