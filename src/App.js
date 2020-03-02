import React, { Component } from 'react';
import Homepage from './Components/Homepage/Homepage';
import Dashboard from './Components/Dashboard/Dashboard';
import UserPage from './Components/User/UserPage';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';

class App extends Component {

  state = {
    signedin: false,
    user: null,
    account: null,
    information: null
  }

  loginHandler = (information, account) => {
    this.setState({
      signedin: true,
      user: information.name,
      account: account,
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
        <Route exact path='/' render={() => <Homepage loginHandler={this.loginHandler} />}  />
        {this.state.signedin && this.state.account === 'service'? 
          <React.Fragment>
            <Route 
              exact 
              path='/dashboard'
              render={() => <Dashboard logoutHandler={this.logoutHandler} user={this.state.user} type={this.state.information.type} />}/>
            <Redirect to= '/dashboard'/>
          </React.Fragment>
          : this.state.signedin && this.state.account === 'user' ?
          <React.Fragment>
            <Route exact path='/user' render={() => <UserPage info={this.state.information} logoutHandler={this.logoutHandler}/>}/>
            <Redirect to='/user' /> 
          </React.Fragment>
          : <Redirect to='/'/> }
      </BrowserRouter>
    );
  }
}

export default App;
