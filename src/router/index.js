import React from 'react'
import { Route } from 'react-router'
import App from '../containers/App'
import Home from '../containers/Home'
import Contact from '../containers/Contact'

const routes = (
    <App>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
    </App>
)
 export default routes