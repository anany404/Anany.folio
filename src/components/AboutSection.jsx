import StarIcon from "./StarIcon.jsx";

export default function AboutSection() {
  return (
    <section id="about" className="inner about">
      {/* Content Block - H2 Section Title Start */}
      <div className="content__block section-grid-title">
        <p className="h2__subtitle animate-in-up">
          <StarIcon />
          <span>About Me</span>
        </p>
        <br></br>
        <h2 className="h2__title animate-in-up">Career Highlights </h2>
      </div>
      {/* Content Block - H2 Section Title End */}

      {/* Content Block - About Me Data Start */}
      <div className="content__block grid-block block-large">
        <div className="container-fluid p-0">
          <div className="row g-0 justify-content-between">
            {/* About Me Description Start */}
            <div className="col-12 col-xl-8 grid-item about-descr">
              <p className="about-descr__text animate-in-up">
                &#x2022; Developed responsive websites using HTML, CSS,
                JavaScript, and Bootstrap, ensuring cross-browser compatibility
                and strong user experience.<br></br>
                <br></br>
                &#x2022; Built and customized WordPress and Wix websites based
                on business requirements and modern UI/UX practices.<br></br>
                <br></br>
                &#x2022; Designed website layouts and graphics using Canva,
                improving visual presentation and user engagement.<br></br>
                <br></br>
                &#x2022; Expanding technical expertise in PHP, Laravel, AJAX,
                and React to grow as a Full-Stack Web Developer and build
                scalable web applications. 🚀<br></br>
                <br></br>
              </p>
              <div className="btn-group about-descr__btnholder animate-in-up">
                <a
                  className="btn mobile-vertical btn-default btn-hover btn-hover-accent"
                  href="\img\services\Anany-fullstack-22.pdf"
                  target="_blank"
                  download
                >
                  <span className="btn-caption">Download CV</span>
                  <i className="ph-bold ph-download-simple"></i>
                </a>
              </div>
            </div>
            {/* About Me Description End */}

            {/* About Me Information Start */}
            <div className="col-12 col-xl-4 grid-item about-info">
              <div className="about-info__item animate-in-up">
                <h6>
                  <small className="top">Name</small>
                  Anany Shriwani
                </h6>
              </div>
              <div className="about-info__item animate-in-up">
                <h6>
                  <small className="top">Phone</small>
                  <a className="text-link-bold" href="tel:+919129927358">
                    +91 912-992-7358
                  </a>
                </h6>
              </div>
              <div className="about-info__item animate-in-up">
                <h6>
                  <small className="top">Email</small>
                  <a
                    className="text-link-bold"
                    href="mailto:anany.snippet22@gmail.com?subject=Message%20from%20your%20site"
                  >
                    anany.snippet22@gmail.com
                  </a>
                </h6>
              </div>
              <div className="about-info__item animate-in-up">
                <h6>
                  <small className="top">Location</small>
                  <a
                    className="text-link-bold"
                    href="https://maps.app.goo.gl/bkZuict7U9Qa7xEz5"
                    target="_blank"
                  >
                    Naubasta, Kanpur
                  </a>
                </h6>
              </div>
            </div>
            {/* About Me Information End */}
          </div>
        </div>
      </div>
      {/* Content Block - About Me Data End */}

      {/* Content Block - Achievements Start */}
      <div
        className="content__block grid-block"
        style={{ marginTop: "-12rem" }}
      >
        <div className="achievements d-flex flex-column flex-md-row align-items-md-stretch">
          <div className="achievements__item d-flex flex-column grid-item animate-card-3">
            <div className="achievements__card">
              <p className="achievements__number">12+</p>
              <p className="achievements__descr">Months of experience</p>
            </div>
          </div>
          <div className="achievements__item d-flex flex-column grid-item animate-card-3">
            <div className="achievements__card">
              <p className="achievements__number">50+</p>
              <p className="achievements__descr">Projects done</p>
            </div>
          </div>
        </div>
      </div>
      {/* Content Block - Achievements End */}

      {/* Currently Learning — Enhancement */}
      <div className="content__block mt-4" style={{ paddingTop: "1rem" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "0.8rem",
          }}
        >
          <span
            style={{
              fontSize: "0.78rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--t-muted)",
              whiteSpace: "nowrap",
            }}
          >
            <i
              className="ph-bold ph-rocket-launch"
              style={{ marginRight: "5px", color: "var(--accent)" }}
            />
            Currently learning:
          </span>
          {["React", "PHP / Laravel", "AJAX", "MySQL"].map((tag) => (
            <span
              key={tag}
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.3rem 1rem",
                borderRadius: "999px",
                border: "1.5px solid var(--accent)",
                color: "var(--accent)",
                fontSize: "0.78rem",
                fontWeight: 600,
                background: "rgba(167,139,250,0.07)",
                transition: "background 0.2s ease, transform 0.2s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(167,139,250,0.18)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(167,139,250,0.07)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
