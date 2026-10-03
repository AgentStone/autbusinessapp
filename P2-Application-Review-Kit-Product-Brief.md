# Application Review Kit: provisional product brief

**Status:** Working draft for customer validation; not a final scope or offer
**Prepared:** October 2, 2026
**Discovery audience hypothesis:** AppSec engineer or application reviewer at a small software team
**Related discovery:** [P1-S02 audience and workflow hypothesis](./P1-S02-Audience-Workflow-Hypothesis.md), [P1-S03 interview guide](./P1-S03-Customer-Interview-Guide.md)

## Product promise (draft)

Help an application-security reviewer organize the context, evidence, review questions, findings, and follow-up for one application review.

This is a workflow-support promise only. It does not promise that a review will find every vulnerability, make an application secure, or satisfy a law, regulation, audit, or customer requirement.

## Intended user and task (hypotheses)

- **Intended user:** An AppSec engineer or reviewer at a small software team, as selected for discovery in P1-S01.
- **Core task:** Coordinate and document one bounded application-security review, from intake and scoping through findings and remediation handoff.
- **Other possible users:** A software lead supporting a review or an independent consultant. These are not the primary segment unless interviews show a better fit.
- **Still to validate:** What “small team” means, which application types and review triggers matter, how often reviews occur, who owns each step, and which parts of the workflow cause meaningful friction.

## Prerequisites (draft)

The user should have:

- A defined application, change, or review request and a person responsible for the review.
- A way to contact the application owner and relevant engineering participants.
- Permission to review the relevant system and evidence under the organization's normal process.
- Non-confidential context such as a high-level architecture or data-flow description, relevant links, and known constraints.
- A place to store review notes and track agreed actions according to organizational policy.

The toolkit should not require users to paste credentials, secrets, production data, customer information, exploit details, or source code into a third-party service. The proposed kit is not a hosted service and must not imply that information entered into local templates is automatically protected.

## Candidate minimum contents (validate before building)

The current catalog proposes six resources. Keep them only if interviews show they support one coherent, useful review task:

1. **Review intake form:** Capture the request, trigger, application/change, stakeholders, deadline, and approvals needed to begin.
2. **Scope and data-flow worksheet:** Record assets, data types at a high level, trust boundaries, relevant components, assumptions, exclusions, and evidence references.
3. **Authentication review checklist:** Prompts to examine identity, authentication, session creation/expiry/revocation, recovery, and related evidence when relevant to the scope.
4. **Findings report template:** Record a concise observation, affected area, evidence reference, impact rationale, recommendation, owner, and status without requiring sensitive details in the template.
5. **Severity decision worksheet:** Document impact, likelihood or exploitability considerations, rationale, uncertainty, and who agreed to the decision. Do not present an unvalidated numeric score as authoritative.
6. **Remediation tracker:** Track finding ID, action, owner, priority, due date if agreed, status, verification evidence reference, and closure/acceptance decision.

**Scope guard:** This is a candidate set, not six commitments. Remove, combine, or add resources based on evidence. Avoid expanding into a full penetration-testing manual, automated scanner, compliance certification, security guarantee, or live issue-tracker integration.

## Draft user workflow and outputs

1. **Prepare:** The reviewer and application owner agree on the trigger, purpose, participants, permissions, and time boundaries using the intake form.
2. **Scope:** The reviewer records relevant components, high-level data flows, trust boundaries, assumptions, and exclusions. Sensitive evidence stays in the organization's approved systems; templates should hold references where practical.
3. **Review:** The reviewer uses only relevant checklist prompts and records evidence references and open questions.
4. **Decide and report:** The reviewer documents findings, rationale, uncertainty, and recommendations; severity decisions are reviewed with appropriate owners.
5. **Hand off and follow up:** The team assigns actions in its existing work system, tracks their state, and records verification or a documented acceptance decision.

**Expected output (draft):** A bounded scope record, organized evidence references, a review summary, documented findings and rationale, and an actionable follow-up list. The toolkit organizes a human review; it does not perform or certify one.

## Candidate delivery formats

The live catalog currently lists Markdown, XLSX, and DOCX. Treat those as **proposed**, not selected. Ask interviewees which formats they already use, whether files must work offline, and what tools/versions/accessibility requirements apply. Prefer the smallest set that fits their workflow; do not build every format without evidence. No file format, price, download, or delivery mechanism is committed by this draft.

## Safety, privacy, licensing, accessibility, compatibility

- Label fictional examples clearly; never use customer data in samples.
- Avoid fields inviting credentials, secrets, production records, or unnecessary personal data. Recommend recording references rather than copying sensitive evidence into a template.
- State that users must follow their organization's authorization, data-handling, retention, and incident-escalation policies.
- Do not promise security, compliance, exhaustive coverage, or business outcomes.
- Use original or properly licensed material; record licenses for any third-party content before distribution.
- Design documents and spreadsheets with semantic headings, descriptive labels, keyboard navigation, adequate contrast, and readable print/export layouts.
- Test editable formats in target software and versions only after discovery establishes what customers use; publish compatibility limits before any eventual offer.
- Confirm privacy, purchase, support, refund, licensing, and delivery terms before collecting data or taking payment.

## Acceptance checklist for a future prototype

The prototype is not ready for release until all applicable checks pass:

- [ ] A target user can explain the intended user, task, prerequisites, and limitations without a live explanation.
- [ ] A target user can take a fictional review scenario from intake to a documented handoff using only the included resources.
- [ ] Each field has a clear purpose; no duplicate resource or unnecessary sensitive-data field remains.
- [ ] The findings and severity prompts distinguish observation, evidence, impact rationale, recommendation, uncertainty, and owner.
- [ ] A reviewer can omit irrelevant checks and record out-of-scope items without implying they were assessed.
- [ ] Users can preserve sensitive evidence in approved systems and reference it without copying it into the kit.
- [ ] A second reviewer can understand the review record and reproduce the handoff from the documented references.
- [ ] Files are keyboard accessible, use semantic structure, have readable contrast, and work in confirmed target formats/versions.
- [ ] Samples are fictional, clearly labeled, and do not imply guaranteed security, compliance, or outcomes.
- [ ] Instructions explain intended use, limitations, version, and where customer-specific policy takes precedence.

## Decisions intentionally left open

- Whether interviews validate this audience and problem.
- Which resources belong in the minimum toolkit and whether any can be removed.
- Product name, final copy, formats, compatibility matrix, price, licensing, delivery, support, and update policy.
- Whether an individual toolkit is preferable to an existing customer workflow or any future bundle.
- Whether a prototype test indicates users can complete the task without facilitator help.

**Decision gate:** Treat this brief as a hypothesis for discovery. Do not mark Phase 2 complete, finalize the offer, set a sale price, enable checkout, or make a launch commitment until the relevant Phase 1 evidence and Phase 2 user review are available.
