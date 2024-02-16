import React from "react";

export default function transparentButton(props) {
  let style = {
    backgroundColor: "transparent",
    padding: "10px 30px",
  };
  return (
    <button style={style}>
      {props.buttonTitle}
      {props.symbol}
    </button>
  );
}
