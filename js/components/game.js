import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import store from '../store';

export class Game extends React.Component{
	constructor(props){
		super(props);
		this.testFunc = this.testFunc.bind(this);
	}

	testFunc(){

		this.props.dispatch(actions.genNum());

		this.props.dispatch(actions.guessNum(30));
		this.props.dispatch(actions.checkTemp());
		this.props.dispatch(actions.compTemp());
		
		this.props.dispatch(actions.guessNum(20));
		this.props.dispatch(actions.checkTemp());
		this.props.dispatch(actions.compTemp());



		//console.log(store.getState());
	}

	render(){
		console.log(this.props);
		return(
			<p onClick={this.testFunc}> Test {this.props.test.currentGuess}  </p>
		);
	}
}

const mapToProps = (state, props) => ({
	test: state
})

export default connect(mapToProps)(Game);