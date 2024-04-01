//immediately invoked function expresion

// (function definition)(function execution)
(function dbConnection() {
  console.log("DB IS CONNECTED");
})(); // after function it's a must to end with semicolon otherwise it will throw an error

(() => {
  console.log("DB IS CONNECTED");
})();

((city) => {
  console.log(`Welcome to ${city}`);
})("London");

// Falsy value in JavaScript
// false, 0, -0, Bigint 0n, "", null, undefined NaN

// truthy value,
//  true, " ", "false", [], {}, functions(){},

//we can not compare [], {}
// if(arr.length === 0)
// if(Object.keys(obj).length === 0)

// Nullish coalescing Operator ?? : null , undefined

let a = [232, 23, 23];
// let a = undefined;

let b = a ?? 123; // it provides to push null or undefined value into the variable

console.log(b);
