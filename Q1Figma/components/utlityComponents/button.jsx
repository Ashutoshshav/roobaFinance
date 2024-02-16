import React from "react";

export default function button(props) {
  let style = {
    backgroundColor: "#4375FB",
    color: "white",
    padding: "17px 31px 17px 31px",
  };
  return (
    <div>
      <button style={style}>{props.buttonTitle}</button>
    </div>
  );
}
