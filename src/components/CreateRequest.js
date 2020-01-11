import React, { Component } from 'react';
import Select from 'react-select';
import { createRequest } from '../store/actions/requestActions';
import { connect } from 'react-redux';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

class CreateRequest extends Component {

    state = {
        title: '',
        summary: '',
        selectedOption: null,
    }
    handleSubmit = e => {
        e.preventDefault();
        // console.log(this.state);
        this.props.createRequest(this.state);
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSelectChange = selectedOption => {
        this.setState({ selectedOption });
    };

    render() {

        const { selectedOption } = this.state;

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
                                    value={selectedOption}
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

const mapDispatchToProcess = dispatch => {
    return {
        createRequest: request => dispatch(createRequest(request))
    }
}

export default connect(null, mapDispatchToProcess)(CreateRequest);