// 1. Create an array of product objects
let products = [
    { id: 1, name: "Laptop", price: 50000, quantity: 2 },
    { id: 2, name: "Phone", price: 20000, quantity: 0 },
    { id: 3, name: "Headphones", price: 2000, quantity: 5 }
];

// 2. filter() → Get available products (quantity > 0)
let availableProducts = products.filter(p => p.quantity > 0);
console.log("Available Products:", availableProducts);

// 3. reduce() → Calculate total cart value
let totalValue = availableProducts.reduce((sum, p) => sum + (p.price * p.quantity), 0);
console.log("Total Cart Value:", totalValue);

// 4. slice() → Copy first 2 products without changing original
let firstTwo = products.slice(0, 2);
console.log("First Two Products:", firstTwo);

// 5. splice() → Remove 1 product at index 1
let removed = products.splice(1, 1);
console.log("Removed Product:", removed);
console.log("After Removing:", products);

// 6. Spread operator → Clone and merge lists
let newProducts = [
    { id: 4, name: "Keyboard", price: 1500, quantity: 3 }
];
let updatedList = [...products, ...newProducts];
console.log("Updated Product List:", updatedList);

// 7. Product object with method
let sampleProduct = {
    id: 5,
    name: "Tablet",
    price: 30000,
    quantity: 1,
    printDetails() {
        console.log(`Product: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`);
    }
};
sampleProduct.printDetails();

// 8. Destructuring to extract details
let { name, price, quantity } = sampleProduct;
console.log(`Name: ${name}, Price: ${price}, Quantity: ${quantity}`);