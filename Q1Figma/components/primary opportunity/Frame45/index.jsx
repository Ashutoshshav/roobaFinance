import React from "react";
import "./index.css";
import Logo from "./Logo";
import NavOption from "../../utlityComponents/navOption";

export default function index() {
  return (
    <div className="main-container">
      <div className="container">
        <Logo />
        <NavOption navTitle="Cart" />
        <NavOption navTitle="Market" />
        <NavOption navTitle="Settings" />
        <NavOption navTitle="Logout" />
      </div>
    </div>
  );
}
