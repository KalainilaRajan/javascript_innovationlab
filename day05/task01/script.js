//filter() to get subset of array element
function filterArray(){
    let numb=[1,2,30,40,-2,-8,60,20]
    return  numb.filter(numb>10)
    
}
filterArray();

//use recduce() to calculate the sum,product or conctenate string 
function ArrayReduce(){
    let sum=[1,2,3]
    return sum.reduce(sum)

}
ArrayReduce();

//Slice() to extract a portion  of an array without modifying the original
function ArraySlice(){
    let fruits=['apple', 'banana', 'cherry', 'date', 'elderberry']
    return fruits.slice(1,3)
}
ArraySlice();

//Use   splice() to remove or add element in an array
function ArraySplice(){
let fruits = ['apple', 'banana', 'cherry', 'date'];
let removed = fruits.splice(1, 2); 

console.log(fruits);  
console.log(removed);
}

ArraySplice();
