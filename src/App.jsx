import React, { Component } from 'react';
import Login from './Login';
import Todo from './Todo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Login />
        <div>
          App 
        </div>
        <Todo />
      </div>
    )
  }
}

export default App;