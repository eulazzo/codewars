## Algorithms solved from CodeWars/Hackerrank

`001` - Square(n) Sum <br>
Instructions: <br>
<br>
Complete the square sum function so that it squares each number passed into it and then sums the results together.
For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

```js
  const squareSum = (numbers)=> numbers.map(num=>num**2).reduce((acc,item)=>acc+item,0)
```
or
```js
  const squareSum = (numbers)=>numbers.reduce((sum,num) => sum + (num * num), 0);
```

`002` - A Needle in the Haystack </br>
Instructions: </br>

Can you find the needle in the haystack?
Write a function findNeedle() that takes an array full of junk but containing one "needle"
After your function finds the needle it should return a message (as a string) that says:
"found the needle at position " plus the index it found the needle, so:
findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
should return "found the needle at position 5"

```js
  const findNeedle = (haystack) => {
    let index;
    haystack.forEach((item, i) => {
      if (item === "needle") index = `found the needle at position ${i}`;
    });
    return index;
}
```


or
```js
  const findNeedle = (haystack) => `found the needle at position ${haystack.indexOf('needle')}`;
```

`003` - Sum without highest and lowest number </br>
Instructions: </br>
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
Mind the input validation.

Example:
  { 6, 2, 1, 8, 10 } => 16
  { 1, 1, 11, 2, 3 } => 6
```js
  const sumArray = (array) =>
  array
    ? array
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((acc, value) => acc + value, 0)
    : 0;
```


`004` - Calculate BMI</br>
Instructions: </br>
Write function bmi that calculates body mass index (bmi = weight / height2).
if bmi <= 18.5 return "Underweight"
if bmi <= 25.0 return "Normal"
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese"

Could be done using ternary operator  instead or switch case
```js
  const bmi = (weight, height) => {
  if (weight / height ** 2 <= 18.5) return "Underweight";
  else if (weight / height ** 2 <= 25.0) return "Normal";
  else if (weight / height ** 2 <= 30.0) return "Overweight";
  else return "Obese";
};
```

`005` - Keep hydrated</br>
Instructions: </br>
Nathan loves cycling.
Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
For example:
time = 3 ----> litres = 1

```js
  const litres = time => Math.floor(time*0.5)
};
```


`006` - Count by X </br>
Instructions: </br>
Create a function with two arguments that will return an array of the first (n) multiples of (x).
Assume both the given number and the number of times to count will be positive numbers greater than 0.
Return the results as an array (or list in Python, Haskell or Elixir).
Examples:
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]


```js
const countBy = (x, n) => {
  let z = [];
  
  for(let i=1;i<=n;i++){
    z.push(x*i)
  }
  return z;

  or 
  
  const countBy = (x, n) =>
  [...Array(n)].map((_, index) => ++index * x);
}
```

`007` - Count by X </br>
Instructions: </br>
Implement a function which convert the given boolean value into its string representation.
Note: Only valid inputs will be given.

```js
const booleanToString = (b) => return String(b)

}
```

`008` - You only need one  </br>
Instructions: </br>
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
Array can contain numbers or strings. X can be either.
Return true if the array contains the value, false if not.

```js
const check = (a, x) => a.includes(x)
}
```
