import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        repeatPassword: ''
    }
    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render() {
        return (
            <div className="container">
                <div className="small-margin"></div>
                <div className="my-account">

                    <div className="tabs-container">
                        <div className="tab-content">

                            <h3 className="margin-bottom-10 margin-top-10">Register</h3>

                            <form method="post" className="register" onSubmit={this.handleSubmit}>

                                <p className="form-row form-row-wide">
                                    <label htmlFor="email">Email Address:</label>
                                    <input type="email" className="input-text" name="email" id="email" onChange={this.handleChange} />
                                </p>


                                <p className="form-row form-row-wide">
                                    <label htmlFor="password">Password:</label>
                                    <input type="password" className="input-text" name="password" id="password" onChange={this.handleChange} />
                                </p>

                                <p className="form-row form-row-wide">
                                    <label htmlFor="repeatPassword">Repeat Password:</label>
                                    <input type="password" className="input-text" name="repeatPassword" id="repeatPassword" onChange={this.handleChange} />
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

export default SignUp