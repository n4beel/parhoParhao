import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

const RecentRequests = props => {

    const { requests, userId } = props;

    return (
        <div className="container">

            <div className="eleven columns">


                <table className="manage-table responsive-table">
                    <thead>
                        <tr>
                            <th><i className="fa fa-file-text"></i> Title</th>
                            <th><i className="fa fa-calendar"></i> Date Posted</th>
                            <th><i className="fa fa-user"></i> Proposals</th>
                            <th><i className="fa fa-check-square-o"></i> Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests && requests.map(request => {
                            return (
                                userId === request.studentId ?
                                    <tr key={request.id}>
                                        <td className="title"><Link to={'/request/' + request.id}>{request.title}</Link></td>
                                        <td> {request.date} </td>
                                        <td className="centered"><a href="manage-applications.html" className="button">Show ({request.proposals.length})</a></td>
                                        <td >{request.status}</td>
                                    </tr>
                                    : null
                            )
                        })}

                    </tbody>




                </table>

            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        requests: state.firestore.ordered.requests,
        userId: state.firebase.auth.uid
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'requests' }
    ])
)(RecentRequests);
