import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleEdit() {
    this.setState({ isEditing: !this.state.isEditing });
  }
  handleSave(event) {
    event.preventDefault();
    this.props.updateTask(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  }
  handleRemove() {
    this.props.removeTask(this.props.id);
  }
  handleToggle(event) {
    this.props.toggleTodo(this.props.id);
  }
  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div className="Todo">
          <form className="Todo-edit-form" onSubmit={this.handleSave}>
            <input
              type="text"
              name="task"
              value={this.state.task}
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className="Todo">
          <li
            className={
              this.props.completed ? "Todo-task completed" : "Todo-task"
            }
            onClick={this.handleToggle}
          >
            {this.props.task}
          </li>
          <div className="Todo-buttons">
            <button onClick={this.handleEdit}><i class='fas fa-pen' /></button>
            <button onClick={this.handleRemove}><i class='fas fa-trash' /></button>
          </div>
        </div>
      );
    }
    return result;
  }
}

export default Todo;
