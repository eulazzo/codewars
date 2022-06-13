// Convert number to reversed array of digits

// Instructions: </br>
// Given a random non-negative number, you have to return the digits of </br>
// this number within an array in reverse order.
// Example(Input => Output):
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

const digitize = (n) =>
  String(n)
    .split("")
    .map((num) => parseInt(num))
    .reverse();

// or

const digitize2 = (n) => String(n).split("").map(Number).reverse();
