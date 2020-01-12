import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { signOut } from '../store/actions/authActions';


const LoggedInList = props => {
    return (
        < ul className="responsive float-right" >
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/messages">Message</Link></li>

            {/* visible to students only */}
            <li><Link to="/createRequest" id="current">Create Request</Link></li>

            {/* visible to scholars only */}
            <li><Link to="/viewRequests" id="current">View Requests</Link></li>

            {/* logging out option when user is logged in */}
            <li><a onClick={props.signOut}><i className="fa fa-user"></i> Log Out</a></li>
        </ul >
    )
}


const mapDispatchToProps = dispatch => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(LoggedInList);

