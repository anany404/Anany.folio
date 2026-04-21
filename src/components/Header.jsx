import { useEffect, useState, useRef } from 'react';

const navItems = [
  { href: '#home',      label: 'Home',      icon: 'ph-house-simple' },
  { href: '#portfolio', label: 'Portfolio', icon: 'ph-squares-four' },
  { href: '#about',     label: 'About Me',  icon: 'ph-user' },
  { href: '#resume',    label: 'Resume',    icon: 'ph-article' },
  { href: '#contact',   label: 'Contact',   icon: 'ph-envelope' },
];

function getInitialTheme() {
  try {
    const saved = localStorage.getItem('template.theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  } catch {
    return 'dark';
  }
}

export default function Header() {
  const [active, setActive]     = useState('home');
  const [theme, setTheme]       = useState('dark');
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
    document.documentElement.setAttribute('color-scheme', initial);
  }, []);

  function handleThemeToggle() {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try { localStorage.setItem('template.theme', next); } catch {}
    document.documentElement.setAttribute('color-scheme', next);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['home', 'portfolio', 'about', 'resume', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-10% 0px -60% 0px', threshold: 0 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setActive(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const css = `
    :root {
      --nh-accent: #503c77;
      --nh-light:  #6d52a3;
    }

    /* ════════════════════════════════════════════
       DESKTOP pill — top center
       ════════════════════════════════════════════ */
    .nh-bar {
      position: fixed;
      top: 2.5rem;
      left: 50%;
      transform: translateX(-50%);
      margin-left: 80px;
      margin-right: 80px;
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.35rem;
      padding: 0.35rem 0.5rem;
      border-radius: 999px;
      background: rgba(80,60,119,0.58);
      backdrop-filter: blur(20px) saturate(180%);
      -webkit-backdrop-filter: blur(20px) saturate(180%);
      border: 1px solid rgba(180,150,255,0.20);
      box-shadow: 0 6px 32px rgba(80,60,119,0.38);
      transition: background 0.3s, box-shadow 0.3s, border-color 0.3s;
      white-space: nowrap;
    }
    [color-scheme="light"] .nh-bar {
      background: rgba(80,60,119,0.13);
      border-color: rgba(80,60,119,0.28);
      box-shadow: 0 6px 32px rgba(80,60,119,0.18);
    }
    .nh-bar.scrolled {
      background: rgba(45,30,75,0.88);
      box-shadow: 0 8px 40px rgba(80,60,119,0.55);
    }
    [color-scheme="light"] .nh-bar.scrolled {
      background: rgba(220,210,240,0.96);
      box-shadow: 0 8px 40px rgba(80,60,119,0.22);
    }

    /* ════════════════════════════════════════════
       MOBILE bottom pill (< 640px)
       ════════════════════════════════════════════ */
    .nh-mobile-bar {
      display: none;
      position: fixed;
      bottom: 1.2rem;
      left: 50%;
      transform: translateX(-50%);
      z-index: 9999;
      align-items: center;
      justify-content: space-around;
      gap: 0.15rem;
      padding: 0.5rem 0.75rem;
      border-radius: 999px;
      background: rgba(45,30,75,0.92);
      backdrop-filter: blur(24px) saturate(200%);
      -webkit-backdrop-filter: blur(24px) saturate(200%);
      border: 1px solid rgba(180,150,255,0.22);
      box-shadow: 0 -2px 30px rgba(80,60,119,0.40), 0 8px 30px rgba(0,0,0,0.35);
      width: calc(100vw - 2rem);
      max-width: 500px;
      transition: background 0.3s, box-shadow 0.3s, border-color 0.3s;
    }
    [color-scheme="light"] .nh-mobile-bar {
      background: rgba(235,228,252,0.96);
      border-color: rgba(80,60,119,0.25);
      box-shadow: 0 -2px 20px rgba(80,60,119,0.18), 0 8px 24px rgba(0,0,0,0.10);
    }

    /* ════════════════════════════════════════════
       LOGO
       ════════════════════════════════════════════ */
    .nh-logo {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      background: #503c77;
      color: #fff;
      text-decoration: none;
      flex-shrink: 0;
      box-shadow: 0 3px 12px rgba(80,60,119,0.55);
      transition: background 0.2s, transform 0.25s, box-shadow 0.2s;
    }
    .nh-logo:hover {
      background: #6d52a3;
      transform: scale(1.12) rotate(-10deg);
      box-shadow: 0 5px 20px rgba(80,60,119,0.70);
      color: #fff;
    }
    .nh-logo .nh-icon { font-size: 0.95rem; }

    /* ════════════════════════════════════════════
       NAV LINK — desktop
       ════════════════════════════════════════════ */
    .nh-link {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      padding: 0.38rem 0.75rem;
      border-radius: 999px;
      font-size: 0.78rem;
      font-weight: 600;
      letter-spacing: 0.01em;
      color: rgba(235,220,255,0.78);
      text-decoration: none;
      border: none;
      background: transparent;
      cursor: pointer;
      transition: color 0.2s, background 0.2s, transform 0.18s;
      -webkit-tap-highlight-color: transparent;
    }
    [color-scheme="light"] .nh-link { color: rgba(60,40,100,0.80); }
    .nh-link:hover {
      color: #fff;
      background: rgba(180,150,255,0.16);
      transform: translateY(-1px);
    }
    [color-scheme="light"] .nh-link:hover { color: var(--nh-accent); background: rgba(80,60,119,0.10); }
    .nh-link.active { background: rgba(180,150,255,0.24); color: #fff; }
    [color-scheme="light"] .nh-link.active { background: rgba(80,60,119,0.15); color: var(--nh-accent); }

    /* ════════════════════════════════════════════
       MOBILE NAV ITEM
       ════════════════════════════════════════════ */
    .nh-mob-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.2rem;
      padding: 0.42rem 0.6rem;
      border-radius: 1.1rem;
      color: rgba(210,190,255,0.62);
      text-decoration: none;
      border: none;
      background: transparent;
      cursor: pointer;
      transition: color 0.2s, background 0.2s, transform 0.18s;
      -webkit-tap-highlight-color: transparent;
      flex: 1;
      min-width: 0;
    }
    [color-scheme="light"] .nh-mob-item { color: rgba(60,40,100,0.72); }
    .nh-mob-item:hover  { color: #fff; background: rgba(180,150,255,0.14); }
    [color-scheme="light"] .nh-mob-item:hover { color: var(--nh-accent); background: rgba(80,60,119,0.09); }
    .nh-mob-item.active { color: #fff; background: rgba(180,150,255,0.22); }
    [color-scheme="light"] .nh-mob-item.active { color: var(--nh-accent); background: rgba(80,60,119,0.13); }
    .nh-mob-item .nh-icon { font-size: 1.3rem; }
    .nh-mob-label {
      font-size: 0.62rem;
      font-weight: 600;
      letter-spacing: 0.02em;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 3.8rem;
    }

    /* ════════════════════════════════════════════
       MOBILE THEME BUTTON
       ════════════════════════════════════════════ */
    .nh-mob-theme {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.2rem;
      padding: 0.42rem 0.6rem;
      border-radius: 1.1rem;
      border: none;
      background: #503c77;
      color: #fff;
      cursor: pointer;
      transition: background 0.2s, transform 0.25s, box-shadow 0.2s;
      -webkit-tap-highlight-color: transparent;
      flex-shrink: 0;
      box-shadow: 0 2px 10px rgba(80,60,119,0.50);
    }
    .nh-mob-theme:hover { background: #6d52a3; transform: rotate(15deg); }
    .nh-mob-theme .nh-icon { font-size: 1.3rem; }

    /* ════════════════════════════════════════════
       CTA
       ════════════════════════════════════════════ */
    .nh-cta {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      padding: 0.38rem 0.85rem;
      border-radius: 999px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.01em;
      text-decoration: none;
      background: #503c77;
      color: #fff !important;
      border: none;
      cursor: pointer;
      transition: transform 0.18s, box-shadow 0.18s, background 0.18s;
      -webkit-tap-highlight-color: transparent;
      white-space: nowrap;
    }
    .nh-cta:hover {
      transform: translateY(-1px);
      background: #6d52a3;
      box-shadow: 0 5px 22px rgba(80,60,119,0.55);
    }

    /* ════════════════════════════════════════════
       DIVIDER
       ════════════════════════════════════════════ */
    .nh-divider {
      width: 1px;
      height: 16px;
      background: rgba(180,150,255,0.22);
      border-radius: 1px;
      margin: 0 0.18rem;
      flex-shrink: 0;
    }
    [color-scheme="light"] .nh-divider { background: rgba(80,60,119,0.20); }

    /* ════════════════════════════════════════════
       THEME BUTTON — desktop
       ════════════════════════════════════════════ */
    .nh-theme {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      border: none;
      background: #503c77;
      color: #fff;
      cursor: pointer;
      transition: background 0.2s, transform 0.25s, box-shadow 0.2s;
      flex-shrink: 0;
      padding: 0;
      box-shadow: 0 3px 12px rgba(80,60,119,0.55);
    }
    .nh-theme:hover {
      background: #6d52a3;
      transform: rotate(20deg);
      box-shadow: 0 5px 20px rgba(80,60,119,0.70);
    }
    .nh-theme .nh-icon { font-size: 0.95rem; }

    /* ════════════════════════════════════════════
       ICON BASE
       ════════════════════════════════════════════ */
    .nh-icon { font-size: 0.8rem; line-height: 1; flex-shrink: 0; }

    /* ════════════════════════════════════════════
       RESPONSIVE BREAKPOINTS
       ════════════════════════════════════════════ */

    /* Mobile (< 640px): bottom bar only */
    @media (max-width: 639px) {
      .nh-bar        { display: none !important; }
      .nh-mobile-bar { display: flex !important; }
    }

    /* Small tablet (640px–899px) */
    @media (min-width: 640px) and (max-width: 899px) {
      .nh-bar {
        top: 1.2rem;
        margin-left: 16px;
        margin-right: 16px;
        gap: 0.4rem;
        padding: 0.5rem 0.7rem;
      }
      .nh-link { padding: 0.5rem 0.8rem; font-size: 0.85rem; gap: 0.3rem; }
      .nh-link i { display: none; }
      .nh-cta  { padding: 0.5rem 0.9rem; font-size: 0.85rem; gap: 0.3rem; }
      .nh-cta i { display: none; }
      .nh-logo, .nh-theme { width: 2.4rem; height: 2.4rem; }
      .nh-logo .nh-icon { font-size: 1.1rem; }
      .nh-theme .nh-icon { font-size: 1.1rem; }
      .nh-icon { font-size: 1rem; }
      .nh-divider { height: 16px; }
    }

    /* Medium tablet (900px–1199px) */
    @media (min-width: 900px) and (max-width: 1199px) {
      .nh-bar {
        top: 2rem;
        margin-left: 24px;
        margin-right: 24px;
        gap: 0.8rem;
        padding: 0.8rem 1rem;
      }
      .nh-link { padding: 0.7rem 1.2rem; font-size: 1.05rem; gap: 0.45rem; }
      .nh-cta  { padding: 0.7rem 1.3rem; font-size: 1.05rem; }
      .nh-logo, .nh-theme { width: 3.2rem; height: 3.2rem; }
      .nh-logo .nh-icon  { font-size: 1.5rem; }
      .nh-theme .nh-icon { font-size: 1.5rem; }
      .nh-icon { font-size: 1.2rem; }
      .nh-divider { height: 16px; }
    }

    /* Large desktop (1200px–1599px) */
    @media (min-width: 1200px) and (max-width: 1599px) {
      .nh-bar {
        top: 5rem;
        left: 65%;
        transform: translateX(-50%);
        gap: 1.2rem;
        padding: 0.1rem 0.8rem;
        margin-left: 0;
        margin-right: 0;
      }
      .nh-link { padding: 1rem 2rem; font-size: 1.4rem; }
      .nh-cta  { padding: 1rem 2.2rem; font-size: 1.4rem; }
      .nh-logo, .nh-theme { width: 4.4rem; height: 4.4rem; }
      .nh-logo .nh-icon  { font-size: 2.2rem; }
      .nh-theme .nh-icon { font-size: 2.2rem; }
      .nh-icon { font-size: 1.6rem; }
      .nh-divider { height: 50px; }
    }

    /* XL desktop (1600px–1999px) */
    @media (min-width: 1600px) and (max-width: 1999px) {
      .nh-bar {
        top: 2.5rem;
        gap: 1.4rem;
        padding: 1.4rem 2rem;
        margin-left: 80px;
        margin-right: 80px;
      }
      .nh-link { padding: 1.2rem 2.4rem; font-size: 1.6rem; }
      .nh-cta  { padding: 1.2rem 2.6rem; font-size: 1.6rem; }
      .nh-logo, .nh-theme { width: 5.2rem; height: 5.2rem; }
      .nh-logo .nh-icon  { font-size: 2.5rem; }
      .nh-theme .nh-icon { font-size: 2.5rem; }
      .nh-icon { font-size: 1.8rem; }
      .nh-divider { height: 58px; }
    }

    /* 4K (≥ 2000px) */
    @media (min-width: 2000px) {
      .nh-bar {
        top: 3rem;
        gap: 2rem;
        padding: 2rem 3rem;
        margin-left: 120px;
        margin-right: 120px;
      }
      .nh-link { padding: 1.6rem 3.2rem; font-size: 2rem; }
      .nh-cta  { padding: 1.6rem 3.4rem; font-size: 2rem; }
      .nh-logo, .nh-theme { width: 6.5rem; height: 6.5rem; }
      .nh-logo .nh-icon  { font-size: 3.2rem; }
      .nh-theme .nh-icon { font-size: 3.2rem; }
      .nh-icon { font-size: 2.2rem; }
      .nh-divider { height: 72px; }
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* ══ DESKTOP / TABLET — top pill ══════════════════════════ */}
      <nav
        ref={menuRef}
        className={`nh-bar${scrolled ? ' scrolled' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Theme toggle */}
        <button
          className="nh-theme"
          onClick={handleThemeToggle}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <i className={`ph-bold ${theme === 'dark' ? 'ph-sun' : 'ph-moon-stars'} nh-icon`}></i>
        </button>

        <span className="nh-divider" aria-hidden="true" />

        {/* Nav links */}
        <ul
          style={{ display: 'flex', alignItems: 'center', gap: '0.15rem',
                   listStyle: 'none', margin: 0, padding: 0 }}
          role="list"
        >
          {navItems.map(({ href, label, icon }) => {
            const id = href.replace('#', '');
            return (
              <li key={id}>
                <a
                  className={`nh-link${active === id ? ' active' : ''}`}
                  href={href}
                  onClick={(e) => handleNavClick(e, id)}
                  aria-current={active === id ? 'page' : undefined}
                >
                  <i className={`ph-bold ${icon} nh-icon`} aria-hidden="true"></i>
                  <span>{label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <span className="nh-divider" aria-hidden="true" />

        {/* CTA */}
        <a
          className="nh-cta"
          href="mailto:anany.snippet22@gmail.com?subject=Hello,Let's Work Together – Contacting via Your Portfolio"
          target="_blank"
          rel="noreferrer"
          aria-label="Let's Talk"
        >
          <i className="ph-bold ph-chat-dots nh-icon" aria-hidden="true"></i>
          <span>Let's Talk</span>
        </a>
      </nav>

      {/* ══ MOBILE — bottom pill ═════════════════════════════════ */}
      <nav
        className="nh-mobile-bar"
        role="navigation"
        aria-label="Mobile navigation"
      >
        {navItems.map(({ href, label, icon }) => {
          const id = href.replace('#', '');
          return (
            <a
              key={id}
              className={`nh-mob-item${active === id ? ' active' : ''}`}
              href={href}
              onClick={(e) => handleNavClick(e, id)}
              aria-current={active === id ? 'page' : undefined}
            >
              <i className={`ph-bold ${icon} nh-icon`} aria-hidden="true"></i>
              <span className="nh-mob-label">{label}</span>
            </a>
          );
        })}

        <button
          className="nh-mob-theme"
          onClick={handleThemeToggle}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <i className={`ph-bold ${theme === 'dark' ? 'ph-sun' : 'ph-moon-stars'} nh-icon`}></i>
        </button>
      </nav>
    </>
  );
}