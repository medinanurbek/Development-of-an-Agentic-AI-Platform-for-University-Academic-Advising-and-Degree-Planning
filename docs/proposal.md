# 1 Project Proposal

## 1.1 Problem and target users

Academic planning requires grades, credits, assessment weights and rules applicable to a particular programme and intake. These inputs may be distributed across systems and documents. Students need to identify missing information, calculate achievable targets, check remaining requirements and select course sequences that respect prerequisites and availability. Understanding university life at admission does not remove these later decision tasks.

The available survey reports difficulties in 28 of the 30 records answering that question. GPA calculation and elective selection each appear in 17/30; graduation checks appear in 14/30. These are reported experiences in a voluntary sample, with 20 jointly incomplete records, rather than a population estimate [1]. Peer Advisor already performs useful calculations and hypothetical planning. The project contribution is a persistent workflow linking confirmed records, explicit services, saved alternatives and independently checked results, evaluated in the AITU setting [17].

Primary users are AITU students across declared programmes and intakes, including students preparing master’s applications. An authorised operator maintains institutional sources. Academic advisors and university representatives contribute rule review and testing. Medina Nurbek is the sole team member; the supervisor is Kydyrbekova Aigerim Balgabayevna.

## 1.2 Aim and objectives

The aim is to develop and evaluate a configurable agentic AI platform for academic advising, degree planning and master’s preparation using confirmed academic records, reproducible calculations, applicable sources and independent plan validation.

• Investigate user tasks and existing approaches; maintain evidence-linked, testable requirements.

• Implement authenticated profiles, editable transcript import, explicit confirmation and manual assessment entry.

• Implement GPA and required-score services, curriculum audits, plan validation and bounded plan generation with saved alternatives.

• Coordinate academic tools through an agent that provides sourced explanations and preserves missing or uncertain conditions.

• Deliver web, Android and iOS workflows, declared AITU configurations, one second-university adaptation and selected master’s preparation workflows.

• Evaluate correctness, extraction, source support, security, cross-client behaviour and task outcomes against independent references and controlled baselines.

## 1.3 Scope and expected outcomes

Table 1: Implementation scope and institutional coverage

| Area | Committed implementation and coverage |
| --- | --- |
| Academic record | Student accounts and persistent profiles; confirmed text-based PDF transcript import; editable course mappings; manual current scores; owner-controlled export and deletion. |
| Academic calculations | Weighted GPA and grade scenarios, required assessment scores and applicable eligibility explanations. Display inputs, formulas and source versions; request missing information. |
| Degree planning | Mandatory courses, elective groups and credit requirements; AND/OR prerequisites, availability and load checks; independently validated plans and comparison of saved alternatives. |
| AITU coverage | All AITU programmes and curriculum versions declared in the official source inventory. Detailed assessment calculations evaluated on ten real courses. Unavailable sources remain coverage gaps; labelled mock documents may only support demonstrations. |
| Master's preparation | At least five real programmes at two or more universities. Official source/intake information, profile matching, documents, deadlines and published funding opportunities; sourced preparation checklists and refresh indicators. |
| Clients and adaptation | Working website in Chrome and Edge plus Android and iOS applications sharing one backend. Adaptation is evaluated on one programme at a second Kazakhstani university using documented configuration differences. |

Expected outputs are the working clients and shared backend, confirmed academic records, academic services, versioned source/configuration inventories, master’s comparisons and checklists, reproducible evaluation evidence and versioned project documentation. All 31 Must requirements must pass before full fulfilment is claimed. The Should usability target and two Could extensions are reported separately.

Training an LLM from scratch, changing official records, course registration and automatic application submission are outside scope. The system provides guidance rather than official scholarship, progression or admission decisions. LMS integration depends on authorised access; a trained grade predictor depends on suitable data and a separate defensible experiment. Neither extension displaces the core transcript/manual-input workflow [41].

Numerical citations refer to [References](references.md).
