import React from 'react';
import Input from './components/Input';
import Card from './components/Card';
import Colors from './components/Colors';
import _map from 'lodash/map';
import { STATUS } from './components/utils';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    }
  }

  _addTodo = title => {
    let todos = [...this.state.todos];
    let color = Colors[Math.floor(Math.random() * Colors.length)];
    todos.push({
      id: todos.length,
      title,
      color,
      status: STATUS.DOING,
      zIndex: todos.length
    });
    this.setState({ todos });
  }

  _removeTodo = id => {
    let todos = [...this.state.todos];
    _map(todos, x => x.id === id ? x.status = STATUS.REMOVE : x);
    this.setState({ todos });
  }

  _doneTodo = id => {
    let todos = [...this.state.todos];
    _map(todos, x => x.id === id ? x.status = STATUS.DONE : x);
    this.setState({ todos });
  }

  render() {
    const { todos } = this.state;
    return (
      <>
        <Input addTodo={this._addTodo} />
        {todos.map((todo, index) =>
          <Card
            done={todo.status === STATUS.DONE ? true : false}
            disabled={todo.status === STATUS.REMOVE ? true : false}
            key={index} {...todo}
            removeTodo={this._removeTodo}
            doneTodo={this._doneTodo}
          />
        )}
      </>
    )
  }
}

export default App;