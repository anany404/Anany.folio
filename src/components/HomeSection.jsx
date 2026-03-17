import { useEffect, useState } from 'react';

const roles = ['Frontend Developer', 'WordPress Builder', 'UI Designer', 'Full-Stack Learner'];

export default function HomeSection() {
  const [displayed, setDisplayed] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex(c => c + 1), 80);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(c => c - 1), 45);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex(r => (r + 1) % roles.length);
    }

    setDisplayed(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section id="home" className="main intro">
      <div id="headline" className="headline d-flex align-items-start flex-column" data-speed="2">
        <h1 className="headline__title animate-headline">
          I'm Anany<br />
          <span style={{ display: 'inline-block', minWidth: '2ch' }}>
            {displayed}
            <span style={{
              display: 'inline-block',
              width: '2px',
              height: '1em',
              background: 'var(--accent, #a78bfa)',
              marginLeft: '2px',
              verticalAlign: 'text-bottom',
              animation: 'blink 0.8s step-end infinite',
            }} />
          </span>
        </h1>

        <style>{`
          @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        `}</style>

        <div className="headline__btnholder d-flex flex-column flex-sm-row">
          <a className="btn mobile-vertical btn-default btn-hover btn-hover-accent-mobile animate-headline" href="#portfolio">
            <span className="btn-caption">My Works</span>
            <i className="ph-bold ph-squares-four"></i>
          </a>
          <a className="btn mobile-vertical btn-default btn-hover btn-hover-outline-mobile animate-headline" href="img\services\Anany-fullstack-22.pdf" target="_blank" download>
            <span className="btn-caption">Download CV</span>
            <i className="ph-bold ph-download-simple"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
