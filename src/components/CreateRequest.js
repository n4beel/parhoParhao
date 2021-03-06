import React, { Component } from 'react';
import Select from 'react-select';
import { createRequest } from '../store/actions/requestActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const options = [
    { value: 'math', label: 'Math' },
    { value: 'physics', label: 'Physics' },
    { value: 'chemistry', label: 'Chemistry' },
    { value: 'biology', label: 'Biology' },
    { value: 'computerScience', label: 'Computer Science' },
    { value: 'history', label: 'History' },
    { value: 'grammar', label: 'Grammar' },
    { value: 'economics', label: 'Economics' },
    { value: 'finance', label: 'Finance' },
    { value: 'business', label: 'Business' },
    { value: 'socialSciences', label: 'Social Sciences' },
    { value: 'arts', label: 'Arts' },
    { value: 'humanities', label: 'Humnaities' },
];

class CreateRequest extends Component {

    state = {
        title: '',
        summary: '',
        tags: null,
    }
    handleSubmit = e => {
        e.preventDefault();
        // console.log(this.state);
        this.props.createRequest(this.state);
        this.props.history.push('/dashboard');
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSelectChange = tags => {
        this.setState({ tags });
    };

    render() {

        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/login' />

        const { tags } = this.state;

        return (
            <div className="container">

                <div className="extra-margin"></div>

                <div className="sixteen columns">
                    <div className="submit-page">

                        <form onSubmit={this.handleSubmit}>
                            <div className="form">
                                <h5>Job Title</h5>
                                <input className="search-field" type="text" placeholder="" id="title" name="title" onChange={this.handleChange} />
                            </div>

                            <div className="form">
                                <Select
                                    value={tags}
                                    onChange={this.handleSelectChange}
                                    options={options}
                                    isMulti={true}
                                />
                            </div>

                            <div className="form">
                                <h5>Description</h5>
                                <textarea className="WYSIWYG" name="summary" cols="40" rows="3" id="summary" spellCheck="true" onChange={this.handleChange}></textarea>
                            </div>


                            <button href="#" className="button big margin-top-5">Submit <i className="fa fa-arrow-circle-right"></i></button>

                        </form>



                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createRequest: request => dispatch(createRequest(request))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateRequest);