## Algorithms solved from CodeWars / Hackerrank / Letscode

* ### Goal: Solve 1000 Algorithms
  * 22/1000  

`000` - Summation <br>
Instructions: <br>
Write a program that finds the summation of every number from 1 to num.
The number will always be a positive integer greater than 0.
For example:
summation(2) -> 3
1 + 2

```js
 const summation = (num) => {
   if(num===0) return 0
   else return num + summation( num - 1)
}
```
`001` - Regex validate PIN code <br>
Instructions: <br>
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
If the function is passed a valid PIN string, return true, else return false.
Examples (Input --> Output) </br>
"1234"   -->  true </br>
"12345"  -->  false </br>
"a234"   -->  false </br>

```js
 const validatePIN = (pin) => {
   let isnum = /^\d+$/.test(pin);
   return ((pin.length===4 || pin.length===6) && isnum) ? true : false;
 }
```

`002` - Find the smallest integer in the array <br>
Instructions: <br>
Given an array of integers your solution should find the smallest integer.
For example:</br>
    Given [34, 15, 88, 2] your solution will return 2

```c
  #include <stddef.h>
  int find_smallest_int(int *vec, size_t len){
      int smallestNumber=vec[0];
      for(int i=1; i<len;i++){           // Time Complexity -> O(n) 
          if(vec[i]<smallestNumber){
            smallestNumber = vec[i];
          }
       }
     return smallestNumber;
  }
  
```
or
 
```js
  class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)        // Math.min Time Complexity -> O(n) 
  }
}
```
or

```js
  class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a,b)=>a-b)[0]     // Sort function Time Complexity ->  O(n log(n)).
  }
}
```

`003` - Opposites Attract</br>
Instructions: </br>
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

```js
  const lovefunc = (flower1, flower2) => flower1%2 !==flower2%2
```


`004` - Square(n) Sum <br>
Instructions: <br>
<br>
Complete the square sum function so that it squares each number passed into it and then sums the results together.
For example:</br>
for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

```js
  const squareSum = (numbers)=> numbers.map(num=>num**2).reduce((acc,item)=>acc+item,0)
```
or
```js
  const squareSum = (numbers)=>numbers.reduce((sum,num) => sum + (num * num), 0);
```

`005` - A Needle in the Haystack </br>
Instructions: </br>

Can you find the needle in the haystack?
Write a function findNeedle() that takes an array full of junk but containing one "needle"
After your function finds the needle it should return a message (as a string) that says:
"found the needle at position " plus the index it found the needle, so:</br>
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

`006` - Sum without highest and lowest number </br>
Instructions: </br>
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
Mind the input validation.</br>

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


`007` - Calculate BMI</br>
Instructions: </br>
Write function bmi that calculates body mass index (bmi = weight / height2).</br>
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

`008` - Keep hydrated</br>
Instructions: </br>
Nathan loves cycling.
Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
For example:
time = 3 ----> litres = 1

```js
  const litres = time => Math.floor(time*0.5)
```


`009` - Count by X </br>
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
}

  or 
  
  const countBy = (x, n) =>
  [...Array(n)].map((_, index) => ++index * x);

```

`010` - Boolean To String </br>
Instructions: </br>
Implement a function which convert the given boolean value into its string representation.
Note: Only valid inputs will be given.

```js
const booleanToString = (b) => String(b)
```

`011` - You only need one  </br>
Instructions: </br>
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
Array can contain numbers or strings. X can be either.
Return true if the array contains the value, false if not.

```js
const check = (a, x) => a.includes(x)
```
`012` - Returning Strings </br>
Instructions: </br>
Make a function that will return a greeting statement that uses an input; </br>
your program should return, "Hello, <name> how are you doing today?".t.

```js
   const greet = (name) => `Hello, ${name} how are you doing today?`
```
`013` - Convert number to reversed array of digits </br>
Instructions: </br>
Given a random non-negative number, you have to return the digits of </br>
this number within an array in reverse order.
Example(Input => Output):

348597 => [7,9,5,8,4,3]
0 => [0]

```js

const digitize = (n) =>
  String(n)
    .split("")
    .map((num) => parseInt(num))
    .reverse();
```
or 

```js
const digitize = (n) => String(n).split('').map(Number).reverse();
```

`014` - Sum of two lowest positive integers </br>
Instructions: </br>
Create a function that returns the sum of the two lowest positive numbers </br>
given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.


```js
//Sort is absolutly not a good idea for large scale output.
const sumTwoSmallestNumbers = (numbers) =>{  
  const sortedArr = numbers.sort((a,b)=>a-b);
  return sortedArr[0] + sortedArr[1];
}
```

`015` - Beginner Series #1 School Paperwork </br>
Instructions: </br>
Your classmates asked you to copy some paperwork for them. You know that there are 'n' </br>
classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
Example:

n= 5, m=5: 25
n=-5, m=5:  0

```js
const paperwork = (n, m) => ( n<0 || m<0 ) ? 0 : n * m 
```

`016` - Number of People in the Bus</br>
Instructions: </br>
There is a bus moving in the city, and it takes and drop some people in each bus stop.
You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.
Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D
Take a look on the test cases.
Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.
The second value in the first integer array is 0, since the bus is empty in the first bus stop

```js
const number = (busStops) => {

  let numberOfpeopleThatStillOnTheBus=0;
  busStops.forEach(num=>numberOfpeopleThatStillOnTheBus=numberOfpeopleThatStillOnTheBus+num[0]-num[1])
  
  return numberOfpeopleThatStillOnTheBus;
}
```
`017` - You Can't Code Under Pressure #1</br>
Instructions: </br>
Code as fast as you can! You need to double the integer and return it

```js
const doubleInteger = (i) => i*2
```
`018` - centuryFromYear /br>
Instructions: </br>
Given a year, return the century it is in. The first century spans from the year 1  up to and including the year 100,</br>  the second - from the year 101 up to and including the year 200, etc.

```c

#include <iostream>
#include <stdio.h>
#include <stdlib.h>

using namespace std;

int centuryFromYear(int year){
  int century = 0;
  for (int i = 0; i < year; i++){
    year = year - 100;
    century = century + 1;
  }
  return century;
}

int main(){
  int century = centuryFromYear(2022);
  cout << "Century: " << century << endl;
}
```

`019` - multTwoNumbers /br>
Instructions: </br>
 Multiplicação de dois números naturais com função recursiva
 através de somas sucessivas (Ex.:6∗4 =4 + 4 + 4 + 4 + 4 + 4).


```c
 #include <stdio.h>
 #include <stdlib.h>

 
int multiplica(int a, int b){
    if (b==0) return 0;
    else return a + multiplica(a,b-1);
}

int main(){
    int num1, num2;
    printf("Entre com um numero: ");
    scanf ("%d",&num1);
    printf("Entre com outro numero: ");
    scanf ("%d",&num2);
    
    int resultado = multiplica(num1,num2);
    printf("%d X %d = %d",num1,num2,resultado);
    printf("\n");
    return 0;
}
```
`020` - isoscelesTriangle /br>
Instructions: </br>
 Escreva um programa que imprima um triângulo isósceles (de asteriscos),
 de cateto dado pelo utilizador. Por exemplo, se cateto=5, deverá ver-se
 

```c
 #include <stdio.h>
 #include <stdlib.h>

 int main(){
    int cateto, a, i = 1;
    printf("digite o valor do cateto: ");
    scanf("%d", &cateto);
    while (i <= cateto){
        for (a = 1; a <= i; a++){
            printf("*");
        }
        printf("\n");
        i++;
    }
  }
```
 `021` - Prime numbers x to y </br>

```c
  #include <stdio.h>
  #include <stdlib.h>
  #include <locale.h>
  int main(){
   setlocale(LC_ALL, "portuguese");
   int number_1, number_2, dividers;
   printf("Digite dois números:\n");
   scanf("%d %d", &number_1, &number_2);
   for (int n = 2; n <= number_2; n++){
    
    dividers = 0;
    for (int k = 1; k < number_2; k++){
      if ((n % k) == 0) dividers++;
     }
     if (dividers == 2){
       printf("\nO NÚMERO %d é PRIMO\n", n);
      }
    }
    return 0;
  }

```
