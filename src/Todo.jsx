import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task: '',
      tasks: ['todoTest'],
      totalTasks: 0,
      tasksLeft: 0
    }
  }

  renderTasks() {
    return (
      <ul>
        {
          this.state.tasks.map(task => {
            return (
              <li>{task}</li>
            )
          })
        }
      </ul>
    )
  }

  addTask() {
    let newTask = this.state.task;
    let updatedTodos = this.state.tasks.concat(newTask);
    this.setState({ tasks: updatedTodos })
  }

  render() {
    return (
      <div>
        <input 
          type='text'
          onChange={event => this.setState({ task: event.target.value })}
          className='todo-textbox'
          placeholder='type task here'
        >
        </input>
        <button 
          type='button'
          onClick={() => {this.addTask()}}
          className='addTask-button'  
        >
        Add Task
        </button>
        <div className='todoTasks'></div>
        <div className='todoTasks'>
          {this.renderTasks()}
        </div>
        To-Do Component</div>
    )
  }
}

export default Todo;