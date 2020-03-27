import * as actionTypes from './actionTypes'
import { getDetail} from '../../../api/index'

export const getDetailData = () => {
  return (dispatch) => {
    getDetail().then(({ data }) => {
      let result = data.data
      dispatch({
        type: actionTypes.GET_DETAIL_DATA,
        data: result
      })
    })
  }
}