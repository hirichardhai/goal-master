import React, { Component } from 'react';
import Login from './Login';

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
          App Component
        </div>
      </div>
    )
  }
}

export default App;