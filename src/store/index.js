import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from '../fbConfig/fbConfig';
import rootReducer from './reducers/rootReducer';

// STORE ENHANCERS
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(fbConfig, {
      userProfile: 'users',
      useFirestoreForProfile: true,
      attachAuthIsReady: true
    }),
    reduxFirestore(fbConfig)
  ) // redux binding for firebase
  // redux bindings for firestore
);

export default store;
