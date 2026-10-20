# 9 Verification and Evaluation Plan

## 9.1 Aim metrics and independent references

Verification checks each mandatory acceptance criterion; evaluation compares correctness and usefulness with defined baselines. Freeze fixtures, source versions, build/environment and scoring before final runs. The author prepares independent references; a supervisor/designated academic reviewer checks institutional applicability and ambiguous rules. The application calculator, validator or model must not be its own sole oracle.

Table 21: Evaluation datasets

| Set | Minimum fixture and independent reference |
| --- | --- |
| D1 Import | 10 supported text PDFs, at least 100 course rows, plus 5 invalid files; manually label course/credit/grade triples. Include missing values, zeros, repeat attempts; record real/de-identified/synthetic provenance. |
| D2 Calculations | 20 independently computed cases: 4 GPA, 4 scenarios, 4 required-score, 4 missing-data and 4 unreachable-target cases. Declare precision and repeat rules. |
| D3 Audit/plans | 30 cases: 6 valid, 6 prerequisite, 4 credit-limit, 4 availability, 4 elective-group and 6 boundary/uncertainty. Retain full rules; enumerate small cases independently for optimum/infeasibility. |
| D4 Advising | 20 questions: 10 Russian, 10 English; 15 answerable and 5 missing/conflicting evidence. Archive applicable passages and expected answer/clarification. |
| D5 AITU | Authoritative programme/cohort inventory, applicable curricula and 10 real assessment courses; missing entries remain in the coverage denominator. |
| D6 Adaptation | One documented second-university programme; 4 contrasts for grading, prerequisites, offerings and credit limits. Retain configuration and core-code differences. |
| D7 Master’s | At least 5 real programmes from 2 universities; archived official intake/source snapshots and 20 profile/programme pairs covering met, unmet, conditional and unknown, documents, dates and funding. |
| D8 Operations | Two students and one operator; 12 negative-access cases, 5 hostile source fixtures, provider/quota/deadline, restart/backup/deletion and interrupted-job fixtures. |
| D9 Clients/users | Recorded Chrome/Edge/Android/iOS matrix; 5 students × 4 tasks per condition, with consent and synthetic task records. |

Table 22: Outcome metrics and acceptance interpretation

| Outcome | Measurement and proposed acceptance |
| --- | --- |
| Calculations/import | All 20 D2 outcomes match independent values on each client/export. D1 exact-normalised field precision and recall each ≥95%; wrong triples count as both FP and FN; report per-file results. Confirmed fields must all match reviewed ground truth. |
| Audit/validation/generation | All applicable audits match; 30/30 candidate outcomes and known violations match. Every generated plan passes independent validation. Report invalid acceptance and valid rejection separately. Earliest-completion gap must be zero where optimum is claimed; timeouts remain unknown. |
| Advice/source support | D4 complete-case correctness includes substantive answer or required clarification, applicable policy and correct tool values. Every material claim in D4/D7 is source-supported or explicit unknown; citations resolve. Report answerable and insufficient-evidence groups separately. |
| Master’s and coverage | All reference D7 status/checklist decisions match. 100% declared D5 entries require source-backed configurations and smoke checks; 4 D6 contrasts pass without core arithmetic/validator rewrites. Catalogue is not exhaustive and matching is not an admission guarantee. |
| Operations and clients | 12/12 unauthorised access cases denied; no malicious tool action from 5 hostile fixtures. Non-model p95 ≤2 s over 100 measured requests/10 concurrent sessions after 10 warm-ups; acknowledgement ≤2 s; stalled workflow fails visibly by 120 s. Core client workflows agree. |
| Usability/comparison | Should: ≥16/20 platform tasks completed unaided within 5 minutes each. Compare with equal-denominator manual tasks; 20% paired median time reduction is an exploratory hypothesis, not a release gate. Report failures, assistance and misunderstandings. |

## 9.2 Baselines and measurement conditions

B1 is a document-grounded assistant using the same selected model version, retrieval pipeline, source corpus, confirmed inputs and output schema as the full platform, without academic calculator/audit/planning/persistence tools. It may reason in text, but receives no hidden tool outputs or reference answers. This isolates the contribution of tools and workflow. B0 is an organised document set, a working GPA spreadsheet with visible formulas and a checklist template. Peer Advisor is an external contextual comparator, not a controlled benchmark.

The technical study uses D2+D3+D4: 70 cases × 3 runs × 2 systems = 420 outputs. Match total model-token/resource budgets, reset state between cases, interleave systems with a recorded seed and archive raw outputs including errors/timeouts. Declare model/provider/revision, temperature, context/output caps, tools and source hashes, CPU/RAM/OS, client/network, runtime and commit. Repeats of a prompt are not independent students; results remain descriptive.

Score complete task outcomes against frozen independent references, not fluency. Where practical, hide system identity during source/answer review and record disagreements. Retain failures in denominators. If an outage invalidates a run, document the incident and repeat the paired block. Measure server and user-visible latency separately, including time to acknowledgement, full completion, token use, actual charge and provider failure. Cost includes retries and local compute; no monetary saving is assumed.

## 9.3 Student study and operational checks

Five students each perform four platform tasks and four matched B0 tasks: confirm an import, inspect a GPA scenario, correct/save a valid plan and prepare a master’s checklist. Use two matched task variants; three participants start with the platform and two with B0. Give the same orientation without coaching. Start timing on the brief; stop on correct completion or after five minutes. Record wrong actions, assistance, abandonment and explanation understanding. This yields 20 platform tasks and 20 B0 attempts.

Report task success over all attempts and paired times for tasks successful in both conditions; failed tasks remain visible. Per matched successful task, relative reduction is 100 × (B0 time − platform time) / B0 time. Report participant values and medians without a population significance claim. Native-client results require exact OS/device/build versions; responsive HTML is not evidence of native compatibility.

Exercise owner-only export/deletion, HTTPS/secrets, budget reservation and quota exhaustion, network retry/cancellation, idempotent jobs, interrupted-work recovery and backup restoration with deletion-ledger replay. For each core service retain a successful and failed operation trace and reproduce deterministic D2/D3 results from a clean setup. Confirm a later official master’s page retrieval against its archived snapshot; distinguish real changes from extraction errors.

## 9.4 Decision and current evidence status

Sequence evaluation as source/fixture review → deterministic services → paired technical study → operational/client checks → student and institutional review → regression and final evidence reconciliation. PASS requires all applicable criteria; FAIL records a mismatch; BLOCKED an unmet dependency; NOT RUN an unexecuted check; NOT INCLUDED an uncommitted conditional extension. Full achievement requires all 31 Must requirements with correct end-to-end outputs on all required clients. Comparative benefit is a separate conclusion and may be neutral or negative.

Current evidence is nine passing PX browser checks and the earlier five Peer Advisor cases. D1–D9 production tests, the 420-output study, native-client acceptance and the five-student study remain NOT RUN. Each completed AT/NT record must retain test/requirement ID, fixture/source/profile versions, build, expected/actual outputs, timing, model/tools/cost where relevant, verdict, reviewer and evidence path. Conditional LMS/prediction tests run only if committed and cannot compensate for a failed mandatory criterion.

Numerical citations refer to [References](references.md).


## Equivalent manual baseline task

For B0, replace the interface action “confirm an import” with manually transcribing and checking the same course, credit and grade fields against the supplied transcript. Both conditions must produce the same verified record and use the same correctness criterion, orientation and five-minute limit. Record timeouts and errors in both conditions.
