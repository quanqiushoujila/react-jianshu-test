import * as actionTypes from './actionTypes'
import { login } from '../../../api/index'

export const changeLogin = () => {
  return (dispatch) => {
    login().then(({ data }) => {
      if (data.data) {
        dispatch({
          type: actionTypes.CHANGE_LOGIN
        })
      }
    })
  }
}

export const logout = () => ({
  type: actionTypes.LOGOUT
})