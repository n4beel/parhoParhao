import React, { Component } from 'react'
import { createProposal } from '../store/actions/requestActions';
import { connect } from 'react-redux';

class CreateProposal extends Component {

    state = {
        amount: ''
    }
    handleSubmit = e => {
        e.preventDefault();
        // console.log(this.state);
        this.props.createProposal(this.state);
        this.props.handler()
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        const closeFunction = this.props.handler
        return (
            <section className='modal-main zoom-anim-dialog apply-popup'>
                <div className="small-dialog-headline">
                    <h2>Make a Proposal</h2>
                </div>

                <div className="small-dialog-content">
                    <form action="#" method="get" onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Enter the Payment Amount in Rs." id="amount" name="amount" onChange={this.handleChange} />
                        <div className="divider"></div>
                        <input type="submit" className="send" value="Propose" />
                    </form>
                </div>
                <button onClick={closeFunction} title="Close (Esc)" type="button" className="mfp-close"></button>
            </section>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createProposal: proposal => dispatch(createProposal(proposal))
    }
}

export default connect(null, mapDispatchToProps)(CreateProposal);