import React from "react";
import "./styles.css";
import { NavBrand } from "../NavBrand/NavBrand";

export function Navbar() {
  return (
    <header>
      <nav id="navbar">
        <NavBrand />
        <ul className="nav-list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Trending</a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
