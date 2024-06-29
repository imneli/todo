# Todo List App

Este é um aplicativo simples de lista de tarefas (Todo List) desenvolvido em React. O aplicativo permite adicionar, editar e excluir tarefas da lista.

## Estrutura do Projeto

A estrutura do projeto é composta por um único componente principal chamado `Main`, que gerencia o estado e a lógica do aplicativo.

### Dependências

- `react`
- `react-icons`

## Funcionalidades

1. **Adicionar Tarefa**:
   - O usuário pode adicionar uma nova tarefa digitando no campo de entrada e clicando no botão `FaPlus`.

2. **Editar Tarefa**:
   - O usuário pode editar uma tarefa existente clicando no ícone `FaEdit` ao lado da tarefa. A tarefa selecionada será carregada no campo de entrada, onde poderá ser modificada e salva clicando no botão `FaPlus`.

3. **Deletar Tarefa**:
   - O usuário pode deletar uma tarefa clicando no ícone `FaWindowClose` ao lado da tarefa.

## Código

```javascript
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
```

O componente principal `Main` é definido como uma classe que estende `React.Component`. O construtor inicializa o estado do componente, que inclui a tarefa atual (`novaTarefa`), a lista de tarefas (`tarefas`) e o índice da tarefa que está sendo editada (`tarefaEditando`). Além disso, os métodos são vinculados ao contexto do componente para garantir que this seja referenciado corretamente.

```js
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
```

O método `mudaInput` é chamado sempre que o valor do campo de entrada muda, atualizando o estado `novaTarefa` com o valor atual do campo. O método `handleSubmit` é chamado quando o formulário é enviado. Ele adiciona a nova tarefa à lista de tarefas, se não estiver vazia, e limpa o campo de entrada.

```js
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
```

O método `iniciarEdicao` é chamado quando o usuário clica no ícone de edição (`FaEdit`). Ele atualiza o estado para iniciar a edição da tarefa selecionada, carregando seu valor no `campo de entrada`. O método `salvarEdicao` é chamado quando o formulário é enviado enquanto uma tarefa está sendo editada. Ele atualiza a tarefa na lista de tarefas e redefine o estado de edição.

```js
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
```

O método `deletarTarefa` é chamado quando o usuário clica no ícone de exclusão (`FaWindowClose`). Ele remove a tarefa correspondente da lista de tarefas atualizando o estado. O método `render` define a estrutura da interface do usuário. Ele exibe o formulário para adicionar ou editar tarefas e a lista de tarefas. Cada tarefa na lista possui ícones de edição e exclusão que chamam os métodos apropriados quando clicados.

## Como rodar o projeto?

**1. Clone o repositório:**

```bash
git clone https://github.com/imneli/todo.git
```

**2. Instale as dependências:**

```bash
npm install
```

**3. Rode o projeto:**

```bash
npm start
```


