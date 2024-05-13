import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IndexProvider } from "./redux/IndexProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <IndexProvider />
  </React.StrictMode>
);
