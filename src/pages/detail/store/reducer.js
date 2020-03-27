import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  detailData: {}
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.GET_DETAIL_DATA:
      return state.set('detailData', action.data)
    default:
      return state
  }
}