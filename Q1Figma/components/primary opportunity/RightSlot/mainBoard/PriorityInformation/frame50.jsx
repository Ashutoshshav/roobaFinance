import React from "react";
import Frame69 from "../../../../utlityComponents/frame69";

export default function frame50() {
  let frame69Style = {
    display: "flex",
  };
  return (
    <div>
      <h2>Theme park site</h2>
      <div>
        <img src="assets/TagPip.png" alt="" />
        <img src="assets/TagPip (1).png" alt="" />
        <img src="assets/TagPip (2).png" alt="" />
        <img src="assets/TagPip (3).png" alt="" />
      </div>
      <a href="#">View Opportunity</a>
      <div style={frame69Style}>
        <Frame69 text="200 Acres" description="Area" />
        <Frame69 text="200 Acres" description="Area" />
        <Frame69 text="200 Acres" description="Area" />
        <Frame69 text="200 Acres" description="Area" />
      </div>
    </div>
  );
}
