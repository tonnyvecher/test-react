import { useState } from "react";

export function SimpleDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="simple-dropdown">
      <button onClick={() => setIsOpen(!isOpen)}>Нажми, чтобы открыть</button>
      {isOpen && (
        <div className="dropdown-content">
          <p>Тут я пытался реализовать простой дропдаун</p>
        </div>
      )}
    </div>
  );
}
