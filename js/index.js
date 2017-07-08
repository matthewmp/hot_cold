import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';

import Game from './components/game';
import * as actions from './actions'


// store.dispatch(actions.genNum());

// store.dispatch(actions.guessNum(40));
// store.dispatch(actions.checkTemp());
// store.dispatch(actions.compTemp());

// store.dispatch(actions.guessNum(20));
// store.dispatch(actions.checkTemp());
// store.dispatch(actions.compTemp());

// store.dispatch(actions.guessNum(10));
// store.dispatch(actions.checkTemp());
// store.dispatch(actions.compTemp());

store.subscribe(() => {
	const state = store.getState();
	console.log(state);
});

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Provider store={store}>
			<Game />
		</Provider>, document.getElementById('app'))
})