# Brand assets — 369 Leads

| File | Purpose |
|------|---------|
| `369-leads-logo.png` | **Primary web + graphics logo** — transparent RGBA master (800×800). Used on site, decks, FB + carousel HTML. Replace this file when the brand updates; keep a copy at project root (`369leads_logo.png`) if you like. |
| `369-leads-logo-mark-rgba.png` | Legacy processed mark (optional delete). |
| `369-leads-logo-web.png` | Legacy flat logo; backup only. |
| `facebook-profile-500.jpg` | Facebook Page **profile picture** (square). |
| `facebook-cover-820x312.jpg` | Facebook Page **cover** (recommended upload size). |
| `facebook-cover-1640x624.jpg` | 2× version; optional upload if Meta accepts. |

**Master logo:** `../369leads_logo.png` (project root, transparent). Copied to `assets/369-leads-logo.png` for the site.

Sync after you change the root file:

```bash
python3 scripts/regenerate-logo-rgba.py
```

(Requires Pillow, or copy `369leads_logo.png` to `assets/369-leads-logo.png` manually.)
