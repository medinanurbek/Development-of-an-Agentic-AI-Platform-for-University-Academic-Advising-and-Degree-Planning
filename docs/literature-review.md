# 3 Literature Review

## 3.1 Review scope and comparison of approaches

The focused narrative review covers fifteen publications from 2022–2026, including journals, conference papers and the explicitly identified AdvisingWise preprint. It compares formal academic models, optimisation, advising agents and user/evaluation research. Computational feasibility, perceived usefulness and educational outcomes are treated as different forms of evidence; this is not an exhaustive systematic review.

Stavrinides and Zuev model prerequisite networks as directed graphs; Hahn et al encode admissible plans using Answer Set Programming. Graphs explain dependency structure, while executable rules can check combinations of programme conditions. Neither guarantees that an incorrectly encoded or outdated rule applies to a particular student. The project therefore needs versioned curricula and independent rule review [2] [3].

Khamechian and Petering connect individual plans to departmental course offerings. Christou et al use mixed-integer planning for completion time, difficulty and GPA objectives. Slim et al separate course selection from semester allocation. Together they show why offerings and workload must be explicit and why the shortest plan can differ from the most manageable plan. Reported local speed improvements cannot be assumed at AITU, and linearising an integer model does not establish polynomial overall complexity. The proposed solver will report measured runtime, horizon and status, with optimum claims independently checked [4] [5] [6].

Samaranayake et al link a reusable requirement model to interactive study choices. Wagner et al distinguish formal rules from process-mined historical recommendations. Lera-Leri et al optimise skill gaps under academic constraints. A frequent historical path is not a mandatory prerequisite, and course-to-skill coverage does not prove individual mastery. Their transferable contribution is explicit progress/gap representation; master’s admission criteria require separate official evidence [7] [8] [9].

ARGObot coordinates handbook retrieval, search and human involvement, but its implementation comparison changes both the model and orchestration. Sule and Mawlood Yunis improve retrieval routing and metadata filtering; retrieval speed does not establish plan validity. AdvisingWise adds student profiles and advisor approval, with small graduate-CS evaluation and mandatory human review. These approaches support scoped retrieval and oversight, while motivating a controlled comparison using the same model and evidence with and without academic tools [10] [11] [12].

Bilquise et al study chatbot acceptance in two UAE universities; Omirali et al investigate expectations at Narxoz University. Cross-sectional intentions and views of a future system do not show sustained adoption or better decisions. The local survey should therefore inform tasks, while observed completion, errors and explanation understanding test actual usability [13] [14].

ReAct provides a tool-action/observation pattern, while RAGAs provides retrieval/generation diagnostics. Their benchmarks do not contain AITU rules, and faithfulness to an outdated document can still produce inapplicable advice. Exact calculation and constraint tests, source-applicability review and observed user tasks must complement model-based metrics [15] [16].

## 3.2 Structured analysis of the fifteen publications

Table 6: Analytical comparison of publications 1 to 5

| Publication | Task and method | Data and evaluation | Limitations and project application |
| --- | --- | --- | --- |
| Stavrinides and Zuev 2023 [2] | Explain curriculum dependencies using a directed course-prerequisite graph and structural measures. | Caltech 2021–2022 catalogue: 771 courses, 772 links; topology and centrality analysis. | Graph structure does not establish graduation compliance or student outcomes. Use for dependency explanations; add a separate requirement validator. |
| Hahn et al 2024 [3] | Represent academic regulations and admissible plans through Answer Set Programming. | University of Potsdam study programmes; executable rule specifications and an exploration interface. | Rule encoding and applicability must be checked against source regulations. Use versioned institutional rules and explicit unknown conditions. |
| Khamechian and Petering 2022 [4] | Optimise individual course sequences and departmental offerings with mathematical models and CPLEX. | Real and artificial instances of different sizes; computational feasibility and scheduling outcomes. | A feasible model depends on correct offerings and does not prove earlier real graduation. Include term availability and bounded solver evaluation. |
| Christou et al 2024 [5] | MILP planning for completion time, difficulty balance and expected GPA. | American College of Greece cases; reported solving below ten seconds versus a prior manual process above an hour. | Local process comparison does not establish transferable time savings. Separate hard constraints from preference objectives and measure AITU cases. |
| Slim et al 2025 [6] | Two-stage optimisation selects degree courses and distributes them across semesters. | University of New Mexico data and 50-, 100- and 200-course instances; prerequisite/corequisite and workload cases. | Linearisation does not prove polynomial complexity with integer decisions. Use measured runtime and an independent validator, not a theoretical speed guarantee. |

Table 7: Analytical comparison of publications 6 to 10

| Publication | Task and method | Data and evaluation | Limitations and project application |
| --- | --- | --- | --- |
| Samaranayake et al 2023 [7] | Interactive decision support connects a common requirement representation to dynamic academic graphs. | Wisconsin–Whitewater catalogue: 154 majors, 121 minors and about 3,300 courses; functional demonstrations. | No controlled evidence of fewer planning errors or higher completion. Adopt explicit requirement groups and evaluate task outcomes separately. |
| Wagner et al 2023 [8] | Combine process mining with Event Calculus and ASP for study monitoring and planning. | Preliminary RWTH Aachen campus-record analysis; substantial integration/evaluation remains future work. | Historical paths are not compulsory rules or causal evidence. Keep recommendations separate from official prerequisites and confirmed completion. |
| Lera-Leri et al 2025 [9] | Optimise degree plans against professional skill gaps under academic constraints. | Western Sydney ICT programme: 82 units, seven majors; 121 SFIA skills and 118 job profiles. | Expert skill mappings do not demonstrate individual mastery or admissions eligibility. Transfer the explicit gap model to sourced master's requirements. |
| Tamascelli et al 2025 [10] | ARGObot combines an LLM, handbook retrieval, web search and human involvement. | University advising/handbook setting; comparison also changes the model from Gemini to GPT-4. | Model and orchestration effects are confounded. Use tools with sources, and compare the same model/corpus with and without academic services. |
| Sule and Mawlood Yunis 2026 [11] | Route exact identifiers and semantic queries through hybrid retrieval and metadata filters. | Wilfrid Laurier advising queries; reported 97% search-space reduction and latency from 8.2 to 1.3 seconds. | Retrieval efficiency does not establish plan validity; results depend on collection and configuration. Filter institution/intake and validate plans separately. |

Table 8: Analytical comparison of publications 11 to 15

| Publication | Task and method | Data and evaluation | Limitations and project application |
| --- | --- | --- | --- |
| Jiang et al 2025 [12] | AdvisingWise uses multi-agent retrieval, student background and adviser validation. | Graduate CS advising at one university; 20 expert-review queries and eight advisers. Preprint. | Small single-domain evaluation and mandatory human review limit autonomous claims. Retain review/escalation and record actual oversight. |
| Bilquise et al 2024 [13] | Model chatbot acceptance with technology-acceptance constructs and PLS-SEM. | Survey of 207 students at two UAE universities; self-reported intentions and acceptance factors. | Cross-sectional intentions do not show sustained adoption or better academic decisions. Pair preference evidence with observed usability tasks. |
| Omirali et al 2025 [14] | Describe local student trust and expectations for future educational agents. | Survey of 150 Narxoz University students in Kazakhstan before practical implementation. | One institution and an imagined system cannot prove AITU demand or deployed effectiveness. Investigate local needs without treating favourable attitudes as outcomes. |
| Yao et al 2023 [15] | ReAct alternates model reasoning, external actions and observations. | HotpotQA, FEVER, ALFWorld and WebShop; question-answering and interactive tasks. | General benchmarks contain no AITU regulations. Use bounded typed tools and domain-specific correctness/selection tests. |
| Es et al 2024 [16] | RAGAs uses model-assisted faithfulness, answer relevance and context relevance metrics. | WikiEval from 50 Wikipedia pages, annotated by two people; metric/human preference comparison. | Evaluator errors and outdated but faithful evidence remain possible. Combine diagnostic metrics with source applicability review and exact academic tests. |

## 3.3 Research gap and project rationale

The contribution is the implementation and evaluation of an integrated AITU workflow: confirmed records, reproducible numerical tools, saved scenarios, applicable evidence and independently validated plans. Comparable systems already exist, so integration alone is not claimed as a new scientific method. Coverage of all declared AITU programmes and configuration of one second-university programme require authoritative data and explicit adaptation tests. Master’s preparation extends gap analysis but needs its own admission-source and matching evaluation.

RQ1 How accurately does the configurable audit/validation service identify invalid plans across supported institutional cases?

RQ2 Does adding academic tools and orchestration improve end-to-end task correctness relative to a RAG assistant using the same model and evidence?

RQ3 Can students complete planning and preparation tasks efficiently and understand the sources, assumptions and unresolved conditions?

Numerical citations refer to [References](references.md).
