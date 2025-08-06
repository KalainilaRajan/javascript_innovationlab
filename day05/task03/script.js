let user = {
    name: "Alice",
    age: 25,
    address: {
        city: "Chennai",
        country: "India"
    }
};

let { name, age } = user;
console.log("Name:", name);
console.log("Age:", age);

let { email = "Not Provided" } = user;
console.log("Email:", email);

let { address: { city, country } } = user;
console.log("City:", city);
console.log("Country:", country);

let clonedUser = { ...user };
console.log("Cloned User:", clonedUser);

let extraInfo = { hobby: "Coding", email: "alice@example.com" };
let mergedUser = { ...user, ...extraInfo };
console.log("Merged User:", mergedUser);

function printUser({ name, age, address: { city } }) {
    console.log(`${name} is ${age} years old and lives in ${city}.`);
}

printUser(user);