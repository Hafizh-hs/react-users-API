import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Users from "./users.jsx";
import Carts from "./Carts.jsx";

const route = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Users />,
        },
        {
          path: "/users/:id/carts",
          element: <Carts />,
        },
      ],
    },
  ],
  { basename: import.meta.env.DEV ? "/" : "/react-user/" }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
