# 2 Evidence of Relevance

## 2.1 Method and evidence quality

The Russian-language Google Forms survey concerns academic planning and grades in AITU. The response sheet was exported as XLSX and CSV on 20 October 2026. Both contain 50 submission records and agree on the answers used in the analysis. The survey is a voluntary convenience sample [1].

All 50 records answer programme, year, outcome, time, changed actions and master’s intention. Thirty answer the six core questions: academic tasks, sources, difficulties, help preferences, features and data provision. Twenty leave these questions unanswered. Each result is therefore reported with the number of responses available for that question.

Checkbox counts record each selected option once per record. Denominators use the number answering each question, and percentages can exceed 100% in total. Eleven help-preference answers exceed two selections; six feature answers exceed three. Full results are retained alongside within-limit sensitivity results, with no entire record removed. There is no inferential significance or population margin-of-error claim.

Table 2: Sample and task outcomes

| Evidence item | Observed distribution | Interpretation |
| --- | --- | --- |
| Study year | 50 records: Year 1 8; Year 2 14; Year 3 28. Core subset: 5, 8 and 17 respectively. | All three years are represented; Year 3 predominates. |
| Programme | 15 self-entered labels; Software Engineering 16/50. | Labels do not verify coverage of every official programme or cohort. |
| Latest task outcome | Fully resolved with extra checks 17/50; without extra help 10/50; partial 13/50; unresolved 9/50; not applicable 1/50. | 22/50 report partial or no resolution; existing tools also suffice in some cases. |
| Time and actions | 21/50 report at least 16 minutes; 28/50 report changing preparation or plans. | Recalled time and self-reported change do not measure system performance or better outcomes. |
| Master’s intention | Yes 26/50; possibly 13/50; no 8/50; already studying 3/50. Core subset: 19 yes, 9 possibly, 2 no. | 39/50 select yes/possibly; individual feature needs remain untested. |

## 2.2 Reported needs and proposed functions

Table 3: Reported academic tasks and difficulties

| Question | Selected options among 30 answering records |
| --- | --- |
| Recent tasks | GPA 17; electives 17; remaining graduation requirements 14; required scores 12; exams/retakes/summer study 12; scholarship conditions 8; plan change after failure/transfer/leave 0. |
| Difficulties | Any difficulty 28; none 2. Distributed information 11; unclear rules 11; unclear next action 11; conflicting sources 10; missing inputs 9; manual work 9; checking an answer 9. |
| Sources | Generic AI 23; friends 14; official documents 10; university advisor/staff 8; myDU 7; own calculations 7; LMS 6; teachers 4; Peer Advisor 1; student bot option 0. |
| Data provision | Authorised LMS connection 21; transcript upload 11; manual input 3; general advice only 1; undecided 3. Options overlap. |
| Open answers | 16 records describe a recent situation; 19 contain bot comments, including non-use/placeholders. Examples mention target GPA, remaining scores, electives, scholarship and summer-study risk. |

Table 4: Preferences and sensitivity to selection limits

| Proposed support | All answers | Within selection limit |
| --- | --- | --- |
| Digital assistant with calculations and sources | 19/30 | 9/19 |
| Digital tool together with human consultation | 14/30 | 4/19 |
| Grade and GPA scenario comparison | 19/30 | 13/24 |
| Remaining graduation requirements | 15/30 | 9/24 |
| Required scores | 13/30 | 8/24 |
| Remaining-course plan | 12/30 | 8/24 |
| Recalculation after changes | 12/30 | 8/24 |
| Explanations with sources | 12/30 | 6/24 |
| Action plan and deadlines | 10/30 | 4/24 |

Scenario comparison leads the feature answers in both views. Interest in an authorised LMS connection does not grant API access. Upload/manual input remain design options while access is unresolved. The survey did not ask about countries, specific master’s programmes, application difficulties, documents, deadlines or funding; it cannot validate demand for every master’s feature. One Peer Advisor selection cannot establish its prevalence or reliability.

## 2.3 Requirements informed by the evidence

Table 5: Evidence to requirements

| Theme | Evidence and requirement response |
| --- | --- |
| R1 Verifiable calculations | Reported GPA/required-score tasks and scenario interest → FR04–FR06, FR12; NFR01. |
| R2 Applicable explanations | Unclear/conflicting rules and difficulty checking answers → FR07, FR08, FR16; NFR03. |
| R3 Progress and plans | Electives and remaining requirements → FR09–FR12; explicit AND/OR checks are an engineering choice. |
| R4 Record continuity | Upload preference and manual work → FR01–FR03, FR20; NFR02, NFR10, NFR11. |
| R5 Guided workflow | Unclear next action and assistance preferences → FR13; NFR05, NFR06, NFR12. |
| R6 Master’s preparation | Stated intentions and supervisor endorsement → FR17–FR19; feature-level demand remains to be tested. |
| R7 Coverage and adaptation | Year/programme diversity and supervisor-supported scope → FR14, FR15; NFR07. Full coverage is not a survey finding. |

Verified findings concern properties of the supplied records and reported experiences. Time savings, preference for the final application, reliable profile reuse, complete institutional coverage and accurate master’s checklists remain hypotheses requiring testing. Numerical acceptance thresholds are engineering proposals, not survey results.

The survey provides available-data evidence; no completed interviews or institutional-client agreement is claimed. The supervisor accepted the questionnaire for this stage and proposed university testing [41]. Any separately enforced 3–5 discussions/agreement requirement still needs documented evidence [47]. Follow-up should span study years and enforce checkbox limits.

Numerical citations refer to [References](references.md).
