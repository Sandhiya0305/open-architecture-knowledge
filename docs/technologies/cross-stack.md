# Cross-stack tools

These tools support software across multiple programming ecosystems.

<small>Catalogue review: [November 2026](review-log.md)</small>

## APIs and service communication

| Technology | Typical role | Documentation |
|---|---|---|
| REST | An architectural style for network-based applications; API guidelines describe one organization's design conventions. | [Roy Fielding's dissertation](https://ics.uci.edu/~fielding/pubs/dissertation/abstract.htm) |
| GraphQL | API query language and runtime for clients requesting shaped data. | [GraphQL](https://graphql.org/learn/) |
| gRPC | Remote procedure calls using generated client and server interfaces. | [gRPC](https://grpc.io/docs/) |
| OpenAPI | Specification for describing HTTP APIs. | [OpenAPI](https://spec.openapis.org/oas/latest.html) |

## Databases and caching

| Technology | Typical role | Documentation |
|---|---|---|
| PostgreSQL | Relational database. | [PostgreSQL](https://www.postgresql.org/docs/) |
| MySQL | Relational database. | [MySQL](https://dev.mysql.com/doc/) |
| MongoDB | Document-oriented database. | [MongoDB](https://www.mongodb.com/docs/) |
| Redis | In-memory data store commonly used for caching and coordination. | [Redis documentation](https://redis.io/docs/); [license by version](https://redis.io/legal/licenses/) |

## Messaging and event streaming

| Technology | Typical role | Documentation |
|---|---|---|
| Apache Kafka | Distributed event streaming platform. | [Kafka](https://kafka.apache.org/documentation/) |
| RabbitMQ | Message broker supporting multiple messaging protocols. | [RabbitMQ](https://www.rabbitmq.com/docs) |

## Containers and infrastructure

| Technology | Typical role | Documentation |
|---|---|---|
| Docker | Build and run containers. | [Docker](https://docs.docker.com/) |
| Kubernetes | Orchestrate containerized workloads. | [Kubernetes](https://kubernetes.io/docs/home/) |
| Terraform | Provision and manage infrastructure as code. | [Terraform documentation](https://developer.hashicorp.com/terraform/docs); [license](https://github.com/hashicorp/terraform/blob/main/LICENSE) |

## Observability

| Technology | Typical role | Documentation |
|---|---|---|
| OpenTelemetry | Instrument applications and collect traces, metrics and logs. | [OpenTelemetry](https://opentelemetry.io/docs/) |
| Prometheus | Collect and query metrics. | [Prometheus](https://prometheus.io/docs/introduction/overview/) |
| Grafana | Explore and visualize operational data. | [Grafana](https://grafana.com/docs/) |

## Testing and delivery

| Technology | Typical role | Documentation |
|---|---|---|

## Licensing notes

- **Redis:** the license depends on the version. Redis 7.2 and earlier use BSD-3-Clause; Redis Community Edition 7.4 uses RSALv2 or SSPLv1; Redis Open Source 8 and later offer RSALv2, SSPLv1 or AGPLv3. Check the license for the exact release and distribution before adopting it. [Redis licensing overview](https://redis.io/legal/licenses/).
- **Terraform:** Terraform 1.6.0 and later are distributed under Business Source License 1.1 with an additional use grant; this is source-available, not an OSI-approved open-source license. Earlier releases have different terms. Review the license shipped with the exact version. [Terraform license](https://github.com/hashicorp/terraform/blob/main/LICENSE). [OpenTofu](https://opentofu.org/) is a community alternative with a different licensing model.
