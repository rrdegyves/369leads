#!/usr/bin/env python3
"""Fetch homepage + common contact paths and extract plausible emails (one-off research script)."""
import re
import ssl
import urllib.request
from urllib.parse import urljoin, urlparse

ssl_ctx = ssl.create_default_context()

UA = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"}

EMAIL_RE = re.compile(r"[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9\-.]+")

SKIP_SUBSTR = (
    "example.com",
    "schema.org",
    "wixpress.com",
    "sentry.io",
    "google.com",
    "gstatic.com",
    "facebook.com",
    "instagram.com",
    "twitter.com",
    "linkedin.com",
    "pinterest.com",
    "wufoo.com",
    ".png",
    ".jpg",
    ".gif",
)


def clean_base(url: str) -> str:
    url = url.strip()
    if not url.startswith("http"):
        url = "https://" + url
    return url


def fetch(url: str) -> str:
    req = urllib.request.Request(url, headers=UA)
    try:
        with urllib.request.urlopen(req, timeout=15, context=ssl_ctx) as r:
            return r.read().decode("utf-8", errors="replace")
    except Exception as e:
        return f"<!-- ERROR {e} -->"


def plausible_email(m: str) -> bool:
    if "@" not in m:
        return False
    local, _, domain = m.rpartition("@")
    if not local or not domain or "." not in domain:
        return False
    dom = domain.lower()
    # npm-style junk: core-js-bundle@3.2.1
    if re.match(r"^[\d.]+$", dom):
        return False
    if all(part.isdigit() or part.replace(".", "").isdigit() for part in dom.split(".") if part):
        if re.search(r"\d", dom):
            return False
    if dom.endswith((".0", ".1", ".2")) and re.match(r"^\d+\.\d+\.\d+$", dom):
        return False
    return True


def extract_emails(html: str) -> set[str]:
    found: set[str] = set()
    for m in EMAIL_RE.findall(html):
        m = m.strip().rstrip(".,;)>\"'")
        if not plausible_email(m):
            continue
        low = m.lower()
        if any(s in low for s in SKIP_SUBSTR):
            continue
        if low.endswith((".js", ".css")):
            continue
        found.add(m)
    return found


def candidate_urls(seed: str) -> list[str]:
    base = clean_base(seed)
    parsed = urlparse(base)
    root = f"{parsed.scheme}://{parsed.netloc}"
    paths = ["", "/contact", "/contact-us", "/about", "/about-us", "/get-a-quote", "/quote"]
    out = [base]
    for p in paths:
        out.append(urljoin(root + "/", p.lstrip("/")))
    # de-dupe preserve order
    seen = set()
    unique = []
    for u in out:
        if u not in seen:
            seen.add(u)
            unique.append(u)
    return unique


def best_emails(emails: set[str]) -> str:
    if not emails:
        return ""
    # Prefer info@, office@, service@, contact@, hello@
    priority = ("info@", "office@", "service@", "contact@", "hello@", "sales@", "estimate@")
    low_map = {e.lower(): e for e in emails}
    for p in priority:
        for low, orig in low_map.items():
            if low.startswith(p):
                return orig
    return sorted(emails)[0]


ROWS = [
    ("Empire Eavestrough, Roofing & Exteriors Inc.", "https://empireeavestrough.ca/"),
    ("Reuter Roofing", "http://www.reuterroofing.ca/"),
    ("Quality Care Roofing Inc.", "https://www.qualitycareroofinginc.com/"),
    ("Kitchener Affordable Roofing", "https://www.kitcheneraffordableroofing.ca/"),
    ("Mara Roofing and Exteriors Inc", "http://www.maracontracting.ca/"),
    ("Black and White Commercial Roofing", "http://www.blackandwhiteroofing.com/"),
    ("Quality Roofs | Residential & Commercial Roofing Company", "https://www.qualityroofs.ca/"),
    ("KW Roofing | Residential & Commercial Roofing Company", "https://www.kwroofing.ca/"),
    ("Easy Roofing Cambridge", "https://easyroofing.ca/roofing-cambridge/"),
    ("FS ROOF SYSTEMS AND EXTERIORS", "http://www.fsroofsystems.com/"),
    ("House & Hammer Roofing", "https://houseandhammerroofing.ca/"),
    ("Customersroofing", "https://customersroofing.ca/"),
    ("Belmar Roofing", "http://www.belmarroofing.com/"),
    ("Angel Pro Roofing", "http://angelproroofing.ca/"),
    ("Heisler & Sons (Cambridge) Roofing", "http://www.heislerandsons.ca/"),
    ("Rydel Roofing - Kitchener-Waterloo", "https://rydelroofing.ca/"),
    ("The Roof Whisperer of Cambridge", "https://theroofwhisperer.ca/cambridge"),
    ("United Roofers INC.- Cambridge", "https://unitedroofersinc.com/"),
    ("A Thomson Roofing Inc", "https://www.thomsonroofing.ca/"),
    ("A1 Pros", "https://www.a1pros.ca/"),
    ("Cambridge Flat Roofing", "https://www.cambridgeflatroofing.ca/"),
    ("Northern Seal Flat Roofing", "http://northernsealroofing.ca/"),
    ("Classic Products Metal Roofing Systems Inc", "https://canadianmetalroofing.ca/"),
    ("Grand Valley Roofing & Coatings Inc", "http://grandvalleyroofing.ca/"),
]

if __name__ == "__main__":
    for name, url in ROWS:
        merged: set[str] = set()
        for u in candidate_urls(url):
            html = fetch(u)
            merged |= extract_emails(html)
        pick = best_emails(merged)
        extra = f" (all: {', '.join(sorted(merged))})" if len(merged) > 1 else ""
        print(f"{name}\t{url}\t{pick}{extra}")
