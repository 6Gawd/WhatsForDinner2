import { getIngredients } from './ingredientsReducer';

//ACTION TYPES
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILED = 'LOGIN_FAILED';
const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
const SIGNUP_ERROR = 'SIGNUP_ERROR';
const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS';

//Action Creators
export const signIn = (credentials) => {
	return async (dispatch, getState, { getFirebase }) => {
		try {
			const firebase = getFirebase();
			const response = await firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password);
			console.log('signin response', response);
			dispatch(getIngredients(response.user.uid));
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

//REDUCER
const initState = {
	authError: null
};

const authReducer = (state = initState, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return {
				...state
			};
		case LOGIN_FAILED:
			return state;
		case SIGNOUT_SUCCESS:
			return state;
		case SIGNUP_SUCCESS:
			return {
				...state
			};
		case SIGNUP_ERROR:
			return {
				...state
			};
		default:
			return state;
	}
};

export default authReducer;
