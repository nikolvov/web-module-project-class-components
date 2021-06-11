import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm'
import './components/Todo.css'

const todos = [
  {
    task: 'Walk The Dog',
    id: 123,
    completed: false
  },
  {
    task: 'Buy Groceries',
    id: 124,
    completed: false
  },
  {
    task: 'Take Out Trash',
    id: 1235,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todos
    }
  }

  toggleTodo = todoId => {
    console.log("Toggling todo", todoId);
    const updatedTodo = this.state.todos.map(todo => {
      if (todoId === todo.id) {
        return {...todo, completed: !todo.completed}
      }
      return todo;
      });
      console.log("updated todo array", updatedTodo)
      this.setState({
        ...this.state,
        todos: updatedTodo
      });
  }

  addTodo = todoName => {
    this.setState({
      ...this.state,
      todos: [...this.state.todos,
        {
          task: todoName,
          id: Date.now(),
          completed: false
        }
      ]
    })
  }

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => !todo.completed)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>To Do List</h1>
          <TodoForm addTodo={this.addTodo}
          />
        </div>
        <TodoList clearCompleted={this.clearCompleted} toggleTodo={this.toggleTodo} todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
