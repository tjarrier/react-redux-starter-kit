import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router'
import { syncHistoryWithSotre } from 'react-router-redux'
import configureStore from '@store'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import routes from '@router'
import '@css/index.css';

const store = configureStore()
const history = syncHistoryWithSotre(browserHistory, store)

const App = ({}) => (
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>
)

render(
  <App />,
  document.getElementById('root')
);
