import React, { Component } from 'react';
import Homepage from './Components/IntroPage/Homepage';
import Registration from './Components/Registration/Registration';

class App extends Component {
  render () {
    return (
      <div className="App">
          {/* <Homepage /> */}
          <Registration/>
      </div>
    );
  }
}

export default App;
