// 1. Traditional Function Declaration
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Kalainila");

// 2. Function Expression
const add = function(a, b) {
    return a + b;
};
console.log("Sum:", add(5, 3));

// 3. Arrow Function with one line
const square = num => num * num;
console.log("Square of 4:", square(4));

// 4. Arrow Function with multiple lines and loop
const multiplyAll = (...numbers) => {
    let product = 1;
    for (let num of numbers) {
        product *= num;
    }
    return product;
};
console.log("Product of 2, 3, 4:", multiplyAll(2, 3, 4));