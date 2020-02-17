import React from "react";

import "./Button.scss";

export default function Button({ children, className }) {
  return (
    <div className="Button">
      <button className={className}>
        <div className="text">
          <span>{children}</span>
        </div>
        <div className="line"></div>
      </button>
    </div>
  );
}
