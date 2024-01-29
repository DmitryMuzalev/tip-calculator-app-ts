import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { ContextProvider } from "context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
