import detailData from './data/detail'
import headerListData from './data/headerList'
import homeData from './data/home'
import homeListData from './data/homeList'
import loginData from './data/login'

var Mock = require('mockjs');

Mock.setup({
    timeout: '300-600'
})

const data = [
  {
    api: 'detail',
    data: detailData
  },
  {
    api: 'headerList',
    data: headerListData
  },
  {
    api: 'home',
    data: homeData
  },
  {
    api: 'homeList',
    data: homeListData
  },
  {
    api: 'login',
    data: loginData
  },
]

data.forEach((item) => {
  Mock.mock(`/api/${item.api}`, item.method || 'get', item.data)
})

export default Mock
