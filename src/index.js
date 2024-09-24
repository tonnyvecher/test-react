import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { MainPage } from "./pages/MainPage";
// import { TestPage } from "./pages/TestPage";
// import { CompletedPage } from "./page/CompletedPage";
import { AppTwo } from "./AppTwo";
import { ImageDetails } from "./ImageDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App text="some text bla bla bla" />,
    children: [
      {
        path: "todo-list",
        element: <AppTwo />,
      },
      {
        path: "todo-list/:photoId",
        element: <ImageDetails />,
      },
      // {
      //   path: "todo-list-completed",
      //   element: <CompletedPage />,
      // },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
