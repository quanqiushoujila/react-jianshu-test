import React, { Component } from 'react'
import { connect } from 'react-redux'
import { message } from 'antd';
import { changeLogin } from './store/actionCreators'
import { Redirect } from 'react-router-dom'
import {
  LoginWrapper,
  Title,
  FormWrapper,
  FormItem,
  Input,
  Button
} from './style'

class Login extends Component {

  loginValidate (username, password, login) {
    if (username.value.trim() === '') {
      message.error('用户名不能为空')
      return false
    }

    if (password.value.trim() === '') {
      message.error('密码不能为空')
      return false
    }
    login()
  }

  render () {
    const { loginStatus, login } = this.props
    if (!loginStatus) {
      return (
        <LoginWrapper>
          <Title>登录</Title>
          <FormWrapper>
            <FormItem>
              <Input placeholder='用户名' ref={(val) => (this.username = val)}/>
            </FormItem>
            <FormItem>
              <Input placeholder='密码' type='password' ref={(val) => (this.password = val)}/>
            </FormItem>
            <FormItem>
              <Button onClick={() => this.loginValidate(this.username, this.password, login)}>登录</Button>
            </FormItem>
          </FormWrapper>
        </LoginWrapper>
      )
    } else {
      return (
        <Redirect to='/'></Redirect>
      )
    }
  }
}

const mapStatus = (state) => ({
  loginStatus: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
  login: () => {
    dispatch(changeLogin())
  }
})

export default connect(mapStatus, mapDispatch)(Login)