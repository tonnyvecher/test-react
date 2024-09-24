// import { useState } from "react";
// import { MainPage } from "./pages/MainPage";
// import "./App.css";
import { Outlet, Link } from "react-router-dom";
import { AppLink } from "./components/AppLink";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <AppLink to={`/`}>Главная страница</AppLink>
          </li>
          <li>
            <AppLink to={`/todo-list`}>Todo List</AppLink>
          </li>
          <li>
            <AppLink to={`/todo-list-completed`}>Todo List Completed</AppLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}

export default App;

// НА РАБОТЕ:
// нужно понимать как создаются компоненты
// как принимать пропсы
// как объявлять и менять состояния
// как выводить списки в шаблоне
// как делать условный рендеринг
