import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from '../common/header/store'
import homeReducer from '../pages/home/store'
import detailReducer from '../pages/detail/store'
import loginReducer from '../pages/login/store'

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer.reducer,
  detail: detailReducer.reducer,
  login: loginReducer.reducer,
})

export default reducer