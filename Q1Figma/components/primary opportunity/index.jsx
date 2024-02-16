import React from "react";
import Frame45 from "./Frame45/index";
import RightSlot from "./RightSlot/index";

export default function index() {
  let style = {
    display: "flex",
  };
  return (
    <div style={style}>
      <Frame45 />
      <RightSlot />
    </div>
  );
}
