import React from "react";
import MainStep from "./mainStep";

export default function tertiaryNav() {
  let style = {
    display: "flex",
    justifyContent: "space-between",
    border: "1px solid gray",
    width: "1115px",
    height: "102px",
  };

  let textStyle = {
    margin: "32px 0 0 30px",
  };

  let mainStep = {
    margin: "32px 40px 0 30px",
  };
  return (
    <div style={style}>
      <h2 style={textStyle}>Choose your new site</h2>
      <div style={mainStep}>
        <MainStep />
      </div>
    </div>
  );
}
