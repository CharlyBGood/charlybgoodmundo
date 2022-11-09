import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Music from "./components/Music";
import VisualArt from "./components/VisualArt";
import DevPortfolio from "./components/DevPortfolio";
import SinglePages from "./components/SinglePages";
import WebApps from "./components/WebApps";
import ReactProjects from "./components/ReactProjects";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Music" element={<Music />} />
          <Route
            path="/VisualArt"
            element={<VisualArt />}
          />
          <Route path="/DevPortfolio" element={<DevPortfolio />} />
          <Route path="/DevPortfolio/SinglePages" element={<SinglePages />} />
          <Route path="/DevPortfolio/WebApps" element={<WebApps />} />
          <Route path="/DevPortfolio/ReactProjects" element={<ReactProjects />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
