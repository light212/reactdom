import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import reducer from "./store/reducer";
import { createStore } from 'redux'

import App from './App'
const store = createStore(reducer);
const rootElement = document.createElement("div");
document.body.appendChild(rootElement);
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);