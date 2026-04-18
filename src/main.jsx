import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Paginainicial from "./paginainicial.jsx";
import Servicos from "./Servicos.jsx"; 
import Endereco from "./Endereco.jsx";

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