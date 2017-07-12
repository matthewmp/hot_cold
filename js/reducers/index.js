import * as actions from '../actions';

const initalState = getInitalState();

function getInitalState(){
	 return  {
		correctNum: Math.floor(Math.random(1) * 100),
		currentGuess: [],
		temp: actions.COLD,
		compTemp: '',
		won: false
	}
}

export const gameReducer = (state=initalState, action) => {
	if(action.type === actions.WIN){
		if(state.currentGuess === state.correctNum){
			return Object.assign({}, state, {
				won: true
			});
		}
	}
	else if(action.type === actions.GEN_NUM){
		return Object.assign({}, state, {
			correctNum: Math.floor(Math.random(1) * 100)
		});
	}
	else if(action.type === actions.GUESS_NUM){
		if(state.currentGuess){
			return Object.assign({}, state, {
				currentGuess: [action.currentGuess, ...state.currentGuess]
			})
		}
		else {
			return Object.assign({}, state, {
				currentGuess: [action.currentGuess]
			});
		}		
	}
	else if(action.type === actions.CHECK_TEMP){
		let currentGuess = state.currentGuess[0];
		let diff = state.correctNum - currentGuess;

		if(Number(currentGuess) === state.correctNum){			
			return Object.assign({}, state, {
				won: true
			});
		}
		else if((diff >= -10) && (diff <= 10)){
			return Object.assign({},state, {
				temp: 'HOT'
			});
		}
		else if((diff >= -20) && (diff <= 20)){
			return Object.assign({}, state, {
				temp: 'WARM'
			});
		}
		else {
			return Object.assign({}, state, {
				temp: 'COLD'
			});
		}
	}

	else if(action.type === actions.COMP_TEMP){
		if(state.currentGuess.length >= 2){
			let currentGuess = state.currentGuess[0];
			let previousGuess = state.currentGuess[1];
			let diff = Math.abs(state.correctNum - currentGuess);
			let diffPrev = Math.abs(state.correctNum - previousGuess);

			if(diff === diffPrev){
				//
			}
			else if(diff > diffPrev){
				return Object.assign({}, state, {
					compTemp: 'COLDER'
				});
			}
			else {
				return Object.assign({}, state, {
					compTemp: 'WARMER'
				});
			}
		}
		else {
			return state;
		}
		
	}
	else if(action.type === actions.FEW_GUESSES){		
		return Object.assign({}, state, {
			guesses: action.guesses
		})
	}
	else if(action.type === actions.RESET){		
		return Object.assign({}, state, getInitalState())
	}
	return state;
}