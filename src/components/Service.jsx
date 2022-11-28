import React from "react";

export default function Service(props) {
  return (
    <div className="cardService">
      <img
        className="memoji-service"
        src={`../images/${props.src}.png`}
        alt={props.alt}
      />
      <h4>{props.name}</h4>
      <p className="text-service">{props.description}</p>
    </div>
  );
}
