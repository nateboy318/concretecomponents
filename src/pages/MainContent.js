import React from "react";
import Hero from "../blocks/hero.js";
import Hero2 from "../blocks/hero2.js";
import About from "../blocks/about.js";
import Process from "../blocks/process.js";
import Cards from "../blocks/cards.js";
import Video from "../blocks/video.js";
import Contact from "../blocks/contact.js";
import Blogcta from "../blocks/blogcta.js";

const MainContent = ({ data }) => (
  <div>
    <div id="hero">
      <Hero data={data.hero1} />
    </div>
    <div id="about">
      <About data={data.about} />
    </div>
    <div id="blogcta">
      <Blogcta data={data.whatMakesUsDifferent} />
    </div>
    <div id="process">
      <Process data={data.process} />
    </div>
    <div id="cards">
      <Cards data={data.dealer} />
    </div>
    <div id="hero2">
      <Hero2 data={data.hero2} />
    </div>
    <div id="video">
      <Video data={data.youtube} />
    </div>
    <div id="contact">
      <Contact />
    </div>
  </div>
);

export default MainContent;
