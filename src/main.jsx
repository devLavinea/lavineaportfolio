import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from "./components/Modal";
import Sitemap from "../sitemap";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:id" element={<Project />} />
        <Route path="/sitemap" element={<Sitemap />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
