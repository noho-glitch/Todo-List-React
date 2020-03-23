import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css"

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
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
  update(id, updatedTask) {
      const updatedTodos = this.state.tasks.map(task => {
          if(task.id === id) {
              return {...task, task: updatedTask}
          }
          return task;
      })
      this.setState({ tasks: updatedTodos })
  }
  toggleCompletion(id) {
    const updatedTodos = this.state.tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    this.setState({ tasks: updatedTodos });
  }
  render() {
    const tasks = this.state.tasks.map(newTask => {
      return (
        <Todo
          key={newTask.id}
          id={newTask.id}
          task={newTask.task}
          completed={newTask.completed}
          removeTask={this.remove}
          updateTask={this.update}
          toggleTodo={this.toggleCompletion}
        />
      );
    });
    return (
      <div className='TodoList'>
        <h1>Todo List!
            <span>A simple react todo list</span>
        </h1>
        <NewTodoForm createTask={this.create} />
        <ul>{tasks}</ul>
      </div>
    );
  }
}

export default TodoList;
