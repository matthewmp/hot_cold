import React from 'react';

export default function Temp(props){

	return(
		<div className="temp-wrapper" >
			<div className="game-temp" >
				<p>{props.temp}</p>
			</div>

			<div className="comp-temp">
				<p>{props.compTemp}</p>
			</div>
		</div>
	);
}
