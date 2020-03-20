import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
  }
  create(newTask) {
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  }
  remove(id) {
    this.setState({
      tasks: this.state.tasks.filter(t => t.id !== id)
    });
  }
  render() {
    const tasks = this.state.tasks.map(newTask => {
      return <Todo key={newTask.id} id={newTask.id} task={newTask.task} removeTask={this.remove}/>;
    });
    return (
      <div>
        <h1>Todo List!</h1>
        <NewTodoForm createTask={this.create}/>
        <ul>{tasks}</ul>
      </div>
    );
  }
}

export default TodoList;
