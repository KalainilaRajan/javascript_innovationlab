
let arr = [1, 2, 3];
arr.forEach(item => console.log(item));

let doubled = arr.map(x => x * 2);
console.log(doubled); // [2, 4, 6]

for (let i in arr) {
    console.log(i);
}
 
for (let val of arr) {
    console.log(val);
}

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}