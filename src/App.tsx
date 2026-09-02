import React from "react";
import {
  BukuTerbuka, SlidePresentation, KartuHafalan, DaftarCentang,
  Jantung, Paru, Otak, Tulang,
  Stetoskop, KapsulObat, TabungSampel, Mikroskop,
  GelembungChat, GelombangAudio, FolderCatatan, BurungHantu,
} from "./illustrations";

/* Pandu master mark — 24 × 24, designed to remain legible at favicon scale. */
function PanduMark({ size = 24, color = "currentColor", blink = false }: { size?: number; color?: string; blink?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-label="Pandu" role="img">
      <path
        fill={color}
        fillRule="evenodd"
        d={
          "M12 21 " +
          "C8.22 21 5.42 18.62 5.02 15.15 " +
          "C4.7 12.25 5.86 10.08 7.65 8.85 " +
          "L7.1 5.85 9.75 7.85 " +
          "C11.16 7.35 12.84 7.35 14.25 7.85 " +
          "L16.9 5.85 16.35 8.85 " +
          "C18.14 10.08 19.3 12.25 18.98 15.15 " +
          "C18.58 18.62 15.78 21 12 21Z " +
          "M11.4 13.15A2.65 2.65 0 1 0 6.1 13.15A2.65 2.65 0 1 0 11.4 13.15Z " +
          "M17.9 13.15A2.65 2.65 0 1 0 12.6 13.15A2.65 2.65 0 1 0 17.9 13.15Z " +
          "M11.25 16.25L12 17.05l.75-.8Z"
        }
      />
      {blink && (
        <>
          <ellipse className="eyelid" cx="8.75"  cy="13.15" rx="2.65" ry="2.65" fill={color} />
          <ellipse className="eyelid" cx="15.25" cy="13.15" rx="2.65" ry="2.65" fill={color} />
        </>
      )}
    </svg>
  );
}

const sizes = [16, 24, 32, 48, 72];

function Scale({ dark = false }: { dark?: boolean }) {
  const color = dark ? "#e9edf3" : "#011a47";
  return (
    <div className={`mark-scale ${dark ? "mark-scale-dark" : ""}`}>
      {sizes.map((size) => (
        <div className="scale-item" key={size}>
          <PanduMark size={size} color={color} />
          <span>{size}</span>
        </div>
      ))}
    </div>
  );
}

type ViewProps = { setView: (v: "mark" | "illu") => void };

function AppHeader({ view, setView }: { view: "mark" | "illu"; setView: (v: "mark" | "illu") => void }) {
  return (
    <header className="mark-header">
      <div className="wordmark">
        <PanduMark size={22} color="var(--accent)" />
        <span>Pandu</span>
      </div>
      <nav className="nav-toggle">
        <button className={`nav-btn${view === "illu" ? " nav-active" : ""}`} onClick={() => setView("illu")}>
          ILLUSTRATIONS / 02
        </button>
        <button className={`nav-btn${view === "mark" ? " nav-active" : ""}`} onClick={() => setView("mark")}>
          IDENTITY / 01
        </button>
      </nav>
    </header>
  );
}

function MarkPage({ setView }: ViewProps) {
  return (
    <main className="mark-page">
      <AppHeader view="mark" setView={setView} />
      <section className="mark-intro">
        <div>
          <p className="eyebrow teal">MASTER MARK</p>
          <h1>One quiet sign<br />for focused study.</h1>
        </div>
        <p className="intro-copy">The mark is no longer a mascot illustration. It is a compact study companion: an owl reduced to a calm silhouette, round lenses, and one small beak aperture.</p>
      </section>

      <section className="hero-mark" aria-label="Pandu master mark">
        <div className="hero-glow" />
        <div className="hero-orbit hero-orbit-a" />
        <div className="hero-orbit hero-orbit-b" />
        <div className="hero-mark-wrap">
          <PanduMark size={168} color="var(--accent)" blink={true} />
        </div>
        <span className="hero-caption">PANDU / MASTER SYMBOL</span>
      </section>

      <section className="spec-grid">
        <article className="spec-block">
          <p className="eyebrow">LIGHT GROUND</p>
          <Scale />
        </article>
        <article className="spec-block spec-dark">
          <p className="eyebrow">DARK GROUND</p>
          <Scale dark />
        </article>
      </section>

      <section className="principles">
        <p className="eyebrow teal">DECISION</p>
        <div className="principle-grid">
          <h2>Recognition lives in the negative space.</h2>
          <div className="principle-copy">
            <p>The twin lens openings do the identifying work at 16px. The soft outer silhouette gives them context without introducing an illustrated face.</p>
            <dl>
              <div><dt>Use</dt><dd>App icon, favicon, product navigation</dd></div>
              <div><dt>Colour</dt><dd>Teal on light; light ink on dark</dd></div>
              <div><dt>Do not</dt><dd>Outline, shade, animate, or add a book</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <footer><span>PANDU · FKKMK</span><span>24 × 24 · MASTER MARK</span></footer>
    </main>
  );
}

// ─── Illustration board ───────────────────────────────────────────────────────

type IlluItem = { id: string; Component: React.ComponentType<{ size?: number; className?: string }> };
type Category = { id: string; label: string; items: IlluItem[] };

const CATEGORIES: Category[] = [
  {
    id: "belajar", label: "BELAJAR",
    items: [
      { id: "buku-terbuka",     Component: BukuTerbuka },
      { id: "slide-presentasi", Component: SlidePresentation },
      { id: "kartu-hafalan",    Component: KartuHafalan },
      { id: "daftar-centang",   Component: DaftarCentang },
    ],
  },
  {
    id: "anatomi", label: "ANATOMI",
    items: [
      { id: "jantung", Component: Jantung },
      { id: "paru",    Component: Paru },
      { id: "otak",    Component: Otak },
      { id: "tulang",  Component: Tulang },
    ],
  },
  {
    id: "klinis", label: "KLINIS",
    items: [
      { id: "stetoskop",     Component: Stetoskop },
      { id: "kapsul-obat",   Component: KapsulObat },
      { id: "tabung-sampel", Component: TabungSampel },
      { id: "mikroskop",     Component: Mikroskop },
    ],
  },
  {
    id: "produk", label: "PRODUK",
    items: [
      { id: "gelembung-chat",  Component: GelembungChat },
      { id: "gelombang-audio", Component: GelombangAudio },
      { id: "folder-catatan",  Component: FolderCatatan },
      { id: "burung-hantu",    Component: BurungHantu },
    ],
  },
];

function IlluPanel({ dark, size }: { dark: boolean; size: 48 | 24 }) {
  return (
    <div className={`illu-panel ${dark ? "illu-panel-dark" : "illu-panel-light"}`}>
      <div className="illu-panel-hdr">
        <p className="eyebrow">{size}px · {dark ? "DARK" : "LIGHT"}</p>
      </div>
      {CATEGORIES.map((cat) => (
        <div key={cat.id} className="illu-category">
          <p className="illu-category-lbl">{cat.label}</p>
          <div className="illu-row">
            {cat.items.map(({ id, Component }) => (
              <div key={id} className="illu-item">
                <Component size={size} />
                <span className="illu-item-lbl">{id}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function IlluBoard({ setView }: ViewProps) {
  return (
    <main className="illu-page">
      <div className="illu-page-inner">
        <AppHeader view="illu" setView={setView} />
        <div className="illu-page-header">
          <p className="eyebrow teal">SPOT ILLUSTRATIONS</p>
          <h1>16 signs for<br />every moment.</h1>
        </div>
        <div className="illu-panels">
          <IlluPanel dark={false} size={48} />
          <IlluPanel dark={true}  size={48} />
          <IlluPanel dark={false} size={24} />
          <IlluPanel dark={true}  size={24} />
        </div>
        <footer style={{ display: "flex", justifyContent: "space-between", marginTop: 96, paddingTop: 18, borderTop: "1px solid var(--border-subtle)", color: "var(--text-tertiary)", fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, letterSpacing: ".11em" }}>
          <span>PANDU · FKKMK</span><span>16 ILLUSTRATIONS · 48 × 48</span>
        </footer>
      </div>
    </main>
  );
}

// ─── Root with view toggle ────────────────────────────────────────────────────

export default function App() {
  const [view, setView] = React.useState<"mark" | "illu">("illu");

  return (
    <>
      {view === "illu" ? <IlluBoard setView={setView} /> : <MarkPage setView={setView} />}
    </>
  );
}
