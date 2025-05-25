import { useState } from 'react'
import './App.css'

function App() {
  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [pessoas, setPessoas] = useState([])

  const handleClick = () => {
    if (nome && idade) {
      setPessoas([...pessoas, { id: pessoas.length, nome, idade }])
      setNome("")
      setIdade("")
    }
  }

  const handleNome = (e) => {
    setNome(e.target.value)
  }

  const handleIdade = (e) => {
    setIdade(e.target.value)
  }

  return (
    <div className='card'>
      <input
        type="text"
        placeholder='Digite o nome'
        onChange={handleNome}
        value={nome}
      />
      <input
        type="number"
        placeholder='Digite a idade'
        onChange={handleIdade}
        value={idade}
      />
      <button onClick={handleClick}>Clique aqui</button>

      {pessoas.map((pessoa) => (
        <div key={pessoa.id}>
          <p>Nome: {pessoa.nome}</p>
          <p>Idade: {pessoa.idade}</p>
        </div>
      ))}
    </div>
  )
}

export default App
