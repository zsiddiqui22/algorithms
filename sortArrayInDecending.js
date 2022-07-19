// Array Sort in Decending

const arr = [3,2,5,4,1,0];

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


// Sesond Approch
const arr2 = [3,2,5,4,1,0];

for (let i = 0; i < arr2.length; i++) {
    for (let j = i+1; j < arr2.length; j++) {
        if(arr2[i] < arr2[j]) {
            [arr2[i], arr2[j]] = [arr2[j], arr2[i]];
             
        }
    }
}

console.log("Elements of array sorted in dcending order:");

for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}