import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { data } from './data'

function App() {
  return (
    <>
  <table>
          <tr>
              <th>Número</th>
              <th>Sorteio</th>
              <th>Postagem</th>
              <th>
                <span>Temática</span>
                <input type="text"/>
              </th>
          </tr>

        {
          data.map((item,index)=>(
<tr>
  <td>{index+1}</td>
  <td>{item.sorteio}</td>
  <td>{item.postagem}</td>
  <td>{item.tematica}</td>
</tr>
          ))
        }        
        
        </table>
    </>
  )
}

export default App
