import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
//import future reducers into root reducer

const rootReducer = combineReducers({
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
