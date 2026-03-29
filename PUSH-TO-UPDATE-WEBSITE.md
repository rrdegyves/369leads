# Your live site only updates when you **push** to GitHub

If **369leads.ca** still shows an old version (e.g. “Email to schedule — hello@369leads.com”), your changes are **only on your Mac** until you run:

```bash
cd "/Users/rubenruizdegyves/Desktop/369 Leads"
git status
git add -A
git commit -m "Update site: consultation booking + Calendly iframe"
git push origin main
```

Wait **1–2 minutes**, then hard-refresh Safari: **Cmd + Option + R** (or open a Private window).

You can confirm GitHub has the new file here:  
**https://github.com/rrdegyves/369leads/blob/main/index.html**  
Search the page for **“Book a consultation call”** — if it’s missing, you still need to **push**.
