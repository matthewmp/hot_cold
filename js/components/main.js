 import React from 'react';
 import {connect} from 'react-redux';
 import Temp from './temp';
 import * as actions from '../actions';

 export class Main extends React.Component{ 	
 	constructor(props){
 		super(props);
 		this.guess = this.guess.bind(this);
 		this.state = {
 			count: 0
 		}
 	}

 	guess(){
		
 		let guess = this.textInput.value;
 		if(this.props.data.correctNum === Number(guess)){
 			alert('You Win!!!');
 			window.location.reload();
 		}
 		this.props.dispatch(actions.guessNum(guess));
 		this.props.dispatch(actions.checkTemp());
 		this.props.dispatch(actions.compTemp());
 		
 		this.setState({
 			count: this.state.count + 1
 		})
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
 					<p>Guess # {this.state.count}</p>
 					<article>Previous Guesses: {guesses} </article>
 				</div>

 			</main>				
 		);
 	}
 }

const mapToProps = (state, props) => ({
	data: state
})

export default connect(mapToProps)(Main);
