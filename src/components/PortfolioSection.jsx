import StarIcon from "./StarIcon.jsx";

const works = [
  {
    img: "/Anany.folio/img/works/londan-eye.png",
    link: "https://anany404.github.io/Eyelondon.uk-/",
    title: "London Eye",
    tag: "Web Project",
  },
  {
    img: "/Anany.folio/img/works/game.png",
    link: "https://anany404.github.io/Tourism2trip-Live-/",
    title: "Game",
    tag: "Web Project",
  },
  {
    img: "/Anany.folio/img/works/tic-tac-toe.jpeg",
    link: "https://anany404.github.io/Tic-Tac-Toe-GAME/",
    title: "Tic Tac Toe",
    tag: "Game",
  },
  {
    img: "/Anany.folio/img/works/Calculator.jpeg",
    link: "https://anany404.github.io/Calculator/",
    title: "Calculator",
    tag: "Web App",
  },
  {
    img: "/Anany.folio/img/works/spin-wheel.jpeg",
    link: "https://anany404.github.io/Spin-wheel-Game-/",
    title: "Game",
    tag: "Live Project",
  },
  {
    img: "/Anany.folio/img/works/toursium.jpeg",
    link: "https://anany404.github.io/Finland-Tourism-website/",
    title: "Onekrypto Shop",
    tag: "Live Project",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="inner inner-first portfolio">
      <div className="content__block section-grid-title mb-5">
        <p className="h2__subtitle animate-in-up">
          <StarIcon />
          <span>Portfolio</span>
        </p>
        <br />
        <h2 className="h2__title animate-in-up">Project at a Glance</h2>
      </div>

      <div className="content__block grid-block">
        <div className="pf-grid">
          {works.map((work, i) => (
            <div key={i} className="pf-card">
              <div className="pf-card__img-wrap">
                <img src={work.img} alt={work.title} className="pf-card__img" />
              </div>
              <div className="pf-card__footer">
                <span className="pf-card__tag">{work.tag}</span>
                <a
                  href={work.link}
                  target="_blank"
                  rel="noreferrer"
                  className="pf-card__btn"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .pf-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 420px));
          gap: 2.5rem;
          justify-content: center;
          width: 100%;
        }
        @media (max-width: 991px) {
          .pf-grid { grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
        }
        @media (max-width: 575px) {
          .pf-grid { grid-template-columns: 1fr; gap: 1.2rem; }
        }
        .pf-card {
          display: flex;
          flex-direction: column;
          border-radius: 1rem;
          overflow: hidden;
          background: #ffffff;
          border: 1px solid rgba(80,60,119,0.20);
          box-shadow: 0 2px 16px rgba(80,60,119,0.10);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .pf-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(80,60,119,0.28);
        }
        .pf-card__img-wrap {
          width: 100%;
          aspect-ratio: 4/3;
          overflow: hidden;
          background: #f3f4f6;
          border-bottom: 1px solid rgba(0,0,0,0.06);
        }
        .pf-card__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }
        .pf-card:hover .pf-card__img {
          transform: scale(1.05);
        }
        .pf-card__footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.9rem 1.1rem;
          background: #503c77;
          gap: 0.8rem;
        }
        .pf-card__tag {
          font-size: 0.82rem;
          font-weight: 500;
          color: rgba(255,255,255,0.80);
        }
        .pf-card__btn {
          display: inline-flex;
          align-items: center;
          padding: 0.42rem 1.1rem;
          border-radius: 999px;
          font-size: 0.80rem;
          font-weight: 700;
          text-decoration: none;
          background: #a3e635;
          color: #1a1a1a !important;
          white-space: nowrap;
          flex-shrink: 0;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .pf-card__btn:hover {
          background: #84cc16;
          transform: translateY(-1px);
        }
      `}</style>
    </section>
  );
};