let student = {
    name: "John",
    age: 20,
    course: "Computer Science",

    // Method to display student info
    displayInfo: function () {
        console.log(`Name: ${this.name}, Age: ${this.age}, Course: ${this.course}`);
    },

    // Method to update age
    updateAge: function (newAge) {
        this.age = newAge;
        console.log(`Updated age for ${this.name} is now ${this.age}`);
    }
};

// Accessing object properties
console.log("Student Name:", student.name);
console.log("Student Age:", student.age);

// Calling methods
student.displayInfo();
student.updateAge(21);

// Modifying object property directly
student.course = "Data Science";
console.log("Updated Course:", student.course);

// Adding a new property
student.grade = "A";
console.log("Student Grade:", student.grade);

// Adding a new method
student.showGrade = function () {
    console.log(`${this.name} has a grade of ${this.grade}`);
};

// Calling the new method
student.showGrade();