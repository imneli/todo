import React, { Component } from 'react';
import './Main.css';
import { FaPlus } from 'react-icons/fa';
import { FaEdit, FaWindowClose } from 'react-icons/fa';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      novaTarefa: '',
      tarefas: [
        'fazer café',
        'beber água',
        'estudar'
      ],
      tarefaEditando: null
    };

    this.mudaInput = this.mudaInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.iniciarEdicao = this.iniciarEdicao.bind(this);
    this.salvarEdicao = this.salvarEdicao.bind(this);
    this.deletarTarefa = this.deletarTarefa.bind(this);
  }

  mudaInput(e) {
    this.setState({
      novaTarefa: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { tarefas, novaTarefa } = this.state;
    if (novaTarefa.trim() === '') return;

    this.setState({
      tarefas: [...tarefas, novaTarefa],
      novaTarefa: ''
    });
  }

  iniciarEdicao(index) {
    const { tarefas } = this.state;
    this.setState({
      novaTarefa: tarefas[index],
      tarefaEditando: index
    });
  }

  salvarEdicao(e) {
    e.preventDefault();
    const { tarefas, novaTarefa, tarefaEditando } = this.state;
    if (novaTarefa.trim() === '') return;

    const tarefasAtualizadas = [...tarefas];
    tarefasAtualizadas[tarefaEditando] = novaTarefa;

    this.setState({
      tarefas: tarefasAtualizadas,
      novaTarefa: '',
      tarefaEditando: null
    });
  }

  deletarTarefa(index) {
    const { tarefas } = this.state;
    const tarefasAtualizadas = tarefas.filter((tarefa, i) => i !== index);

    this.setState({
      tarefas: tarefasAtualizadas
    });
  }

  render() {
    const { novaTarefa, tarefas, tarefaEditando } = this.state;

    return (
      <div className="main">
        <h1>Todo List</h1>

        <form className="form" onSubmit={tarefaEditando !== null ? this.salvarEdicao : this.handleSubmit}>
          <input onChange={this.mudaInput} type="text" value={novaTarefa} />
          <button type="submit"><FaPlus /></button>
        </form>

        <ul className="tarefas">
          {tarefas.map((tarefa, index) => (
            <li key={index}>
              {tarefa}
              <div>
                <FaEdit className='edit' onClick={() => this.iniciarEdicao(index)} />
                <FaWindowClose className='delete' onClick={() => this.deletarTarefa(index)} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
