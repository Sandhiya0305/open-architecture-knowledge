# Java ecosystem

Java is used for backend services, enterprise applications, APIs and distributed systems. The examples below cover several framework families and supporting tools; they are not a ranking.

<small>Catalogue review: [November 2026](review-log.md)</small>

## Application frameworks

| Tool | Typical use | Documentation |
|---|---|---|
| Spring Boot | Build standalone Spring applications and backend services. | [Spring Boot](https://spring.io/projects/spring-boot) |
| Quarkus | Build Java applications with a focus on containers and cloud-native environments. | [Quarkus](https://quarkus.io/) |
| Micronaut | Build JVM applications using compile-time dependency injection and related features. | [Micronaut](https://micronaut.io/) |

## Spring-specific integrations

| Tool | Typical use | Documentation |
|---|---|---|
| Spring Security | Authentication and authorization for Spring applications. | [Spring Security](https://spring.io/projects/spring-security) |
| Spring Cloud | Distributed-system patterns and integrations for Spring applications. | [Spring Cloud](https://spring.io/projects/spring-cloud) |
| Spring Data JPA | Repository abstractions for JPA-based persistence in Spring applications. | [Spring Data JPA](https://spring.io/projects/spring-data-jpa) |
| Spring Boot Actuator | Health and operational endpoints for Spring Boot applications. | [Spring Boot Actuator](https://docs.spring.io/spring-boot/reference/actuator/) |
| springdoc-openapi | Generate OpenAPI documentation for Spring applications. | [springdoc-openapi](https://springdoc.org/) |

## Persistence and database migrations

| Tool | Typical use | Documentation |
|---|---|---|
| Hibernate ORM | Object-relational mapping for Java applications. | [Hibernate ORM](https://hibernate.org/orm/) |
| jOOQ | Type-safe SQL construction and database access. | [jOOQ](https://www.jooq.org/) |
| Flyway | Version and apply database schema migrations. | [Flyway](https://documentation.red-gate.com/flyway) |
| Liquibase | Manage database schema changes through versioned change logs. | [Liquibase](https://docs.liquibase.com/) |

## Testing, build and operations

| Tool | Typical use | Documentation |
|---|---|---|
| JUnit 5 | Unit and integration testing on the JVM. | [JUnit](https://junit.org/junit5/) |
| Mockito | Create test doubles for isolated tests. | [Mockito](https://site.mockito.org/) |
| Testcontainers | Run dependencies such as databases in containers during tests. | [Testcontainers for Java](https://java.testcontainers.org/) |
| Maven | Build automation and dependency management. | [Apache Maven](https://maven.apache.org/) |
| Gradle | Build automation and dependency management. | [Gradle](https://gradle.org/) |
| Micrometer | Instrument application metrics and connect them to monitoring systems. | [Micrometer](https://micrometer.io/docs) |
| OpenTelemetry | Collect traces, metrics and logs using vendor-neutral instrumentation. | [OpenTelemetry](https://opentelemetry.io/docs/) |

Choose tools based on application requirements, runtime constraints, integration needs and the team's ability to operate them. Spring-specific tools are labelled as such; they are not requirements for Quarkus or Micronaut applications.
