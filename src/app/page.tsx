import type { Metadata } from "next";
import HomeScripts from "@/components/HomeScripts";

// Migrado desde el editor viejo (mkt_pages "/").
// El markup salió de HTML crudo, así que todavía es un bloque largo: partirlo
// en componentes de `src/components` es el próximo paso, no un requisito.
export const metadata: Metadata = {
  title: "Bookfer",
};

export default function HomePage() {
  return (
    <>
      <div className="grain"></div>

          {/* ============ HEADER ============ */}
          <header className="header" role="banner">
              <a className="logo" href="#" aria-label="Monax home">
                  <div className="logo-mark" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none">
                          {/* Plus / cross / pulse hybrid */}
                          <path d="M4 12h6m4 0h6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                          <path d="M12 4v6m0 4v6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                          <circle cx="12" cy="12" r="2" fill="currentColor" />
                      </svg>
                  </div>
                  <div className="logo-text">
                      <span className="a">Monax</span>
                      <span className="b">Analytics</span>
                  </div>
              </a>

              <nav className="nav-pills" aria-label="Primary">
                  <a className="nav-pill active" href="#">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 11 L12 3 L21 11" />
                          <path d="M5 9 V21 H19 V9" />
                      </svg>
                      Home
                  </a>
                  <a className="nav-pill" href="#">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="4" y="4" width="16" height="16" rx="2" />
                          <path d="M8 9 H16 M8 13 H16 M8 17 H12" />
                      </svg>
                      Products
                  </a>
                  <a className="nav-pill" href="#">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 18 L9 12 L13 16 L20 7" />
                          <path d="M14 7 H20 V13" />
                      </svg>
                      Compare Plans
                  </a>
                  <a className="nav-pill" href="#">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="5" width="18" height="14" rx="2" />
                          <circle cx="9" cy="11" r="2" />
                          <path d="M21 17 L15 12 L4 19" />
                      </svg>
                      About Us
                  </a>
              </nav>

              <a className="header-cta" href="#" aria-label="Start now">
                  <span className="cta-text">Start now</span>
                  <span className="cta-dot">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 17 L17 7" />
                          <path d="M8 7 H17 V16" />
                      </svg>
                  </span>
                  <span className="cta-arrows" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 6 L15 12 L9 18" />
                      </svg>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 6 L15 12 L9 18" />
                      </svg>
                  </span>
              </a>
          </header>

          {/* ============ HERO ============ */}
          <section className="hero">
              <h1 className="headline" id="headline">
                  <div className="line line-1">
                      <span className="word"><span>Puto el que lee</span></span>
                      <span className="word"><span>Teams</span></span>
                  </div>
                  <div className="line line-2">
                      <span className="inline-img" id="inlineImg"></span>
                      <span className="word"><span>Around</span></span>
                      <span className="idea-pill" id="ideaPill">
                          <span className="txt">Behind every<br />great idea</span>
                          <span className="leaf"></span>
                      </span>
                  </div>
                  <div className="line line-3">
                      <span className="word"><span>Analytical</span></span>
                      <span className="word"><span>Work</span></span>
                  </div>
              </h1>
          </section>

          {/* ============ BELOW HERO ============ */}
          <section className="below">

              {/* LEFT */}
              <div className="col-left">
                  <div className="stack-block">
                      <h3>Modern data stack</h3>
                      <p>The investment you've made in every layer of the stack, by getting data you've made meaningful into
                          everyone's.</p>
                      <a href="#" className="read-more">Read more →</a>
                  </div>
                  <div className="mini-card">
                      <div className="mini-img coral"></div>
                      <div className="lbl">Modern Business Intelligence</div>
                  </div>
              </div>

              {/* CENTER */}
              <div className="col-center">
                  <div className="try-pill-wrap">
                      <button className="try-pill">Try for free</button>
                  </div>
                  <div className="big-image" id="bigImage">
                      <div className="sphere sp-1"></div>
                      <div className="sphere sp-2"></div>
                      <div className="sphere sp-3"></div>
                      <div className="sphere sp-4"></div>
                      <div className="sphere sp-5"></div>
                      <div className="sphere sp-6"></div>
                      <div className="sphere sp-7"></div>
                      <button className="play-btn">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                              <polygon points="6 4 20 12 6 20" />
                          </svg>
                      </button>
                  </div>
              </div>

              {/* RIGHT */}
              <div className="col-right">
                  <div className="experts">
                      <div className="avatar-stack">
                          <div style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces')" }}>
                          </div>
                          <div style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces')" }}>
                          </div>
                          <div style={{ backgroundImage: "url('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=faces')" }}>
                          </div>
                      </div>
                      <div className="ex-txt">Connect<br />More Experts</div>
                  </div>
                  <div className="stat-block">
                      <div className="num" data-count="120"><span>0</span><small>+</small></div>
                      <p>Perform complex, ad hoc analysis and empower.</p>
                  </div>
                  <div className="figurine-card">
                      <div className="figurine-img"></div>
                  </div>
              </div>

          </section>

          {/* ============ SECTION 2: FEATURES ============ */}
          <section className="features">
              <div className="features-head">
                  <div>
                      <div className="eyebrow">Why Monax · The product</div>
                      <h2>Less dashboards.<br />More decisions.</h2>
                  </div>
                  <p>Tools that turn raw data into the kind of insight your team can actually act on — without waiting on a
                      queue from analytics.</p>
              </div>

              <div className="features-grid">
                  <article className="feat-card">
                      <div className="feat-icon ic-1"></div>
                      <h3>Pipelines that just work</h3>
                      <p>Ingest from 200+ sources, transform with SQL or natural language, and ship clean tables in minutes —
                          not weeks.</p>
                      <a href="#" className="feat-link">Explore pipelines →</a>
                  </article>
                  <article className="feat-card">
                      <div className="feat-icon ic-2"></div>
                      <h3>Self-serve analytics</h3>
                      <p>Anyone on the team can pull a metric, run a cohort, or build a dashboard. Real autonomy, no extra
                          training required.</p>
                      <a href="#" className="feat-link">See self-serve →</a>
                  </article>
                  <article className="feat-card">
                      <div className="feat-icon ic-3"></div>
                      <h3>AI-assisted exploration</h3>
                      <p>Ask questions in plain language, get charts back. Monax learns your schema and the way your team
                          actually thinks.</p>
                      <a href="#" className="feat-link">Meet the AI →</a>
                  </article>
              </div>
          </section>

          {/* ============ SECTION 3: CTA ============ */}
          <section className="cta-section">
              <div className="cta-inner">
                  <h2>Bring your team<br /><em>around the data</em>.</h2>
                  <div className="cta-right">
                      <p>30-day trial. No credit card. Full access to every layer of the stack from day one.</p>
                      <button className="cta-btn">
                          Start the trial
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                              <line x1="7" y1="17" x2="17" y2="7" />
                              <polyline points="7 7 17 7 17 17" />
                          </svg>
                      </button>
                  </div>
              </div>
          </section>
      <HomeScripts />
    </>
  );
}
