#!/usr/bin/env python3
"""
Replace gray checkerboard background in badge JPG files with #f5e6c8.
Strategy: corner flood-fill on pixels that are neutral-gray (R≈G≈B) and bright
(≥215), which covers both checker tile colours (~223 and ~253) while leaving
coloured badge art untouched. Saves back as JPEG quality=95.
"""

from PIL import Image
import numpy as np
from pathlib import Path
from collections import deque
import sys

REPLACE_COLOR = np.array([0xf5, 0xe6, 0xc8], dtype=np.uint8)  # #f5e6c8
GRAY_TOL  = 18   # max channel deviation to be considered neutral-gray
MIN_VALUE = 125  # minimum brightness (catches gray ~140-253)
CORNER_PAD = 8   # seed from NxN region at each corner
BADGES_DIR = Path('assets/badges')


def is_checker(pixel: np.ndarray) -> bool:
    r, g, b = int(pixel[0]), int(pixel[1]), int(pixel[2])
    return (r >= MIN_VALUE
            and max(abs(r - g), abs(g - b), abs(r - b)) <= GRAY_TOL)


def process_image(path: Path) -> int:
    img = Image.open(path).convert('RGB')
    arr = np.array(img, dtype=np.uint8)
    h, w = arr.shape[:2]

    visited    = np.zeros((h, w), dtype=bool)
    to_replace = np.zeros((h, w), dtype=bool)
    queue: deque = deque()

    # Seed from CORNER_PAD×CORNER_PAD region at all four corners
    corners = [(0, 0), (0, w - 1), (h - 1, 0), (h - 1, w - 1)]
    for cy, cx in corners:
        for dy in range(CORNER_PAD):
            for dx in range(CORNER_PAD):
                ny = cy + (dy if cy == 0 else -dy)
                nx = cx + (dx if cx == 0 else -dx)
                if 0 <= ny < h and 0 <= nx < w and not visited[ny, nx]:
                    visited[ny, nx] = True
                    if is_checker(arr[ny, nx]):
                        to_replace[ny, nx] = True
                        queue.append((ny, nx))

    if not queue:
        print(f'  [skip] {path.name}: no checker pixels at corners')
        return 0

    # BFS flood fill
    while queue:
        y, x = queue.popleft()
        for dy, dx in ((-1, 0), (1, 0), (0, -1), (0, 1)):
            ny, nx = y + dy, x + dx
            if 0 <= ny < h and 0 <= nx < w and not visited[ny, nx]:
                visited[ny, nx] = True
                if is_checker(arr[ny, nx]):
                    to_replace[ny, nx] = True
                    queue.append((ny, nx))

    n = int(to_replace.sum())
    arr[to_replace] = REPLACE_COLOR

    Image.fromarray(arr, 'RGB').save(path, 'JPEG', quality=95, subsampling=0)
    print(f'  [ok] {path.name}: {n:,} px replaced')
    return n


def main() -> None:
    if not BADGES_DIR.exists():
        print(f'Error: {BADGES_DIR} not found', file=sys.stderr)
        sys.exit(1)

    files = sorted(BADGES_DIR.glob('badge_t*.jpg'))
    if not files:
        print('No badge files found', file=sys.stderr)
        sys.exit(1)

    print(f'Processing {len(files)} files in {BADGES_DIR}/\n')
    total = 0
    for f in files:
        total += process_image(f)
    print(f'\nDone — total pixels replaced: {total:,}')


if __name__ == '__main__':
    main()
