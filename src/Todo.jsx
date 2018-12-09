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
        {
          this.state.tasks.map(task => {
            return (
              <li 
                className='task-li'
                onClick={() => this.strikeTask()}
              >
                {task}
              </li>
            )
          })
        }
      </ul>
    )
  }

  strikeTask() {
    console.log('clicked task')
  }

  addTask() {
    // add task into total tasks
    let newTask = this.state.task;
    let updatedTodos = this.state.tasks.concat(newTask);
    this.setState({ tasks: updatedTodos })

    // clear textbox
    let htmlTag = document.querySelector('input');
    htmlTag.value = '';

    // increment totalTasks/ tasksLeft by one
    let totalTasksNumber = ++this.state.totalTasks;
    let tasksToCompleteNumber = ++this.state.tasksLeft;
    this.setState({ totalTasks: totalTasksNumber, tasksLeft: tasksToCompleteNumber })

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

        <div className='todoTasks'>
          You have {this.state.tasksLeft} out of {this.state.totalTasks} to finish!
        </div>

        <div className='todoTasks'>
          {this.renderTasks()}
        </div>

        To-Do Component
      </div>
    )
  }
}

export default Todo;