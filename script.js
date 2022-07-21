// Named Function
function addition (a,b) {
    var result = a + b;
    return result;
}
// 1. Create two variables that each hold a NUMBER.
var odd = 5;
var even = 6;
// 2. Create a function that accepts two numbers as function parameters, adds the two parameter variables together, and returns the value.
// 3. Pass the variables made before as arguments for the function and run the function.
console.log(addition(odd,even));
// 4. Store the returned function value in a variable and log that variable to the console.
var added = addition (odd,even);
console.log (added);

// Anonymous Function
var addTwoTogether = function (a,b) {
    var result = a + b;
    return result;
}
// 1. Create two variables that each hold a STRING.
var big = "Hello "
var small = "beautiful!"
// 2. Create an anonymous function with a name that accepts two strings as function parameters, combines the parameter variables into one string, and returns the new value.
// 3. Use variables made above as arguments for the anonymous function and run the anonymous function.
console.log(addTwoTogether(big,small));
// 4. Store the returned function value in a variable and log that variable to the console.
var total = addTwoTogether (big,small);
console.log(total);