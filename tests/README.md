# Test materials and status

npm test runs repository checks and nine browser scenarios. [Prototype runner](prototype/run.cjs) uses synthetic data. [Peer Advisor cases](fixtures/peer-advisor-cases.json) preserve five exploratory specifications and reported observations; these are not reruns or performance benchmarks. Private screenshots, raw questionnaires and real student records are excluded.

PX01–PX09 check overview, transcript staging, targets, plan constraints/alternatives, master's checklist, scripted advisor, source revisions, export/deletion and responsive layout. Runtime errors and unexpected HTTP(S) requests fail the browser run. Local screenshots/logs go to ignored artifacts/prototype.

D1–D9 are defined in [the evaluation plan](../docs/verification-and-evaluation.md). Production AT/NT, native applications and human studies remain NOT RUN. The [34-record register](../docs/requirements-register.json) is not marked passed by PX checks. Commit only sanitised dated summaries of actual runs under results, including tested content hash and runtime/library versions.
