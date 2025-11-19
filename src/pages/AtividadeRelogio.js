import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AtividadeRelogio() {
  const navegar = useNavigate();

  // --- RELOGIO ---
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  // --- LETREIRO ---
  const texto = "Conheça a Fatec";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervaloLetreiro = setInterval(() => {
      setIndex((prev) => {
        if (prev < texto.length) return prev + 1;
        return 0;
      });
    }, 120);

    return () => clearInterval(intervaloLetreiro);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Atividade – Relógio e Letreiro</h2>

      <p>Hora atual:</p>
      <h3>{hora}</h3>

      <br />

      <h3>{texto.substring(0, index)}</h3>

      <br /><br />

      <button onClick={() => navegar("/")}>Voltar</button>
    </div>
  );
}
