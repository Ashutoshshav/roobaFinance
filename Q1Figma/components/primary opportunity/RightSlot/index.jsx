import React from "react";
import TopBar from "./topBar";
import TertiaryNav from "./tertiaryNav";
import MainBoard from "./mainBoard/index";

export default function index() {
  return (
    <div>
      <TopBar />
      <TertiaryNav />
      <MainBoard />
    </div>
  );
}
