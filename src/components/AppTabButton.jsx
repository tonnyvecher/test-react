import "./AppTab.css";

export function AppTabButton({ children, onClick, isActive }) {
  return (
    <div
      className={`app-tab-button ${isActive ? "app-tab-button--active" : ""} `}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
