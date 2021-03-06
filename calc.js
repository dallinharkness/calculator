const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);
	num3 = Number(tokens[3]);

	console.log('mathSymbol', mathSymbol)
	console.log('num1', num1)
	console.log('num2', num2)
	console.log('num3', num3)

	if (mathSymbol === "+"){
		console.log(num1 + num2 + num3)
	}
	else if(mathSymbol === "-"){
		console.log(num1 - num2 - num3)
	}
	else if(mathSymbol === "/"){
		console.log(num1 / num2 / num3)
	}
	else if(mathSymbol === "Sqrt"){
		console.log(Math.sqrt(num1))
	}
	else if (mathSymbol === "sq"){
		console.log(Math.pow(num1,num2))
	}
	else if (mathSymbol === "cube"){
		console.log(Math.cbrt(num1))
	}
	else if (mathSymbol === "exponent"){
		console.log(Math.exp(num1))
	}
	else if (mathSymbol === "modulus"){
		console.log(num1 % num2 % num3)
	}


	// This line closes the connection to the command line interface.
	reader.close()

});
