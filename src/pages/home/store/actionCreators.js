import { getHomeList } from '../../../api/index'
import * as actionTypes from './actionTypes'

const changeHomeData = (data) => ({
  type: actionTypes.CHANGE_HOME_DATA,
  topicList: data.topicList,
  articleList: data.articleList,
  recommendList: data.recommendList,
})

export const getHomeData = () => {
  return (dispatch) => {
    getHomeList().then(({ data }) => {
      let result = data.data
      dispatch(changeHomeData(result))
    }).catch((err) => {
      throw err
    })
  }
}

