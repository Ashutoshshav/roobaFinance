import React from "react";
import Frame50 from "./frame50";
import Frame81 from "./frame81";

export default function index() {
  let style = {
    width: "985px",
    height: "250px",
    padding: "30px",
    display: "flex",
    justifyContent: "space-between",
  };
  return (
    <div style={style}>
      <Frame50 />
      <Frame81 />
    </div>
  );
}
