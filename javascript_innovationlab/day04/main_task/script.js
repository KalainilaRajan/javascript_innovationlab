
let students = [
    { name: "alice", score: 87.6 },
    { name: "bob", score: 91.2 },
    { name: "charlie", score: 67.8 }
];


students.forEach(student => {
    student.score = Math.round(student.score);
    student.name = student.name.charAt(0).toUpperCase() + student.name.slice(1);
});


console.log("Student Scores:");
students.forEach(student => {
    console.log(student.name + ": " + student.score);
});

let result = students.map(student => {
    return student.score >= 50 ? "Pass" : "Fail";
});

console.log("Pass/Fail:", result);

console.log("Congratulations:");
for (let student of students) {
    if (student.score > 80) {
        console.log("Well done, " + student.name + "!");
    }
}