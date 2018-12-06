import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
      totalTasks: 0,
      tasksLeft: 0
    }
  }

  renderTasks() {
    return (
      <ul>
        {this.state.tasks.map(task => {
          <li>{task}</li>
        })}
      </ul>
    )
  }

  addTask() {

  }

  render() {
    return (
      <div>
        <input type='text'>
        
        </input>
        <button onClick={() => {this.addTask()}}>
        
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