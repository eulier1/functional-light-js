"use strict";

function lotteryNum() {
	return (Math.round(Math.random() * 100) % 58) + 1;
}
/*
num paramenters is calculate at function call, therefore
we can have now a new argument without running into 
a side-effect 
*/
function recordNumber(num, numbers) {
	if (!numbers.includes(num)) {
		numbers = [...numbers, num]
		numbers.sort( function ascOrd (a,b) {
			return a - b 
		})
	}
	return numbers
}

var luckyLotteryNumbers = [];

while (luckyLotteryNumbers.length < 6) {
	luckyLotteryNumbers = recordNumber(lotteryNum(), Object.freeze(luckyLotteryNumbers));
}

console.log(luckyLotteryNumbers);
