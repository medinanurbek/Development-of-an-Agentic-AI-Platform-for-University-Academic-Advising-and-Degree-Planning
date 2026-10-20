# Current tracker and change evidence

Snapshot: 20 October 2026. Owner for all ACP tasks: **Medina Nurbek**, using the existing account displayed as **admin**. All sixteen tasks exist in the [actual YouTrack project](https://medina-academic-planner.youtrack.cloud/issues/ACP). Implementation dates below are proposed planning deadlines derived from the 16-week sequence, not an approved defence calendar. The 24 October date is the analysis/design checkpoint.

| Task | Outcome | State at this snapshot | Priority | Deadline |
| --- | --- | --- | --- | --- |
| [ACP-1](https://medina-academic-planner.youtrack.cloud/issue/ACP-1) | Documentation and README baseline with review evidence | Review | Normal | 24 October 2026 |
| [ACP-2](https://medina-academic-planner.youtrack.cloud/issue/ACP-2) | Dated survey analysis and aggregate evidence | In Progress | Major | 24 October 2026 |
| [ACP-3](https://medina-academic-planner.youtrack.cloud/issue/ACP-3) | Official programme/cohort inventory, curricula and ten assessment sources | Open | Critical | 26 October 2026 |
| [ACP-4](https://medina-academic-planner.youtrack.cloud/issue/ACP-4) | Shared backend, accounts and owned persistent records | Open | Critical | 9 November 2026 |
| [ACP-5](https://medina-academic-planner.youtrack.cloud/issue/ACP-5) | Editable transcript staging, confirmation and measured extraction | Open | Major | 23 November 2026 |
| [ACP-6](https://medina-academic-planner.youtrack.cloud/issue/ACP-6) | Manual assessments and independently checked calculations | Open | Critical | 23 November 2026 |
| [ACP-7](https://medina-academic-planner.youtrack.cloud/issue/ACP-7) | Degree audit and independent plan validator | Open | Critical | 14 December 2026 |
| [ACP-8](https://medina-academic-planner.youtrack.cloud/issue/ACP-8) | Runnable synthetic prototype and reproducible checks | Review | Major | 24 October 2026 |
| [ACP-9](https://medina-academic-planner.youtrack.cloud/issue/ACP-9) | Bounded planning and saved alternatives | Open | Major | 14 December 2026 |
| [ACP-10](https://medina-academic-planner.youtrack.cloud/issue/ACP-10) | Source-grounded advising, rule maintenance and actual agent tools | Open | Major | 28 December 2026 |
| [ACP-11](https://medina-academic-planner.youtrack.cloud/issue/ACP-11) | Official-source master's comparisons and checklists | Open | Major | 28 December 2026 |
| [ACP-12](https://medina-academic-planner.youtrack.cloud/issue/ACP-12) | Shared website and installable Android/iOS workflows | Open | Major | 18 January 2027 |
| [ACP-13](https://medina-academic-planner.youtrack.cloud/issue/ACP-13) | Declared AITU coverage and second-university adaptation | Open | Major | 1 February 2027 |
| [ACP-14](https://medina-academic-planner.youtrack.cloud/issue/ACP-14) | Ownership, data control, recovery, bounded jobs and budget controls | Open | Major | 18 January 2027 |
| [ACP-15](https://medina-academic-planner.youtrack.cloud/issue/ACP-15) | Independent acceptance, controlled technical comparison and student evaluation | Open | Major | 1 February 2027 |
| [ACP-16](https://medina-academic-planner.youtrack.cloud/issue/ACP-16) | Selected supervisor review, submission identity and demonstration | Open | Major | 24 October 2026 checkpoint |

Each task has an outcome and acceptance criteria in its actual description. Native due-date fields are populated. Dependencies are specified in descriptions and native depends-on links for ACP-4 through ACP-16 where applicable. ACP-2 and ACP-3 can proceed independently. Supervisor review can occur while candidates are in Review; ACP-16 records the actual review/submission evidence. No implementation task is closed by this documentation publication.

## Requirement to task to acceptance

| Requirement group | Implementation task | Planned acceptance evidence |
| --- | --- | --- |
| FR01, FR02 | ACP-4 | AT01, AT02; owned cross-client persistent records |
| FR03, NFR10 | ACP-5 | AT03, NT10; D1 reviewed extraction precision/recall |
| FR04-FR06, NFR01 | ACP-6 | AT04-AT06, NT01; D2/D5 independent numeric references |
| FR07, FR08, FR13, FR16 | ACP-10 | AT07, AT08, AT13, AT16; D4 evidence and actual tool traces |
| FR09, FR10 | ACP-7 | AT09, AT10; D3 independent audit/constraint outcomes |
| FR11, FR12 | ACP-9 | AT11, AT12; bounded generation, independent validation and alternatives |
| FR14, FR15, NFR07 | ACP-3, ACP-13 | AT14, AT15, NT07; D5 inventory and D6 configuration contrasts |
| FR17-FR19, NFR03 | ACP-11, ACP-10 | AT17-AT19, NT03; D7 source-backed matches/checklists |
| FR20, NFR02, NFR04, NFR08, NFR09, NFR11 | ACP-14, ACP-4, ACP-10 | AT20, NT02, NT04, NT08, NT09, NT11; D8 operational evidence |
| NFR06, NFR12 | ACP-12, ACP-10 | NT06, NT12; real client matrix and RU/EN service requests |
| NFR05 Should | ACP-15 | NT05; observed student tasks, reported separately from release gates |
| FR21, FR22 Could | Not committed to implementation | Conditional AT21/AT22 only if access/data and scope are agreed |

ACP-15 coordinates the complete verification record; it does not replace each implementation task's tests. All production AT/NT outcomes remain unverified.

## Published changes and checks

Candidate branch: `ACP-1-documentation-and-repository-baseline`.

[Pull request 1](https://github.com/medinanurbek/Development-of-an-Agentic-AI-Platform-for-University-Academic-Advising-and-Degree-Planning/pull/1) links ACP-1 and ACP-8. Actual ACP-1, ACP-2 and ACP-8 tasks link back to the PR.

- `fb369b1`: ACP-1 documentation, requirement register and editable diagrams.
- `38820e9`: ACP-8 runnable prototype, component boundaries and safe configuration.
- `85cbe80`: ACP-8 executable checks and sanitised actual run summary.

Local checks: 63 relative links verified in the initial baseline; 34 requirement records and three diagram pairs present. Nine PX scenarios passed with Node 24.19.0 and Playwright 1.62.1. [GitHub's initial prototype job also passed](https://github.com/medinanurbek/Development-of-an-Agentic-AI-Platform-for-University-Academic-Advising-and-Degree-Planning/actions/runs/39462170077/job/118764185344). Later documentation amendments rerun the repository checks; actual PR history/checks remain authoritative.

Publication update on 20 October 2026: the author requested that the prepared materials and architecture become visible on the repository's default main branch. PR #1 records that publication after automated checks. This publication does not constitute supervisor approval. Selected significant-change supervisor review and the actual submission tag remain pending under ACP-16; the review record must identify the actual reviewer, date/version, comments and resulting changes.
