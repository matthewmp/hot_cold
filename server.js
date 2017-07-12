const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();
const urlParser = bodyParser.urlencoded({ extended: false })
const app = express();
 

let numOfGuesses = [10];

function fewestGuesses(guesses){
	numOfGuesses.push(guesses);
	return numOfGuesses.sort()[0];
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(morgan('common'));
app.use(express.static('build'));

app.get('/fewest-guesses', function(req, res){
	newFewestGuesses = numOfGuesses.sort(function(a,b){
		return a - b;
	})[0];
	res.json({guesses: newFewestGuesses});
});

app.post('/fewest-guesses', function(req, res){	
		
	let guesses = req.body.guesses;
	numOfGuesses.push(guesses);
	console.log(req.body.guesses);
	console.log(`\n\n\nAll Guesses: ${numOfGuesses}`)
	console.log(`Test: ${numOfGuesses.sort()[0]}`)
	newFewestGuesses = numOfGuesses.sort(function(a,b){
		return a - b;
	})[0];
	console.log(newFewestGuesses);
	
	res.json({guesses: newFewestGuesses});
})



app.listen(8080, function(){
	console.log('Listening on Port 8080');
})