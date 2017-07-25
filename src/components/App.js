import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

import CocktailsPageContainer from '../containers/CocktailsPageContainer'
import AuthAdapter from './AuthAdapter'
import LoginForm from './LoginForm'

class App extends Component {
  state = {
    loggedIn: false,
    loggedInUser: {},
  }

  handleLogin = (username, password) => {
    AuthAdapter.login({username: username, password: password})
      .then((res)=> {
        localStorage.setItem('token', res.token)
        this.setState({
          loggedInUser: res.username,
          loggedIn: true
        })
      })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Boozer</h2>
          <Link to='/cocktails'>See All Cocktails</Link>
          <Link to='/login'>Login Time</Link>
          <Link to='/'>Home</Link>
        </div>
        <Route path="/cocktails" component={CocktailsPageContainer} />
        <Route path="/login" render={ () => <LoginForm handleLogin={this.handleLogin} /> } />
      </div>
    );
  }
}

export default App;
