import React from 'react';


export default function Won(props){	
	return (
		<div className="won">
			<p> YOU WIN!!! </p>
			<button onClick={props.showWon} className="btn2">Play Again</button>
		</div>
	);		
}			
