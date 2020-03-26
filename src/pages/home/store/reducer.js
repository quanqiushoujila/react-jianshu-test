import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

const defaultStatue = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false
})

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList)
  })
}

export default (state = defaultStatue, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return changeHomeData(state, action)
    // case actionTypes.ADD_ARTICLE_LIST:
    //   return state.set(fromJS(action.data))
    default:
      return state
  }
}

