import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./index.css";
import Hero from "./blocks/hero.js";
import Hero2 from "./blocks/hero2.js";
import About from "./blocks/about.js";
import Process from "./blocks/process.js";
import Cards from "./blocks/cards.js";
import Video from "./blocks/video.js";
import Contact from "./blocks/contact.js";
import Details from "./pages/Details.js"; // New page for process details
import DealerGallery from "./pages/DealerGallery.js"; // New page for dealer gallery
import Blog from "./pages/Blog.js"; // New page for blog
import Nav from "./components/nav.js";
import Footer from "./components/footer.js";
import Blogcta from "./blocks/blogcta.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Blogcta />
                <Process />
                <Cards />
                <Hero2 />
                <Video />
                <Contact />
              </>
            }
          />
          <Route path="/details" element={<Details />} />
          <Route path="/dealer-gallery" element={<DealerGallery />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
