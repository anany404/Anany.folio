import { useEffect } from 'react';
import Loader from './components/Loader.jsx';
import Header from './components/Header.jsx';
import Avatar from './components/Avatar.jsx';
import HomeSection from './components/HomeSection.jsx';
import PortfolioSection from './components/PortfolioSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import ResumeSection from './components/ResumeSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import PhotoSwipe from './components/PhotoSwipe.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';

export default function App() {
  useEffect(() => {
    const loadScript = (src) =>
      new Promise((resolve, reject) => {
        const existing = document.querySelector(`script[data-src="${src}"]`);
        if (existing) { resolve(); return; }
        const script = document.createElement('script');
        script.src = src;
        script.setAttribute('data-src', src);
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });

    const dismissLoader = () => {
      const loaderContent = document.getElementById('loaderContent');
      const loader = document.getElementById('loader');
      if (loaderContent) loaderContent.classList.add('fade-out');
      setTimeout(() => { if (loader) loader.classList.add('loaded'); }, 300);
    };

    loadScript('/js/libs.min.js')
      .then(() => loadScript('/js/app.js'))
      .then(() => loadScript('/js/gallery-init.js'))
      .then(() => {
        setTimeout(dismissLoader, 800);
        setTimeout(() => {
          if (window.ScrollTrigger) window.ScrollTrigger.refresh();
        }, 500);
        setTimeout(() => {
          ['animate-card-2', 'animate-card-3', 'animate-card-5', 'animate-in-up', 'animate-headline'].forEach(cls => {
            document.querySelectorAll(`.${cls}`).forEach(el => {
              el.style.opacity = '';
              el.style.transform = '';
            });
          });
          if (window.ScrollTrigger) window.ScrollTrigger.refresh();
        }, 1500);
        if (typeof window.initPhotoSwipeFromDOM === 'function') {
          window.initPhotoSwipeFromDOM('.my-gallery');
        }
      })
      .catch((err) => {
        console.error('Script load error:', err);
        dismissLoader();
      });
  }, []);

  return (
    <>
      <ScrollProgress />
      <Loader />
      <Header />

      <div className="gradient-background">
        <div className="blur"></div>
        <div className="blur"></div>
        <div className="blur"></div>
      </div>

      <Avatar />

      <div id="content" className="content">
        <div className="content__wrapper">
          <HomeSection />
          <div className="enhance-reveal"><PortfolioSection /></div>
          <div className="enhance-reveal"><AboutSection /></div>
          <div className="enhance-reveal"><ResumeSection /></div>
          <div className="enhance-reveal"><ContactSection /></div>
        </div>
      </div>

      <PhotoSwipe />
      <ScrollToTop />
    </>
  );
}
