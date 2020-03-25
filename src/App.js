import React, { Fragment } from 'react'
import { Provider } from 'react-redux'
import Header from './common/header'
import { GlobalStyle } from './style'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <GlobalStyle/>
        <Header/>
      </Fragment>
    </Provider>
  );
}

export default App
