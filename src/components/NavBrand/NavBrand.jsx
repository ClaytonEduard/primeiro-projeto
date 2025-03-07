import React from "react";
import logoImg from "../../assets/images/logo.png";
import "./styles.css";

export function NavBrand() {
  return (
    <div className="nav-brand">
      <img src={logoImg} alt="" width={80} />
      <h1>Space Flight News</h1>
    </div>
  );
}
