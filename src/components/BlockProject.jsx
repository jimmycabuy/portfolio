import React from "react";

import allProjects from "../json/projects.json";
import Project from "./Project";
import List from "./List";

export default function BlockProject() {
  return (
    <div className="containerProjects">
      <h1 className="subtitle">Projects</h1>
      <div className="allCardProjects">
        {allProjects.map((data, index) => {
          return (
            <div className="card" key={index}>
              <ul className="ul">
                {data.list.map((list, i) => {
                  return <List key={i} {...list} />;
                })}
              </ul>
              <Project key={index} {...data} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
