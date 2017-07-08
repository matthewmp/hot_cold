require('babel-polyfill');


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
	console.log('COMP')
	return {
		type: COMP_TEMP
	};
}

// Check if player won
export const DID_WIN = 'DID_WIN';
export const didWin = () => {
	return {
		type: DID_WIN
	};
}