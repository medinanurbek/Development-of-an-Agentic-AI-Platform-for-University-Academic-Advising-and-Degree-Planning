# 10 Project Management and Risks

This chapter preserves the earlier management snapshot on 20 October 2026. The [current tracker and traceability record](tracker-and-traceability.md) supersedes its seven-task/README-only repository status; the implementation scope, milestones and risk analysis remain proposed.

## 10.1 Responsibilities and traceability

Medina Nurbek owns analysis, implementation, testing and documentation. The supervisor provides academic guidance and supports source access; university representatives and student participants contribute review/testing when arranged. These are responsibilities within a solo project, not a multi-person development team. Weekly task/risk review and supervisor checkpoints at major milestones are proposed.

Repository: https://github.com/medinanurbek/Development-of-an-Agentic-AI-Platform-for-University-Academic-Advising-and-Degree-Planning

YouTrack: https://medina-academic-planner.youtrack.cloud/issues/ACP

On 20 October the inspected remote HEAD was e4ba0b3, dated 14 October, with README.md as the tracked content. Seven ACP issues were observed: ACP-2 In Progress, six Open, all assigned to the owner account displayed as admin. Due dates/estimates were unset and native dependency links were not observed. Local documentation/prototype completion does not itself publish them or demonstrate progressive Git review.

Table 23: Existing YouTrack issues

| Issue | Actual title | State and priority | Requirement connection | Completion evidence expected |
| --- | --- | --- | --- | --- |
| ACP-1 | Update project documentation and README | Open<br>Normal | Documentation and management | Reviewed documents, current README and Git evidence. |
| ACP-2 | Expand and analyse the student survey | In Progress<br>Major | Evidence of relevance | Dated response export, year distribution and updated analysis. |
| ACP-3 | Collect official AITU curricula and rules | Open<br>Critical | FR14, FR16 | Official programme/cohort inventory, curricula and ten course assessment sources. |
| ACP-4 | Implement backend and student accounts | Open<br>Critical | FR01, FR02; NFR02, NFR08 | Persistent versioned records and tested ownership controls. |
| ACP-5 | Implement transcript import and confirmation | Open<br>Major | FR03; NFR10 | Editable staging, explicit confirmation and measured extraction quality. |
| ACP-6 | Implement assessment entry and GPA tools | Open<br>Critical | FR04 to FR06; NFR01 | Independent calculation checks, visible formulas and separate scenarios. |
| ACP-7 | Implement degree audit and plan validation | Open<br>Critical | FR09, FR10 | Audit and constraint outcomes matching the independent D3 fixtures. |

Trace each requirement to a real ACP task, branch/commit or PR and acceptance evidence, with links back to the task. Example: FR09/FR10 → ACP-7 → validator change → AT09/AT10 results. Use short task branches, meaningful changes and explained PRs; arrange selected significant-change supervisor reviews for the individual project. A self-review must be labelled accurately. Keep secrets, identifiable survey records and private transcripts out of the public repository. Native YouTrack–GitHub integration is documented but its configuration was not verified [45] [46].

## 10.2 Milestones and dependencies

Table 24: Proposed implementation milestones

| Window | Milestone and exit evidence |
| --- | --- |
| Week 1 | Agree baseline, collect source/coverage gaps, review survey findings and complete backlog. |
| Weeks 2–3 | Accounts, ownership, versioned storage and independent reference fixtures. |
| Weeks 4–5 | Reviewed transcript workflow, manual scores and verified numerical services. |
| Weeks 6–8 | Independent audit/validator, bounded plan generation and applicable evidence retrieval. |
| Weeks 9–10 | Actual tool orchestration and official-source master’s comparisons/checklists. |
| Weeks 11–13 | Web/Android/iOS workflows, shared persistence, security, recovery and budget controls. |
| Weeks 14–15 | Full coverage/adaptation checks, comparative technical study and observed student tasks. |
| Week 16 | Regression, reconciled acceptance results, reproducible release and defence materials. |

This is a proposed 16-week sequence, not an approved defence calendar. Initial capacity is 15–20 hours weekly, 240–320 hours overall, with about 15% reserve; this does not prove the scope fits. Re-estimate after the first working slice. Official curricula and backend ownership precede record/audit claims; validated tools precede orchestration; shared services and iOS build access precede cross-client acceptance. Second-university sources and official admissions snapshots are mandatory data dependencies.

Add actual tracker tasks for plan generation, retrieval/agent, master’s preparation, three clients, second-university adaptation, operational controls, evaluation, user testing and release. Earlier P08–P18 labels were planning references, not real ACP IDs. Each task needs an owner, outcome, verifiable acceptance, agreed deadline, estimate and native predecessor links. Keep work in progress small; do not close implementation tasks from screenshots alone.

## 10.3 Risks and immediate actions

Table 25: Project risks and mitigations

| Risk | Trigger and response |
| --- | --- |
| R01 Incomplete official sources | Missing programme/cohort/rule → track exact gap with ACP-3 and supervisor; block affected claims, label mock material. |
| R02 Solo scope/schedule | Missed milestone or excessive estimate → split vertical slices, reforecast; agree mandatory scope changes explicitly. |
| R03 Transcript formats | Unsupported layout or <95% extraction → editable staging/manual fallback; no parser pass from manual corrections. |
| R04 iOS access | No usable build/test environment by early implementation → arrange permitted resources and escalate schedule. |
| R05 Survey response/balance | Missing answers or weak year coverage → retain item denominators and recruit follow-up across years. |
| R06 Second-university data | No usable source set in Week 1 → secure another documented programme or record blocked adaptation. |
| R07 Unsupported AI advice | Wrong institution/intake, missing evidence or false certainty → scoped sources, tool values, review and explicit unknown. |
| R08 Invalid plans/false optimum | Oracle disagreement or timeout called impossible → independent validator, status handling and small-case optimum checks. |
| R09 Data exposure/loss | Ownership, secrets or restore failure → stop affected processing, fix and rerun access/deletion/recovery checks. |
| R10 Quota/hardware/budget | Exhaustion or insufficient local performance → measured provider choice, caps/reservations and visible fallback rules. |
| R11 Cross-client/workflow failure | Revision mismatch, duplicate import or stalled job → shared API, idempotency and failure-injection regression. |
| R12 Missing trace/review | Done task without artifact/test or missing raw output → reopen, preserve fixtures and link actual evidence. |

Medina owns the risk register and consults the supervisor for source access or scope escalation. Review triggers weekly, rather than treating qualitative ratings as measured probabilities. Next actions are to review this report and survey findings, obtain curricula/ten course sources, agree iOS access, complete ACP deadlines/dependencies and publish the reviewed analysis/design package. Record dated evidence before changing task states.

Numerical citations refer to [References](references.md).
