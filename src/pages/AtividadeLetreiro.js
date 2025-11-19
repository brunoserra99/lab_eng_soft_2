import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AtividadeLetreiro() {
  const navegar = useNavigate();

  const texto = "Conheça a Fatec";
  const [index, setIndex] = useState(0);
  const [textoAtual, setTextoAtual] = useState("");

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTextoAtual(texto.substring(0, index + 1));
      setIndex((prev) => (prev + 1) % texto.length);
    }, 200);

    return () => clearInterval(intervalo);
  }, [index]);

  return (
    <div>
      <h2>Atividade – Letreiro</h2>
      <h3>{textoAtual}</h3>

      <button onClick={() => navegar("/")}>Voltar</button>
    </div>
  );
}
