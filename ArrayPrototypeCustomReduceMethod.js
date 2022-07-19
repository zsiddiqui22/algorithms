/*
Write a program to make polyfill for reduce
method in javascript
*/

Array.prototype.myReducer = function (cb, initialValue) {
    var accumulator = initialValue;
    for (i = 0; i < this.length; i++) {
        accumulator = accumulator ? cb(this[i], i, this) : this[i];
    }
    return accumulator;
};

const arr = [2, 3, 4, 5];

const sumOfArray = arr.myReducer((accu, curr, index, arr) => {
    return (accu += curr);
}, 0);
console.log("polyfil", sumOfArray);