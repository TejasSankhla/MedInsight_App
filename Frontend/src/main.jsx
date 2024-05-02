import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import {
  Result,
  Team,
  Services,
  Home,
  Auth,
  MedicalForm,
} from "./pages/index.js";
const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "form",
        element: <MedicalForm />,
      },

      {
        path: "team",
        element: <Team />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "auth",
        element: <Auth />,
      },
      {
        path: "results",
        element: <Result />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
