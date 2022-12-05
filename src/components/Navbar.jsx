import React from "react";
import { useState } from "react";

export default function Navbar(props) {
  const [width, setWidth] = useState(window.innerWidth);
  const [menuToggle, setMenuToggle] = useState(true);

  let burgerMenuIcon;
  let number = 0;

  window.onresize = function () {
    setWidth(document.body.clientWidth);
  };

  if (width < 750) {
    number = 320;
  } else if (width > 750 && width < 1325) {
    number = 135;
  } else {
    number = 0;
  }
  console.log(number);
  console.log(width)
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - number,
      behavior: "smooth",
    });
  };

  if (menuToggle) {
    burgerMenuIcon = (
      <img
        className="burgerMenuImg"
        src="../images/menu.png"
        alt="burgermenu"
        style={{ height: "20px", width: "20px" }}
      />
    );
  } else {
    burgerMenuIcon = (
      <img
        className="burgerMenuImg"
        src="../images/close.png"
        alt="burgermenu"
        style={{ height: "20px", width: "20px" }}
      />
    );
  }

  const toggle = () => {
    setMenuToggle(!menuToggle);
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
      <label className="label" htmlFor="toggler" onClick={toggle}>
        {burgerMenuIcon}
      </label>
      <div className="blocnavbar2">
        <ul className="list">
          <li>
            <button
              className="linkNavBar"
              onClick={() => scrollToSection(props.scrollHome)}
            >
              <label htmlFor="toggler" onClick={toggle}>
                Home
              </label>
            </button>
          </li>
          <li>
            <button
              className="linkNavBar"
              onClick={() => scrollToSection(props.scrollAbout)}
            >
              <label htmlFor="toggler" onClick={toggle}>
                About
              </label>
            </button>
          </li>
          <li>
            <button
              className="linkNavBar"
              onClick={() => scrollToSection(props.scrollServices)}
            >
              <label htmlFor="toggler" onClick={toggle}>
                Services
              </label>
            </button>
          </li>
          <li>
            <button
              className="linkNavBar"
              onClick={() => scrollToSection(props.scrollProjects)}
            >
              <label htmlFor="toggler" onClick={toggle}>
                Projects
              </label>
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
