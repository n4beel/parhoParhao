export const createRequest = request => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // creating a new request using thunk and redux
        const firestore = getFirestore();
        const studentName = getState().firebase.profile.name;
        const studentId = getState().firebase.auth.uid;

        firestore.collection('requests').add({
            ...request,
            proposals: [],
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
            status: 'Active'
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