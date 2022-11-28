import React from "react";

export default function List(props) {
  return (
    <>
      <li>
        <img
          style={{ height: "35px", width: "35px" }}
          src={`../images/${props.li_file}.png`}
          title={props.li_title}
          alt={props.li_alt}
        />
      </li>
    </>
  );
}
