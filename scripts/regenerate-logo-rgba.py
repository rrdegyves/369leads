#!/usr/bin/env python3
"""
Publish the logo into assets/369-leads-logo.png.

- Default source: repo root 369leads_logo.png (transparent RGBA master).
- If the source has real alpha, it is re-saved with optimization only.
- If the source is flat (no transparency), white-background removal runs (legacy).

Usage:
  python3 scripts/regenerate-logo-rgba.py
  python3 scripts/regenerate-logo-rgba.py path/to/logo.png
"""
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    raise SystemExit("Install Pillow: pip install Pillow")

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_SRC = ROOT / "369leads_logo.png"
OUT = ROOT / "assets" / "369-leads-logo.png"


def has_useful_alpha(img: Image.Image) -> bool:
    if img.mode != "RGBA":
        return False
    extrema = img.split()[3].getextrema()
    return extrema[0] < 255


def remove_white_bg(img: Image.Image) -> Image.Image:
    img = img.convert("RGBA")
    new_data = []
    for r, g, b, a in img.getdata():
        bright = (r + g + b) / 3
        sat = max(r, g, b) - min(r, g, b)
        if bright >= 248 and sat <= 18:
            new_data.append((255, 255, 255, 0))
        elif bright >= 235 and sat <= 22:
            t = (bright - 235) / 13.0
            alpha = int(max(0, min(255, (1 - t) * 255)))
            new_data.append((r, g, b, alpha))
        else:
            new_data.append((r, g, b, 255))
    out = Image.new("RGBA", img.size)
    out.putdata(new_data)
    return out


def main() -> None:
    import sys

    src = Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_SRC
    if not src.is_file():
        raise SystemExit(f"Missing source: {src}")
    img = Image.open(src)
    if has_useful_alpha(img):
        out = img.convert("RGBA")
    else:
        out = remove_white_bg(img)
    OUT.parent.mkdir(parents=True, exist_ok=True)
    out.save(OUT, optimize=True)
    print(f"Wrote {OUT} ({out.size[0]}×{out.size[1]}) from {src}")


if __name__ == "__main__":
    main()
