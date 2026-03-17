export default function PhotoSwipe() {
  return (
    <div className="pswp" tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="pswp__bg"></div>
      <div className="pswp__scroll-wrap">
        <div className="pswp__container">
          <div className="pswp__item"></div>
          <div className="pswp__item"></div>
          <div className="pswp__item"></div>
        </div>
        <div className="pswp__ui pswp__ui--hidden">
          <div className="pswp__top-bar">
            <div className="pswp__counter"></div>
            <button className="pswp__button pswp__button--close link-s" title="Close (Esc)"></button>
            <button className="pswp__button pswp__button--share link-s" title="Share"></button>
            <button className="pswp__button pswp__button--fs link-s" title="Toggle fullscreen"></button>
            <button className="pswp__button pswp__button--zoom link-s" title="Zoom in/out"></button>
            <div className="pswp__preloader">
              <div className="pswp__preloader__icn">
                <div className="pswp__preloader__cut">
                  <div className="pswp__preloader__donut"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
            <div className="pswp__share-tooltip"></div>
          </div>
          <button className="pswp__button pswp__button--arrow--left link-s" title="Previous (arrow left)"></button>
          <button className="pswp__button pswp__button--arrow--right link-s" title="Next (arrow right)"></button>
          <div className="pswp__caption">
            <div className="pswp__caption__center"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
