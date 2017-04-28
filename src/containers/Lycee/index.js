/* @flow */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {ActionsCreators} from '../../store/actions'

class Lycee extends Component {
    render () {
        return (
            <div>
                <p>
                    Here, we are on the page contain the feature who will give the possibility of user to choose his Lycee.
                </p>
            </div>
        )
    }

    static propTypes = {
        counter: PropTypes.number
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => (
    bindActionCreators(ActionsCreators, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Lycee)