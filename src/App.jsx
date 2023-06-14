import React, { useState } from "react";
import "./App.css";
import { Home } from "./pages/Home";
import { Table } from "./pages/Table/index.jsx";

import {
  FaGraduationCap,
  FaMailBulk,
  FaTable,
  FaUniversity,
} from "react-icons/fa";

function App() {
  const [showTable, setShowTable] = useState(false);

  return (
    <>
      <header>
        <a href="">
          <h1>Ciência da Informação</h1>
        </a>

        <nav>
          <a
            aria-label="Tabela com as postagens QAnon"
            onClick={() => setShowTable(!showTable)}
          >
            <FaTable title="Tabela" />
          </a>

          <a
            href="https://repositorio.ufba.br/"
            target="_blank"
            aria-label="Visite o Repositório UFBA"
            rel="noreferrer noopener"
          >
            <FaUniversity title="Repositório UFBA" />
          </a>

          <a
            href="mailto:michelle.p.gomez@gmail.com"
            aria-label="Envie um E-mail para Michelle Pacheco Gómez"
          >
            <FaMailBulk title="E-mail" />
          </a>

          <a
            href="http://lattes.cnpq.br/3254449343777451"
            target="_blank"
            aria-label="Visite o Lattes de Michelle Pacheco Gómez"
            rel="noreferrer noopener"
          >
            <i class="fa-solid fa-clipboard-user"></i>
            <FaGraduationCap title="Lattes" />
          </a>
        </nav>
      </header>

      {showTable ? <Table /> : <Home />}

      <footer>
        <span>
          &copy; Michelle Pacheco Gómez, 2023 - Todos os direitos reservados.
        </span>
      </footer>
    </>
  );
}

export default App;
