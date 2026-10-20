# 5 Technology Comparison

## 5.1 Alternatives and decisions

Six decisions compare two or three reasonable alternatives against verifiability, shared-client integration, institutional configuration, data control, delivery effort and cost. Selections are proposed engineering judgments. Exact versions, model quality and hosting capacity require measurement; no benchmark result is claimed.

Table 11: Key technology alternatives

| Decision | Alternatives and tradeoffs | Proposed choice and requirement fit |
| --- | --- | --- |
| Server platform | FastAPI/Python: typed APIs and direct planning integration [24]. Django: strong ORM/admin, with API conventions to assemble [25]. NestJS/TypeScript: viable structured backend, with a boundary to Python solvers [26]. | FastAPI for shared calculation, parsing and planning services; FR03–FR13, NFR06. Django remains credible if administration dominates. |
| Primary storage | PostgreSQL: relations, transactions, numeric/JSONB/full-text support [27]. MySQL/InnoDB: credible relational alternative [28]. MongoDB: flexible staging, with additional cross-record rule consistency work [29]. | PostgreSQL as system of record; private file storage for uploads. Version profiles, curricula and results; FR02, FR12, FR16; NFR08/NFR11. |
| Interaction | REST: explicit workflow endpoints and shared API contract [24]. GraphQL: flexible queries, but field permissions/query costs add work [30]. SSE can complement either; it streams progress without accelerating model inference [31]. | REST over HTTPS; direct internal calls in one modular backend. Durable job IDs and polling, with optional SSE; NFR04/NFR06. |
| LLM access | Gemini API: eligible free tier and tools, bounded quotas and data terms [32][33]. Ollama/local model: no hosted token charge, but hardware/licence/quality costs [34]. OpenAI API: paid tool-capable benchmark/fallback [35][36]. | Replaceable adapter. Begin on public/synthetic records; route real data only through a reviewed cloud configuration or adequate local runtime. Free preferred, small budget possible; NFR02/NFR09. |
| Academic retrieval | Full documents per prompt: simple baseline, repeated context cost. Keyword RAG: exact identifiers, possible paraphrase misses [38]. Hybrid keyword/vector RAG: semantic reach with embedding/index maintenance [37][39]. | PostgreSQL full text plus pgvector, subject to evaluation. Filter institution/programme/intake/version before generation; FR07/FR08, NFR03. |
| Plan checks and generation | Explicit rules/graphs: explain supplied-plan violations. CP-SAT: candidate search under integer/Boolean constraints [40]. LLM-only plan text: flexible, but fluent output does not establish constraint satisfaction [17]. | Separate explicit validator plus CP-SAT generator. Report OPTIMAL, FEASIBLE, INFEASIBLE, MODEL_INVALID and UNKNOWN distinctly; FR09–FR11. |

## 5.2 Integration cost and validation

The agent interprets requests, selects permitted tools and explains actual outputs; it does not perform authoritative arithmetic or overwrite confirmed records. Services retrieve the correct profile/curriculum revision, calculate or search, validate, save an operation trace and return structured results. Master’s discovery retrieves official pages, preserves intake/source dates and prepares a checklist; search results alone are not admission rules.

Compare provider candidates on identical representative prompts, documents and tools: task correctness, incorrect calls, source support, Russian/English behaviour, completion time and cost. A free quota does not guarantee unlimited free use. Local inference consumes hardware and electricity; storage, backups, hosting and search costs are separate. Enforce request/output caps and reserve allowances before execution. Quota failure must not silently charge a paid provider or transfer private data.

Count all workflow tokens, tool/infrastructure charges and retries; recheck tariffs and data terms at implementation. The provider remains replaceable. Ready-made models satisfy the core design. Separate prediction training requires documented data, held-out evaluation, leakage controls and a numerical baseline [41].

Numerical citations refer to [References](references.md).
