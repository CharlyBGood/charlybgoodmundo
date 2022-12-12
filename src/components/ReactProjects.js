import "../stylesheets/SinglePages.css";
import { NavLink } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";

function ReactProjects() {
  return (
    <>
      <p className="p_description">
        Web apps and projects made with <code>React.js</code>
      </p>
      <div className="img_container">
        <div className="decoration_words">
          <a
            className="item item_1"
            href="https://classic-todo-app.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            #TodoApp
          </a>
          <a
            className="item item_2"
            href="https://test-app-mocha-three.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            #TestimonySection
          </a>
          <a
            className="item item_3"
            href="https://no-state-node-delta.vercel.app/Welcome"
            target="_blank"
            rel="noreferrer"
          >
            #FirebaseLogin
          </a>
        </div>
      </div>

      <button className="btn-back">
        <NavLink to="/DevPortfolio">
          <FaArrowCircleLeft />
        </NavLink>
      </button>
    </>
  );
}

export default ReactProjects;
