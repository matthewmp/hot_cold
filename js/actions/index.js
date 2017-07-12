require('babel-polyfill');
import 'isomorphic-fetch';

// Actions

// Generate Random # 1-100
export const GEN_NUM = 'GEN_NUM';
export const genNum = () => {
	return {
		type: GEN_NUM
	};
}

// Take A Guess
export const GUESS_NUM = 'GUESS_NUM';
export const guessNum = num => {
	return {
		type: GUESS_NUM,
		currentGuess: num
	}
}

// Check if # is hot or cold
export const CHECK_TEMP = 'CHECK_TEMP';
export const checkTemp = () => {
	return {
		type: CHECK_TEMP
	};
}

// Check temp of current # to previous #
export const COMP_TEMP = 'COMP_TEMP';
export const compTemp = () =>{	
	return {
		type: COMP_TEMP
	};
}

// Reset Game
export const RESET = 'RESET';
export const reset = () => {
	return {
		type: RESET
	};
}

// Update state when recieved fewest guesses from server
export const FEW_GUESSES = 'FEW_GUESSES';
export const fewGuesses = (guesses) => ({	
		type: FEW_GUESSES,
		guesses	
});

// Async Action Creator to retrieve fewest guesses from server
export const fetchGuesses = guess => dispatch =>{
	const url = 'http://localhost:8080/fewest-guesses';
	return fetch(url).then(response =>{
		if(!response.ok){
			const error = new Error(response.statusText)
			error.response = response
			throw error;
		}
		return response;
	})
	.then(response => response.json())
	.then(data => {
		console.log(`DATA FROM ACTION: ${JSON.stringify(data)}`);
		dispatch(fewGuesses(data.guesses))
	})
	.catch((error) => {
		console.log(error);
	})

}

// Async action createor to post fewest guesses to server
export const postGuesses = guess => dispatch =>{
	console.log(`Guess from Actions: ${guess}`);
	let body = {guesses: guess}
	const url = 'http://localhost:8080/fewest-guesses';
	fetch(url, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({guesses: guess})
	})
	.then(response => response.json())
	.then(function(data){
		console.log(`Data From Res: ${JSON.stringify(data)}`)
		dispatch(fewGuesses(data.guesses))
	}).catch(err => console.log(err))
}






















