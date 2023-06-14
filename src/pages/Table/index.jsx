import { useState } from "react";
import { data } from "./data";

export const Table = () => {
  const [filtered, setFiltered] = useState(data);
  const [searchOption, setSearchOption] = useState("");

  const categories = [
    { value: "", label: "Selecione uma opção temática" },
    { value: "Agradecimento", label: "Agradecimento" },
    { value: "Aliens", label: "Aliens" },
    { value: "Armas", label: "Armas" },
    { value: "Ciência", label: "Ciência" },
    { value: "Crianças", label: "Crianças" },
    { value: "Criptografada", label: "Criptografada" },
    { value: "Criptografia", label: "Criptografia" },
    { value: "Discordância", label: "Discordância" },
    { value: "Economia", label: "Economia" },
    { value: "Indisponível", label: "Indisponível" },
    { value: "Instruções", label: "Instruções" },
    { value: "Mídia", label: "Mídia" },
    { value: "Militares", label: "Militares" },
    { value: "Não Foi Possível Acessar", label: "Não Foi Possível Acessar" },
    { value: "Natal", label: "Natal" },
    { value: "Pandemia", label: "Pandemia" },
    { value: "Parabenização", label: "Parabenização" },
    { value: "Política", label: "Política" },
    { value: "Prece", label: "Prece" },
    { value: "Programa Espacial", label: "Programa Espacial" },
    { value: "Qanon", label: "Qanon" },
    { value: "Religião", label: "Religião" },
    { value: "Saúde", label: "Saúde" },
    { value: "Trump", label: "Trump" },
  ];

  function handleSearch(event) {
    const value = event.target.value;
    setSearchOption(event.target.value);

    if (value === "") {
      setFiltered(data);
    } else {
      const result = data.filter((item) => item.tematica === value);
      setFiltered(result);
    }
  }

  return (
    <>
      <text>
        <h2>Instruções de Busca</h2>
        <p>
          <ul>
            <li>
              Para agrupar as postagens de acordo com a classificação temática,
              clique na seta no campo "Selecione uma opção temática", marque a
              opção desejada e clique na lupa ao lado. A tabela será filtrada de
              acordo com a opção selecionada.
            </li>

            <li>
              Para ter a tabela completa novamente, escolha a opção "Selecione
              uma opção temática" e clique na lupa.
            </li>

            <li>
              Para voltar para a página inicial, clique no título do site ou no
              ícone da tabela.
            </li>
          </ul>
        </p>
      </text>

      <div className="search-container">
        <select
          className="DropDown"
          value={searchOption}
          onChange={handleSearch}
        >
          {categories.map((category) => (
            <option value={category.value}>{category.label}</option>
          ))}
        </select>
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
