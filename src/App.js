import React from 'react';
import Input from './components/Input';
import Card from './components/Card';
import Colors from './components/Colors';

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
      zIndex: todos.length
    });
    this.setState({ todos });
  }

  render() {
    const { todos } = this.state;
    return (
      <>
        <Input addTodo={this._addTodo} />
        {todos.map((todo, index) =>
          <Card key={index} {...todo} />
        )}
      </>
    )
  }
}

export default App;