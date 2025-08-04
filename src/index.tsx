import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  React.createElement(
    React.StrictMode,
    null,
    React.createElement(
      BrowserRouter,
      null,
      React.createElement(ThemeProvider, null, React.createElement(App))
    )
  )
);
