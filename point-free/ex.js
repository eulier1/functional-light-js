"use strict";

// function output(txt) {
// 	console.log(txt);
// }

const output = console.log.bind(this)

// function printIf(shouldPrintIt) {
// 	return function(msg) {
// 		if (shouldPrintIt(msg)) {
// 			output(msg);
// 		}
// 	};
// }

function when(fn) {
	return function(predicate) {
		return function(...args) {
			if(predicate(...args))
				return fn(...args)
		}
	}
}

const printIf = when(output)

function isShortEnough(str) {
	return str.length <= 5;
}

// function isLongEnough(str) {
// 	return !isShortEnough(str);
// }

function not(fn) {
	return function(...args) {
		return !fn(...args)
	}
}

const isLongEnough = not(isShortEnough)

var msg1 = "Hello";
var msg2 = msg1 + " World";

printIf(isShortEnough)(msg1);		// Hello
printIf(isShortEnough)(msg2);
printIf(isLongEnough)(msg1);
printIf(isLongEnough)(msg2);		// Hello World
