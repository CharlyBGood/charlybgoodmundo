import "../stylesheets/SinglePages.css";
import { NavLink } from "react-router-dom";
// import ImgComputer from "../img/img-computer.png";

function SinglePages() {
  return (
    <>
      <p className="p_description">
        Some 'almost static' sites as a practice on Web Design skills and
        originallity. <code>Html/Css/Js</code>
      </p>
      <div className="img_container">
        <div className="decoration_words">
          <a
            className="item item_3"
            href="https://estarsiempreseguros.com.ar/"
            target="_BLANK"
            rel="noopener noreferrer"
          >
            #companySite
          </a>
          <a
            className="item item_2"
            href="https://charlybgood.github.io/freecodecamp/webdesign/2-surveyform/index.html"
            rel="noopener noreferrer"
            target="_blank"
          >
            #surveyForm
          </a>
          <a
            className="item item_1"
            href="https://charlybgood.github.io/freecodecamp/webdesign/3-productlandingpage/index.html"
            target="_BLANK"
            rel="noopener noreferrer"
          >
            #landingPage
          </a>
          <a
            className="item item_3"
            href="https://charlybgood.github.io/google-homepage-clone/"
            rel="noopener noreferrer"
            target="_blank"
          >
            #GiphyAPI
          </a>
          <a
            className="item item_2"
            href="https://charlybgood.github.io/odin-recipes/"
            rel="noopener noreferrer"
            target="_blank"
          >
            #CookBook
          </a>
          <a
            className="item item_1"
            href="https://charlybgood.github.io/freecodecamp/webdesign/4-technicaldocumentationpage/index.html"
            target="_BLANK"
            rel="noopener noreferrer"
          >
            #technicalDoc
          </a>
        </div>
      </div>
      <button className="btn-back">
        <NavLink to="/DevPortfolio">&#129092; back</NavLink>
      </button>
    </>
  );
}

export default SinglePages;
