# Plan: Pandu Spot Illustration System

## Context
Pandu needs 16 monoline spot illustrations to replace emoji across the product and animate on the landing page. They must share one visual language — stroke `#016176`, optional fill `#e2f1f5`, CTA orange only on `stetoskop` — and be animation-ready with named SVG groups so CSS can target individual parts (pulse rings, eyelids, audio bars, ticks) without JavaScript.

## Files

| Action | Path |
|--------|------|
| **Create** | `src/illustrations.tsx` |
| **Modify** | `src/App.tsx` |
| **Modify** | `src/index.css` |

---

## 1. `src/illustrations.tsx` — all 16 named exports

### Shared boilerplate
```tsx
type IlluProps = { size?: number; className?: string };

// Applied to every <svg> wrapper
// className="illu" — hooks CSS variables and animation selectors
```

Every `<svg>`: `viewBox="0 0 48 48"`, `fill="none"`, `strokeWidth={2}`, `strokeLinecap="round"`, `strokeLinejoin="round"`, `className={\`illu ${className}\`}`.

Filled shapes: `fill="var(--illu-fill)"`. Only `stetoskop` uses `fill="var(--illu-cta)"` (chest-piece membrane dot). All strokes: `stroke="currentColor"`.

### The 16 illustrations

#### Belajar

**`BukuTerbuka`** — open book, spine at x=24, pages angled outward.
```
owl/page-left:  M24,10 C22,8 10,8 6,12 L6,42 L24,42 Z  fill=var(--illu-fill)
buku/page-right: M24,10 C26,8 38,8 42,12 L42,42 L24,42 Z  fill=none
buku/spine:  line x1=24,y1=10 to x2=24,y2=42
buku/lines:  3 lines each side — left x:9–21, right x:27–39, at y=20,26,32
```

**`SlidePresentation`** — slide frame (rect 6,6 36×24 rx=2) on easel legs.
```
slide/frame:    rect x=6,y=6 w=36,h=24 rx=2
slide/content:  heading line M10,14 L32,14; sub M10,19 L26,19;
                3 mini bars at x=10,15,20, heights 5,8,6, bottom at y=28
slide/stand:    M24,30 L14,44  M24,30 L34,44  M17,40 L31,40
```

**`KartuHafalan`** — two stacked cards, back slightly offset.
```
kartu/back:   path M13,16 L39,14 L40,32 L14,34 Z  fill=var(--illu-fill)
kartu/front:  rect x=8,y=20 w=32,h=22 rx=2  fill=var(--illu-fill)
kartu/text:   M12,29 L36,29   M12,35 L28,35
```

**`DaftarCentang`** — 3-item checklist; box 12×12 rx=2; y-centers 11, 25, 39.
```
daftar/box-1:   rect x=5,y=5   w=12,h=12  fill=var(--illu-fill)
daftar/tick-1:  polyline 7.5,11 11,14.5 17,7   ← animated (stroke-dasharray draw)
daftar/box-2:   rect x=5,y=19  w=12,h=12  fill=var(--illu-fill)
daftar/tick-2:  polyline 7.5,25 11,28.5 17,21
daftar/box-3:   rect x=5,y=33  w=12,h=12  fill=none  (intentionally empty)
text lines:     M21,11 L43,11   M21,25 L43,25   M21,39 L38,39
```

#### Anatomi

**`Jantung`** — anatomical heart silhouette, expanding pulse ring.
```
jantung/chamber:
  path d="M24,37 C13,29 5,23 5,15 C5,8 12,5 18,8 C21,9 24,13 24,13
           C24,13 27,9 30,8 C36,5 43,8 43,15 C43,23 35,29 24,37 Z"
  fill=var(--illu-fill)
jantung/pulse-ring:  circle cx=24,cy=22,r=11  ← CSS: illu-pulse animation
jantung/aorta:  path M20,10 C18,7 18,4 22,3 C26,2 28,5 28,8
```

**`Paru`** — trachea Y-forks into two lung lobes.
```
paru/trachea:
  M24,4 L24,16
  M24,16 C22,17 18,18 16,20
  M24,16 C26,17 30,18 32,20
paru/left:
  path M16,20 C10,22 6,28 8,36 C10,42 18,44 22,40 C24,38 24,32 22,28 L20,24 Z
paru/right:
  path M32,20 C38,22 42,28 40,36 C38,42 30,44 26,40 C24,38 24,32 26,28 L28,24 Z
  fill=var(--illu-fill) on left lobe only
```

**`Otak`** — lateral brain silhouette with gyri lines.
```
otak/cortex:
  path M10,30 C8,22 10,12 18,8 C26,4 38,8 42,18
       C44,28 40,38 30,42 C20,44 12,38 10,30 Z
  fill=var(--illu-fill)
otak/gyri (5 arced sulci):
  M20,8 C24,6 30,8 34,12
  M34,12 C38,16 38,22 36,28
  M14,14 C18,10 24,10 28,14
  M12,22 C14,18 20,18 24,22
  M10,30 C12,26 18,26 22,28
otak/stem:  M20,42 C20,46 28,46 28,42
```

**`Tulang`** — diagonal long bone (top-left → bottom-right), proximal head + distal condyles.
```
tulang/cap-left:
  path M8,12 C6,6 16,2 20,8 C22,12 20,16 16,14 Z  fill=var(--illu-fill)
tulang/shaft:
  M16,14 L28,38   M20,8 L32,32  (two cortex contour lines)
tulang/cap-right:
  M28,38 C26,42 30,46 34,44 C38,42 40,36 36,32
  M32,32 C36,30 42,34 40,40 C38,44 34,44 30,42
```

#### Klinis

**`Stetoskop`** — Y-tubing from earpiece tips converging to chest piece. **Only illustration with orange.**
```
stetoskop/earpieces:
  M15,6 L10,12   M33,6 L38,12
  circle cx=10,cy=12,r=2   circle cx=38,cy=12,r=2
stetoskop/tubing:
  M10,14 C10,22 18,24 24,26
  M38,14 C38,22 30,24 24,26
  M24,26 L24,34
stetoskop/chest-piece:
  circle cx=24,cy=40,r=7  fill=var(--illu-fill)
  circle cx=24,cy=40,r=2.5  fill=var(--illu-cta) stroke=none  ← only orange element
```

**`KapsulObat`** — vertical capsule; top dome filled, bottom dome stroke-only.
```
kapsul/top:
  path M17,27 L17,21 A7,7 0 0 1 31,21 L31,27 Z  fill=var(--illu-fill)
kapsul/bottom:
  path M17,27 L17,33 A7,7 0 0 0 31,33 L31,27
kapsul/split:
  line x1=17,y1=27 x2=31,y2=27
  Note: verify arc sweep flags — top A…0,0,1 (CW), bottom A…0,0,0 (CCW)
```

**`TabungSampel`** — test tube (x:19–29), rounded bottom arc, cap rect at top, wavy liquid fill.
```
tabung/body:
  path M19,14 L19,38 A5,5 0 0 0 29,38 L29,14  (open-top tube, rounded bottom)
tabung/cap:
  rect x=16,y=6 w=16,h=10 rx=2  fill=var(--illu-fill)
tabung/liquid:
  wavy surface: M19,30 C22,28 26,32 29,30
  filled region below: M19,30 C22,28 26,32 29,30 L29,38 A5,5 0 0 1 19,38 Z
  fill=var(--illu-fill) stroke=none on filled region
```

**`Mikroskop`** — simplified profile: eyepiece, column, arm, stage, objective, base.
```
mikroskop/base:
  rect x=8,y=40 w=28,h=6 rx=2  fill=var(--illu-fill)
mikroskop/body:
  M20,40 L20,14   (column)
  M20,20 L30,20 L30,40  (arm)
  circle cx=30,cy=24,r=3  (focus knob)
mikroskop/stage:
  line M10,30 L36,30
mikroskop/eyepiece:
  M12,8 L12,16 L20,16   circle cx=12,cy=8,r=2.5
mikroskop/objective:
  path M18,30 L22,30 L20,36 Z  (wedge pointing down)
```

#### Produk

**`GelembungChat`** — rounded-rect bubble with bottom-left tail.
```
gelembung/bubble:
  path M12,6 L38,6 A4,4 0 0 1 42,10 L42,30 A4,4 0 0 1 38,34
       L16,34 L6,44 L10,34 A4,4 0 0 1 6,30 L6,10 A4,4 0 0 1 12,6 Z
  fill=var(--illu-fill)
gelembung/lines:
  M10,14 L38,14   M10,20 L32,20   M10,26 L24,26
```

**`GelombangAudio`** — 5 vertical bars (x=5,13,21,29,37 w=6), symmetric mountain shape; filled with `currentColor`.
```
audio/bar-1:  rect x=5, y=20, w=6, h=8,  rx=3  fill=currentColor stroke=none
audio/bar-2:  rect x=13,y=14, w=6, h=20, rx=3
audio/bar-3:  rect x=21,y=9,  w=6, h=30, rx=3  ← tallest, center
audio/bar-4:  rect x=29,y=14, w=6, h=20, rx=3
audio/bar-5:  rect x=37,y=20, w=6, h=8,  rx=3
Each <rect> sits inside <g id="audio/bar-N">. CSS targets the <rect> for transform-box.
```

**`FolderCatatan`** — folder body (rect) + tab path + note lines.
```
folder/body:
  rect x=4,y=20 w=40,h=24 rx=2  fill=var(--illu-fill)
folder/tab:
  path M4,20 L4,16 L18,16 L22,12 L40,12 L40,20  (traces top edge with raised tab)
folder/note:
  M10,28 L38,28   M10,34 L38,34   M10,40 L30,40
```

**`BurungHantu`** — PanduMark scaled ×2 to 48×48 with added stroke glasses rings, bridge, beak, animated eyelids.
```
owl/body:
  path fillRule="evenodd" fill=var(--illu-fill) stroke=none
  d="M24,42 C16.44,42 10.84,37.24 10.04,30.3 C9.4,24.5 11.72,20.16 15.3,17.7
     L14.2,11.7 L19.5,15.7 C22.32,14.7 25.68,14.7 28.5,15.7
     L33.8,11.7 L32.7,17.7 C36.28,20.16 38.6,24.5 37.96,30.3
     C37.16,37.24 31.56,42 24,42 Z
     M22.8,26.3 A5.3,5.3 0 1 0 12.2,26.3 A5.3,5.3 0 1 0 22.8,26.3 Z
     M35.8,26.3 A5.3,5.3 0 1 0 25.2,26.3 A5.3,5.3 0 1 0 35.8,26.3 Z"
  (lens centers: L cx=17.5,cy=26.3,r=5.3  R cx=30.5,cy=26.3,r=5.3)

owl/glasses-left:   circle cx=17.5,cy=26.3,r=5.3  stroke=currentColor fill=none
owl/glasses-right:  circle cx=30.5,cy=26.3,r=5.3  stroke=currentColor fill=none
owl/bridge:         line x1=22.8,y1=26.3 x2=25.2,y2=26.3
owl/beak:           path M22.5,32.5 L24,34.1 L25.5,32.5  fill=none

owl/eyelid-left:    ellipse cx=17.5,cy=26.3,rx=5.3,ry=5.3  fill=currentColor stroke=none
owl/eyelid-right:   ellipse cx=30.5,cy=26.3,rx=5.3,ry=5.3  fill=currentColor stroke=none
```
Eyelid fill is `currentColor` (not `--illu-fill`) so the blink is visible on both light and dark panels.

---

## 2. `src/App.tsx` — changes

- Extract existing `App()` return into `function MarkPage()` (no other changes to that function).
- Keep `PanduMark` and `Scale` in place.
- Add `CATEGORIES` data array (see below), `IlluPanel`, `IlluBoard`, updated `App()` with `useState<'mark'|'illu'>('illu')` toggle.
- Add nav toggle buttons to header (two `<button>` tags with `.eyebrow` class + `.nav-active` modifier).

```tsx
const CATEGORIES = [
  { id: 'belajar', label: 'BELAJAR',
    items: [BukuTerbuka, SlidePresentation, KartuHafalan, DaftarCentang] },
  { id: 'anatomi', label: 'ANATOMI',
    items: [Jantung, Paru, Otak, Tulang] },
  { id: 'klinis',  label: 'KLINIS',
    items: [Stetoskop, KapsulObat, TabungSampel, Mikroskop] },
  { id: 'produk',  label: 'PRODUK',
    items: [GelembungChat, GelombangAudio, FolderCatatan, BurungHantu] },
];
```

`IlluPanel` renders all 4 categories in a column. Four panels in a 2×2 grid: `[light/48, dark/48, light/24, dark/24]`. Dark panels carry `className="illu-panel-dark"` on the container.

---

## 3. `src/index.css` — append after `@media (max-width: 760px)`

### CSS custom properties
```css
.illu {
  --illu-fill: #e2f1f5;
  --illu-cta:  #ea580c;
  display: block;
  color: #016176;
  overflow: visible; /* pulse-ring expands beyond 48×48 */
}
.illu-panel-dark .illu {
  --illu-fill: #0d2b36;
  --illu-cta:  #f9803f;
  color: #35a8c4;
}
```

### New keyframes
```css
@keyframes illu-pulse {
  0%   { transform: scale(.7);  opacity: .85; }
  65%  { transform: scale(1.7); opacity: 0; }
  100% { transform: scale(.7);  opacity: 0; }
}
@keyframes illu-bar {
  0%, 100% { transform: scaleY(1); }
  50%      { transform: scaleY(.3); }
}
@keyframes illu-tick {
  from { stroke-dashoffset: 20; }
  to   { stroke-dashoffset: 0; }
}
```

### Animation selectors
```css
/* heart pulse ring */
.illu [id*="pulse-ring"] {
  transform-box: fill-box; transform-origin: center;
  animation: illu-pulse 2s ease-out infinite;
}
/* audio bars — staggered 0.18s each */
.illu [id*="bar-1"] rect,
.illu [id*="bar-2"] rect, /* …through bar-5 */ {
  transform-box: fill-box; transform-origin: center;
  animation: illu-bar 1.4s ease-in-out infinite <delay>;
}
/* checklist tick draw */
.illu [id*="tick-1"] { stroke-dasharray: 20; animation: illu-tick .45s var(--ease-snap) 1.2s both; }
.illu [id*="tick-2"] { stroke-dasharray: 20; animation: illu-tick .45s var(--ease-snap) 1.5s both; }
/* owl eyelid — reuses existing pandu-blink keyframe */
.illu [id*="eyelid"] {
  transform-box: fill-box; transform-origin: 50% 0%;
  animation: pandu-blink 5s linear 1.5s infinite;
}
```

### Board layout
- `.illu-page` — same structure as `.mark-page`, `padding: 0 5vw 60px`
- `.illu-panels` — `display: grid; grid-template-columns: 1fr 1fr; gap: 16px`
- `.illu-panel` — `padding: 24px 20px; border-radius: 4px` + light/dark variants
- `.illu-category` + `.illu-row` — flex row of 4 items per category
- `.illu-item` — flex column, center-aligned, with label at 7px IBM Plex Mono
- `.illu-item-label` — truncated, max-width 100%, text-align center
- Mobile: collapse `.illu-panels` to 1 column at 760px

---

## Implementation order

1. Create `src/illustrations.tsx` — start with `BurungHantu` (validates ×2 scale), then build remaining 15.
2. Append illustration CSS section to `src/index.css`.
3. Modify `src/App.tsx` — extract `MarkPage`, add `IlluBoard`, toggle `App()`.
4. Open preview and audit all four panels.

## Watchpoints

- **Capsule arc flags**: `A7,7 0 0,1` (top dome, CW sweep) vs `A7,7 0 0,0` (bottom, CCW). Verify in browser.
- **`transform-box` on `<g>`**: apply `transform-box: fill-box` to `<rect>` inside `<g id="audio/bar-N">`, not the `<g>` itself (Webkit reliability).
- **Pulse ring overflow at 24px**: add `padding: 4px` to `.illu-item` on the 24px panels so the expanding ring doesn't clip.
- **`overflow: visible` on `.illu`**: required for `jantung` pulse ring; does not affect the board layout because the grid gap absorbs the overflow.
- **Eyelid on dark panel**: filled `currentColor` (teal `#35a8c4`) against dark body — visible blink. If eyelid were `--illu-fill` (`#0d2b36`) against `#0a1220` background, the effect would be nearly invisible.

## Verification

1. Dev server hot-reloads all 16 in the `IlluBoard` view.
2. All 16 render at both 48px and 24px on both panel backgrounds with correct stroke/fill colors.
3. `jantung` pulse ring, `audio` bars, `daftar-centang` tick draw, and `burung-hantu` eyelid all animate.
4. Orange accent appears only on `stetoskop` chest-piece membrane dot.
5. Toggle between `IlluBoard` and `MarkPage` works without errors.
