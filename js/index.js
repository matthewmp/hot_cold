import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';

import Game from './components/game';

import * as actions from './actions'

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