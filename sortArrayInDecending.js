// Array Sort in Decending

const arr = [3,2,5,4,1,0]
for (let i = 0; i < arr.length; i++) {
for (let j = i+1; j < arr.length; j++) {
if(arr[i] < arr[j]) {
let temp = arr[i];
arr[i] = arr[j];
arr[j] = temp;
}
}
}
console.log("Elements of array sorted in dcending order:");
for (let i = 0; i < arr.length; i++) {
console.log(arr[i]);
}