export const signIn = (credentials) => {
	return async (dispatch, getState, { getFirebase }) => {
		try {
			const firebase = getFirebase();
			await firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password);
			dispatch({ type: 'LOGIN_SUCCESS' });
		} catch (error) {
			dispatch({ type: 'LOGIN_ERROR', error });
		}
	};
};

export const signOut = () => {
	return async (dispatch, getState, { getFirebase }) => {
		try {
			const firebase = getFirebase();

			await firebase.auth().signOut();
			dispatch({ type: 'SIGNOUT_SUCCESS' });
		} catch (error) {
			console.error(error);
		}
	};
};

export const signUp = (newUser) => {
	return async (dispatch, getState, { getFirebase, getFirestore }) => {
		try {
			const firebase = getFirebase();
			const firestore = getFirestore();
			const response = await firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password);

			const syncUser = async (response) => {
				await firestore.collection('users').doc(response.user.uid).set({
					firstName: newUser.firstName,
					lastName: newUser.lastName
				});
				dispatch({ type: 'SIGNUP_SUCCESS' });
			};
			syncUser(response);
		} catch (error) {
			dispatch({ type: 'SIGNUP_ERROR', error });
		}
	};
};
