import React from "react";

export default function BlockAboutMe() {
  return (
    <div className="containerAbout">
      <h1 className="subtitle">About me</h1>
      <div className="subcontainerAbout">
        <div className="div-text-about" style={{ width: "90%" }}>
          <p className="text-about">
            Hello 👋🏼, I’m Jimmy, full stack web/mobile developer, web designer
            and photographer.
            <br></br>
            <br></br>
            After obtaining my bachelor's degree in e-business at the EPHEC, I
            worked for 2 years and a half in digital marketing as a content
            creator and social ads expert. I followed then an intensive coding
            bootcamp at La Capsule in order to become a junior web developer.{" "}
            <br></br>
            <br></br>
            Curious and passionate, I’m always looking for new opportunities,
            keeping myself up-to-date with the latest trends in the tech
            industry.
            <br></br>
            <br></br>
            Being a developer as well as a designer helps me to build the
            perfect website/mobile app for my clients’ needs 👨🏽‍💻🚀
            <br></br>
            <br></br>
            Feel free to{" "}
            <a
              href="mailto:jimmycabuy@hotmail.com?subject=Hi Jimmy, I need your talents 📸🚀"
              style={{
                color: "black",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              contact me
            </a>{" "}
            for any project, I will be happy to help you 🙏🏼😊
            <br></br>
            <br></br>I hope to see you soon! 🙋🏽‍♂️
            <br></br>
            <br></br>
            <a
              href="/document/Resume_Jimmy_Cabuy.pdf"
              target="_blank"
              rel="noreferrer"
              className="bouton_cv"
            >
              Find my resume
            </a>
            <a
              href="/document/Resume_Jimmy_Cabuy.pdf"
              download
              className="bouton_cv_download"
            >
              Download my resume
            </a>
            <br></br>
            <br></br>
          </p>
        </div>
        <div>
          <div className="cardPhoto">
            <img
              src="../images/portrait.webp"
              alt="portrait"
              style={{ overflow: "hidden" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
