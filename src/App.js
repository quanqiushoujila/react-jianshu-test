import React, { Fragment } from 'react'
import { Provider } from 'react-redux'
import Header from './common/header'
import { GlobalStyle } from './style'
import { Route, BrowserRouter } from 'react-router-dom'
import store from './store'
import router from './router'


function App () {
  const initRouter = router.map(item => {
    return <Route path={item.path} exact key={item.path} component={item.component}></Route>
  })

  return (
    <Provider store={store}>
      <Fragment>
        <GlobalStyle/>
        <BrowserRouter>
          <div>
            <Header/>
            {initRouter}
          </div>
        </BrowserRouter>
      </Fragment>
    </Provider>
  )
}

export default App
