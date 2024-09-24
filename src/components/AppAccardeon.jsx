import React, { useState } from "react";
import "./AppAccardeon.css";

export function AppAccardeon({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app-accordion">
      <div className="app-accordion__label" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <div>{isOpen ? "⇑" : "⇓"}</div>
      </div>

      <div
        className={`app-accordion__content ${
          isOpen ? "app-accordion__content--active" : ""
        }`}
      >
        <div className="app-accordion__content-text">{content}</div>
      </div>
    </div>
  );
}
