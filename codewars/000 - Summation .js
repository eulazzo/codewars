// Instructions:
// Write a program that finds the summation of every number from 1 to num.
// The number will always be a positive integer greater than 0.
// For example:
// summation(2) -> 3
// 1 + 2

const summation = (num) => {
  if (num === 0) return 0;
  else return num + summation(num - 1);
};
