import React, { useState } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const RequestPage = props => {

    const { request } = props;

    const [modalState, setModalState] = useState({ show: false })

    const showHideClassName = modalState.show ? 'modal display-block' : 'modal display-none';

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

                        <div className="six columns">
                            <button onClick={showProposalModal} className="button white">Make a Proposal</button>
                        </div>

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


                                <a href="#" className="popup-with-zoom-anim button">Message Student</a>

                                <div className={showHideClassName}>
                                    <section className='modal-main zoom-anim-dialog apply-popup'>
                                        <div className="small-dialog-headline">
                                            <h2>Make a Proposal</h2>
                                        </div>

                                        <div className="small-dialog-content">
                                            <form action="#" method="get">
                                                <input type="text" placeholder="Enter the Payment Amount" />
                                                <div className="divider"></div>
                                                <button className="send">Propose</button>
                                            </form>
                                        </div>
                                        <button onClick={hideProposalModal} title="Close (Esc)" type="button" className="mfp-close"></button>
                                    </section>
                                </div>

                            </div>

                        </div>

                    </div>


                </div>
            </div>
        )
    }
    else {
        return (
            <div>Loading...</div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const requests = state.firestore.data.requests;
    const request = requests ? requests[id] : null;
    return {
        request: request
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'requests' }
    ])
)(RequestPage); 
