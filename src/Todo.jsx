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
      <div>To-Do Component</div>
    )
  }
}

export default Todo;