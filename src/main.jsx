import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Para versões mais recentes do React 18+
import App from './App'; // O componente raiz
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importe o BrowserRouter e as rotas
import Project from './components/Modal';
// Cria um root React e renderiza o componente raiz
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <BrowserRouter> {/* Envolva o App com BrowserRouter */}
    <Routes>
      <Route path="/" element={<App />} />  {/* A rota principal */}
      <Route path="/:id" element={<Project />} />  {/* A rota para o componente Modal */}
    </Routes>
  </BrowserRouter>
</React.StrictMode>
);
