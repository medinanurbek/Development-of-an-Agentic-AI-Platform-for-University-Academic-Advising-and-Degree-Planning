# Planned shared backend

Python/FastAPI will separate API/access, profiles/import, calculations, audit/validation, CP-SAT planning, evidence retrieval, master's preparation, source administration, model gateway and durable jobs/storage. See [architecture](../../docs/architecture.md) and [ADR](../../docs/adr/0001-modular-backend.md).

No backend code or dependency lock exists yet. Add tested dependency definitions, migrations and executable setup/tests with the first working slice. Prototype checks do not establish backend acceptance.
