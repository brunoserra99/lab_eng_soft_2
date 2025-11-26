import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Página Inicial</h1>
      <h3>“Conforme solicitado na aula do dia 19/11, 
        <br/>Foi corrigida a sequência das atividades e foi adicionada a atividade 4, que estava em falta.” </h3>

      <nav>
        <ul>

          <li>
            <Link to="/exercicio">Exercício – Letreiro</Link>
          </li>

          <li>
            <Link to="/atividade1">Atividade 1 – Relógio e Letreiro</Link>
          </li>

          <li>
            <Link to="/atividade2">Atividade 2 – Contador de Pessoas</Link>
          </li>

          <li>
            <Link to="/atividade3">Atividade 3 – Componentes</Link>
          </li>

           <li>
            <Link to="/atividade4">Atividade 4 – Componentes 2 (aaaahhhhhhhh)</Link>
          </li>

        </ul>
      </nav>
    </div>
  );
};

export default Home;
