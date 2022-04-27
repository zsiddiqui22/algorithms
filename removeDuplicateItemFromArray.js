// Write a program to remove duplicate item from array

const arr = [1, 2, 3, 4, 1, 2];
const b = [];
for (let i = 0; i < arr.length; i++) {
    if (b.indexOf(arr[i]) == -1) {
        b.push(arr[i])
    }
}
console.log("removed array value", b);

/*
    Second Approch
*/
const arr2 = [1, 2, 3, 4, 1, 2];
const b2 = [];
arr2.filter((dup) => {
    if (b2.indexOf(arr2[dup]) == -1) {
        b2.push(arr2[dup])
    }
})
console.log("removed array value", b2);