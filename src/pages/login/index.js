import React, { Component } from 'react'
import { getLogin } from '../../api/index'
import './style.scss'
class Login extends Component {
  componentDidMount () {
    this.login()
  }

	render () {
    return (
    	<div>Login</div>
    )
  }

  login () {
    getLogin().then((res) => {
      console.log(res)
    })
  }
}

export default Login