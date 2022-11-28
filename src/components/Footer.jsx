import React from "react";

import {
  FaGithub,
  FaTiktok,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaPinterestP,
  FaTelegramPlane,
} from "react-icons/fa";

export default function Footer(props) {
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <footer>
      <div className="container-social-icons">
        <a
          href="https://www.linkedin.com/in/jimmycabuy/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn className="linkedin" />
        </a>
        <a
          href="https://www.instagram.com/jimmycabuy/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className="instagram" />
        </a>
        <a
          href="https://facebook.com/jimmy.cabuy"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF className="facebook" />
        </a>
        <a
          href="https://github.com/jimmycabuy/"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="github" />
        </a>
        <a href="https://wa.me/32474917815" target="_blank" rel="noreferrer">
          <FaWhatsapp className="whatsapp" />
        </a>
        <a
          href="https://www.tiktok.com/@thedailyjim"
          target="_blank"
          rel="noreferrer"
        >
          <FaTiktok className="tiktok" />
        </a>
        <a
          href="https://www.pinterest.com/jimmycabuy"
          target="_blank"
          rel="noreferrer"
        >
          <FaPinterestP className="pinterest" />
        </a>
        <a href="https://t.me/jimmycabuy" target="_blank" rel="noreferrer">
          <FaTelegramPlane className="telegram" />
        </a>
      </div>
      <div>
        <p style={{ width: "180px" }}>©2022 by Jimmy Cabuy</p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          width: "180px",
        }}
      >
        <img className="arrow-icon" src="../images/arrow.png" alt="arrow" />
        <p
          className="gototop"
          style={{ textAlign: "right", cursor: "pointer" }}
          onClick={() => scrollToSection(props.scrollHome)}
        >
          Go to top
        </p>
      </div>
    </footer>
  );
}
