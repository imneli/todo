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
      ]
    };

    this.mudaInput = this.mudaInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  mudaInput(e) {
    this.setState({
      novaTarefa: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { tarefas, novaTarefa } = this.state;
    this.setState({
      tarefas: [...tarefas, novaTarefa],
      novaTarefa: ''
    });
  }

  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">
        <h1>Todo List</h1>

        <form className="form" onSubmit={this.handleSubmit}>
          <input onChange={this.mudaInput} type="text" value={novaTarefa} />
          <button type="submit"><FaPlus /></button>
        </form>

        <ul className="tarefas">
          {tarefas.map(tarefa => (
            <li key={tarefa}>
              {tarefa}
              <div>
                <FaEdit className='edit'/>
                <FaWindowClose className='delete'/>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
