// Instructions: </br>
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// Mind the input validation.</br>

// Example:
//   { 6, 2, 1, 8, 10 } => 16
//   { 1, 1, 11, 2, 3 } => 6

const sumArray = (array) =>
  array
    ? array
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((acc, value) => acc + value, 0)
    : 0;
