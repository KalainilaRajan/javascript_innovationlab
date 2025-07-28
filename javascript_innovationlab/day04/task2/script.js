

console.log("\n\n=== TASK 2: ARRAY CREATION & OPERATIONS ===");


console.log("\n--- Creating Arrays ---");
let numbersArray = [1, 2, 3, 4, 5];
let fruitsArray = ["apple", "banana", "orange", "grape"];
let mixedArray = [1, "hello", true, 3.14, "world"];

console.log("Numbers array:", numbersArray);
console.log("Fruits array:", fruitsArray);
console.log("Mixed array:", mixedArray);


console.log("\n--- Accessing Elements ---");
console.log("First number:", numbersArray[0]);
console.log("Last fruit:", fruitsArray[fruitsArray.length - 1]);
console.log("Third element in mixed array:", mixedArray[2]);


fruitsArray[1] = "mango";
console.log("After changing second fruit to 'mango':", fruitsArray);


console.log("\n--- Array Lengths ---");
console.log("Numbers array length:", numbersArray.length);
console.log("Fruits array length:", fruitsArray.length);
console.log("Mixed array length:", mixedArray.length);


console.log("\n--- Adding/Removing Elements ---");
let colors = ["red", "green", "blue"];
console.log("Original colors:", colors);


colors.push("yellow");
console.log("After push('yellow'):", colors);

colors.unshift("purple");
console.log("After unshift('purple'):", colors);


let removedLast = colors.pop();
console.log("After pop():", colors, "| Removed:", removedLast);

let removedFirst = colors.shift();
console.log("After shift():", colors, "| Removed:", removedFirst);
