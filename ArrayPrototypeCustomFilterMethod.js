/*
Write a program to make polyfill for filter
method in javascript

Array Prototype method - Array.myFilter((item)=>{ item * 5 })
*/

Array.prototype.myFilter = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) temp.push(cb(this[i]));
    }
    return temp;
};

const arr = [2, 3, 4, 5];
console.log("arr", arr);

const data = arr.filter((num) => {
    return num > 2;
});
console.log("resultnumber", data);