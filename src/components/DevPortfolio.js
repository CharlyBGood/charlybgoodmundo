import "../stylesheets/DevPortfolio.css";

function DevPortfolio() {
  return (
    <main class="projects-container">
      <div class="card-container">
        <div class="card card-1">
          <a href="/" rel="noreferrer" target="_blank">
            Some personal projects
          </a>
        </div>
        <div class="card card-2">
          <a
            href="https://estarsiempreseguros.com.ar/"
            rel="noreferrer"
            target="_blank"
          >
            Client WebSite
          </a>
        </div>
        <div class="card card-3">
          <a href="/" rel="noreferrer" target="_blank">
            Web Apps
          </a>
        </div>
        <div class="card card-4">
          <a href="/" rel="noreferrer" target="_blank">
            Single Pages
          </a>
        </div>
        <div class="card card-5">
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
