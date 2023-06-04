import "./App.css";

import { Table } from "./Table";
import { FaGraduationCap, FaMailBulk, FaUniversity } from "react-icons/fa";

function App() {
  return (
    <>
      <header>
        <a href="./index.html">
          <h1>Desinformação na Internet</h1>
        </a>

        <nav>
          <a href="" target="_blank" aria-label="Visite o Repositório UFBA">
            <FaUniversity />
          </a>

          <a
            href="mailto:michelle.p.gomez@gmail.com"
            aria-label="Envie um E-mail para Michelle Pacheco Gómez"
          >
            <FaMailBulk />
          </a>

          <a
            href="http://lattes.cnpq.br/3254449343777451"
            target="_blank"
            aria-label="Visite o Lattes de Michelle Pacheco Gómez"
          >
            <i class="fa-solid fa-clipboard-user"></i>
            <FaGraduationCap />
          </a>
        </nav>


      </header>
      <Table />
    </>
  );
}

export default App;
