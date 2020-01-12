import React from 'react'
import { Link } from 'react-router-dom'

const LoggedOutList = () => {
    return (
        <ul className="responsive float-right">
            <li><Link to="/signup"><i className="fa fa-user"></i> Sign Up</Link></li>
            <li><Link to="/login"><i className="fa fa-lock"></i> Log In</Link></li>
        </ul>
    )
}

export default LoggedOutList
