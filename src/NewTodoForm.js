import React, { Component } from "react";
import uuid from "uuid/v4";
import "./NewTodoForm.css"

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const newTask = { ...this.state, id: uuid(), completed: false }
    this.props.createTask(newTask)
    this.setState({
      task: ""
    });
  }
  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="task">New Task  </label>
          <input
            type="text"
            placeholder="New Task"
            name="task"
            value={this.state.task}
            onChange={this.handleChange}
            id="task"
          />
          <button>Add Task</button>
        </div>
      </form>
    );
  }
}
export default NewTodoForm;
