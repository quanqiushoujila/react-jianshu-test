import Loadable from 'react-loadable'
import Loading from './loading'

const Home = Loadable({
  loading: Loading,
  loader: () => import ('../pages/home')
})

const Detail = Loadable({
  loading: Loading,
  loader: () => import ('../pages/detail')
})

const Login = Loadable({
  loading: Loading,
  loader: () => import ('../pages/login')
})

const Write = Loadable({
  loading: Loading,
  loader: () => import ('../pages/write')
})

const router = [
  {
    path: '/',
    name: '首页',
    label: '首页',
    component: Home
  },
  {
    path: '/detail/:id',
    name: '详情页',
    label: '详情页',
    component: Detail
  },
  {
    path: '/login',
    name: '登录页',
    label: '登录页',
    component: Login
  },
  {
    path: '/write',
    name: '文章页',
    label: '文章页',
    component: Write
  }
  // {
  //   redirect: '/',
  //   path: '/*'
  // }
]

export default router