export const signIn = cred => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth.siginInWithEmailAndPassword(
            cred.email,
            cred.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' })
        }).catch(() => {
            dispatch({ type: 'LOGIN_ERROR', err })
        })
    }
}