import React from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';

const RecentProposals = props => {
    const { proposals, userId } = props;
    return (
        <div className="container">

            <div className="eleven columns">


                <table className="manage-table responsive-table">

                    <thead>
                        <tr>
                            <th><i className="fa fa-file-text"></i> Request</th>
                            <th><i className="fa fa-calendar"></i> Proposed Amount</th>
                            <th><i className="fa fa-check-square-o"></i> Status</th>

                        </tr>
                    </thead>
                    <tbody>

                        {proposals && proposals.map(proposal => {
                            return (
                                userId === proposal.scholarId ?
                                    <tr key={proposal.id}>
                                        <td className="title"><Link to={'/request/' + proposal.requestId}>View Request</Link></td>
                                        <td>{proposal.amount}</td>
                                        <td >{proposal.status}</td>
                                    </tr> : null
                            )

                        })}


                    </tbody>





                </table>


            </div>

        </div>
    )
}

// export default RecentProposals

const mapStateToProps = state => {
    return {
        proposals: state.firestore.ordered.proposals,
        userId: state.firebase.auth.uid
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'proposals' }
    ])
)(RecentProposals);
