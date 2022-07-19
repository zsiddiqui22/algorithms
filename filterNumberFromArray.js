/*
#javascript
You can filter out numbers from an array by passing Number as an argument to the filter method. It will return an array containing all the numbers in your parent array.
One thing to notice is that if your array contains numbers like strings, i.e '1', '2' etc. it will also return those. To overcome that pass Number.isInteger as an argument to the filter method and will only return numbers from the array.
*/

const str = ['1', 2, '3', 'apple'];

const number1 = str.filter(Number);
console.log(number1); // ['1', 2, '3']

const number2 = str.filter(Number.isInteger);
console.log(number2); //[2]