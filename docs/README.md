# Project documentation

Public analysis and design baseline dated 20 October 2026. The editable Markdown chapters correspond to all eleven assignment components. The original Word report is retained locally; this public export excludes live raw-response URLs and private screenshots. The four review clarifications below are recorded in this export; they have not yet been applied to the local Word file.

| Assignment component | Document |
| --- | --- |
| 1 | [Proposal](proposal.md) |
| 2 | [Evidence Of Relevance](evidence-of-relevance.md) |
| 3 | [Literature Review](literature-review.md) |
| 4 | [Existing System Comparison](existing-system-comparison.md) |
| 5 | [Technology Comparison](technology-comparison.md) |
| 6 | [Requirements](requirements.md) |
| 7 | [Architecture](architecture.md) |
| 8 | [Ux Prototype](ux-prototype.md) |
| 9 | [Verification And Evaluation](verification-and-evaluation.md) |
| 10 | [Project Management And Risks](project-management-and-risks.md) |
| 11 | [Supervisor Feedback](supervisor-feedback.md) |

- [Current tracker and requirement traceability](tracker-and-traceability.md)
- [References](references.md)
- [Requirement acceptance register](requirements-register.json)
- [Architecture decision record](adr/0001-modular-backend.md)
- [Editable diagrams and exports](../diagrams/README.md)
- [Submission and review procedure](submission-checklist.md)

## Clarifications from consistency review

1. D01 on the component diagram denotes PostgreSQL, not the academic-profile entity. Workflow tables now name the profile without that identifier.
2. The cumulative-GPA target belongs to FR05/AT05. FR06/AT06 remains the assessment-score calculation.
3. “Pending graduation” in the demonstrator is a presentation label for a conditional requirement; actual conditional eligibility must be supported by an official policy.
4. The manual B0 import-equivalent task is transcription and field verification, with the same required final record.

The original report contains historical repository observations. Current repository/PR status is recorded in the root README and actual Git history; the historical snapshot is not a live status report. References [1] and [17] refer to private primary evidence and its public aggregate/case summaries respectively.
