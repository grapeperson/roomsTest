import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux'
import { ConnectedRouter } from "react-router-redux";

import { importAll } from './utils/index';
import  store, { history }  from './store';
import  App  from './App';

const sass = require("./index.scss");
const fonts = importAll(require.context('./fonts', false, /\.(ttf)$/));
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.querySelector('#root')
);

// <Provider store={store}>
//   <App />
// </Provider>,
