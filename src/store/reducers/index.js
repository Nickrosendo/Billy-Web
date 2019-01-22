import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

import auth from './auth';
import ui from './ui';
import order from './order';
import restaurant from './restaurant';

const root = combineReducers({
	auth,
	ui,
	order,
	restaurant,
	firestore: firestoreReducer,
	firebase: firebaseReducer
});

export default root;
