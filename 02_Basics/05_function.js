function myFunctions() {
  console.log("Hello Word");
}

//function definition

function doSum(a, b) {
  return a + b;
}

//function reference
myFunctions;

//function calling
myFunctions();

const sum = doSum(23, 45); // call the function and store result in the variable
console.log(sum);

function isLoggedIn(username) {
  if (!username) {
    return "sent valid username";
  }

  return `${username} is logged in`;
}

console.log(isLoggedIn("Paras"));

// we can give default value in the function parameter

function isValidDigit(value = "something") {}
