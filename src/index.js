import React from 'react';
import { render } from 'react-dom';

import Router from './pages/Router';

import './theme/reset.css';
import './theme/base.less';
import './theme/theme.less';

class App extends React.Component {
  render() {
    return <Router />;
  }
}

render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
