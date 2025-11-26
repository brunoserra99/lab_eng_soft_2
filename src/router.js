import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AtividadeRelogio from "./pages/AtividadeRelogio";
import AtividadeLetreiro from "./pages/AtividadeLetreiro";
import AtividadeContador from "./pages/AtividadeContador";
import UiComponente from "./pages/UiComponente";
import UiiComponente from "./pages/UiiComponente";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/exercicio" element={<AtividadeLetreiro />} />
        <Route path="/atividade1" element={<AtividadeRelogio />} />
        <Route path="/atividade2" element={<AtividadeContador />} />
        <Route path="/atividade3" element={<UiComponente />} />
        <Route path="/atividade4" element={<UiiComponente />} />

      </Routes>
    </BrowserRouter>
  );
}
