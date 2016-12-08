import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './containers/App.jsx'
import configureStore from './store/configureStore.jsx';

// 作成したreducerであるcounter関数を引数に指定してstoreを作成
const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("content")
)
