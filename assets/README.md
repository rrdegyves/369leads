# Brand assets — 369 Leads

| File | Purpose |
|------|---------|
| `369-leads-logo-mark-rgba.png` | **Primary web + graphics logo** — transparent PNG derived from `360leadspng.png` (source was JPEG-on-white). Used on site, decks, FB + carousel HTML. |
| `369-leads-logo-web.png` | Legacy flat logo; keep as backup or replace if you standardize on one file only. |
| `facebook-profile-500.jpg` | Facebook Page **profile picture** (square). |
| `facebook-cover-820x312.jpg` | Facebook Page **cover** (recommended upload size). |
| `facebook-cover-1640x624.jpg` | 2× version; optional upload if Meta accepts. |

**Master logo:** `../369LeadsLogo.jpg` (project root).

Regenerate web + Facebook assets by running from project root (requires Pillow in `.pypack`):

```bash
PYTHONPATH=".pypack" python3 -c "
# see repo history or ask for regenerate script
"
```

Or replace files manually in an image editor.
