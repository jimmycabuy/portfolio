import React, { useRef } from "react";
import "./App.css";
import "./queries.css";

import Navbar from "./components/Navbar";
import BlockHome from "./components/BlockHome";
import BlockAboutMe from "./components/BlockAboutMe";
import BlockService from "./components/BlockService";
import BlockProject from "./components/BlockProject";
import Footer from "./components/Footer";

function App() {
  const scrollHome = useRef(null);
  const scrollAbout = useRef(null);
  const scrollServices = useRef(null);
  const scrollProjects = useRef(null);

  return (
    <div className="App" ref={scrollHome}>
      <Navbar
        scrollHome={scrollHome}
        scrollAbout={scrollAbout}
        scrollServices={scrollServices}
        scrollProjects={scrollProjects}
      />
      <div>
        <p>Bonjour je suis un test</p>
      </div>
      <div id="home">
        <BlockHome />
      </div>

      <div id="about" ref={scrollAbout}>
        <BlockAboutMe />
      </div>

      <div id="services" ref={scrollServices}>
        <BlockService />
      </div>

      <div id="projects" ref={scrollProjects}>
        <BlockProject />
      </div>

      <Footer scrollHome={scrollHome} />
    </div>
  );
}

export default App;
