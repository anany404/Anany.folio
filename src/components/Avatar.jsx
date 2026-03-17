const BASE = import.meta.env.BASE_URL;
export default function Avatar() {
  return (
    <div id="avatar" className="avatar">
      <div className="avatar__container d-flex flex-column justify-content-lg-between">
        {/* image and logo */}
        <div className="avatar__block">
          <div className="avatar__logo d-flex align-items-center">
            <div className="logo__image">
              <img src={`${BASE}img/favicon/logo1.png`} className="img-fluid" alt="Responsive image" />
            </div>
            <div className="logo__caption">
              <p>Anany</p>
            </div>
          </div>
          <div className="avatar__image">
            <img src={`${BASE}img/avatars/er-anany.jpeg`} alt="anany's avatar" />
          </div>
        </div>
        {/* data caption #1 */}
        <div className="avatar__block mt-3">
          <h6>
            <small className="top">Specialization:</small>
            Fullstack Developer
          </h6>
        </div>
        {/* data caption #2 */}
        <div className="avatar__block mt-3">
          <h6>
            <small className="top">Based in:</small>
            Kanpur, Uttar Pradesh
          </h6>
        </div>
        {/* socials and CTA button */}
        <div className="avatar__block mt-4">
          <div className="avatar__socials">
            <ul className="socials-square d-flex justify-content-between">
              <li className="socials-square__item">
                <a className="socials-square__link btn" href="https://www.facebook.com/share/16YhaneJTu/" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
              </li>
              <li className="socials-square__item">
                <a className="socials-square__link btn" href="https://www.instagram.com/__hx.rsh404?igsh=MWx0aTZldGFqNGU1Yw==" target="_blank"><i className="fa-brands fa-instagram"></i></a>
              </li>
              <li className="socials-square__item">
                <a className="socials-square__link btn" href="https://www.linkedin.com/in/anany-shriwani-04g65/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
              </li>
              <li className="socials-square__item">
                <a className="socials-square__link btn" href="https://github.com/anany404" target="_blank"><i className="fa-brands fa-github"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
