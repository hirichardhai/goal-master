import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: []
    }
  }

  render() {
    return (
      <div>
        <input type='text'>
        
        </input>
        <button>
        
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