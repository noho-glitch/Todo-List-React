import React, { Component } from "react";

class Todo extends Component {
  render() {
    return (
      <div>
          <li>{this.props.task}</li>
        <button onClick={this.props.editTask}>Edit</button>
        <button onClick={this.props.removeTask}>X</button>
      </div>
    );
  }
}

export default Todo;
