import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "@/assets/css/globalStyle";
import "@/assets/css/global.css";
import "@/assets/fonts/fonts.css";
import Home from "./pages/Home/index";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <Home />
  </React.StrictMode>
);
