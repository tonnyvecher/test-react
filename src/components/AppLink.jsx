import { Link } from "react-router-dom";
import "./AppLink.css";

export function AppLink({ to, text, children }) {
  return (
    <Link to={to} className="app-link">
      {text || children}
    </Link>
  );
}
