import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signIn } from '../store/actions/authActions';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = e => {
        e.preventDefault();
        // console.log(this.state);
        this.props.signIn(this.state)
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render() {
        const { auth } = this.props;
        if (auth.uid) return <Redirect to='/dashboard' />

        return (
            <div className="container">
                <div className="small-margin"></div>
                <div className="my-account">

                    <div className="tabs-container">
                        <div className="tab-content">

                            <h3 className="margin-bottom-10 margin-top-10">Login</h3>

                            <form method="post" onSubmit={this.handleSubmit} className="login">


                                <p className="form-row form-row-wide">
                                    <label htmlFor="username">Email Address:</label>
                                    <input type="email" className="input-text" name="email" id="email" onChange={this.handleChange} />
                                </p>

                                <p className="form-row form-row-wide">
                                    <label htmlFor="password">Password:</label>
                                    <input className="input-text" type="password" name="password" id="password" onChange={this.handleChange} />
                                </p>

                                <p className="form-row">
                                    <input type="submit" className="button" name="login" defaultValue="Login" />

                                    {/* <label htmlFor="rememberme" className="rememberme">
                                        <input name="rememberme" type="checkbox" id="rememberme" defaultValue="forever" /> Remember Me</label> */}
                                </p>

                                {/* <p className="lost_password">
                                    <a href="#" >Lost Your Password?</a>
                                </p> */}


                            </form>
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signIn: creds => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);