const initState = {
};

const requestReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_REQUEST':
            console.log('request created: ', action.request);
            return state;

        case 'CREATE_REQUEST_ERROR':
            console.log('create request error ', action.err)
            return state;

        case 'CREATE_PROPOSAL':
            console.log('proposal created: ', action.request);
            return state;

        case 'CREATE_PROPOSAL_ERROR':
            console.log('create proposal error ', action.err)
            return state;

        default:
            return state;
    }
}

export default requestReducer;