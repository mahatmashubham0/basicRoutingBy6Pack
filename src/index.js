import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Body from "./component/Body.js";
import About from "./component/ABout.js";
//
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Service from "./component/Service.js";
import './style/media.css'


const myRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />, 
      },
      {
        path: "/service",
        element: <Service />, 
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={myRoute} />);
