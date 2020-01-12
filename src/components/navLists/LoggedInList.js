import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';


const LoggedInList = props => {

    const { profile } = props;

    return (
        < ul className="responsive float-right" >
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/messages">Message</Link></li>

            {profile.role === 'Student' ?
                <li> <Link to="/createRequest" id="current">Create Request</Link></li>
                :
                <li><Link to="/viewRequests" id="current">View Requests</Link></li>
            }


            {/* logging out option when user is logged in */}
            <li><Link to='/' onClick={props.signOut}><i className="fa fa-user"></i> Log Out</Link></li>
        </ul >
    )
}

const mapStateToProps = state => {
    return {
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInList);

