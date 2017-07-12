import React from 'react';
import Rules from './rules';
import {connect} from 'react-redux';
import * as actions from '../actions';

import Won from './won';

export class Nav extends React.Component{
	constructor(props){
		super(props);		
		this.showRules = this.showRules.bind(this);
		this.newGame = this.newGame.bind(this);
		this.showWon = this.showWon.bind(this);
		this.state = {
			showHide: false			
		}
	}


	showRules(){
		this.setState({
			showHide: !this.state.showHide	
		});		
	}

	showWon(){
		this.props.dispatch(actions.reset());
	}

	newGame(){
		window.location.reload();
	}
	
	
	render(){		
		const rules = (this.state.showHide) ? <Rules hideShow={this.showRules}  /> : undefined;
		const won = (this.props.data.won) ? <Won showWon={this.showWon}/> : undefined;
		return (
			<nav className="nav-bar" >
				{rules}
				{won}
				<span className="how-to" onClick={this.showRules}>?</span>
				<span className="new-game"  onClick={this.newGame}>New Game</span>			
			</nav>
		);
	}
}

const mapToProps = (state, props) => ({
	data: state
})

export default connect(mapToProps)(Nav);