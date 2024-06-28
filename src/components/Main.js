import React, { Component } from 'react'
import './Main.css'

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      novaTarefa: '',
    };

    this.mudaInput = this.mudaInput.bind(this);
  }


  mudaInput(e) {
    this.setState({
      novaTarefa: e.target.value
    });
  }

  render() {

    const { novaTarefa } = this.state;

    return (
      <div className="main">
        <h1>Todo List</h1>

        <form action="#">
          <input oncChange={this.mudaInput} type="text" />
          <button type="submit">Enviar</button>
        </form>
      </div>
  )
  }
}
