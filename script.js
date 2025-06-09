// This is a simple JavaScript variable that holds an object containing personal details
// It includes properties like name, age, and height
//use of var 
var myDetails = {
    name :"John Doe",
    age: 23,
    height : 169
};

console.log(myDetails);

// use of let
// Accessing properties of the object
let myName = myDetails.name;
console.log("My name is " + myName + " and I am " + myDetails.age + " years old.");

// use of const
// Defining a constant for the maximum age limit
const MAX_AGE = 100;
console.log("The maximum age limit is " + MAX_AGE + " years.");

// Function to display details
function displayDetails() {
    console.log("Name: " + myDetails.name);
    console.log("Age: " + myDetails.age);
    console.log("Height: " + myDetails.height + " cm");
}