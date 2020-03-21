import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import authReducer from './authReducer';
import ingredientReducer from './ingredientsReducer';
//import future reducers into root reducer

const rootReducer = combineReducers({
	firestore: firestoreReducer,
	firebase: firebaseReducer,
	auth: authReducer,
	ingredients: ingredientReducer
});

export default rootReducer;
