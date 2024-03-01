import {Component} from 'react'
import './index.css'

class Login extends Component {
  state = {username: '', password: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickLogin = event => {
    event.preventDefault()
  }

  render() {
    const {username, password} = this.state

    return (
      <div className="login-page">
        <form className="login-con" onSubmit={this.onClickLogin}>
          <div className="logo-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
              className="website-logo"
            />
          </div>
          <div className="username-con">
            <label className="label" htmlFor="username">
              USERNAME
            </label>
            <input
              placeholder="Username"
              id="username"
              value={username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="password-con">
            <label className="label" htmlFor="password">
              PASSWORD
            </label>
            <input
              placeholder="Password"
              id="password"
              value={password}
              onChange={this.onChangePassword}
            />
          </div>
          <button type="button">Login</button>
        </form>
      </div>
    )
  }
}

export default Login
