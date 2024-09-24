import "./AppInputText.css";

export function AppInputText({ value, onChange, placeholder }) {
  return (
    <input
      className="app-input-text"
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
