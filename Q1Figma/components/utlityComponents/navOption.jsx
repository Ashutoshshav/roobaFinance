import React from "react";

export default function navOption(props) {
  let style = {
    height: "142px",
    textAlign: "center",
    border: "1px solid gray",
  };

  let titleStyle = {
    padding: "60px",
  };
  return (
    <div style={style}>
      <p style={titleStyle}>{props.navTitle}</p>
    </div>
  );
}
