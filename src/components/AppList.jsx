import "./AppList.css";

export function AppList(props) {
  return (
    <ul className="app-list" data-testid="app-list">
      {props.children}
    </ul>
  );
}
