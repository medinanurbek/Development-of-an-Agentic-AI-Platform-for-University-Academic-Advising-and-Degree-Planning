# 4 Existing System Comparison

## 4.1 Systems and evidence boundaries

The comparison uses Peer Advisor in myDU, ARGObot, AdvisingWise and Stellic. Peer Advisor is the available local comparator; ARGObot and AdvisingWise represent research advising agents; Stellic represents deployed degree management. Official university/developer guidance and primary publications support the feature claims [10] [12] [18]–[23]. Other systems were not tested under the Peer Advisor conditions.

D means documented; O observed in testing; P partial support; UR user-reported; NE not established by reviewed evidence. NE is not proof of absence. A planned diploma capability is not an existing result. The comparison is qualitative, because a score would hide different deployment maturity and evidence coverage.

Table 9: Existing systems across ten consistent criteria

| Criterion and operational definition | Peer Advisor | ARGObot | AdvisingWise | Stellic |
| --- | --- | --- | --- | --- |
| C1 Persistent academic profile<br>Structured student data reused across interactions | P: History visible; structured profile NE. Recall failure observed [17]. | NE: Durable profile not established [10]. | D: Conversation-derived profiles stored and updated [12]. | D: Student profile with academic programmes and GPA [18]. |
| C2 Academic record ingestion<br>Transcript import or institutional record synchronisation | UR: File upload unavailable in examined interface; synchronisation NE [17]. | NE: Transcript import or SIS connection not established [10]. | P: Conversational data collection; transcript or SIS ingestion NE [12]. | D: Academic records synchronised from UDSIS at Delaware [19]. |
| C3 GPA calculation<br>Weighted calculation and grade scenarios | O: Correct weighted GPA and maximum achievable result in T01 [17]. | NE [10]. | NE [12]. | D: Simulate GPA using credits and possible grades [20]. |
| C4 Degree audit<br>Completed courses mapped to outstanding programme requirements | NE: Complete audit against an applicable curriculum not tested [17]. | NE: Handbook advising does not establish an audit engine [10]. | P: Advising on requirements; a complete formal audit NE [12]. | D: Programme audits show requirement constraints and progress [18]. |
| C5 Planning constraint checks<br>Prerequisites, course availability and credit limits | O: Correct synthetic AND/OR and calendar cases, T04 and T05 [17]. | NE: Executable constraint validation not established [10]. | P: Course information retrieval; systematic constraint validation NE [12]. | D: Prerequisite and availability warnings; full constraint coverage NE [21]. |
| C6 Saved multi-term plans<br>A structured plan that can be reopened and revised | P: Text schedules generated; structured saved planner NE [17]. | NE [10]. | NE [12]. | D: Multi-term planner linked to degree audit [19]. |
| C7 Academic scenario exploration<br>Effects of alternative grades, courses or programmes | O: GPA target scenario and candidate plan comparison [17]. | NE: Dedicated scenario workflow not established [10]. | NE: Dedicated scenario workflow not established [12]. | D: What-if programmes and GPA simulation [19] [20]. |
| C8 Cited conversational advising<br>Academic answers linked to identifiable supporting sources | P: Source link in T02; citation accuracy not verified [17]. | P: RAG over verified sources; citation presentation NE [10]. | D: Source references in drafts reviewed by advisors [12]. | NE: Cited student-facing AI conversation in reviewed sources [18]–[22]. |
| C9 External master's preparation<br>Profile matching, admission requirements, deadlines and funding | NE: Not assessed [17]. | NE: Web search alone does not establish this workflow [10]. | NE: Graduate advising differs from external admissions preparation [12]. | NE: External application preparation not established [18]–[22]. |
| C10 Institutional portability<br>Configuration for different universities and academic rules | P: AITU deployment observed; transfer to another institution NE [17]. | P: University knowledge base; second-institution validation NE [10]. | P: Institutional resources; transfer validation NE [12]. | D: Multiple university deployments and institution-specific integrations [18] [19] [22]. |

## 4.2 Peer Advisor exploratory testing

Table 10: Peer Advisor exploratory test results

| Test | Input and conditions | Expected and observed response | Result |
| --- | --- | --- | --- |
| T01<br>Weighted GPA and target feasibility | A: 5 credits × 4.00; B: 10 × 3.00; C: 5 × 0.00; D: 10 × 2.00. A further 15 credits; target 3.00; maximum grade 4.00. | Expected and observed: GPA 70/30 ≈ 2.33; required future average 65/15 ≈ 4.33, so target unreachable; maximum 130/45 ≈ 2.89. | PASS |
| T02<br>Missing credits | A: 5 credits × 4.00; B: unknown credits × 3.00; C: 10 × 2.00. Request an exact GPA. | Expected clarification rather than an assumed value. The answer identified missing credits for B and did not invent an exact GPA. | PASS |
| T03A<br>Profile recall | Operator confirms that PA-731, Software Engineering, year 3 and GPA 2.70 were supplied earlier in the same chat. Ask for these four fields. | Expected four fields or an explicit statement of unavailability. Visible answer discussed deadlines and reproduced none of the four fields. | FAIL* |
| T04<br>AND OR rules | All courses 4 credits; limit 8 per term; A already passed; B has no prerequisites. C needs A OR B; D needs C; E needs A AND B. Compare C+E / B+D with B+C / D+E. | Correctly rejected the first plan because E lacked prior B; accepted the second; gave a two-term minimum. Prerequisites must precede their course. | PASS |
| T05<br>Calendar and elapsed terms | A only term 1; B only term 1 and needs A; C only term 2 and needs B; D every term. Start year 1 term 1; 4 credits each; limit 8. | Correct earliest plan: Y1T1 A+D; Y1T2 empty; Y1T3 empty; Y2T1 B; Y2T2 C. Five elapsed terms. Correctly rejected B+C in term 2. | PASS |

Five Russian-language synthetic scenarios each had one observed run. Evidence was compiled on 18 October 2026; exact execution dates and model/application versions were not recorded. Four functional outputs passed. T03A failed to answer the profile question; the operator confirmed the setup, but its original message was not captured and final generation completion was not independently confirmed [17].

A selectable chat history was visible; the earlier claim that history was absent was corrected. T03A establishes a relevance/context-use failure in that instance, not the absence of all memory. The operator reported no attachment facility in the examined interface; no upload-format test was recorded. Waiting about five minutes in T02 was reported, not precisely measured. A separate admissions bot was excluded. Unfavourable design impressions came from one participant and are not population usability findings.

## 4.3 Implications for the proposed platform

Existing systems already support substantial advising and planning. The proposed solution must demonstrate the quality of its connected workflow: confirmed import, persistent profile, explicit calculations, independently checked plans and saved alternatives. The four reviewed systems did not establish the complete selected-programme master’s preparation workflow, but this is an evidence boundary rather than proof that no competing product provides it. Evaluate profile reuse, source correctness, feasibility and user tasks separately; do not infer superiority from a preferred visual design.

Numerical citations refer to [References](references.md).
