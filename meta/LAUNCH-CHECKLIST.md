# 369 Leads — Facebook / Meta launch checklist

Use this when you want **organic outreach + graphics ready + optional ads**. Check boxes as you go.

**Related docs:** [Facebook Page + BM setup](./FACEBOOK-PAGE-AND-META-SETUP.md) · [What you need (site + Meta)](../onboarding/WHAT-I-NEED-WEBSITE-AND-META.md) · [KW guide ↔ repo](../guides/KW-LaunchGuide-alignment.md) · [Housing special ad category](../operations/05-meta-special-ad-category-housing-compliance.md)

---

## Phase 1 — Foundation

- [ ] **Website live** on real domain (e.g. `369leads.ca`) — push latest `index.html` / assets; test Calendly (`#book-call`), ROI calculator, PDF deck links.
- [ ] **Facebook Page** created — category (e.g. advertising/marketing or consulting agency); name you’re happy with long-term.
- [ ] **Profile photo** uploaded — `assets/facebook-profile-500.jpg`
- [ ] **Cover photo** uploaded — `assets/facebook-cover-820x312.jpg` (preview on mobile; Meta may crop).
- [ ] **About** filled — 2–3 sentences: exclusive Meta leads, KW / Cambridge / Guelph roofers; **Website** = your live URL.
- [ ] **Page CTA** — e.g. **Book now** → Calendly (`https://calendly.com/rrdegyves/consultant-call` or your active link).
- [ ] **Meta Business Manager** — [business.facebook.com](https://business.facebook.com): business portfolio, Page connected.
- [ ] **Ad account** created + **payment method** added (no spend required until you launch a campaign).
- [ ] **Meta Pixel** — confirm Pixel on agency pages and **domain verification** in Events Manager once the site is on the production URL.

---

## Phase 2 — Graphics ready to post

- [ ] **Logo** — canonical file `assets/369-leads-logo.png` (sync from root `369leads_logo.png` when you update: `python3 scripts/regenerate-logo-rgba.py` or manual copy).
- [ ] **KW limited-offer post** — design: `assets/facebook-post-kw-limited-offer.html` → export **1080×1350** PNG (refresh `assets/facebook-post-kw-limited-offer-1080x1350.png` if you use a scripted screenshot).
- [ ] **Carousel slides** — `assets/social-templates/wonderly-inspired-carousel.html` → export each slide (or screen cap) for feed / carousel ads.
- [ ] **Backup squares** — 1–2 extra **1080×1080** images (Canva or similar): offer, territories, or “Book a call” so you’re not repeating one asset.

---

## Phase 3 — Messaging (organic)

- [ ] **Page + your profile** — one clear line: who you help, what you do, link to site or Calendly.
- [ ] **Outreach copy** — use `outreach/` drafts; personalize one real detail per prospect (city, site, recent post).
- [ ] **Channels** — prefer comment → DM, Page Messenger, or email from their site; respect **Facebook group rules** (no promo where forbidden).
- [ ] **Cadence** — sustainable daily/weekly volume you can follow up on (speed-to-lead matters for roofing).

---

## Phase 4 — Ads (when you spend)

- [ ] **Campaign objective** chosen — often **Leads**; or **Traffic** to Calendly for a small test.
- [ ] **Special ad category** — for homeowner/roofing lead gen, use **Housing** when Meta requires it — see `operations/05-meta-special-ad-category-housing-compliance.md`.
- [ ] **Creative** — 1080×1350 and/or carousel from Phase 2; single clear CTA matching the landing page.
- [ ] **Landing URLs** — **Agency** → homepage / calculator / `#book-call`. **Homeowner / client** → `campaign/index.html` with `?city=&co=&phone=&reviews=`; **Formspree** form ID set (no `REPLACE_WITH_YOUR_FORM_ID`).
- [ ] **Budget** — small daily cap first (e.g. $10–20 CAD/day); watch CPL, frequency, and **lead quality**.

---

## Phase 5 — First month (ongoing)

- [ ] **Post regularly** — a few times per week: process, territories, **$200 offer**, ROI calculator, combined proposal PDF.
- [ ] **Track** — Pixel events + which posts/DMs book calls; adjust creative and targeting from data.
- [ ] **Privacy policy URL** — add when you run Pixel + lead capture on your domain (trust + compliance).

---

## File quick reference

| Asset | Path |
|--------|------|
| Profile (square) | `assets/facebook-profile-500.jpg` |
| Cover | `assets/facebook-cover-820x312.jpg` |
| Logo (site + templates) | `assets/369-leads-logo.png` |
| KW offer (HTML → PNG) | `assets/facebook-post-kw-limited-offer.html` |
| Social carousel | `assets/social-templates/wonderly-inspired-carousel.html` |
| Homeowner LP | `campaign/index.html` |
| Proposal PDF (all tiers) | `deck/sales-deck-combined-offers.pdf` |

---

## Minimum viable launch (same week)

Live site + Page (profile/cover/About/CTA) + BM + payment method + **2–3 exported graphics** + **10 personalized outreaches** using `outreach/`. Turn on **ads** once that stack is stable.
