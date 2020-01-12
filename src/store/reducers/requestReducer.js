const initState = {
    requests: [
        { id: 1, title: 'hello', summary: 'blah blah blah' },
        { id: 2, title: 'hey', summary: 'blah blah blah' },
        { id: 3, title: 'hi', summary: 'blah blah blah' },
    ]
};

const requestReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_REQUEST':
            console.log('request created: ', action.request);
            return state;

        case 'CREATE_REQUEST_ERROR':
            console.log('create request error ', action.err)
            return state;

        default:
            return state;
    }
}

export default requestReducer;