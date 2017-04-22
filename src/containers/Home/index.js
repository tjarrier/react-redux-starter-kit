import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {ActionsCreators} from '@actions'
import { browserHistory } from 'react-router'

class Home extends Component {
    render () {
        return (
            <div>
                <p>I am the Home page</p>
            </div>
        )
    }

    static propTypes = {
        counter: React.PropTypes.number.isRequired
    }git
}

const mapStateToProps = (state) => ({
    counter: state.counter
})

const mapDispatchToProps = (dispatch) => (
    bindActionCreators(ActionsCreators, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App)