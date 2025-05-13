import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1 className='titulo'>Checklist de Estudos</h1>
      <table className='tabela'>
       <thead>
        <tr>
         <th>Matérias</th>
         <th>Domingo</th>
         <th>Segunda</th>
         <th>Terça</th>
         <th>Quarta</th>
         <th>Quinta</th>
         <th>Sexta</th>
         <th>Sábado</th>
        </tr>
       </thead>
       <tbody>
         <tr>
          <th>Artes</th>
        </tr>
        <tr>
          <th>Argumentação</th>
        </tr>
        <tr>
          <th>Biologia</th>
        </tr>
        <tr>
          <th>Filosofia</th>
        </tr>
        <tr>
          <th>Física</th>
        </tr>
        <tr>
          <th>Geografia</th>
        </tr>
        <tr>
          <th>História</th>
        </tr>
        <tr>
          <th>Literatura</th>
        </tr>
        <tr>
          <th>Ingles</th>
        </tr>
        <tr>
          <th>Português</th>
        </tr>
        <tr>
          <th>Projeto de vida</th>
        </tr>
        <tr>
          <th>Química</th>
        </tr>
        <tr>
          <th>Religião</th>
         </tr>
       </tbody>
      </table>
    </div>
    </>
  )
}

export default App
