# Development of an Agentic AI Platform for University Academic Advising and Degree Planning

A diploma project at **Astana IT University (AITU)** to develop a web and mobile platform for academic advising, verified grade calculations, degree planning and preparation for master's study.

**Status:** requirements and research stage. The functions described below are planned deliverables; application code and deployment instructions are not yet available. Research snapshot: **14 October 2026**.

## Project team

| Role | Member |
| --- | --- |
| Team member | **Medina Nurbek**, Year 3, Software Engineering, Astana IT University |
| Supervisor | **Кыдырбекова Айгерим Балгабаевна**, Assistant Professor, School of Software Engineering |

Medina Nurbek is responsible for user research, requirements, architecture, backend, website and mobile application development, integration, testing and documentation. The supervisor provides academic guidance and supports access to curriculum materials.

## Problem statement

Academic decisions require students to combine grades, credits, assessment weights, curriculum requirements and university rules. Students may need to determine whether a target grade is achievable, compare GPA scenarios, identify outstanding graduation requirements or check that a course sequence satisfies prerequisites.

AITU already provides myDu and Peer Advisor. The proposed contribution is a persistent, student-confirmed academic profile combined with reproducible calculations, explicit scenario comparison and automatic plan validation against structured curriculum rules. The project does not assume that existing tools are ineffective; their capabilities and the added value of this approach need evaluation.

Students considering master's study also need to interpret programme requirements, deadlines, document lists and funding information. A dedicated module will organise official information and compare published requirements with the student's profile.

## Target users and aim

Primary users are students across AITU educational programmes, including graduating students preparing for master's applications. Academic advisors and university representatives will support validation and testing.

The aim is to develop and evaluate a configurable agentic AI platform that supports academic decisions through verified calculations, institutional documents and structured student data. Adaptation will also be tested on one documented programme at another Kazakhstani university.

## Planned functions

| Area | Planned functionality |
| --- | --- |
| Academic profile | Transcript upload, field extraction, student review and correction, persistent records and manual entry of current assessment results |
| Grades and GPA | Credit-weighted GPA, required assessment scores, grade scenarios, explicit formulas and unreachable-target detection |
| Academic advising | Retrieval of applicable academic documents, explanations with sources and clarification when data or rules are missing |
| Degree planning | Remaining graduation requirements, course sequencing and validation of prerequisites, availability and credit limits |
| Master's preparation | Official programme discovery within search criteria, requirements comparison, document checklists, deadlines and published funding information |
| Access | Website and mobile application using a shared backend |

## Scope and data approach

- Target coverage: all AITU educational programmes using the curricula and versions made available for the project.
- Detailed assessment evaluation: **10 real courses**, with explicitly labelled mock documents for additional demonstrations where appropriate.
- Primary student-data workflow: transcript upload with confirmation of extracted fields; manual assessment entry supports current courses.
- Second-university case: adaptation to **one programme** with accessible documents, rather than full institutional deployment.
- Master's information: official sources, retrieval dates and explicit treatment of missing or uncertain requirements. Programme search will not be described as exhaustive.
- Moodle integration: conditional on an agreed access mechanism and API permissions; it is not assumed in the core workflow.
- Optional machine learning: final-grade prediction only if a suitable dataset is obtained and the model can be evaluated against a baseline. External datasets will not establish validity for AITU without local evaluation.

Training a language model from scratch is outside scope. The platform will not independently register courses, submit applications, modify official academic records or issue official scholarship, admission or progression decisions. Every function retained in the final committed scope must work and be tested.

## Initial evidence of relevance

An exploratory Google Forms questionnaire has **8 response records** in the 14 October snapshot, dated 10–12 October 2026. Recruitment continues for the 20 October submission.

| Observation | Responses |
| --- | --- |
| Reported GPA calculation | 6/8 |
| Reported required-score calculation | 6/8 |
| Reported checking remaining graduation requirements | 4/8 |
| Reported at least one difficulty | 6/8 |
| Found applicable rules unclear | 4/8 |
| Found the next action unclear | 4/8 |
| Had difficulty verifying an answer or calculation | 3/8 |
| Accepted transcript or grade-file upload | 4/8 |
| Intend to pursue master's study | 6/8; the other 2 selected “possibly” |

Required-score calculation and GPA scenarios were each selected as interesting future functions by **7/8** records. Two records exceeded the requested three-feature limit. In the six records that followed the limit, each function was selected by **5/6**. Original responses are preserved; this sensitivity comparison applies only to feature interest.

These are self-reported, descriptive findings from a small, self-selected sample: seven respondents reported third-year status and one first-year status. They do not establish university-wide demand, actual adoption or platform effectiveness. The questionnaire did not investigate specific master's application difficulties. Raw response records are not included in this repository.

[Student questionnaire: Academic planning and working with grades at AITU](https://docs.google.com/forms/d/e/1FAIpQLSem1j3Ms7x5lUZmhoqon_Ai7K2eLvkpAFnjYhGcY9nRbwmYQQ/viewform)

The supervisor endorsed the proposed scope, transcript import and master's module, and indicated that the questionnaire is sufficient at the current stage. University representatives are expected to participate during testing. This feedback is academic guidance, not an institutional deployment agreement; survey records are not counted as interviews.

## Proposed architecture

The architecture will separate:

1. Web and mobile clients.
2. Shared backend and confirmed student-profile storage.
3. Versioned university, programme and curriculum configurations.
4. Academic document retrieval with source references.
5. Agent orchestration using a ready-made language model.
6. Deterministic calculation tools and degree-plan validation.
7. Master's information retrieval and preparation workflows.

The language model will interpret requests and explain tool results. Dedicated software components will calculate numerical results and check plan validity. The implementation stack and model provider are **not yet finalised** and will be documented after selection.

## Expected outcomes and evaluation

Expected outcomes include working web and mobile applications, a shared backend, confirmed transcript import, calculation tools, document-based advising, validated degree plans, a master's preparation module, a second-university adaptation case and technical documentation.

Evaluation will cover:

- Transcript extraction against manually checked course, credit and grade fields.
- Calculations against independent reference cases, including missing data and infeasible targets.
- Degree plans against known prerequisite, availability and credit-limit constraints.
- Source support and applicability of academic and admissions information.
- Student task completion, time, clarity and usability, with a manual or simpler-tool baseline where appropriate.
- Review of academic rules and outputs by university representatives.

No improvement in grades, retention or adoption is claimed from the initial questionnaire.

## Current work and next steps

- Project scope reviewed with the supervisor.
- Questionnaire created and the first eight records analysed.
- Interim Project Proposal and Evidence of Relevance prepared for the 14 October checkpoint.
- Next: expand recruitment, refine requirements, obtain and review curricula, select technologies and prepare validation scenarios.
- Live LMS access and a dataset for optional prediction remain unresolved.

## Development setup

This repository currently contains project documentation. There is no runnable application yet. Installation, environment configuration, test commands and deployment instructions will be added with the implementation.

The task-tracker link has not yet been provided.
