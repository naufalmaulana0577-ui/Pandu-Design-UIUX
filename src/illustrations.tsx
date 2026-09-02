import { ReactNode } from "react";

type IlluProps = { size?: number; className?: string };

const F = "var(--illu-fill)";
const CTA = "var(--illu-cta)";

function Svg({ size, cls, children }: { size: number; cls: string; children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`illu ${cls}`}
    >
      {children}
    </svg>
  );
}

// ─── Belajar ──────────────────────────────────────────────────────────────────

export function BukuTerbuka({ size = 48, className = "" }: IlluProps) {
  return (
    <Svg size={size} cls={className}>
      <g id="buku/page-left">
        <path d="M24 10 C22 8 10 8 6 12 L6 42 L24 42 Z" fill={F} />
      </g>
      <g id="buku/page-right">
        <path d="M24 10 C26 8 38 8 42 12 L42 42 L24 42 Z" />
      </g>
      <g id="buku/spine">
        <line x1="24" y1="10" x2="24" y2="42" />
      </g>
      <g id="buku/lines">
        <line x1="9"  y1="20" x2="21" y2="20" />
        <line x1="9"  y1="26" x2="21" y2="26" />
        <line x1="9"  y1="32" x2="21" y2="32" />
        <line x1="27" y1="20" x2="39" y2="20" />
        <line x1="27" y1="26" x2="39" y2="26" />
        <line x1="27" y1="32" x2="39" y2="32" />
      </g>
    </Svg>
  );
}

export function SlidePresentation({ size = 48, className = "" }: IlluProps) {
  return (
    <Svg size={size} cls={className}>
      <g id="slide/frame">
        <rect x="6" y="6" width="36" height="24" rx="2" fill={F} />
      </g>
      <g id="slide/content">
        <line x1="10" y1="14" x2="32" y2="14" />
        <line x1="10" y1="19" x2="24" y2="19" />
        <rect x="10" y="22" width="4" height="5" rx="1" fill="currentColor" stroke="none" />
        <rect x="16" y="19" width="4" height="8" rx="1" fill="currentColor" stroke="none" />
        <rect x="22" y="21" width="4" height="6" rx="1" fill="currentColor" stroke="none" />
      </g>
      <g id="slide/stand">
        <line x1="24" y1="30" x2="14" y2="44" />
        <line x1="24" y1="30" x2="34" y2="44" />
        <line x1="17" y1="40" x2="31" y2="40" />
      </g>
    </Svg>
  );
}

export function KartuHafalan({ size = 48, className = "" }: IlluProps) {
  return (
    <Svg size={size} cls={className}>
      <g id="kartu/back">
        <path d="M13 16 L39 14 L40 32 L14 34 Z" fill={F} />
      </g>
      <g id="kartu/front">
        <rect x="8" y="20" width="32" height="22" rx="2" fill={F} />
      </g>
      <g id="kartu/text">
        <line x1="12" y1="29" x2="36" y2="29" />
        <line x1="12" y1="35" x2="28" y2="35" />
      </g>
    </Svg>
  );
}

export function DaftarCentang({ size = 48, className = "" }: IlluProps) {
  return (
    <Svg size={size} cls={className}>
      <g id="daftar/box-1">
        <rect x="5" y="5" width="12" height="12" rx="2" fill={F} />
      </g>
      <g id="daftar/tick-1">
        <polyline points="7.5,11 11,14.5 17,7" />
      </g>
      <line x1="21" y1="11" x2="43" y2="11" />
      <g id="daftar/box-2">
        <rect x="5" y="20" width="12" height="12" rx="2" fill={F} />
      </g>
      <g id="daftar/tick-2">
        <polyline points="7.5,26 11,29.5 17,22" />
      </g>
      <line x1="21" y1="26" x2="43" y2="26" />
      <g id="daftar/box-3">
        <rect x="5" y="35" width="12" height="12" rx="2" />
      </g>
      <line x1="21" y1="41" x2="38" y2="41" />
    </Svg>
  );
}

// ─── Anatomi ──────────────────────────────────────────────────────────────────

export function Jantung({ size = 48, className = "" }: IlluProps) {
  return (
    <Svg size={size} cls={className}>
      <g id="jantung/chamber">
        <path
          d="M24 37 C13 29 5 23 5 15 C5 8 12 5 18 8 C21 9 24 13 24 13 C24 13 27 9 30 8 C36 5 43 8 43 15 C43 23 35 29 24 37 Z"
          fill={F}
        />
      </g>
      <g id="jantung/aorta">
        <path d="M20 10 C18 7 18 4 22 3 C26 2 28 5 28 8" />
      </g>
      <circle id="jantung/pulse-ring" cx="24" cy="22" r="12" />
    </Svg>
  );
}

export function Paru({ size = 48, className = "" }: IlluProps) {
  return (
    <Svg size={size} cls={className}>
      <g id="paru/trachea">
        <line x1="24" y1="4" x2="24" y2="16" />
        <path d="M24 16 C22 17 18 19 16 21" />
        <path d="M24 16 C26 17 30 19 32 21" />
      </g>
      <g id="paru/left">
        <path d="M16 21 C10 23 6 29 8 37 C10 43 18 45 22 41 C24 39 24 33 22 29 L20 25 Z" fill={F} />
      </g>
      <g id="paru/right">
        <path d="M32 21 C38 23 42 29 40 37 C38 43 30 45 26 41 C24 39 24 33 26 29 L28 25 Z" />
      </g>
    </Svg>
  );
}

export function Otak({ size = 48, className = "" }: IlluProps) {
  return (
    <Svg size={size} cls={className}>
      <g id="otak/cortex">
        <path
          d="M10 30 C8 22 10 12 18 8 C26 4 38 8 42 18 C44 28 40 38 30 42 C20 44 12 38 10 30 Z"
          fill={F}
        />
      </g>
      <g id="otak/gyri">
        <path d="M20 8 C24 6 30 8 34 12" />
        <path d="M34 12 C38 16 38 22 36 28" />
        <path d="M14 14 C18 10 24 10 28 14" />
        <path d="M12 22 C14 18 20 18 24 22" />
        <path d="M10 30 C12 26 18 26 22 28" />
      </g>
      <g id="otak/stem">
        <path d="M20 42 C20 46 28 46 28 42" />
      </g>
    </Svg>
  );
}

export function Tulang({ size = 48, className = "" }: IlluProps) {
  return (
    <Svg size={size} cls={className}>
      <g id="tulang/cap-left">
        <path d="M8 12 C6 6 16 2 20 8 C22 12 20 16 16 14 Z" fill={F} />
      </g>
      <g id="tulang/shaft">
        <line x1="16" y1="14" x2="28" y2="38" />
        <line x1="20" y1="8"  x2="32" y2="32" />
      </g>
      <g id="tulang/cap-right">
        <path d="M28 38 C26 42 30 46 34 44 C38 42 40 36 36 32" />
        <path d="M32 32 C36 30 42 34 40 40 C38 44 34 44 30 42" />
      </g>
    </Svg>
  );
}

// ─── Klinis ───────────────────────────────────────────────────────────────────

export function Stetoskop({ size = 48, className = "" }: IlluProps) {
  return (
    <Svg size={size} cls={className}>
      <g id="stetoskop/earpieces">
        <line x1="15" y1="6"  x2="10" y2="12" />
        <line x1="33" y1="6"  x2="38" y2="12" />
        <circle cx="10" cy="12" r="2" />
        <circle cx="38" cy="12" r="2" />
      </g>
      <g id="stetoskop/tubing">
        <path d="M10 14 C10 22 18 24 24 26" />
        <path d="M38 14 C38 22 30 24 24 26" />
        <line x1="24" y1="26" x2="24" y2="34" />
      </g>
      <g id="stetoskop/chest-piece">
        <circle cx="24" cy="40" r="7" fill={F} />
        <circle cx="24" cy="40" r="2.5" fill={CTA} stroke="none" />
      </g>
    </Svg>
  );
}

export function KapsulObat({ size = 48, className = "" }: IlluProps) {
  return (
    <Svg size={size} cls={className}>
      <g id="kapsul/top">
        {/* sweep=0 (CCW) creates upward dome from left to right */}
        <path d="M17 24 L17 17 A7 7 0 0 0 31 17 L31 24 Z" fill={F} />
      </g>
      <g id="kapsul/bottom">
        {/* sweep=1 (CW) creates downward dome from left to right */}
        <path d="M17 24 L17 31 A7 7 0 0 1 31 31 L31 24" />
      </g>
      <g id="kapsul/split">
        <line x1="17" y1="24" x2="31" y2="24" />
      </g>
    </Svg>
  );
}

export function TabungSampel({ size = 48, className = "" }: IlluProps) {
  return (
    <Svg size={size} cls={className}>
      <g id="tabung/cap">
        <rect x="16" y="6" width="16" height="10" rx="2" fill={F} />
      </g>
      <g id="tabung/body">
        {/* sweep=1 (CW) creates downward rounded bottom */}
        <path d="M19 14 L19 38 A5 5 0 0 1 29 38 L29 14" />
      </g>
      <g id="tabung/liquid">
        <path d="M19 30 C22 28 26 32 29 30 L29 38 A5 5 0 0 1 19 38 Z" fill={F} stroke="none" />
        <path d="M19 30 C22 28 26 32 29 30" />
      </g>
    </Svg>
  );
}

export function Mikroskop({ size = 48, className = "" }: IlluProps) {
  return (
    <Svg size={size} cls={className}>
      <g id="mikroskop/base">
        <rect x="8" y="40" width="28" height="6" rx="2" fill={F} />
      </g>
      <g id="mikroskop/body">
        <line x1="20" y1="40" x2="20" y2="14" />
        <path d="M20 20 L30 20 L30 40" />
        <circle cx="30" cy="26" r="3" />
      </g>
      <g id="mikroskop/stage">
        <line x1="10" y1="30" x2="36" y2="30" />
      </g>
      <g id="mikroskop/eyepiece">
        <path d="M12 8 L12 16 L20 16" />
        <circle cx="12" cy="8" r="2.5" />
      </g>
      <g id="mikroskop/objective">
        <path d="M18 30 L22 30 L20 36 Z" fill={F} />
      </g>
    </Svg>
  );
}

// ─── Produk ───────────────────────────────────────────────────────────────────

export function GelembungChat({ size = 48, className = "" }: IlluProps) {
  return (
    <Svg size={size} cls={className}>
      <g id="gelembung/bubble">
        <path
          d="M12 6 L38 6 A4 4 0 0 1 42 10 L42 30 A4 4 0 0 1 38 34 L16 34 L6 44 L10 34 A4 4 0 0 1 6 30 L6 10 A4 4 0 0 1 12 6 Z"
          fill={F}
        />
      </g>
      <g id="gelembung/lines">
        <line x1="12" y1="15" x2="36" y2="15" />
        <line x1="12" y1="22" x2="30" y2="22" />
      </g>
    </Svg>
  );
}

export function GelombangAudio({ size = 48, className = "" }: IlluProps) {
  return (
    <Svg size={size} cls={className}>
      <g id="audio/bar-1">
        <rect x="5"  y="20" width="6" height="8"  rx="3" fill="currentColor" stroke="none" />
      </g>
      <g id="audio/bar-2">
        <rect x="13" y="14" width="6" height="20" rx="3" fill="currentColor" stroke="none" />
      </g>
      <g id="audio/bar-3">
        <rect x="21" y="9"  width="6" height="30" rx="3" fill="currentColor" stroke="none" />
      </g>
      <g id="audio/bar-4">
        <rect x="29" y="14" width="6" height="20" rx="3" fill="currentColor" stroke="none" />
      </g>
      <g id="audio/bar-5">
        <rect x="37" y="20" width="6" height="8"  rx="3" fill="currentColor" stroke="none" />
      </g>
    </Svg>
  );
}

export function FolderCatatan({ size = 48, className = "" }: IlluProps) {
  return (
    <Svg size={size} cls={className}>
      <g id="folder/body">
        <rect x="4" y="20" width="40" height="24" rx="2" fill={F} />
      </g>
      <g id="folder/tab">
        <path d="M4 20 L4 16 L18 16 L22 12 L40 12 L40 20" />
      </g>
      <g id="folder/note">
        <line x1="10" y1="28" x2="38" y2="28" />
        <line x1="10" y1="34" x2="38" y2="34" />
        <line x1="10" y1="40" x2="30" y2="40" />
      </g>
    </Svg>
  );
}

export function BurungHantu({ size = 48, className = "" }: IlluProps) {
  return (
    <Svg size={size} cls={className}>
      <g id="owl/body">
        {/* PanduMark path scaled ×2: ear tufts + body silhouette + lens cutouts (evenodd) */}
        <path
          fillRule="evenodd"
          fill={F}
          stroke="none"
          d={
            "M24 42 C16.44 42 10.84 37.24 10.04 30.3 " +
            "C9.4 24.5 11.72 20.16 15.3 17.7 " +
            "L14.2 11.7 L19.5 15.7 " +
            "C22.32 14.7 25.68 14.7 28.5 15.7 " +
            "L33.8 11.7 L32.7 17.7 " +
            "C36.28 20.16 38.6 24.5 37.96 30.3 " +
            "C37.16 37.24 31.56 42 24 42 Z " +
            "M22.8 26.3 A5.3 5.3 0 1 0 12.2 26.3 A5.3 5.3 0 1 0 22.8 26.3 Z " +
            "M35.8 26.3 A5.3 5.3 0 1 0 25.2 26.3 A5.3 5.3 0 1 0 35.8 26.3 Z"
          }
        />
      </g>
      <g id="owl/glasses-left">
        <circle cx="17.5" cy="26.3" r="5.3" />
      </g>
      <g id="owl/glasses-right">
        <circle cx="30.5" cy="26.3" r="5.3" />
      </g>
      <g id="owl/bridge">
        <line x1="22.8" y1="26.3" x2="25.2" y2="26.3" />
      </g>
      <g id="owl/beak">
        <path d="M22.5 32.5 L24 34.1 L25.5 32.5 Z" fill="currentColor" />
      </g>
      <ellipse id="owl/eyelid-left"  cx="17.5" cy="26.3" rx="5.3" ry="5.3" fill="currentColor" stroke="none" />
      <ellipse id="owl/eyelid-right" cx="30.5" cy="26.3" rx="5.3" ry="5.3" fill="currentColor" stroke="none" />
    </Svg>
  );
}
