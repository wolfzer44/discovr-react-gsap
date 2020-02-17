import React from "react";

import "./Header.scss";

export default function Header() {
  return (
    <div className="Header">
      <div className="logo">dicorv</div>
      <div className="nav">
        <ul>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Stories</a>
          </li>
          <li>
            <a href="#">Learn</a>
          </li>
          <li>
            <a href="#">Groth</a>
          </li>
        </ul>
      </div>
      <a href="#">Contact</a>
    </div>
  );
}
