import React from "react";
import Typed from "react-typed";

import ScrollAnimation from "./ScrollAnimation";

export default function Block_1() {
  return (
    <div className="containerHome">
      <p className="text-banner">
        Hello, I'm Jimmy,<br></br>
        <Typed
          strings={[
            "web developer.",
            "web designer.",
            "photographer.",
            "content creator.",
          ]}
          typeSpeed={100}
          backSpeed={50}
          loop
          className="text-banner-contour"
        />
      </p>
      <img
        className="memoji-home"
        src="../images/memoji-3.webp"
        alt="memoji-3"
        style={{ width: "400px", height: "400px" }}
      />
      <ScrollAnimation />
    </div>
  );
}
