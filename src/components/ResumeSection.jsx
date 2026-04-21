import StarIcon from "./StarIcon.jsx";
import SkillBars from "./SkillBars.jsx";

const tools = [
  { icon: "/Anany.folio/img/icons/icon-html.svg", name: "HTML5" },
  { icon: "/Anany.folio/img/icons/icon-css.svg", name: "CSS3" },
   { icon: "/Anany.folio/img/icons/tailwindcss.png", name: "Tailwind CSS" },
  { icon: "/Anany.folio/img/icons/bootstrap-5-logo-icon.svg", name: "Bootstrap" },
  { icon: "/Anany.folio/img/icons/javascript-programming-language-icon.svg", name: "JavaScript" },
  { icon: "/Anany.folio/img/icons/social_14047411.png", name: "WordPress" },
  { icon: "/Anany.folio/img/icons/wixx.png", name: "Wix" },
   { icon: "/Anany.folio/img/icons/shopify.png", name: "Shopify" },
  { icon: "/Anany.folio/img/icons/canva-icon.svg", name: "Canva" },
  { icon: "/Anany.folio/img/icons/php.png", name: "PHP" },
   { icon: "/Anany.folio/img/icons/laravel.png", name: "Laravel" },
];

export default function ResumeSection() {
  return (
    <section id="resume" className="inner resume">
      {/* Content Block - H2 Section Title Start */}
      <div className="content__block block-large">
        <p className="h2__subtitle animate-in-up">
          <StarIcon />
          <span>Resume</span>
        </p>
        <br></br>
        <h2 className="h2__title animate-in-up">Academic Background</h2>
        <p className="h2__text animate-in-up">
          I completed my Bachelor of Arts (B.A.) in 2023, building a strong
          foundation in communication, analysis, and problem solving. Alongside
          my degree, I developed technical skills in web development, learning
          HTML, CSS, JavaScript, and Bootstrap, and continuing to expand my
          knowledge in PHP, Laravel, AJAX, and React for full-stack development.
          🎓
        </p>
      </div>
      {/* Content Block - H2 Section Title End */}

      {/* Content Block - Education Start */}
      <div className="content__block block-large">
        <div className="section-h3">
          <h3 className="h3__title animate-in-up">My education</h3>
        </div>
        <div className="container-fluid p-0 resume-lines">
          {/* education single item */}
          <div className="row g-0 resume-lines__item animate-in-up">
            <div className="col-12 col-md-2">
              <span className="resume-lines__date animate-in-up">
                &nbsp;2020 - 2023
              </span>
            </div>
            <div className="col-12 col-md-5">
              <h5 className="resume-lines__title animate-in-up">
                {" "}
                Bachelor of Arts ( B. A. )
              </h5>
            </div>
            <div className="col-12 col-md-5">
              <p className="resume-lines__source animate-in-up">
                <a
                  href="https://www.bing.com/search?q=sj+mahavidyalaya+kanpur"
                  className="text-link-bold"
                  target="_blank"
                >
                  {" "}
                  SJ Mahavidyalaya, Kanpur
                </a>
              </p>
            </div>
          </div>
          {/* education single item */}
          <div className="row g-0 resume-lines__item animate-in-up">
            <div className="col-12 col-md-2">
              <span className="resume-lines__date animate-in-up">
                &nbsp;2019 - 2020
              </span>
            </div>
            <div className="col-12 col-md-5">
              <h5 className="resume-lines__title animate-in-up">
                Intermediate Education (12th)
              </h5>
            </div>
            <div className="col-12 col-md-5">
              <p className="resume-lines__source animate-in-up">
                <a
                  href="https://maps.app.goo.gl/WzWvDpCrBYhfszh1A"
                  className="text-link-bold"
                  target="_blank"
                >
                  J S Inter College, Kanpur
                </a>
              </p>
            </div>
          </div>
          {/* education single item */}
          <div className="row g-0 resume-lines__item animate-in-up">
            <div className="col-12 col-md-2">
              <span className="resume-lines__date animate-in-up">
                &nbsp;2017 - 2018
              </span>
            </div>
            <div className="col-12 col-md-5">
              <h5 className="resume-lines__title animate-in-up">
                High School (10th)
              </h5>
            </div>
            <div className="col-12 col-md-5">
              <p className="resume-lines__source animate-in-up">
                <a
                  href="https://maps.app.goo.gl/UwYGeSxLSnt8HtLJ6"
                  className="text-link-bold"
                  target="_blank"
                >
                  Shivaji Inter College, Kanpur
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Content Block - Education End */}

      {/* Content Block - Experience Start */}
      <div className="content__block block-large">
        <div className="section-h3">
          <h3 className="h3__title animate-in-up">Work experience</h3>
        </div>
        <div className="container-fluid p-0 resume-lines">
          <div className="row g-0 resume-lines__item animate-in-up">
            <div className="col-12 col-md-8">
              <h5 className="resume-lines__title animate-in-up">
                &nbsp;Webbyfish Technologia
              </h5>
            </div>
            <div className="col-12 col-md-4">
              <span className="resume-lines__date animate-in-up">
                &nbsp;December 2024 - January 2026
              </span>
            </div>
            <div className="col-12 col-md-12 mt-4">
              <p className="small resume-lines__descr animate-in-up px-4 py-4">
                &#x2022; Developed and deployed 50+ fully responsive
                websites using HTML5, CSS3, JavaScript, and Bootstrap 5,
                ensuring cross-browser and cross-device compatibility.<br></br><br></br>
                &#x2022; Built and customized WordPress websites
                end-to-end — theme development, plugin integration, and
                performance optimization — reducing client delivery time by
                20%.Br<br></br><br></br>
                 &#x2022; Applied on-page SEO best practices — meta tags,
                semantic HTML, image alt attributes, and mobile-first design —
                to improve search engine rankings and site performance.<br></br><br></br>
                &#x2022; Collaborated with UI/UX teams using Wix and
                Canva to deliver pixel-perfect, user-focused digital experiences
                aligned with client brand guidelines.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Content Block - Experience End */}

      {/* Skill Bars - Added enhancement */}
      <div className="content__block block-large">
        <SkillBars />
      </div>

      {/* Content Block - Tools Title Start */}
      <div className="content__block">
        <div className="section-h3 section-h3-grid">
          <h3 className="h3__title animate-in-up">Go-To Tools</h3>
        </div>
      </div>
      {/* Content Block - Tools Title End */}

      {/* Content Block - Tools List Start */}
      <div className="content__block grid-block block-large">
        <div className="tools-cards d-flex justify-content-start flex-wrap">
          {tools.map((tool, i) => (
            <div
              key={i}
              className="tools-cards__item d-flex grid-item-s animate-card-5"
            >
              <div className="tools-cards__card">
                <img
                  className="tools-cards__icon animate-in-up"
                  src={tool.icon}
                  alt="Tools Icon"
                />
                <h6 className="tools-cards__caption animate-in-up">
                  {tool.name}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Content Block - Tools List End */}

      {/* Empty block for testimonials slider (commented out in original) */}
      <div className="content__block"></div>
    </section>
  );
}
