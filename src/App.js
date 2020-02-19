import React, { Component } from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Homepage from './Components/IntroPage/Homepage';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';

class App extends Component {

  state = {
    signedin: false,
    user: null,
    type: null,
    information: null
  }

  loginHandler = (information) => {
    this.setState({
      signedin: true,
      user: information.name,
      type: information.type,
      information: {...information}
    });
  }

  logoutHandler = () => {
    this.setState({
      signedin: false,
      user: null,
      type: null
    });
  }

  render () {
    return (
      <BrowserRouter>
        <Route exact path="/" render={() => <Homepage loginHandler={this.loginHandler} />}  />
        {this.state.signedin ? 
          <Route exact path="/dashboard" render={() => <Dashboard logoutHandler={this.logoutHandler} user={this.state.user} type={this.state.type} />}/> : null} 
        {this.state.signedin && this.state.type !== 'user' ?
          <Redirect to='/dashboard'/>: null}
        {this.state.signedin && this.state.type === 'user' ?
            <Redirect to = '/user' /> : null}
        {!this.state.signedin ? <Redirect to='/' /> : null}
      </BrowserRouter>
    );
  }
}

export default App;
