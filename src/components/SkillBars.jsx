import { useEffect, useRef, useState } from 'react';

const skills = [
  { name: 'HTML5 & CSS3',    level: 95, icon: 'ph-bold ph-code' },
  { name: 'JavaScript',      level: 78, icon: 'ph-bold ph-lightning' },
  { name: 'Bootstrap',       level: 88, icon: 'ph-bold ph-layout' },
  { name: 'WordPress & Wix', level: 85, icon: 'ph-bold ph-globe' },
  { name: 'Canva & Design',  level: 80, icon: 'ph-bold ph-palette' },
  { name: 'PHP',             level: 55, icon: 'ph-bold ph-terminal-window' },
];

function SkillBar({ name, icon, level, animate, index }) {
  return (
    <div
      style={{
        marginBottom: '1.4rem',
        opacity: animate ? 1 : 0,
        transform: animate ? 'translateX(0)' : 'translateX(-20px)',
        transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '7px' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '0.82rem', fontWeight: 600, color: 'var(--t-medium)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
          <i className={icon} style={{ color: 'var(--accent)', fontSize: '1rem' }} />
          {name}
        </span>
        <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--accent)', fontVariantNumeric: 'lining-nums' }}>
          {animate ? level : 0}%
        </span>
      </div>
      <div style={{
        height: '5px',
        background: 'var(--stroke-elements)',
        borderRadius: '999px',
        overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          width: animate ? `${level}%` : '0%',
          background: 'linear-gradient(90deg, var(--accent), var(--secondary))',
          borderRadius: '999px',
          transition: `width 1.3s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`,
          boxShadow: '0 0 8px rgba(167,139,250,0.4)',
        }} />
      </div>
    </div>
  );
}

export default function SkillBars() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div className="section-h3" style={{ marginBottom: '2rem' }}>
        <h3 className="h3__title animate-in-up">Skill Levels</h3>
      </div>
      <div style={{ maxWidth: '580px' }}>
        {skills.map((s, i) => (
          <SkillBar key={s.name} {...s} index={i} animate={animate} />
        ))}
      </div>
    </div>
  );
}
