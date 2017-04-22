import React from 'react'
import { Route } from 'react-router'

import Home from '@containers/Home'
import Contact from '@containes/Contact'

const routes = (
    <Route path="/" component={Home}>
        <Route path="/contact" component={Contact} />
    </Route>
)