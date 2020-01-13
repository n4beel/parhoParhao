export const createRequest = request => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // creating a new request using thunk and redux
        const firestore = getFirestore();
        const studentName = getState().firebase.profile.name;
        const studentId = getState().firebase.auth.uid;

        firestore.collection('requests').add({
            ...request,
            proposalCount: 0,
            status: 'active',
            studentId: studentId,
            studentName: studentName,
            date: getDate()
        }).then(() => {
            dispatch({
                type: 'CREATE_REQUEST',
                request
            })
        }).catch(err => {
            dispatch({
                type: 'CREATE_REQUEST_ERR',
                err
            })
        })


    }
}

export const createProposal = proposal => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const scholarName = getState().firebase.profile.name;
        const scholarId = getState().firebase.auth.uid;
        const requestId = getRequestId()

        // console.log(scholarName, scholarId, requestId)
        firestore.collection('proposals').add({
            ...proposal,
            scholarName,
            scholarId,
            requestId,
            status: 'pending'
        }).then(() => {
            dispatch({
                type: 'CREATE_PROPOSAL',
                proposal
            })
        }).catch(err => {
            dispatch({
                type: 'CREATE_PROPOSAL_ERR',
                err
            })
        })
    }
}

export const acceptProposal = accepted => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const proposals = getState().firestore.ordered.proposals;

        proposals.forEach(proposal => {
            if (accepted.reqId === proposal.requestId) {
                if (accepted.proposalId === proposal.id) {
                    firestore.collection('proposals').doc(proposal.id).update('status', 'accepted').then(() => {
                        console.log('accepted proposal status updated')
                    })
                }
                else {
                    firestore.collection('proposals').doc(proposal.id).update('status', 'rejected').then(() => {
                        console.log('rejected proposal status updated')
                    })
                }
            }
        });

        firestore.collection('requests').doc(accepted.reqId).update('status', 'pending').then(() => {
            console.log('request status updated')
        })
    }
}

const getDate = () => {
    var currentDate = new Date();

    var date = currentDate.getDate();
    var month = currentDate.getMonth();
    var year = currentDate.getFullYear();

    var dateString = date + "-" + (month + 1) + "-" + year;
    return dateString
}

const getRequestId = () => {
    const path = window.location.href;
    return path.substring(path.lastIndexOf('/') + 1)
}