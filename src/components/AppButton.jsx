import "./AppButton.css";

export function AppButton({ onClick, children, disabled }) {
  return (
    <button className="app-button" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
