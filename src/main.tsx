import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IndexRouter } from "./router/IndexRouter";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <IndexRouter />
  </React.StrictMode>
);
