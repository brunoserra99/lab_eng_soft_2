import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Página Inicial</h1>

      <nav>
        <ul>

          <li>
            <Link to="/exercicio">Exercício – Letreiro</Link>
          </li>

          <li>
            <Link to="/atividade1e2">Atividade 1 e 2 – Relógio e Letreiro</Link>
          </li>

          <li>
            <Link to="/atividade3">Atividade 3 – Contador de Pessoas</Link>
          </li>

          <li>
            <Link to="/atividade4">Atividade 4 – Componentes</Link>
          </li>

        </ul>
      </nav>
    </div>
  );
};

export default Home;
