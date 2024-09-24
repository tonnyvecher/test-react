import React from "react";
import "./AppSelect.css";

export function AppSelect(props) {
  return (
    <label className="app-select">
      <div className="app-select__label">{props.label}:</div>
      <select
        className="app-select__select"
        value={props.value}
        onChange={props.onChange}
      >
        {props.options.map((item) => (
          <option className="app-select__select-option" value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </label>
  );
}
