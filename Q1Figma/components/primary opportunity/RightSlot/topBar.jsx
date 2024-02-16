import React from "react";
import Button from "../../utlityComponents/button";

export default function topBar() {
  let style = {
    height: "107px",
    width: "1115px",
    display: "flex",
    justifyContent: "space-between",
    border: "1px solid gray",
  };

  let btnStyle = {
    margin: "25px 0 0 25px",
  };

  let imgStyle = {
    width: "23px",
    hieght: "22px",
    margin: "45px 20px 45px 0",
  };
  return (
    <div style={style}>
      <div style={btnStyle}>
        <Button buttonTitle="Complete profile" />
      </div>
      <img src="assets/Iconinteractions.png" alt="bell-icon" style={imgStyle} />
    </div>
  );
}
