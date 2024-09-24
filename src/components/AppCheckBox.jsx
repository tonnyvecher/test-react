import "./AppCheckBox.css";

export function AppCheckBox(props) {
  return (
    <input
      className="app-checkbox"
      type="checkbox"
      value={props.value}
      onChange={props.onChange}
    />
  );
}
