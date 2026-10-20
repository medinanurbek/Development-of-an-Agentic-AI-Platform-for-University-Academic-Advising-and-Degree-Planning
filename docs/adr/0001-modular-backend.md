# ADR 0001 Shared modular backend

Date: 20 October 2026. Status: Proposed. Task: ACP-1. Decision owner: Medina Nurbek. Supervisor review: Pending.

## Context

Web, Android and iOS must reuse confirmed profiles, deterministic results and institution-specific rules. The project is developed by one student and must remain affordable and testable.

## Decision

Use a Python/FastAPI modular backend, PostgreSQL with pgvector, private file storage and REST/HTTPS. Version student data and institutional configurations. Separate a calculation service, audit/validator, CP-SAT planner, retrieval, master's preparation and a replaceable model gateway. Persist asynchronous job state before acknowledgement. The orchestrator calls typed tools; it cannot invent confirmed completions or execute arbitrary SQL.

## Alternatives and consequences

Django and NestJS remain credible backend alternatives; MySQL and MongoDB were compared for storage; GraphQL was compared for interaction. A modular deployment keeps operational effort lower than separate microservices while preserving component boundaries. REST clients need explicit workflow contracts; asynchronous jobs need idempotency and recovery checks. PostgreSQL/pgvector and CP-SAT still require local performance evaluation.

LLM provider/model, web/mobile frameworks, hosting, iOS build access and the approved real-data route are not fixed. Compare eligible Gemini, adequate local Ollama and a small-budget OpenAI option using the same representative cases. No paid fallback is automatic. The example environment does not authorise sending student records to any provider.

## Verification and supersession

See [Technology comparison](../technology-comparison.md), [Requirements](../requirements.md) and [Evaluation plan](../verification-and-evaluation.md). Confirm exact versions, budget and resources during the first working slice. Changes to this decision require a new ADR or an explicit dated amendment; no prototype-only check establishes backend acceptance.
