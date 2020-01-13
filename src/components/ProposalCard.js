import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { acceptProposal } from '../store/actions/requestActions';
import { connect } from 'react-redux';

toast.configure();

const ProposalCard = props => {

    const { reqId, proposal } = props;

    const product = {
        price: proposal.amount,
        name: proposal.scholarName
    };

    async function handleToken(token) {
        const response = await axios.post(
            "https://izj7x.sse.codesandbox.io/checkout",
            { token, product }
        );

        const { status } = response.data;
        if (status === 'success') {
            toast('Success! Check email for receipt', {
                type: 'success'
            })

            const proposalId = proposal.id;

            props.acceptProposal({ reqId, proposalId })
        }
        else {
            toast('Something went wrong', {
                type: 'error'
            })
        }
    }


    return (
        <div key={proposal.id} className="four columns">

            <div className="widget">

                <div className="job-overview">

                    <ul>
                        <li>
                            <i className="fa fa-map-marker"></i>
                            <div>
                                <strong>Scholar Name:</strong>
                                <span>{proposal.scholarName}</span>
                            </div>
                        </li>
                        <li>
                            <i className="fa fa-map-marker"></i>
                            <div>
                                <strong>Proposed Amount:</strong>
                                <span>{proposal.amount}</span>
                            </div>
                        </li>
                    </ul>

                    <StripeCheckout
                        stripeKey="pk_test_kXXPt3hdZ7CqlrFfQWOL8xMx00jGrz6bYg"
                        token={handleToken}
                        amount={proposal.amount * 100}
                        name={proposal.scholarName}
                    />

                    <button className="popup-with-zoom-anim button">Message Scholar</button>
                    {/* <button className="popup-with-zoom-anim button" onClick={handleProposalAcception.bind(proposal.scholarName, proposal.amount, proposal.id)}>Accept Proposal</button> */}





                </div>

            </div>
        </div>

    )
}

const mapDispatchToProps = dispatch => {
    return {
        acceptProposal: accepted => dispatch(acceptProposal(accepted))
    }
}

export default connect(null, mapDispatchToProps)(ProposalCard)
