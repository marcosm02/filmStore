import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global.js";
import { FilmProvider } from "./contexts/FilmContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <FilmProvider>
        <App />
      </FilmProvider>
    </BrowserRouter>
  </React.StrictMode>
);
