import React, { Component } from "react";

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
    this.setState({
      task: ""
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="task">New Task</label>
          <input
            type="text"
            placeholder="New Task"
            name="task"
            value={this.state.task}
            onChange={this.handleChange}
            id="task"
          />
        </div>
      </form>
    );
  }
}
export default NewTodoForm;
