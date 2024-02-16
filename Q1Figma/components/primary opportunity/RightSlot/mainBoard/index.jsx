import React from "react";
import ClassFilter from "./classFilter";
import PriorityInformation from "./PriorityInformation/index";

export default function index() {
  let style = {
    width: "995px",
    height: "51px",
    margin: "auto",
  };
  return (
    <div style={style}>
      <ClassFilter />
      <img src="assets/unsplash_s2wjvuA_mFY.png" alt="" />
      <PriorityInformation />
    </div>
  );
}
