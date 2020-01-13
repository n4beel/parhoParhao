import React, { useState } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import CreateProposal from './CreateProposal';
import ProposalCard from './ProposalCard';



const RequestPage = props => {

    const { request, auth, role, proposals } = props;

    const [modalState, setModalState] = useState({ show: false })

    const showHideClassName = modalState.show ? 'modal display-block' : 'modal display-none';

    const path = window.location.href;
    const reqId = path.substring(path.lastIndexOf('/') + 1)

    // function to show the Proposal modal
    const showProposalModal = () => {
        setModalState({ show: true });
        document.querySelector("body").style.overflow = "hidden";
    }

    // function to hide the Proposal modal
    const hideProposalModal = () => {
        setModalState({ show: false });
        document.querySelector("body").style.overflow = "visible";
    }

    if (!auth.uid) return <Redirect to='/login' />


    if (request) {
        return (
            <div>
                <div id="titlebar" className="photo-bg">
                    <div className="container">
                        <div className="ten columns">
                            <h2>{request.title}
                                <br />
                                {
                                    request.tags && request.tags.map(tag => {
                                        return (
                                            <span key={tag.value} className="full-time">{tag.label}</span>
                                        )
                                    })
                                }
                            </h2>
                        </div>
                        {
                            role === 'Scholar' ?
                                <div className="six columns">
                                    <button onClick={showProposalModal} className="button white">Make a Proposal</button>
                                </div>
                                : null
                        }


                    </div>
                </div>


                <div className="container">

                    <div className="eleven columns">
                        <div className="padding-right">

                            <h4 className="section-heading">Request Details</h4>

                            <p className="margin-reset">{request.summary}</p>


                        </div>
                    </div>


                    <div className="five columns">

                        <div className="widget">
                            <h4>Overview</h4>

                            <div className="job-overview">

                                <ul>
                                    <li>
                                        <i className="fa fa-map-marker"></i>
                                        <div>
                                            <strong>Student Name:</strong>
                                            <span>{request.studentName}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="fa fa-user"></i>
                                        <div>
                                            <strong>Date Posted:</strong>
                                            <span>{request.date}</span>
                                        </div>
                                    </li>
                                </ul>

                                {
                                    role === 'Scholar' ?
                                        <button className="popup-with-zoom-anim button">Message Student</button>
                                        : null
                                }

                                <div className={showHideClassName}>
                                    <CreateProposal handler={hideProposalModal} />

                                </div>

                            </div>

                        </div>

                    </div>



                </div>
                {
                    role === 'Student' ?
                        <div className="container">
                            <h4 className="section-heading">Received Proposals</h4>
                            {
                                proposals ?
                                    proposals.map(proposal => {
                                        return (
                                            proposal.requestId === reqId ?

                                                <ProposalCard key={proposal.id} proposal={proposal} reqId={reqId} />

                                                : null
                                        )
                                    })
                                    : <div>No Proposals Received</div>
                            }
                        </div>
                        : null
                }

            </div>
        )
    }
    else {
        return (
            null
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const requests = state.firestore.data.requests;
    const request = requests ? requests[id] : null;
    return {
        request: request,
        auth: state.firebase.auth,
        role: state.firebase.profile.role,
        proposals: state.firestore.ordered.proposals
    }
}



export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'requests' },
        { collection: 'proposals' }
    ])
)(RequestPage);