import React from "react";

export default function Project(props) {
  return (
    <>
      <img src={`../images/${props.src}.webp`} alt={props.alt} />
      <div className="con-text">
        <h2>{props.title}</h2>
        <h5>{props.subtitle}</h5>
        <p>
          {props.description}
          <a
            href={props.href}
            className="button"
            target="_blank"
            rel="noreferrer"
          >
            {props.button_title}
          </a>
        </p>
      </div>
    </>
  );
}
