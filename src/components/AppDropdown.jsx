import { useState } from "react";
import "./AppDropdown.css";

export function AppDropdown({ dropdownOptions, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select Option");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  function handleOptionClick(option) {
    setSelectedOption(option.label);
    setIsOpen(false);
    onSelect(option.value);
  }

  return (
    <div className="app-dropdown">
      <button className="app-dropdown__toogle" onClick={toggleDropdown}>
        {selectedOption}
      </button>
      {isOpen && (
        <ul className="app-dropdown__menu">
          {dropdownOptions.map((option, index) => (
            <li
              className="app-dropdown__item"
              key={index}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
