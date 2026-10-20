# Development of an Agentic AI Platform for University Academic Advising and Degree Planning

Diploma project by **Medina Nurbek**, Software Engineering, Astana IT University (AITU). The proposed platform combines confirmed student records, reproducible academic calculations, degree audits, constraint-checked course plans and preparation for selected master's programmes.

**Current status — 20 October 2026:** analysis, design and an interactive browser prototype. The prototype runs locally with synthetic data and scripted responses. A production backend, live AI, actual transcript parsing and installable Android/iOS applications are not implemented. This branch is a candidate documentation baseline pending selected significant-change review by the supervisor.

- [Project documentation](docs/README.md)
- [YouTrack project and real ACP tasks](https://medina-academic-planner.youtrack.cloud/issues/ACP)
- [Interactive prototype source](apps/web-prototype/index.html)
- [Contribution and review workflow](CONTRIBUTING.md)
- [24 October submission checklist](docs/submission-checklist.md)
- [Assigned backlog, deadlines and requirement traceability](docs/tracker-and-traceability.md)

## Problem statement

Academic decisions require students to combine grades, credits, assessment weights, curriculum requirements and applicable university rules. They need to check whether targets are achievable, identify remaining degree requirements and sequence courses under prerequisites, offerings and credit limits. Master's preparation adds official admission requirements, documents, deadlines and funding information.

AITU already offers myDU and Peer Advisor. The project investigates the value of a persistent, student-confirmed record connected to explicit calculations, saved scenarios, source-backed advice and independent plan validation. It does not claim that competing systems lack all these functions or that a preferred interface proves superiority.

## Users and expected outcomes

Primary users are AITU students across the declared official programme/cohort inventory, including graduating students considering master's study. An authorised operator maintains sources/configurations. Academic advisors and university representatives support source review and evaluation when arranged.

Expected outcomes are working web/Android/iOS clients with a shared backend; confirmed transcript import and manual scores; verified calculation, audit and planning services; sourced master's comparisons/checklists; one documented second-university adaptation; and reproducible evaluation evidence.

## Team and responsibilities

| Member | Responsibility |
| --- | --- |
| **Medina Nurbek**, Year 3 Software Engineering, AITU | Sole developer and author: research, requirements, architecture, backend, clients, integration, testing, documentation and task/repository management. |
| **Kydyrbekova Aigerim Balgabayevna — Кыдырбекова Айгерим Балгабаевна**, Assistant Professor, School of Software Engineering | Supervisor: academic guidance, support in obtaining official sources and review at agreed checkpoints. She is not represented as a code contributor or as having approved this branch. |

## Scope

| Area | Committed target |
| --- | --- |
| Records | Authenticated persistent profile; editable text-PDF transcript staging and explicit confirmation; manual assessments; owned export/deletion. |
| Academic tools | Weighted GPA, cumulative GPA scenarios/targets, required assessment scores, applicable policy explanations, degree audit, independent plan validation and bounded generation. |
| Planning | AND/OR prerequisites, permitted concurrency, term offerings, credit limits, elective groups, saved alternatives and version-aware revalidation. |
| AITU | All programmes/cohorts in a frozen authoritative inventory. Ten real courses for detailed assessment evaluation; missing official curricula block complete-coverage claims. Mock sources support labelled demonstrations only. |
| Other university | One programme at a second Kazakhstani university; four documented configuration contrasts. |
| Master's preparation | At least five real programmes at two universities; official sources/intakes, status matching, documents, deadlines, published funding and saved preparation checklists. Search is not exhaustive. |
| Clients | Website in Chrome/Edge and installable Android/iOS applications, all using shared services. |

LMS synchronisation (FR21) and a separately trained grade predictor (FR22) are **Could** extensions conditional on authorised access and suitable data. Training an LLM from scratch, course registration, modifying official records and submitting applications are outside scope. Advice is not an official scholarship, progression or admission decision.

## Evidence and evaluation

The 20 October survey snapshot contains **50 submission records**, with **30 answers to the six core need questions**. All three bachelor study years are represented (8/14/28 records). GPA and elective tasks each appear in 17/30; 28/30 report at least one difficulty. These voluntary self-reports do not establish population demand or application effectiveness. See the [aggregate evidence and item denominators](docs/evidence-of-relevance.md); raw records and private response-sheet links are excluded.

The review analyses **15 publications**. The existing-system comparison covers **four systems against ten criteria**. Five exploratory Peer Advisor cases produced four correct outputs and one unrelated profile-recall answer; the setup/evidence limitations are recorded. One failure does not establish absence of all chat memory.

The requirements register contains **22 FR + 12 NFR: 31 Must, 1 Should and 2 Could**. All production acceptance checks remain unverified. The prototype has nine scripted browser checks; rerun them using the commands below. Planned evaluation includes independent numeric/constraint references, parsing precision/recall, source applicability, security/recovery, native clients, a controlled 420-output tool comparison and a five-student task study. No improved academic outcomes are claimed.

## Proposed technologies

| Component | Proposed technology and decision state |
| --- | --- |
| Current prototype | Standalone HTML/CSS/JavaScript; browser local storage; synthetic fixtures; no network or model calls. Implemented. |
| Shared backend | Python/FastAPI modular services. Proposed, not yet implemented. |
| Persistence/retrieval | PostgreSQL, pgvector and private file storage; scoped hybrid retrieval. Proposed. |
| Planning | Explicit validator plus OR-Tools CP-SAT; status/optimality checks. Proposed. |
| Interaction | REST/HTTPS, durable job IDs and polling; optional SSE. Proposed. |
| Model access | Replaceable gateway; evaluate eligible Gemini API, local Ollama and small-budget OpenAI alternatives. Provider/model not fixed; real-data route and costs require review. |
| Clients | Web plus Android/iOS; frameworks and iOS build resources to confirm. |
| Prototype QA | Node.js and Playwright 1.62.1 with Chromium; repository checks use Node built-ins. |

See the [technology comparison](docs/technology-comparison.md) and [ADR 0001](docs/adr/0001-modular-backend.md).

## Repository structure

```text
apps/web-prototype/    Runnable browser demonstrator
apps/mobile/           Planned native-client boundary
services/backend/      Planned shared API and academic-service boundary
docs/                  Eleven editable chapters, references, requirements and ADRs
diagrams/src/          Editable SVG sources
diagrams/exports/      Readable PNG diagrams
tests/prototype/       Executable browser regression checks
tests/fixtures/        Synthetic/reference cases, no student records
tests/results/         Sanitised dated check summaries
scripts/               Repository validation and submission tools
config/                Safe configuration examples and planned dependency notes
.github/               Pull-request template and automated checks
```

## Run the current prototype

Clone this same repository and enter its directory:

```sh
git clone https://github.com/medinanurbek/Development-of-an-Agentic-AI-Platform-for-University-Academic-Advising-and-Degree-Planning.git
cd Development-of-an-Agentic-AI-Platform-for-University-Academic-Advising-and-Degree-Planning
```

During review, use the `ACP-1-documentation-and-repository-baseline` branch; after it is reviewed/merged, use `main`.

Open `apps/web-prototype/index.html` in Chrome or Edge. No account, API key, database or paid service is needed. Use **Load sample transcript**, correct the missing credits and confirm; inspect GPA targets; validate/correct a plan; save a master's checklist. **Reset demo** restores synthetic data. File selection does not parse/upload real files; the advisor is scripted. Browser storage is local to that browser and is not shared-client persistence.

## Install and run checks

Use Node.js 24 LTS and npm. Install the exact lockfile dependencies and Chromium:

```sh
npm ci
npx playwright install chromium
npm run check:repository
npm test
```

On a Linux machine without browser libraries, use `npx playwright install --with-deps chromium` if permitted by the environment. `npm test` runs repository checks and nine browser scenarios. Generated screenshots, downloads and local run details go to ignored `artifacts/`. Sanitised dated summaries may be deliberately added under `tests/results/`. These are prototype checks, not production, native-mobile or real-user acceptance tests.

The future backend/mobile folders document intended component boundaries only. Their installation, execution and acceptance commands will be added with runnable implementations; no backend service is claimed by the prototype commands.

## Next steps and review status

1. Review the candidate documentation/prototype PR and record selected significant-change supervisor feedback.
2. Review the proposed implementation dates and recorded predecessor links. Sixteen assigned tasks now exist; ACP-1/ACP-2/ACP-8 link to the actual PR.
3. Obtain the official programme/cohort inventory, curricula, ten assessment sources and a second-university source set.
4. Implement accounts/storage, import, deterministic tools, planning, source-grounded orchestration and master's workflows.
5. Deliver/test real Android/iOS clients and execute all mandatory acceptance criteria.

All work uses genuine dated commits in the same repository. `pre-defense-1`, `pre-defense-2` and `final-pre-defense` will identify the actual submissions at their respective stages; future stages and supervisor approval are not fabricated. See [CONTRIBUTING](CONTRIBUTING.md).

## Data and configuration

Only synthetic fixtures and aggregate research summaries belong in this repository. Never commit real transcripts, raw survey exports, passwords, tokens, `.env` or private correspondence. Use [the placeholder environment](config/.env.example); it is a future-backend contract, not configuration consumed by the HTML prototype. Check staged changes before every push. No project licence has been selected yet; third-party packages retain their own licences.
