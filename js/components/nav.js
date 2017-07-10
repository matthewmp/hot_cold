import React from 'react';
import Rules from './rules';
export default class Nav extends React.Component{
	constructor(props){
		super(props);		
		this.showRules = this.showRules.bind(this);
		this.newGame = this.newGame.bind(this);
		this.state = {
			showHide: false
		}
	}


	showRules(){
		this.setState({
			showHide: !this.state.showHide	
		});		
	}

	newGame(){
		window.location.reload();
	}
	
	
	render(){		
		const rules = (this.state.showHide) ? <Rules hideShow={this.showRules}  /> : undefined;
		return (
			<nav className="nav-bar" >
				{rules}
				<span className="how-to" onClick={this.showRules}>?</span>
				<span className="new-game"  onClick={this.newGame}>New Game</span>			
			</nav>
		);
	}
}
