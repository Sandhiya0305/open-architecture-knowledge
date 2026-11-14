# Python ecosystem

Python is used for web applications, APIs, automation, data services and machine-learning systems. These tools cover common application and development needs.

<small>Last reviewed: 14 November 2026</small>

## Web and API frameworks

| Tool | Typical use | Documentation |
|---|---|---|
| Django | Build database-backed web applications with an integrated set of features. | [Django](https://docs.djangoproject.com/) |
| Django REST Framework | Build Web APIs on top of Django. | [Django REST Framework](https://www.django-rest-framework.org/) |
| FastAPI | Build APIs using Python type hints and automatic API documentation. | [FastAPI](https://fastapi.tiangolo.com/) |
| Flask | Build web applications and APIs with a lightweight framework. | [Flask](https://flask.palletsprojects.com/) |

## Data access and validation

| Tool | Typical use | Documentation |
|---|---|---|
| SQLAlchemy | SQL toolkit and object-relational mapper. | [SQLAlchemy](https://docs.sqlalchemy.org/) |
| Pydantic | Validate and serialize data using Python type annotations. | [Pydantic](https://docs.pydantic.dev/) |
| Alembic | Manage database schema migrations for SQLAlchemy projects. | [Alembic](https://alembic.sqlalchemy.org/) |

## Background work and application servers

| Tool | Typical use | Documentation |
|---|---|---|
| Celery | Run distributed background tasks and scheduled jobs. | [Celery](https://docs.celeryq.dev/) |
| Uvicorn | ASGI server commonly used with FastAPI and other ASGI applications. | [Uvicorn](https://www.uvicorn.org/) |
| Gunicorn | Process manager and WSGI HTTP server for Python web applications. | [Gunicorn](https://gunicorn.org/) |

## Testing and developer tools

| Tool | Typical use | Documentation |
|---|---|---|
| pytest | Write and run Python tests. | [pytest](https://docs.pytest.org/) |
| Ruff | Lint and format Python code. | [Ruff](https://docs.astral.sh/ruff/) |
| mypy | Check static types in Python code. | [mypy](https://mypy.readthedocs.io/) |
| uv | Manage Python projects, dependencies and environments. | [uv](https://docs.astral.sh/uv/) |
| Poetry | Manage Python dependencies and project packaging. | [Poetry](https://python-poetry.org/docs/) |

Other useful companions include [Redis](https://redis.io/docs/), [RabbitMQ](https://www.rabbitmq.com/docs) and [Docker](https://docs.docker.com/).

Choose based on application shape, async requirements, data model, deployment environment and team experience.
