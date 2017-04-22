import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router'
import { syncHistoryWithSotre } from 'react-router-redux'
import App from '@containers/App';
import configureStore from '@store'
import '@css/index.css';

const store = configureStore()
const history = syncHistoryWithSotre(browserHistory, store)

render(
  <App store={store} history={history} />,
  document.getElementById('root')
);
