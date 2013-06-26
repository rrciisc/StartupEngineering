#!/usr/bin/env node
// check whether the given number is prime or not
var isPrime = function(x) {
	var max = Math.round(Math.sqrt(x));
	if(x%2 == 0)
		return false;
	for(var i=3; i <= max; i+=2) {
		if(x%i == 0)
			return false;
	}
	return true;
}

// return the first n prime numbers
var primes = function(n) {
	var arr = [2];
	var i = 3;
	while(arr.length != n) {
		if(isPrime(i))
			arr.push(i);
		i += 2;
	}
	return arr;
};

var fs = require('fs');
var outfile = "primes.txt";
var n = 100;
fs.writeFileSync(outfile, primes(n).join(",") + "\n");
console.log("Script: " + __filename + "\nWrote first: " + n + " primes To: " + outfile);
