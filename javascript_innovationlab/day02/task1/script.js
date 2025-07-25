let age = parseInt(prompt("Enter your age:"));
if (age >= 18) {
    console.log("You are an adult.");
}
console.log();

let temperature = parseFloat(prompt("Enter temperature in Celsius:"));
if (temperature > 30) {
    console.log("It's hot outside!");
} else {
    console.log("It's not too hot.");
}
console.log();

let score = parseInt(prompt("Enter your exam score:"));
if (score >= 90) {
    console.log("Grade A - Excellent!");
} else if (score >= 80) {
    console.log("Grade B - Good!");
} else if (score >= 70) {
    console.log("Grade C - Average");
} else if (score >= 60) {
    console.log("Grade D - Below Average");
} else {
    console.log("Grade F - Fail");
}
console.log();

console.log("Day of the Week Menu:");
console.log("1. Monday");
console.log("2. Tuesday");
console.log("3. Wednesday");
console.log("4. Thursday");
console.log("5. Friday");
console.log("6. Saturday");
console.log("7. Sunday");

let dayChoice = parseInt(prompt("Choose a day (1-7):"));

const dayNames = {
    1: "Monday - Start of work week",
    2: "Tuesday - Getting into the groove",
    3: "Wednesday - Midweek",
    4: "Thursday - Almost weekend",
    5: "Friday - TGIF!",
    6: "Saturday - Weekend fun",
    7: "Sunday - Rest day"
};

if (dayNames[dayChoice]) {
    console.log(dayNames[dayChoice]);
} else {
    console.log("Invalid choice!");
}
console.log("\n" + "=".repeat(50) + "\n");
