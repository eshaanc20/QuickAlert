import React, { Component } from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Homepage from './Components/IntroPage/Homepage';

class App extends Component {

  state = {
    signedin: false,
    user: null,
    type: null
  }

  render () {
    return (
      <div className="App">
          <Dashboard />
      </div>
    );
  }
}

export default App;
