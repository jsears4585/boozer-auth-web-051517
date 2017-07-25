import React, { Component } from 'react'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  }

  onHandleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onHandleSubmit = e => {
    e.preventDefault()
    const { username, password } = this.state
    if (!username || !password) return false
    this.props.handleLogin(username, password)
  }

  render() {
    return (
      <form onSubmit={this.onHandleSubmit}>
        <input name="username" type="text" value={this.state.username} onChange={this.onHandleChange} />
        <input name="password" type="password" value={this.state.password} onChange={this.onHandleChange} />
        <input type="submit" />
      </form>
    )
  }
}

export default LoginForm
