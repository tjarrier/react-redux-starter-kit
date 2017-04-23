import React from 'react';
import { render } from 'react-dom';
import configureStore from './store'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import routes from './router'
import './assets/css/index.css';

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

const App = () => (
    <Provider store={store}>
        <Router history={history} children={routes} />
    </Provider>
)

render(
  <App />,
  document.getElementById('root')
);
