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
Instructions: </br></br>

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
Instructions: </br></br>
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

