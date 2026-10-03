# P1-S03: Application Review Kit customer interviews

**Purpose:** Learn how application-security reviews work today for AppSec engineers or reviewers at small software teams. Discover actual workflows, tools, friction, and existing alternatives before proposing a solution.

**Target:** 5–8 people who have personally participated in an application-security review at a small software team. Speak with the person who did the work where possible, not only a buyer or manager.

**Current state:** Interview preparation only. No customer interviews have been conducted or represented as research.

## P1-S04: Keep the conversation about current behavior first

For the first part of every interview, learn about a recent real review without mentioning or describing the proposed Application Review Kit. Do not show the product page, list proposed contents, or ask whether the participant likes or would buy the concept during this discovery portion.

Use the sequence below:

1. Explain the research purpose, privacy limits, and note-taking permission without pitching a solution.
2. Confirm that the person has personally participated in a recent application-security review.
3. Reconstruct the review from its trigger through follow-up, using the questions in sections 2–4.
4. Ask about actual tools, effort, workarounds, what works well, and what they would change.
5. Only after the participant has finished describing current behavior, use the optional concept probe in section 5. It is acceptable to skip this probe if time is short.

If the participant asks what is being built, say: “I can explain the concept at the end if there is time. First, I want to understand how your last review worked so I don't lead your answers.” If they volunteer an idea that resembles the concept, ask them to explain their experience without confirming or selling the idea.

Record whether the current-process-first sequence was followed in the Interview Log. If the concept is introduced early or the sequence otherwise changes, note the deviation and avoid treating that interview as unprompted evidence for the concept.

## Before the interview

- Recruit people who have completed or participated in a real application review recently. Confirm their role and approximate team size.
- Aim for five completed interviews first; continue toward eight if the results are inconsistent or important perspectives are missing.
- Schedule 25–30 minutes. Explain that this is research about their current process, not a sales call.
- Keep the proposed toolkit and its contents out of the opening, recent-review reconstruction, friction, and current-alternatives sections.
- Ask permission before taking notes. Ask separately before recording; do not record by default.
- Do not request source code, vulnerability details, customer data, credentials, architecture documents, or other confidential information.
- Use an anonymized participant ID such as `P1`, `P2`, and so on. Do not put names, employers, contact details, or confidential details in the workbook.
- Keep the interviewee's words separate from your interpretation.

## Invitation template

**Subject:** 25-minute research conversation about application security reviews

Hi,

I am learning how small software teams carry out application-security reviews: what triggers them, how reviewers gather information, which tools they use, and what happens to findings afterward. I am looking for people who have personally participated in a recent review.

Would you be open to a 25-minute conversation about your process? This is discovery research, not a sales call. Please do not share source code, customer information, or confidential security details. I will record notes without your name or company unless we separately agree otherwise.

If you are available, please suggest a time that works for you.

Thank you,
 CAB Synergy

## Interview script (25–30 minutes)

### 1. Opening and permission (2 minutes)

> Thank you for speaking with me. I am researching how application-security reviews happen today, especially in small software teams. I am interested in a recent real example, including what works well. I am not evaluating your performance or selling a product. Please avoid sharing confidential information. May I take anonymized notes? I will not record unless you explicitly agree.

Confirm the participant's role and that they personally took part in at least one application-security review. If not, thank them and do not count the session toward the target.

### 2. Reconstruct a recent review (8–10 minutes)

1. Think of the most recent application-security review you personally worked on. What triggered it?
2. What was your role, and who else was involved?
3. What happened first? What happened next, through the final follow-up?
4. What information did you need before you could start, and where did you get it?
5. Which tools, documents, or checklists did you actually use?
6. What happened after a concern or finding was identified?

**Neutral probes:** “What happened next?” “Can you give me an example without sharing confidential details?” “How often does that happen?” “Who owned that step?”

### 3. Understand effort and friction (6–8 minutes)

7. Which part took the most time or coordination?
8. Was there a point where progress stalled or you had to redo work? What happened?
9. How were evidence, severity decisions, owners, and remediation tracked?
10. What was difficult to verify after the review?
11. What parts of the process work well and should not be changed?

Do not suggest problems from the hypothesis brief unless the participant raises a related topic. If they do not report a problem, record that as useful evidence.

### 4. Explore current alternatives and frequency (4–5 minutes)

12. What existing internal process, tool, or template helps with this today?
13. How often do reviews like this happen, and what usually triggers one?
14. Who decides whether to spend time or money improving the process?
15. If you could change one part of your most recent review, what would you change?

### 5. Optional concept probe (last 2–3 minutes only; P1-S04)

Only after sections 1–4 are complete, and only if there is time, briefly describe the concept:

> I am considering a practical set of review intake, scoping, authentication-check, findings, severity, and remediation templates. Based on the process you described, where—if anywhere—would a resource like that fit? What would it need to do to be useful? What would make it unnecessary or a poor fit?

Do not treat positive reactions to this description as proof of demand. Prioritize past behavior, concrete workarounds, frequency, and impact over hypothetical purchase intent.

### 6. Close (1 minute)

> Is there an important part of the review process I did not ask about? Is there another person who has personally done this work and might be willing to speak with me?

Thank them. Ask permission before contacting any referral.

## Immediately after each conversation

Complete one row in the workbook's **Interview Log** tab using the participant ID only.

1. Record the participant's role and approximate team-size band, not their name or company.
2. Capture the review trigger, actual sequence, tools, and handoffs described.
3. Write down the most important friction in the participant's own words, omitting identifying or confidential details.
4. Note frequency, time or coordination impact, and any workaround or current alternative.
5. Record what works well and any evidence that challenges the current audience or pain-point hypotheses.
6. Separate direct observations from interpretation and proposed implications.
7. Record a follow-up only with the participant's permission.
8. Mark whether the current-process-first sequence was followed. Note any early concept reveal or other deviation.

## Synthesis after 5–8 interviews

- Group repeated needs and workflow breakdowns; keep contradictory or outlier evidence visible.
- Count how many independent participants described each theme without prompting.
- Record concrete examples, frequency, impact, current workaround, and whether an existing tool already solves the issue.
- Use participants' wording in the customer/problem brief, with identifying details removed.
- Revisit the target role and small-team assumption. Do not proceed just because people liked the concept.
- Continue discovery or revise the segment if fewer than three participants independently describe the same meaningful problem, or if existing alternatives solve it adequately.
- Use the **Interview Synthesis** tab in the project tracker and the companion `P1-S05-Interview-Synthesis-Framework.md`. Treat candidate topics there as prompts only, not findings. Do not count repeated mentions by one person as multiple participants.
- Record evidence and participant wording separately from interpretation; include objections, what already works, and interviews that contradict a candidate theme.
- Do not mark P1-S05 complete until interviews have been conducted and the synthesis contains actual participant evidence, distinct-person counts, alternatives, language, and counterevidence.

## Research log guidance

The workbook provides eight participant rows so the target can flex from five to eight conversations. Keep contact information separately from research notes if follow-up is needed. Do not store names, employer names, or confidential security details in this project tracker.
