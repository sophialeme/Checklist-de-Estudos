import React, { useState } from "react";
import "./App.css";

const diasSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
const materias = ["Artes", "Biologia", "Filosofia", "Física", "Geografia", "História", "Matemática", "Português", "Química", "Religião"];

function App() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [diasSelecionados, setDiasSelecionados] = useState([]);
  const [materia, setMateria] = useState("");
  const [tarefas, setTarefas] = useState([]);
  const [filtro, setFiltro] = useState("");

  const toggleDia = (dia) => {
    if (diasSelecionados.includes(dia)) {
      setDiasSelecionados(diasSelecionados.filter(d => d !== dia));
    } else {
      setDiasSelecionados([...diasSelecionados, dia]);
    }
  };

  const adicionarTarefa = (e) => {
    e.preventDefault();
    const novaTarefa = {
      id: Date.now(),
      titulo,
      descricao,
      dias: diasSelecionados,
      materia,
    };

    setTarefas([...tarefas, novaTarefa]);

    setTitulo("");
    setDescricao("");
    setDiasSelecionados([]);
    setMateria("");
  };

  const tarefasFiltradas = tarefas.filter(t =>
    t.titulo.toLowerCase().includes(filtro.toLowerCase()) ||
    t.descricao.toLowerCase().includes(filtro.toLowerCase()) ||
    t.materia.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="container">
      <h1> Adicionar Tarefa</h1>
      <form onSubmit={adicionarTarefa}>

        <label>
          Título:
          <input
            type="text"
            value={titulo}
            onChange={e => setTitulo(e.target.value)}
            placeholder="Ex: Estudar geografia"
            required
          />
        </label>

        <label>
          Descrição:
          <textarea
            value={descricao}
            onChange={e => setDescricao(e.target.value)}
            placeholder="Detalhe a tarefa"
            required
          />
        </label>

        <fieldset>
          <legend>Dias da semana:</legend>
          {diasSemana.map(dia => (
            <label key={dia} className="checkbox-group">
              <input
                type="checkbox"
                checked={diasSelecionados.includes(dia)}
                onChange={() => toggleDia(dia)}
              />
              {dia}
            </label>
          ))}
        </fieldset>

        <label>
          Matéria:
          <select value={materia} onChange={e => setMateria(e.target.value)} required>
            <option value="">Selecione a matéria</option>
            {materias.map(mat => (
              <option key={mat} value={mat}>{mat}</option>
            ))}
          </select>
        </label>

        <button type="submit">Adicionar tarefa</button>
      </form>

      <hr />

      <h2> Tarefas Cadastradas</h2>

      <input
        type="text"
        placeholder=" Pesquisar tarefa..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        style={{ marginBottom: 20 }}
      />

      {tarefasFiltradas.length === 0 && <p>Nenhuma tarefa encontrada.</p>}

      <ul>
        {tarefasFiltradas.map(tarefa => (
          <li key={tarefa.id}>
            <strong>{tarefa.titulo}</strong><br />
             {tarefa.descricao}<br />
             Dias: {tarefa.dias.join(", ")}<br />
             Matéria: {tarefa.materia}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

