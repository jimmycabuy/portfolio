import React from "react";

export default function Navbar(props) {
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <nav className="navbar">
      <div className="blocnavbar1">
        <p
          className="myNameLogo"
          style={{ fontSize: "25px", color: "#FF4848", cursor: "pointer" }}
          onClick={() => scrollToSection(props.scrollHome)}
        >
          Jimmy Cabuy
        </p>
      </div>
      <input type="checkbox" id="toggler" />
      <label htmlFor="toggler">
        <img
          className="burgerMenuImg"
          src="../images/menu.png"
          alt="burgermenu"
          style={{ height: "20px", width: "20px" }}
        />
      </label>
      <div className="blocnavbar2">
        <ul className="list">
          <li>
            <button
              className="linkNavBar"
              onClick={() => scrollToSection(props.scrollHome)}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className="linkNavBar"
              onClick={() => scrollToSection(props.scrollAbout)}
            >
              About
            </button>
          </li>
          <li>
            <button
              className="linkNavBar"
              onClick={() => scrollToSection(props.scrollServices)}
            >
              Services
            </button>
          </li>
          <li>
            <button
              className="linkNavBar"
              onClick={() => scrollToSection(props.scrollProjects)}
            >
              Projects
            </button>
          </li>
          <li>
            <a
              className="navbarEmail"
              href="mailto:jimmycabuy@hotmail.com?subject=Hi Jimmy, I need your talents 📸🚀"
            >
              <button className="linkNavBar">Contact</button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
