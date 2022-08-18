import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Music from "./components/Music";
import VisualArt from "./components/VisualArt";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Content />
                <Footer />
              </>
            }
          />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Music" element={<Music />} />
          <Route path="/VisualArt" element={<VisualArt />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
