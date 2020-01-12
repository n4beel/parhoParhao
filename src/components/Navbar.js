import React from 'react';
import Logo from './../assets/images/logo.png';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';


const Navbar = () => {
    return (
        <header>
            <div className="container">
                <div className="sixteen columns">

                    <div id="logo">
                        <h1><Link to="/"><img src={Logo} alt="Work Scout" /></Link></h1>
                    </div>

                    <nav id="navigation" className="menu">

                        {/* menu visible if user is logged in */}
                        <ul className="responsive float-right">
                            <li><Link to="/dashboard">Dashboard</Link></li>
                            <li><Link to="/messages">Message</Link></li>

                            {/* visible to students only */}
                            <li><Link to="/createRequest" id="current">Create Request</Link></li>

                            {/* visible to scholars only */}
                            <li><Link to="/viewRequests" id="current">View Requests</Link></li>

                            {/* logging out option when user is logged in */}
                            <li><Link to="/"><i className="fa fa-user"></i> Log Out</Link></li>
                        </ul>

                        {/* auth options when user is logged out */}
                        {/* <ul className="responsive float-right">
                            <li><Link to="/signup"><i className="fa fa-user"></i> Sign Up</Link></li>
                            <li><Link to="/login"><i className="fa fa-lock"></i> Log In</Link></li>
                        </ul> */}

                    </nav>

                    <div id="mobile-navigation">
                        <a href="#menu" className="menu-trigger"><i className="fa fa-reorder"></i> Menu</a>
                    </div>

                </div>
            </div>
        </header>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {

    }
}

export default connect(mapStateToProps)(Navbar);