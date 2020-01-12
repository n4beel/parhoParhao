export const createRequest = request => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // creating a new request using thunk and redux

        const firestore = getFirestore();

        firestore.collection('requests').add({
            ...request,
            proposals: [],
            status: 'active',
            studentId: '1234',
            studentName: 'Nabeel Khan',
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

const getDate = () => {
    var currentDate = new Date();

    var date = currentDate.getDate();
    var month = currentDate.getMonth();
    var year = currentDate.getFullYear();

    var dateString = date + "-" + (month + 1) + "-" + year;
    return dateString
}