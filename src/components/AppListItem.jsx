import "./AppListItem.css";

export function AppListItem(props) {
  return (
    <li className="app-list-item" data-testid="app-list-item">
      {props.children}
    </li>
  );
}
