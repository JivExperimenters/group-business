# ClubThread Quotes — Campus Club Merch Quote & Estimate Assistant (IS117-007 Group Business Research)

**Repository:** [JivExperimenters/group-business](https://github.com/JivExperimenters/group-business) · **Published Documentation Site:** [jivexperimenters.github.io/group-business](https://jivexperimenters.github.io/group-business/)  
**Sources Checked:** November 16, 2026

> **Project Distinction & Demo Pricing Notice:** *ClubThread Quotes* is a **B2B / campus-organization quote intake and itemized estimate assistant** built for **student clubs and event organizers** requesting custom event apparel from a local print shop—distinct from a consumer retail storefront. **All prices shown in our examples and future quote calculator are demo estimates for classroom testing, not live merchant quotes.**

## 1. Research Question & Why It Matters

**Research Question:** *How do leading custom apparel quote platforms communicate quantity breaks, ink-color surcharges, size upcharges, and turnaround timelines to student club organizers—and what minimum quote-request inputs and itemized receipt details does a local print shop need to replace back-and-forth email threads?*

**Main Finding:** Comparing **[Custom Ink](https://www.customink.com/help_center/get-a-price-quote)**, **[Bonfire](https://www.bonfire.com/tools/t-shirt-pricing-calculator/)**, and **[Printful](https://www.printful.com/bulk-custom-t-shirts)** shows that every platform relies on three core quote drivers—**garment style**, **order quantity**, and **print complexity (ink colors / print sides)**—yet they differ sharply in minimum thresholds (`25+` vs. `12–24` vs. no minimum), `2XL+` size pricing, and how early delivery deadlines are verified. A simple **4-input quote intake form** (*shirt blank, quantity, number of print colors, and event date needed*) paired with an **itemized demo estimate + saved shop request queue** can let clubs test budgets immediately while keeping real production approval in the shop's hands.

**Evidence vs. Assumptions:** Dated observations from Custom Ink, Bonfire, and Printful (`C01–C03`, captured November 16, 2026) are **evidence**. Our positioning choices, two club-organizer personas (*Maya* / *Devon* & *Elena*), and proposed quote-calculator features are **untested hypotheses and planned checks**—not observed customer interviews.

## 2. At a Glance: Three Relevant Sites Compared (Checked November 16, 2026)

| Platform & Source | Role & Quote Model | Observed Pricing & Quantity Rules | Strengths & Gaps for a Campus Club |
| --- | --- | --- | --- |
| **[Custom Ink](https://www.customink.com/help_center/get-a-price-quote)**<br>([Quotes](https://www.customink.com/quotes), [2026 Pricing Guide](https://www.customink.com/blog/how-to-get-cheap-custom-t-shirts/)) | Full-service bulk & group custom printer | Quote depends on **product, number of ink colors, and quantity**. Screen printing (1–2 colors): `12–24` shirts `$10–$16/shirt`; `48–72` shirts `$5–$10/shirt`; `100+` shirts `$4–$8/shirt`. Free standard shipping in **~2 weeks**; group size-collection form available. | **Strength:** Clear quantity-break math and free artwork review.<br>**Gap:** Full quote details often require opening the Design Lab; clubs under 12 shirts shift to digital pricing. |
| **[Bonfire](https://www.bonfire.com/tools/t-shirt-pricing-calculator/)**<br>([Custom](https://www.bonfire.com/custom/), [Sell Online](https://www.bonfire.com/sell-online/)) | Campaign pre-order & no-minimum bulk POD | **No minimum order quantity (MOQ)**; bulk discounts start at **`25+` shirts**; **no plus-size (`2XL+`) upcharge**. Recommends `1–3` ink colors on 1 side to keep base cost down. Supports **21-day** pre-order campaigns. | **Strength:** Eliminates `2XL+` price surprises and lets members order individually via campaign.<br>**Gap:** 21-day campaign windows are too slow for clubs with a tight 2-week event deadline. |
| **[Printful](https://www.printful.com/bulk-custom-t-shirts)**<br>([2026 Bulk Guide](https://www.printful.com/blog/custom-t-shirts-cost-in-bulk), [Bulk Orders](https://www.printful.com/bulk-orders)) | Print-on-demand + tiered bulk fulfillment | No minimum for POD (`2–5 day` fulfillment); bulk discounts start at **`25` units** (`13%` off Bella+Canvas 3001, dropping `$12.25` to `~$10.66/shirt`, up to `43%–55%` off at `500+`). **MerchShare** link collects team sizes/addresses; no per-color screen setup fee on digital POD. | **Strength:** Fast `2–5` day digital fulfillment and mix-and-match sizes/designs at 25+ units.<br>**Gap:** Higher per-shirt cost (`~$10.66` at 25 units) than screen printing (`$5–$10` at 48–72 units on Custom Ink). |

Full dated observations and source-to-feature traces are in **[competitors.md](./competitors.md)**.

## 3. Two Positions, Two Persona Hypotheses & Brand Studio Direction

| Dimension | Position A (Chosen): Transparent Club Quote Assistant | Position B (Alternative): Open Fundraising Merch Store |
| --- | --- | --- |
| **Target & Workflow** | **Student club treasurers & event leads** requesting `15–100` matching event shirts from a local/campus print shop with a **4-input estimator** (*blank, qty, ink colors, date needed*) and an **itemized demo receipt** + shop request queue. | **Creator-style pre-order campaigns** (like Bonfire's 21-day drops) where individual buyers pay online to fundraise a margin above base cost. |
| **Why Chosen / Rejected** | **Chosen:** Directly fits a local print-shop contractor quote workflow, tests real itemized estimate math, and solves club budget-approval friction without handling real payment processing. | **Not Chosen:** Requires payment splitting, individual shipping addresses, and multi-week campaign windows that miss tight campus event deadlines. |

* **Persona Hypothesis 1 (Primary — Untested Assumption): "Devon, 21 — Campus Club Treasurer"** — Needs to submit an itemized T-shirt cost estimate for 40 club shirts (2-color front logo) to a student senate budget board 3 weeks before an engineering hackathon. *Simulated quote need (not an interview): "I need a PDF/receipt breakdown showing blank cost, print-color fee, and delivery date so our advisor can approve the budget."*
* **Persona Hypothesis 2 (Secondary — Untested Assumption): "Elena, 28 — Local Print Shop Coordinator"** — Reviews incoming club quote requests in a shop queue (`Pending / Quoted / Approved`) and checks whether the club's requested event date is feasible before committing press time.
* **Brand Studio Direction (Reusing [IS117 Brand Studio](https://github.com/JivExperimenters/is117-brand-studio) & [T-Shirt Research](https://github.com/JivExperimenters/T-Shirt) — see [brand-studio.md](./brand-studio.md)):** Restrained **Modernist** utilitarian layout (clean tabular quote breakdown, clear demo badges) with **Sage + Everyperson** brand character (helpful, transparent estimator) and **two honest persuasion elements** (explicit **Demo Estimate** labeling with zero hidden setup fees, and transparent turnaround feasibility checks).

## 4. How One Research Finding Leads to a Proposed Feature & Planned Check

* **Source Finding (`Custom Ink` & `Bonfire`):** Both [Custom Ink's Quote Guide](https://www.customink.com/help_center/get-a-price-quote) and [Bonfire's Pricing Calculator](https://www.bonfire.com/tools/t-shirt-pricing-calculator/) state that custom quote pricing is driven primarily by **product selected, quantity tier, number of ink colors, and print sides**, while Custom Ink notes standard delivery takes **~2 weeks**.
* **Proposed Design Decision:** Build a **4-field Club Quote Form** (*Blank Shirt, Quantity, Ink Colors `1–4`, Date Needed*) that outputs an **itemized demo estimate** (blank subtotal + per-color screen setup/print estimate + rush/standard feasibility flag if `Date Needed < 14 days`) and saves the request into a **Shop Request List**.
* **Planned Check (Not Yet Run):** Ask a classmate reviewer to open the [Custom Ink Quote Guide](https://www.customink.com/help_center/get-a-price-quote) and [Bonfire Calculator](https://www.bonfire.com/tools/t-shirt-pricing-calculator/), trace how the three cost drivers map to our 4-field form, and test whether a peer playing *Devon (Club Treasurer)* can read the itemized demo receipt and state the per-shirt cost and deadline status in under 15 seconds.

## 5. Two-Person Team Roles, Cross-Review & Contributions

This project is built by a **2-person team**, dividing **Design, Development, and QA** fairly so both members contribute research, code/docs, and cross-review verification:

| Team Member & GitHub Username | Assigned Roles (Design, Dev & QA Split) | Research, Review & Decision Contributions |
| --- | --- | --- |
| **Jivitesh Duddu (`@JivExperimenters`)** | **Development, Architecture & Co-QA** | Created `JivExperimenters/group-business`, set up VitePress + GitHub Pages, audited [Custom Ink](https://www.customink.com/help_center/get-a-price-quote) and [Printful](https://www.printful.com/bulk-custom-t-shirts), adapted our [IS117 Brand Studio](https://github.com/JivExperimenters/is117-brand-studio) & [T-Shirt](https://github.com/JivExperimenters/T-Shirt) order-persistence patterns for club quotes, and cross-reviews Teammate 2's Design/Bonfire PRs & issues. |
| **[Teammate 2 Name (`@github_username`)]** | **Design, UX & Co-QA** | Audits [Bonfire](https://www.bonfire.com/tools/t-shirt-pricing-calculator/) and club quote UI patterns, designs the Modernist 4-field quote intake + itemized **`DEMO ESTIMATE`** receipt layout, runs the 15-second classmate verification check, and cross-reviews `@JivExperimenters`\s research & quote-math issues. |

*See **[peer-feedback.md](./peer-feedback.md)** for our GitHub Issues cross-review workflow and decision log.*
