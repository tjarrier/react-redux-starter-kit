/* @flow */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {ActionsCreators} from '../../store/actions'

class Home extends Component {
    render () {
        return (
            <div>
                <p>I am the Contact page</p>
                <p>{this.props.counter}</p>
            </div>
        )
    }

    static propTypes = {
        counter: PropTypes.number
    }
}

const mapStateToProps = (state) => ({
    counter: state.counter
})

const mapDispatchToProps = (dispatch) => (
    bindActionCreators(ActionsCreators, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Home)