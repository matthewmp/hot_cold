 import React from 'react';
 import {connect} from 'react-redux';
 import Temp from './temp';
 import * as actions from '../actions';

 export class Main extends React.Component{ 	
 	constructor(props){
 		super(props);
 		this.guess = this.guess.bind(this);
 		this.getFewestGuesses = this.getFewestGuesses.bind(this);
 		this.postGuesses = this.postGuesses.bind(this);
 		this.state = {
 			count: 0
 		}
 	}

 	guess(){
		

 		let guess = this.textInput.value;
 		
 		this.props.dispatch(actions.guessNum(guess));
 		this.props.dispatch(actions.checkTemp());
 		this.props.dispatch(actions.compTemp());
 		
 		this.setState({
 			count: this.state.count + 1
 		})
 		if(this.props.data.correctNum === Number(guess)){
 			this.props.dispatch(actions.postGuesses(this.props.data.currentGuess.length + 1));
 			//this.props.dispatch(actions.win());//this.props.dispatch(actions.reset());
 		}
 	}

 	getFewestGuesses(){
 		this.props.dispatch(actions.fetchGuesses());
 	}

 	postGuesses(){
 		let guesses = this.props.data.currentGuess.length;
 		console.log("GUESSES FROOM MAIN: " + guesses)
 		this.props.dispatch(actions.postGuesses(guesses));
 	}

 	render(){
 		let guesses = this.props.data.currentGuess.map((num, ind) => {
 			return (<span className="guess" key={ind}>{`${num} `}</span>)
 		})

 		return (

 			<main>

 				<Temp temp={this.props.data.temp} compTemp={this.props.data.compTemp}/>
 				<div className="inputs">
 					<input ref={ element => { this.textInput = element; } }/>
 					<button onClick={this.guess}>Guess</button>
 				</div>

 				<div className="guess-output">
 					<p>Guess # <span className="guess-number">{this.props.data.currentGuess.length + 1}</span></p>
 					<article >Previous Guesses: <span className="prev-guesses">{guesses}</span> </article>
 				</div>

 				<div className="fewest-guesses"> 					
 					<p>Fewest Guesses to win: <span id="fewest-guesses">{this.props.data.guesses || ''}</span></p>
 				</div>
 			</main>				
 		);
 	}
 }

const mapToProps = (state, props) => ({
	data: state
})

export default connect(mapToProps)(Main);
