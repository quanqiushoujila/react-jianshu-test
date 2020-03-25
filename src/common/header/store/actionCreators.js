import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
import { getHeaderList } from '../../../api/index'

export const searchFoucs = () => ({
  type: actionTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
})

export const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})

export const mouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER
})

export const mouseLeave = () => ({
  type: actionTypes.MOUSE_LEAVE
})

export const changePage = () => ({
  type: actionTypes.CHANGE_PAGE
})

export const getList = () => {
  return (dispatch) => {
    getHeaderList().then(({ data }) => {
      let result = data.data
      dispatch(changeList(result))
    }).catch((err) => {
      throw err
    })
  }
}