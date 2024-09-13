import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainContent from "./pages/MainContent";
import Details from "./pages/Details.js";
import DealerGallery from "./pages/DealerGallery.js";
import Blog from "./pages/Blog.js";
import Nav from "./components/nav.js";
import Footer from "./components/footer.js";

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const token =
    "e8f54130f3d1f067674798d5e739afa2c3b3f5250958ccf0d8279c3dff421a531372ae137e6c8dbc3d0f0cecb983f2409151f38e37d2ecaf124ea7c3203bbecd4bfc93cdf9544406b567e5df66341b308f690548a393585ca814e0aee9a4dcc9c2f1a0e122b9817d29b9e5b1c4118d3ff82b54a362151a8a397a6f9d6ce36870"; // Replace with your actual token

  const fetchBlockData = async (token) => {
    try {
      const responses = await Promise.all([
        fetch(
          "https://cc-strapi-a63514d69bf3.herokuapp.com/api/hero-1?populate=*",
          { headers: { Authorization: `Bearer ${token}` } }
        ),
        fetch(
          "https://cc-strapi-a63514d69bf3.herokuapp.com/api/hero2?populate=*",
          { headers: { Authorization: `Bearer ${token}` } }
        ),
        fetch(
          "https://cc-strapi-a63514d69bf3.herokuapp.com/api/about?populate=*",
          { headers: { Authorization: `Bearer ${token}` } }
        ),
        fetch(
          "https://cc-strapi-a63514d69bf3.herokuapp.com/api/dealer?populate[DealerCards][populate]=DealerImage",
          { headers: { Authorization: `Bearer ${token}` } }
        ),
        fetch(
          "https://cc-strapi-a63514d69bf3.herokuapp.com/api/footer?populate=*",
          { headers: { Authorization: `Bearer ${token}` } }
        ),
        fetch(
          "https://cc-strapi-a63514d69bf3.herokuapp.com/api/proccess?populate=*",
          { headers: { Authorization: `Bearer ${token}` } }
        ),
        fetch(
          "https://cc-strapi-a63514d69bf3.herokuapp.com/api/what-makes-us-different?populate=Image1",
          { headers: { Authorization: `Bearer ${token}` } }
        ),
        fetch(
          "https://cc-strapi-a63514d69bf3.herokuapp.com/api/youtube?populate=*",
          { headers: { Authorization: `Bearer ${token}` } }
        ),
        fetch(
          "https://cc-strapi-a63514d69bf3.herokuapp.com/api/blogs?populate=*",
          { headers: { Authorization: `Bearer ${token}` } }
        ),
      ]);

      const [
        hero1,
        hero2,
        about,
        dealer,
        footer,
        process,
        whatMakesUsDifferent,
        youtube,
        blog,
      ] = await Promise.all(responses.map((response) => response.json()));

      return {
        hero1: hero1.data.attributes,
        hero2: hero2.data.attributes,
        about: about.data.attributes,
        dealer: dealer.data.attributes,
        footer: footer.data.attributes,
        process: process.data.attributes,
        whatMakesUsDifferent: whatMakesUsDifferent.data.attributes,
        youtube: youtube.data.attributes,
        blog: blog.data,
      };
    } catch (error) {
      console.error("Error fetching block data:", error);
      return {};
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetchBlockData(token);
      setData(fetchedData);
      setLoading(false);
    };

    fetchData();
  }, [token]);

  return (
    <Router>
      <div
        className={`App transition-opacity duration-1000 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        {loading ? (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
            <p className="text-white text-2xl">Loading...</p>
          </div>
        ) : (
          <>
            <Nav />
            <Routes>
              <Route path="/" element={<MainContent data={data} />} />
              <Route path="/details" element={<Details />} />
              <Route path="/dealer-gallery" element={<DealerGallery />} />
              <Route path="/blog/:slug" element={<Blog data={data} />} />
              <Route path="/blog" element={<Blog data={data} />} />
            </Routes>
            <Footer data={data.footer} />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
