import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task: '',
      tasks: [],
      totalTasks: 0,
      tasksLeft: 0
    }
  }

  renderTasks() {
    return (
      <ul>
        <li>test</li>
      </ul>
    )
  }

  addTask() {

  }

  render() {
    return (
      <div>
        <input 
          type='text'
        >
        
        </input>
        <button 
          type='button'
          onClick={() => {this.addTask()}}
          className='addTask-button'  
        >
        
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