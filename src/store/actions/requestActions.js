export const createRequest = request => {
    return (dispatch, getState) => {
        // make some async request
        dispatch({
            type: 'CREATE_REQUEST',
            request
        })
    }
}