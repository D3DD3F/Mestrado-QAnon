import { useState } from "react";
import { data } from "./data";
import { FaSearch } from "react-icons/fa";

export const Table = () => {
  const [filtered, setFiltered] = useState(data);
  const [imput, setImput] = useState("");

  function filterTematica() {
    if (!imput) {
      setFiltered(data);
    } else {
      const result = data.filter((item) => item.tematica.includes(imput));
      setFiltered(result);
    }
  }

  return (
    <>
      <span className="buscador"></span>
      <input
        type="text"
        value={imput}
        onChange={(e) => setImput(e.target.value)}
      />

      <a onClick={() => filterTematica()}>
        <FaSearch />
      </a>

      <table>
        <tr>
          <th>Número</th>
          <th>Sorteio</th>
          <th>Postagem</th>
          <th>Temática</th>
        </tr>

        {filtered.map((item, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{item.sorteio}</td>
            <td>{item.postagem}</td>
            <td>{item.tematica}</td>
          </tr>
        ))}
      </table>
    </>
  );
};
