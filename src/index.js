import React from 'react'
import ReactDOM from 'react-dom'
import './style.js'
import App from './App'
import './statics/iconfont/iconfont.css'
import * as serviceWorker from './serviceWorker'
import './statics/styles/base.css'

import 'antd/dist/antd.css'
// import zhCN from 'antd/es/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
import './mock/index'

moment.locale('zh-cn')

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
