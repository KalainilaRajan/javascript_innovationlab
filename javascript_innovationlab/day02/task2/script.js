
console.log("FOR LOOP:");
for (let i = 1; i <= 5; i++) {
    console.log("Number:", i);
}
console.log(); 


console.log("WHILE LOOP:");
let j = 1;
while (j <= 5) {
    console.log("Number:", j);
    j++;
}
console.log();


console.log("NESTED FOR LOOP (3x3 Grid):");
for (let row = 1; row <= 3; row++) {
    let line = "";
    for (let col = 1; col <= 3; col++) {
        line += "* ";
    }
    console.log(line);
}
console.log(); 

console.log("Multiplication Table (1 to 3):");
for (let a = 1; a <= 3; a++) {
    for (let b = 1; b <= 3; b++) {
        console.log(`${a} x ${b} = ${a * b}`);
    }
    console.log("-----");
}
