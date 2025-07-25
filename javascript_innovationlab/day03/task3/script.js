//  Global Scope
var globalMessage = "I'm a global variable";

// Function with callback
function doTask(callback) {
    console.log("Doing main task...");
    callback(); 
}


function afterTask() {
    console.log("Task finished! This is the callback function.");
    console.log(globalMessage); 
}


doTask(afterTask);


function scopeDemo() {
    var x = "Function scope (var)";
    if (true) {
        let y = "Block scope (let)";
        const z = "Block scope (const)";
        console.log("Inside block:", x, y, z);
    }
    console.log("Outside block:", x); 
}
scopeDemo();