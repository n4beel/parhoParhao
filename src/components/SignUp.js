import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Select from 'react-select';
import { signUp } from '../store/actions/authActions';

const options = [
    { value: 'student', label: 'Student' },
    { value: 'scholar', label: 'Scholar' },
];

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        name: '',
        role: null,
    }

    handleSubmit = e => {
        e.preventDefault();
        // console.log(this.state);
        this.props.signUp(this.state)
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleRoleChange = role => {
        // console.log(role)
        this.setState({ role });
    };
    render() {
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to='/dashboard' />

        const { role } = this.state;

        return (
            <div className="container">
                <div className="small-margin"></div>
                <div className="my-account">

                    {authError ?
                        <div className="notification error closeable">
                            <p><span>Error!</span> {authError} </p>
                        </div> : null}

                    <div className="tabs-container">
                        <div className="tab-content">



                            <h3 className="margin-bottom-10 margin-top-10">Register</h3>

                            <form method="post" className="register" onSubmit={this.handleSubmit}>

                                <p className="form-row form-row-wide">
                                    <label htmlFor="password">Name:</label>
                                    <input className="input-text" type="text" name="name" id="name" onChange={this.handleChange} />
                                </p>

                                <div className="form-row form-row-wide margin-bottom">
                                    <label htmlFor="role">Role:</label>
                                    <Select
                                        value={role}
                                        onChange={this.handleRoleChange}
                                        options={options}
                                    />
                                </div>


                                <p className="form-row form-row-wide">
                                    <label htmlFor="email">Email Address:</label>
                                    <input type="email" className="input-text" name="email" id="email" onChange={this.handleChange} />
                                </p>


                                <p className="form-row form-row-wide">
                                    <label htmlFor="password">Password:</label>
                                    <input type="password" className="input-text" name="password" id="password" onChange={this.handleChange} />
                                </p>



                                <p className="form-row">
                                    <input type="submit" className="button" name="register" defaultValue="Register" />
                                </p>

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
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUp: newUser => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp) 