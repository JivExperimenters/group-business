# Two-Person Team Roles, Cross-Review & Decision Log

## 1. Fair Division of Work Across 2 Team Members (Design, Development & QA)

| Team Member & GitHub Username | Assigned Split | Specific Responsibilities in `JivExperimenters/group-business` |
| --- | --- | --- |
| **Jivitesh Duddu (`@JivExperimenters`)** | **Development + Architecture + Co-QA** | Repo & VitePress/GitHub Pages setup, [Custom Ink](https://www.customink.com/help_center/get-a-price-quote) & [Printful](https://www.printful.com/bulk-custom-t-shirts) audit, reusing [IS117 Brand Studio](https://github.com/JivExperimenters/is117-brand-studio) & [T-Shirt](https://github.com/JivExperimenters/T-Shirt) patterns for B2B club quote math/SQLite queue, and QA cross-review of Design/Bonfire issues. |
| **Minh Nguyen (`@mnguyenht`)** | **Design + UX + Co-QA** | [Bonfire](https://www.bonfire.com/tools/t-shirt-pricing-calculator/) audit, 5-field quote form with separate front/back color inputs + itemized **`DEMO ESTIMATE`** receipt wireframes, Brand Studio visual hierarchy, 15-second classmate walkthrough check, and QA cross-review of Development/Printful issues. |

## 2. Cross-Review Workflow (`Peer Issue → Decision → Linked Commit → Verification → Retry`)

1. Each teammate opens **1–2 constructive GitHub Issues** on [JivExperimenters/group-business/issues](https://github.com/JivExperimenters/group-business/issues) asking the partner to trace a specific source finding (`Custom Ink`, `Bonfire`, or `Printful`) into a proposed feature or check.
2. The assignee responds with **Implement / Investigate / Defer / Decline** and reasoning.
3. Accepted changes reference the issue number in the commit (e.g., `Add 14-day rush feasibility warning (#1)`), state how it was verified, and wait for the partner to retry before closing.

## 3. Decision Log

| Issue | Reviewer & Observation | Decision & Linked Change | Verification & Retry Status |
| --- | --- | --- | --- |
| [#6 — Source check](https://github.com/JivExperimenters/group-business/issues/6) | Corrected the Custom Ink claims, identified the price ranges as illustrative, separated Printful's source-specific discount ceilings, corrected the Bonfire campaign interpretation, and fixed team-name typos. | Implemented in [PR #9](https://github.com/JivExperimenters/group-business/pull/9). | Docs build and rendered-page review. [Retested by @mnguyenht](https://github.com/JivExperimenters/group-business/issues/6#issuecomment-6931078191) on the live site, 2026-11-16 (with AI assistance); name bracket fixed in the log update. Closed. |
| [#7 — Print sides in quote form](https://github.com/JivExperimenters/group-business/issues/7) | Split front and back ink colors into separate fields and added a one-side vs. two-side estimate comparison to the planned check. | Implemented in the proposed design and check ([PR #9](https://github.com/JivExperimenters/group-business/pull/9)); application behavior remains unbuilt. | Docs build; estimate comparison remains a planned product check. [Retested by @mnguyenht](https://github.com/JivExperimenters/group-business/issues/7#issuecomment-6931078513) on the live site, 2026-11-16 (with AI assistance). Closed for the research stage. |
| [#8 — Conflicting research records](https://github.com/JivExperimenters/group-business/issues/8) | Kept `docs/` as a linked November 16 historical site walk-through and marked its first-draft personas and competitor selection as superseded by the README. | Implemented in [PR #9](https://github.com/JivExperimenters/group-business/pull/9); useful delivery/rush and Boise State context retained. | Docs build and rendered-page review. [Retested by @mnguyenht](https://github.com/JivExperimenters/group-business/issues/8#issuecomment-6931078861) on the live site, 2026-11-16 (with AI assistance). Closed. |
