import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CardsList from "./components/CardsList.jsx";
import Cart from "./components/Cart.jsx";
import store from "./store/index.js";
import { Provider } from "react-redux";
import ThanksForOrder from "./components/ThanksForOrder.jsx";
import ReturnsAndOrders from "./components/ReturnsAndOrders.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <CardsList /> },
      { path: "/cart", element: <Cart /> },
      { path: "/thanksForOrder", element: <ThanksForOrder /> },
      { path: "/returnsAndorders", element: <ReturnsAndOrders /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
