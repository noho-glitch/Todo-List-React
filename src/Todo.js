import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleRemove() {
    this.props.removeTask(this.props.id);
  }
  render() {
    return (
      <div>
        <li>{this.props.task}</li>
        <button onClick={this.handleEdit}>Edit</button>
        <button onClick={this.handleRemove}>X</button>
      </div>
    );
  }
}

export default Todo;
