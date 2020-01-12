import React from 'react';
import Logo from './../assets/images/logo.png';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import LoggedInList from '../navLists/LoggedInList';
import LoggedOutList from '../navLists/LoggedOutList';


const Navbar = props => {

    const { auth } = props;

    const list = auth.uid ? <LoggedInList /> : <LoggedOutList />

    return (
        <header>
            <div className="container">
                <div className="sixteen columns">

                    <div id="logo">
                        <h1><Link to="/"><img src={Logo} alt="Work Scout" /></Link></h1>
                    </div>

                    <nav id="navigation" className="menu">

                        {list}

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
    return {
        auth: state.firebase.auth
    }
}


export default connect(mapStateToProps)(Navbar);