import { useState } from "react";
import { data } from "./data";
import { FaSearch } from "react-icons/fa";

export const Table = () => {
  const [filtered, setFiltered] = useState(data);
  const [input, setInput] = useState("");
  const [searchOption, setSearchOption] = useState("");

  function filterData() {
    if (!input) {
      setFiltered(data);
    } else {
      const result = data.filter((item) => item.tematica.includes(input));
      setFiltered(result);
    }
  }

  function handleSearchOptionChange(event) {
    setSearchOption(event.target.value);
  }

  function handleSearch() {
    if (searchOption === "") {
      setFiltered(data);
    } else {
      const result = data.filter((item) => item.tematica === searchOption);
      setFiltered(result);
    }
  }

  function handleKeyUp(event) {
    if (event.key === "Enter") {
      handleSearch();
    }
  }

  return (
    <>
      <div className="search-container">
        <select
          className="DropDown"
          value={searchOption}
          onChange={handleSearchOptionChange}
        >
          <option value="">Selecione uma opção temática</option>
          <option value="Agradecimento">Agradecimento</option>
          <option value="Aliens">Aliens</option>
          <option value="Armas">Armas</option>
          <option value="Ciência">Ciência</option>
          <option value="Crianças">Crianças</option>
          <option value="Criptografada">Criptografada</option>
          <option value="Criptografia">Criptografia</option>
          <option value="Discordância">Discordância</option>
          <option value="Economia">Economia</option>
          <option value="Indisponível">Indisponível</option>
          <option value="Instruções">Instruções</option>
          <option value="Mídia">Mídia</option>
          <option value="Militares">Militares</option>
          <option value="Não Foi Possível Acessar">
            Não Foi Possível Acessar
          </option>
          <option value="Natal">Natal</option>
          <option value="Pandemia">Pandemia</option>
          <option value="Parabenização">Parabenização</option>
          <option value="Política">Política</option>
          <option value="Prece">Prece</option>
          <option value="Programa Espacial">Programa Espacial</option>
          <option value="Qanon">Qanon</option>
          <option value="Religião">Religião</option>
          <option value="Saúde">Saúde</option>
          <option value="Trump">Trump</option>
        </select>

        <a onClick={handleSearch}>
          <FaSearch />
        </a>
      </div>

      <table>
        <thead>
          <tr>
            <th>Número</th>
            <th>Sorteio</th>
            <th>Postagem</th>
            <th>Temática</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.sorteio}</td>
              <td>{item.postagem}</td>
              <td>{item.tematica}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
