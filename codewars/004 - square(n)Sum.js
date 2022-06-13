// Instructions: <br>
// <br>
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example:</br>
// for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// ```js

const squareSum = (numbers)=> numbers.map(num=>num**2).reduce((acc,item)=>acc+item,0)

// or

const squareSum2 = (numbers)=>numbers.reduce((sum,num) => sum + (num * num), 0);