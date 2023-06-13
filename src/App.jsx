import React, { useState } from "react";
import "./App.css";
import { Home } from "./Home";
import { Table } from "./Table/index.jsx";

import {
  FaGraduationCap,
  FaMailBulk,
  FaTable,
  FaUniversity,
} from "react-icons/fa";

function App() {
  const [showTable, setShowTable] = useState(false);
  const showText = !showTable;
  const [searchOption, setSearchOption] = useState("");
  const tableData = [
    { id: 1, label: "Agradecimento" },
    { id: 2, label: "Aliens" },
    { id: 3, label: "Armas" },
    { id: 4, label: "Ciência" },
    { id: 5, label: "Crianças" },
    { id: 6, label: "Criptografada" },
    { id: 7, label: "Criptografia" },
    { id: 8, label: "Discordância" },
    { id: 9, label: "Economia" },
    { id: 10, label: "Indisponível" },
    { id: 11, label: "Instruções" },
    { id: 12, label: "Mídia" },
    { id: 13, label: "Militares" },
    { id: 14, label: "Não Foi Possível Acessar" },
    { id: 15, label: "Natal" },
    { id: 16, label: "Pandemia" },
    { id: 17, label: "Parabenização" },
    { id: 18, label: "Política" },
    { id: 19, label: "Prece" },
    { id: 20, label: "Programa Espacial" },
    { id: 21, label: "Qanon" },
    { id: 22, label: "Religião" },
    { id: 23, label: "Saúde" },
    { id: 24, label: "Trump" },
  ];

  const handleSearchOptionChange = (event) => {
    setSearchOption(event.target.value);
  };

  const handleSearch = () => {
    const filteredItems = tableData.filter((item) =>
      item.label.toLowerCase().includes(searchOption.toLowerCase())
    );
    setFilteredData(filteredItems);
  };

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
            <FaTable />
          </a>

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

      {showText ? null : (
        <text>
          <h2>Instruções de Busca</h2>
          <p>
            <ul>
              <li>
                Para agrupar as postagens de acordo com a classificação
                temática, clique na seta no campo "Selecione uma opção
                temática", marque a opção desejada e clique na lupa ao lado. A
                tabela será filtrada de acordo com a opção selecionada.
              </li>

              <li>
                Para ter a tabela completa novamente, escolha a opção "Selecione
                uma opção temática" e clique na lupa.
              </li>

              <li>
                Para voltar para a página inicial, clique no título do site ou
                no ícone da tabela.
              </li>
            </ul>
          </p>
        </text>
      )}

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
