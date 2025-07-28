
console.log("=== TASK 1: MATH & STRING FUNCTIONS ===");


console.log("\n--- Math Functions ---");
let randomDecimal = Math.random();
console.log("Math.random():", randomDecimal);

let randomInteger = Math.floor(Math.random() * 100) + 1; // 1-100
console.log("Random integer 1-100:", randomInteger);


let decimal = 4.7;
console.log("\nOriginal number:", decimal);
console.log("Math.floor(4.7):", Math.floor(decimal)); // 4
console.log("Math.ceil(4.7):", Math.ceil(decimal));   // 5
console.log("Math.round(4.7):", Math.round(decimal)); // 5


let numbers = [15, 8, 23, 42, 4, 16];
console.log("\nNumbers array:", numbers);
console.log("Math.min(...numbers):", Math.min(...numbers)); // 4
console.log("Math.max(...numbers):", Math.max(...numbers)); // 42


console.log("\n--- String Functions ---");
let originalString = "  Hello JavaScript World!  ";
console.log("Original string:", `"${originalString}"`);


console.log("toUpperCase():", originalString.toUpperCase());
console.log("toLowerCase():", originalString.toLowerCase());
console.log("trim():", `"${originalString.trim()}"`);


console.log("substring(2, 7):", `"${originalString.substring(2, 7)}"`);
console.log("slice(8, 18):", `"${originalString.slice(8, 18)}"`);


console.log("includes('Java'):", originalString.includes("Java"));
console.log("indexOf('Script'):", originalString.indexOf("Script"));
console.log("replace('World', 'Universe'):", originalString.replace("World", "Universe"));

