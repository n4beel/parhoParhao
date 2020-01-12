export const signIn = cred => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            cred.email,
            cred.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' });
        }).catch(err => {
            dispatch({ type: 'LOGIN_ERROR', err });
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS' });
        })
    }
}

export const signUp = newUser => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then(res => {
            return firestore.collection('users').doc(res.user.uid).set({
                name: newUser.name,
                email: newUser.email,
                role: newUser.role.label,
                proposals: [],
                requsts: []
            })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'SIGNUP_ERROR', err })
        })
    }
}

export const changeUserRole = () => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();

        const currentRole = getState().firebase.profile.role;
        const nextRole = currentRole === 'Student' ? 'Scholar' : 'Student';

        const userId = getState().firebase.auth.uid;

        firestore.collection('users').doc(userId).update('role', nextRole)
            .then(() => {
                dispatch({ type: 'ROLE_UPDATE_SUCCESS' })
            }).catch(err => {
                dispatch({ type: 'ROLE_UPDATE_ERROR', err })
            })
    }
}