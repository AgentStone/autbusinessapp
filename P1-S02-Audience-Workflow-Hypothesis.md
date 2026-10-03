# P1-S02: Application Review Kit audience and workflow

**Status:** Working hypothesis; customer validation is still needed
**Primary audience:** An AppSec engineer or application reviewer at a small software team
**Prepared:** October 2, 2026

## Audience hypothesis

The first audience to investigate is a practitioner who is responsible for reviewing application changes or coordinating application security in a small software team. They need to understand enough about an application and a proposed change to identify security questions, record evidence and findings, and hand useful remediation actions back to engineering.

This is the audience selected for discovery, not a confirmed customer segment. Team size, industry, seniority, review frequency, and whether this person is a dedicated or part-time security practitioner remain open questions.

## Likely review workflow to validate

1. **A review is triggered.** A significant feature or release, a new integration, a change to authentication or sensitive-data handling, or a customer/security requirement prompts a review.
2. **The reviewer establishes context and scope.** They identify the system and change under review, owners, important data, trust boundaries, exposure, and what is out of scope.
3. **The reviewer gathers evidence.** They consult engineers, architecture or data-flow material, configuration, relevant code or pull requests, and existing security-tool results.
4. **The reviewer examines relevant controls.** Depending on the system and change, they consider identity and access, authentication and sessions, input handling, sensitive data, dependencies, logging, and deployment controls.
5. **The reviewer records and discusses findings.** Each concern is described with evidence, impact, and a practical recommendation; uncertain severity or ownership is discussed with the appropriate engineering partner.
6. **The team assigns and follows up.** Findings become owned work items, and the reviewer or team confirms whether important fixes were completed or formally accepted.

The actual sequence, depth, and review trigger may differ by team. These steps are prompts for discovery, not claims about every small software team.

## Current tools: tool categories to ask about

No particular tool has been confirmed for this audience. Ask people to name their actual tools and show how a recent review moved through them. Likely categories include:

| Workflow need | Tool category to investigate | Examples only; not assumed |
|---|---|---|
| Plan and track engineering work | Issue or project tracker | GitHub Issues, Jira, Linear |
| Inspect code and coordinate changes | Source control and code review | GitHub, GitLab, Bitbucket |
| Understand design and data movement | Architecture notes, diagrams, or team wiki | Wiki pages, diagramming tools, repository documentation |
| Gather automated security signals | Code, dependency, secret, or dynamic scanners | Existing CI checks or security-scanning products |
| Record review notes and evidence | Documents, spreadsheets, or review-specific templates | Shared docs or workbooks |
| Discuss questions and handoffs | Team communication | Chat or video meetings |

The key discovery is not which brand they use; it is where scope, evidence, decisions, and remediation status live, and where information gets lost or duplicated.

## Pain-point hypotheses

These are possible problems suggested by the proposed kit's contents. None has yet been confirmed by customer interviews.

- **Review preparation is fragmented:** scope, ownership, diagrams, and evidence may be spread across repositories, tickets, documents, and conversations.
- **Coverage depends on the reviewer:** a reviewer may have to remember which areas to examine, especially when reviews are infrequent or time-boxed.
- **Evidence and decisions are hard to retrace:** teams may record a conclusion without a clear link to the configuration, code, or discussion that supports it.
- **Severity and next steps can be ambiguous:** reviewers and developers may need to align on impact, priority, and what constitutes a sufficient fix.
- **Findings can lose ownership after the review:** recommendations may not become actionable work with an owner, status, and verification path.
- **Existing workflows may already solve this well:** a mature team may have internal standards, security tools, or templates that make another kit unnecessary.

## Neutral customer-discovery questions

Ask for a recent real example before describing the proposed kit.

1. “Can you walk me through the last application security review you worked on, from the event that triggered it to the follow-up?”
2. “Who was involved, and what was your role?”
3. “What information did you need before you could start? Where did you find it?”
4. “Which tools, documents, or checklists did you actually use?”
5. “What took the most time or required the most coordination?”
6. “How did you record evidence, agree on severity, and assign remediation?”
7. “What was missed, repeated, or difficult to verify afterward, if anything?”
8. “What existing process or tool works well enough that you would not want to replace it?”
9. “How often do reviews like this happen, and what typically triggers one?”
10. “If you could change one part of that recent review, what would you change?”

Record the participant's own wording and concrete examples separately from the interviewer's interpretation. Do not count agreement with a suggested pain point as independent validation.

## What remains unknown

- Whether this role experiences these problems often enough to prioritize a solution.
- The team size, application types, and review triggers that best define the initial audience.
- Which tools and internal templates are already in use.
- Whether the greatest friction is review preparation, consistency, severity decisions, or remediation follow-up.
- Whether a standalone toolkit would fit the workflow better than an existing issue tracker, scanner, or internal process.

**Next action:** Use this hypothesis to guide Phase 1 conversations, revise it using concrete examples from 5–8 people in the selected audience, and only then decide whether the audience and problem are strong enough to proceed.
