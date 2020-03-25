import React, { Component } from 'react'
import { getLogin } from '../../api/index'
class Login extends Component {

  componentWillMount () {}

  componentWillUpdate () {}

  shouldComponentUpdata () {}

  componentDidUpdata () {}

  componentWillUnmount () {}

  componentWillReceiveProps () {}

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