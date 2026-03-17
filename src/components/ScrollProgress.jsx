import { useEffect } from 'react';

export default function ScrollProgress() {
  useEffect(() => {
    // Scroll progress bar + header scrolled class
    const bar = document.getElementById('scroll-progress');
    const header = document.getElementById('header');

    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (bar) bar.style.width = total > 0 ? `${(scrolled / total) * 100}%` : '0%';
      // Add .scrolled class after 60px for denser nav bg
      if (header) header.classList.toggle('scrolled', scrolled > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // Cursor glow (desktop only)
    const glow = document.getElementById('cursor-glow');
    const onMove = (e) => {
      if (glow) {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
      }
    };
    window.addEventListener('mousemove', onMove, { passive: true });

    // Section reveal via IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed'); }),
      { threshold: 0.15 }
    );
    document.querySelectorAll('.enhance-reveal').forEach(el => observer.observe(el));

    // Animate h2__title underline on scroll
    const titleObserver = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-animated'); }),
      { threshold: 0.5 }
    );
    document.querySelectorAll('.h2__title').forEach(t => titleObserver.observe(t));

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMove);
      observer.disconnect();
      titleObserver.disconnect();
    };
  }, []);

  return (
    <>
      <div id="scroll-progress" />
      <div id="cursor-glow" />
    </>
  );
}
