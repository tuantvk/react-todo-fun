import React from 'react';
import Input from './components/Input';
import Card from './components/Card';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [{ id: 1, title: 'title111' }, { id: 2, title: 'title222' }]
    }
  }

  render() {
    const { todos } = this.state;
    return (
      <>
        <Input />
        {todos.map((todo, index) =>
          <Card key={index} {...todo} />
        )}
      </>
    )
  }
}

export default App;