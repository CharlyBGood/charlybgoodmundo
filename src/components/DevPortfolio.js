import "../stylesheets/DevPortfolio.css";

function DevPortfolio() {
  return (
    <main className="projects-container">
      <div className="card-container">
        <div className="card card-1">
          <a href="/" rel="noreferrer" target="_blank">
            Some personal projects
          </a>
        </div>
        <div className="card card-2">
          <a
            href="https://estarsiempreseguros.com.ar/"
            rel="noreferrer"
            target="_blank"
          >
            Client WebSite
          </a>
        </div>
        <div className="card card-3">
          <a href="/" rel="noreferrer" target="_blank">
            Web Apps
          </a>
        </div>
        <div className="card card-4">
          <a href="/" rel="noreferrer" target="_blank">
            Single Pages
          </a>
        </div>
        <div className="card card-5">
          <a
            href="https://charlybgood.github.io/freecodecamp/"
            rel="noreferrer"
            target="_blank"
          >
            FreeCodeCamp Web Design Projects
          </a>
        </div>
      </div>
    </main>
  );
}

export default DevPortfolio;
