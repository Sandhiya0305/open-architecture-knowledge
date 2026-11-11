# Evidence Records

Evidence records preserve where a claim came from, when it was observed, and how strong the supporting material is.

## Minimum record fields
- Stable observation identifier.
- Canonical source URL and source type.
- Publication date (if available) and retrieval/observation timestamp.
- Claim text and claim category.
- Evidence status and reviewer notes.
- Related architecture and ecosystem tags.

## Evidence status vocabulary
- **Unverified**: discovered but not independently checked.
- **Corroborated**: supported by multiple credible sources or direct primary evidence.
- **Methodology reviewed**: benchmark or empirical method has been examined and is sufficiently described for its stated scope.
- **Rejected**: misleading, unsupported, contradicted, or outside scope.

## Performance-claim requirements
A performance claim needs workload, environment, hardware where relevant, runtime/framework versions, methodology, results, measurement date, and source. Missing fields keep the claim unverified.

## Integrity rule
Do not convert popularity signals (stars, downloads, mentions, search interest) into performance conclusions.
