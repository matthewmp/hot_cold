import React from 'react';

export default function Rules(props){
		return (
			<div className="rules">
				<p> How to Play </p>
				<p>The computer has chosen a random # between 1-100.</p>
				<p>Guess the correct # to win.</p>
				<p>Enter your guess into the input box and press the 'Guess' button</p>
				<p>You will be told if your guess is hot or cold, and whether your guess is warmer or colder from your previous guess.</p>
				<button onClick={props.hideShow}>Close</button>
			</div>
		);	
}

