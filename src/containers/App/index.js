import React from 'react'
import { Link } from 'react-router-dom'

const App = (props) => {
    return (
        <div>
            <div>
                <Link to="/">Home</Link>
                <p>//</p>
                <Link to="/contact">Contact</Link>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default App