# Put 369leads.ca live with GitHub + Squarespace DNS

Your site is **static files** (`index.html`, `styles.css`, folders like `assets/`). **GitHub Pages** will host them for **free**. Your **domain** stays at Squarespace—you only change **DNS** so visitors reach GitHub.

**Time:** about 30–45 minutes the first time.

---

## Part 1 — Create a GitHub account

1. Open **[https://github.com/signup](https://github.com/signup)** in your browser.
2. Enter your email, create a password, choose a **username** (e.g. `ruben369` — you’ll see it in links like `https://github.com/ruben369`).
3. Verify your email when GitHub sends a message.
4. (Optional) Turn on **two-factor authentication** later under **Settings → Password and authentication** — recommended.

You now have a GitHub account.

---

## Part 2 — Create a new empty repository

1. Log in at **[https://github.com](https://github.com)**.
2. Click the **+** (top right) → **New repository**.
3. **Repository name:** `369leads` (or `369leads-website` — no spaces).
4. **Description (optional):** `369 Leads — roofing lead gen site`.
5. Set **Public** (required for free GitHub Pages on personal accounts, unless you pay for private Pages).
6. **Important:** Do **NOT** check “Add a README”, “Add .gitignore”, or “Choose a license” — leave the repo **empty**. (Your project already has files locally.)
7. Click **Create repository**.

Leave that browser tab open — you’ll see commands like `git remote add origin ...` — you’ll use your real URL in Part 4.

---

## Part 3 — Install Git on your Mac (if needed)

1. Open **Terminal** (Spotlight: type `Terminal`).
2. Run: `git --version`  
   - If you see a version number, Git is installed → skip to Part 4.  
   - If it offers to install **Command Line Developer Tools**, accept and wait for the install to finish.

---

## Part 4 — Send your site folder to GitHub (first push)

Your website files live in:

`/Users/rubenruizdegyves/Desktop/369 Leads`

1. In Terminal, go to that folder (quotes matter because of the space):

```bash
cd "/Users/rubenruizdegyves/Desktop/369 Leads"
```

2. If this folder is **already** a git repo with a commit (this project may have been initialized for you), run:

```bash
git status
```

   - If you see **“not a git repository”**, run:

```bash
git init
git add .
git commit -m "Initial site: 369 Leads"
```

3. Connect GitHub (**replace** `YOUR_USERNAME` and `369leads` if your repo name differs):

```bash
git remote add origin https://github.com/YOUR_USERNAME/369leads.git
git branch -M main
git push -u origin main
```

4. A window may ask you to **log in to GitHub**.  
   - GitHub no longer accepts account passwords for Git over HTTPS for new setups—use a **Personal Access Token** (PAT) or **GitHub CLI**.

### Easiest login: GitHub CLI

```bash
brew install gh
gh auth login
```

Follow prompts (choose **GitHub.com**, **HTTPS**, authenticate via browser). Then run `git push -u origin main` again.

### Or: Personal Access Token (HTTPS)

1. GitHub → **Settings** (your profile) → **Developer settings** → **Personal access tokens** → **Tokens (classic)**.
2. **Generate new token** — enable scope **`repo`** — copy the token once.
3. When `git push` asks for password, paste the **token** (not your GitHub password).

After a successful push, refresh your repo page on GitHub — you should see `index.html`, `assets`, etc.

---

## Part 5 — Turn on GitHub Pages

1. Open your repo on GitHub: `https://github.com/YOUR_USERNAME/369leads`
2. Click **Settings** (repo settings, not your account).
3. Left sidebar → **Pages**.
4. Under **Build and deployment** → **Source**: choose **Deploy from a branch**.
5. **Branch:** `main`, folder **`/ (root)`** → **Save**.
6. Wait **1–3 minutes**. Refresh the **Pages** section until you see:  
   **Your site is live at `https://YOUR_USERNAME.github.io/369leads/`**  
   (URL depends on repo name.)

Open that link — your site should load (maybe with wrong styling if you opened the wrong path — root URL should show `index.html`).

---

## Part 6 — Connect **369leads.ca** (Squarespace DNS)

You keep paying for the domain at Squarespace; you only **point DNS** to GitHub.

### Step A — Tell GitHub your domain

1. Same repo → **Settings** → **Pages**.
2. Under **Custom domain**, type: **`369leads.ca`**
3. Save. GitHub may create a **`CNAME`** file in the repo (that’s normal).
4. Check **Enforce HTTPS** (may take up to 24–48 hours after DNS works).

### Step B — Edit DNS at Squarespace

1. Log in to **Squarespace** → **Domains** → select **369leads.ca** → **DNS Settings** (wording may be “Manage DNS” / “Advanced settings”).
2. For the **apex** domain (`369leads.ca` without `www`), add **four A records** (remove old A records that pointed somewhere else if they conflict):

| Host / Name | Type | Data / Points to    |
|-------------|------|---------------------|
| `@`         | A    | `185.199.108.153`   |
| `@`         | A    | `185.199.109.153`   |
| `@`         | A    | `185.199.110.153`   |
| `@`         | A    | `185.199.111.153`   |

*(Some panels use “Host” blank or `@` for the root — Squarespace uses `@` for apex.)*

3. Optional **www**: add a **CNAME** record:

| Host | Type   | Data                         |
|------|--------|------------------------------|
| `www`| CNAME  | `YOUR_USERNAME.github.io`   |

Replace `YOUR_USERNAME` with your actual GitHub username (same as in `github.com/YOUR_USERNAME`).

4. Save DNS. Propagation can take **15 minutes to 48 hours** (often under an hour).

### Step C — Check

- Visit **https://369leads.ca** — should show your site.  
- If it fails, wait 30–60 minutes, then try again. Use **[https://dnschecker.org](https://dnschecker.org)** and search **A** for `369leads.ca` to see if the four IPs show worldwide.

**Official reference:** [GitHub Docs — Managing a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

---

## Part 7 — After you go live (small checklist)

1. In **`index.html`** and **`roi-calculator.html`**, set your real **Calendly** / **email** / **phone** if they’re still placeholders.
2. **Squarespace “parking” page:** If the domain was only forwarding to a Squarespace site, disable conflicting **parking** / **forwarding** so DNS A records win.
3. Future updates: edit files locally → `git add .` → `git commit -m "Describe change"` → `git push`. GitHub Pages rebuilds in ~1 minute.

---

## Optional: easier than Terminal — GitHub Desktop

1. Install **[GitHub Desktop](https://desktop.github.com)**.
2. Sign in with your GitHub account.
3. **File → Add Local Repository** → choose `369 Leads` folder.
4. **Publish repository** to GitHub (picks account, name).
5. After that, use **Push origin** whenever you change files.

You still configure **Pages** and **Squarespace DNS** in the browser as above.

---

## If something breaks

| Problem | What to check |
|---------|----------------|
| **404** on github.io URL | Pages enabled? Branch `main`, folder `/ root`? Wait 5 min. |
| **Site loads but no CSS** | Open site from `https://...` not `file://` ; paths in HTML are like `styles.css` at repo root. |
| **369leads.ca doesn’t load** | DNS A records exactly the four IPs; remove old A records; wait for propagation. |
| **Push asks for password** | Use **token** or `gh auth login`, not GitHub password. |

---

*IPs and GitHub Pages behavior were correct as of early 2026; if GitHub changes them, use the official GitHub Pages custom-domain documentation.*
