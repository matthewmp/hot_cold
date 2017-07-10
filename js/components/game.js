import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';


import Nav from './nav';
import Main from './main';

export class Game extends React.Component{
	constructor(props){
		super(props);		
	}

	render(){
		console.log(this.props);
		return(
			<div className="game">					
				<Nav />
				<Main />	
			</div>
			
		);
	}
}

const mapToProps = (state, props) => ({
	state: state
})

export default connect(mapToProps)(Game);