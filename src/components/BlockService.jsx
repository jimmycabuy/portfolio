import React from "react";
import allServices from "../json/services.json";
import Service from "./Service";

export default function BlockService() {
  return (
    <div className="containerServices">
      <h1 className="subtitle">Services</h1>
      <div className="allCardServices">
        {allServices.map((data, i) => {
          return <Service key={i} {...data} />;
        })}
      </div>
    </div>
  );
}
