import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Servicos from "./Servicos";
import Endereco from "./Endereco";
import Paginainicial from "./Paginainicial";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Paginainicial />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/endereco" element={<Endereco />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);