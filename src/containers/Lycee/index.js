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
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-3">Informations</h1>
                        <p className="lead">Here, we are on the page contain the feature who will give the possibility of user to choose his Lycee.</p>
                    </div>
                </div>
                <form>
                    <div className="form-group">
                        <label for="exampleSelect1">Département</label>
                        <select className="form-control" id="exampleSelect1">
                            <option>1</option>
                            <option>2</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="exampleSelect1">Ville</label>
                        <select className="form-control" id="exampleSelect1">
                            <option>1</option>
                            <option>2</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="exampleSelect1">Lycée</label>
                        <select className="form-control" id="exampleSelect1">
                            <option>1</option>
                            <option>2</option>
                        </select>
                    </div>
                </form>
                <button type="button" className="btn btn-success pull-2">Continuer</button>
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