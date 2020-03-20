import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            tasks: [{ task: "asdf" }, { task: "asfd" }] 
        };
      }
    render() {
        const tasks = this.state.tasks.map(newVar => {
            return <Todo task={newVar.task} />
        })
        return (
            <div>
                <h1>Todo List!</h1>
                <NewTodoForm/>
                <ul>
                    {tasks}
                </ul>
            </div>
        )
    }
}

export default TodoList;