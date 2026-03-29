# 2026 audit — full offer, process & gaps (369 Leads)

This document benchmarks your **pack** against common **2026 home-services / contractor marketing** signals and **agency delivery** norms. Third-party stats vary by market and methodology—use ranges for **positioning**, not guarantees.

**Sources consulted (industry summaries / public guides):** WebFX home-services benchmarks; contractor marketing benchmark articles (e.g. BaaDigi-style CPL bands); channel ranking reports (e.g. Siana); lead conversion research (e.g. Estatehub-style phone-lead stats); Meta business updates on **Housing / Special Ad Category**; cold outreach benchmark roundups (Mailshake, outbound blogs). Re-verify numbers before putting them in paid ads.

---

## 1. Offer structure (three tiers)

| Element | Your pack | 2026 benchmark lens | Verdict |
|--------|-----------|---------------------|--------|
| Retainer vs PPL | Retainer + defined deliverables | Standard for “partner” positioning; many contractors still compare to **$/lead** | **Strong** — translate retainer to **effective CPL** in sales (you already do in ROI tool) |
| Exclusivity | Territory lock | High differentiation vs marketplaces | **Strong** |
| Guarantee | Qualified lead count → month-2 credit | Prefer **credit** over cash refund (chargeback risk) | **Strong** — already in legal template |
| Tiers | $1.5k / $2.5k / $4.5k — **planning ranges:** ~10–15 / ~20–25 / **30+** qualified leads/mo (market-dependent) | Same CPL bands; Growth **effective CPL** at ~22 leads ($2,500 ÷ 22 ≈ **$114**) is still **favorable vs** many public roofing CPL bands **if** exclusivity + speed hold | **Honest positioning** — avoids over-promising; still sell **system + territory** |

**Add (recommended):**

- **One-pager “How we count a qualified lead”** (client signs at sale) — reduces month-30 disputes.  
- **Optional add-on line item:** “Extra ad spend passthrough” with a **monthly cap** in SOW (stops scope creep arguments).  
- **Referral clause:** 1 month at **$X credit** for intro that signs — accelerates clients 4–10.

---

## 2. Contractor / homeowner performance benchmarks (context for sales)

Use carefully in calls; cite as “industry ranges, not promises.”

- **CPL (roofing, paid channels):** public bands often **~$150–$230+** depending on source and geography.  
- **Lead → customer conversion (home services):** broad averages **single digits**; **phone** and **speed** skew outcomes heavily.  
- **Speed-to-lead:** multiple industry writeups cite **large** lift when response is **minutes** vs **hours**; **first responder** advantage is a standard talking point.  
- **Marketing spend:** **~5–10% of revenue** is a common “rule of thumb” for growth-minded contractors—your retainer is **tiny vs one roof replacement**.

**Gap in your pack:** A **single client-facing PDF “Benchmarks appendix”** (1 page) with sources footnoted—optional but increases trust with analytical owners.

---

## 3. Meta / advertising compliance (critical 2026 gap)

**Special Ad Category (Housing)** applies to many **homeowner roofing** offers. Restrictions evolve—**your ops must follow Meta’s current docs**, not a blog from last year.

**Risk in older playbooks:** Detailed **age** and **ZIP** targeting and **income** layering are **often incompatible** with Housing SAC rules. Mis-set category → disapprovals, wasted days, client frustration.

**You added:** `operations/05-meta-special-ad-category-housing-compliance.md` (SOP).  
**Action:** Make **SAC review** part of **every** client launch checklist (internal).

---

## 4. Process audit — what you already have vs “agency standard”

| Area | Status | Benchmark note |
|------|--------|----------------|
| Sales decks + ROI calculator | ✅ | Good self-serve + call support |
| Contract / chargebacks | ✅ | Aligns with common agency refund posture |
| Onboarding task sheet + welcome email | ✅ | Matches “time-to-live” best practice |
| 7 / 14 / 21 day client checklists | ✅ | Reduces churn from bad habits |
| Weekly rhythm + Loom | ✅ | Standard for lean agencies |
| **Meta SAC SOP** | ✅ (new) | **Required** for 2026 |
| **Offboarding + data export** | ✅ (new) | Standard professionalism |
| **Your SLA to client** (response time) | ⚠️ add | Benchmark: **24h** max for non-urgent; **same business day** for “ads down” |
| **Incident comms** (CPL spike, account flag) | ⚠️ add | Proactive beats churn |
| **Privacy / lead data** | ⚠️ add | Short **Data & privacy** blurb in MSA or DPA for homeowner PII |
| **Case study template** | ⚠️ add | 1-pager after first win |
| **ICP scorecard** | ✅ (new) | Stops bad-fit clients |

---

## 5. Website & prospect experience

- **FAQ:** Expanded for **Housing category** and **benchmark context** (done on `index.html`).  
- **Optional:** `/privacy` and `/terms` stub pages if you run pixels + forms on **your** domain (trust + ad account stability).

---

## 6. Priority implementation order

1. **Enforce Special Ad Category SOP** on every build (compliance).  
2. **Publish your SLA** to clients (email footer + onboarding).  
3. **Offboarding checklist** (reputation + clean break).  
4. **ICP scorecard** before every proposal.  
5. **Case study template** after client 1.  
6. **Referral incentive** once you have 2 clients.

---

## 7. Summary score

| Dimension | Grade | Note |
|-----------|-------|------|
| Commercial offer | A- | Add passthrough spend caps + referral |
| Legal / billing | A- | Attorney review + DPA |
| Delivery SOP | B+ | SAC + SLA + incidents close the gap |
| Prospect trust | A- | Calculator + decks; add privacy/terms if needed |
| Scalable acquisition | B | See `guides/FIRST-10-CLIENTS-step-by-step.md` |

---

## 8. Repo deliverables completed (conservative tier reset — March 2026)

The following were **updated in-repo** so offer, site, and templates stay aligned:

- **`index.html`** — tier copy: Starter (ads + management + **Slack**), lead **ranges**, **30-day guarantees** 10 / 20 / 25 qualified.
- **`roi-calculator.html`** + **`roi-calculator.js`** — tier presets (12 / 22 / 32 leads) for modeling.
- **`deck/sales-deck-*.html`** — all three decks: headlines, lists, ROI tables, guarantees.
- **`legal/CLIENT-SERVICE-AGREEMENT-TEMPLATE.md`**, **`operations/03-service-agreement-key-terms.md`** — guarantee brackets.
- **`operations/01-client-onboarding-checklist.md`**, **`onboarding/emails/01-welcome-onboarding.md`**, **`checklists/client-21-day-results-assessment.md`** — internal + client-facing guarantee numbers.
- **`outreach/02`, `05`, `06`, `07`**, **`guides/FIRST-10-CLIENTS-step-by-step.md`**, **`PACK-CONTENTS.txt`**.

**Still not done by code:** attorney-reviewed MSA PDF, live **privacy / terms** pages, Events Manager verification, your real **Slack workspace** invites, and **printed** deck PDFs for each tier.

---

## 9. Your checklist (things only you can do)

1. **Legal:** Merge guarantee **10 / 20 / 25** into executed contracts; attorney sign-off if anything conflicts with old PDFs you already sent.
2. **Re-print PDFs:** Export fresh **`deck/*.html` → PDF** for proposals; retire old decks with 15/30/50 or inflated lead counts.
3. **Slack (Starter):** Create your client channel pattern; invite clients; confirm **what** you’ll post (weekly summary vs ad-hoc alerts).
4. **Meta:** Housing **SAC** on every campaign; confirm pixel **PageView**; optional **Lead** events on thank-you pages.
5. **Privacy / trust:** If you collect data on **369leads.ca**, publish **`/privacy`** (and terms if needed); link from footer and ad flows.
6. **Stripe / billing:** Confirm product descriptions match new copy (no obsolete “50 lead” language).
7. **Sales discipline:** Use **`outreach/08-ICP-scorecard-roofing.md`** before every proposal—bad-fit ops will miss guarantees even with honest targets.
8. **First wins:** Fill **`templates/case-study-one-pager.md`** with **real** numbers when you have permission.

---

*This audit is operational guidance, not legal, tax, or Meta compliance advice.*
