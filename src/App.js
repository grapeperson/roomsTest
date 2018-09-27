import React, { Component, Fragment } from 'react';

import Header from './components/Header';
import Content from './containers/Content';

export default class App extends Component {
  render() {
    return(
      <Fragment>
        <Header />
        <Content />
      </Fragment>
    )
  }
};
