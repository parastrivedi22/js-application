// rest and spread operator

function myFunctions(...num) {
  // this is rest operator
  return num;
}

console.log(myFunctions(1, 2, 3, 4, 5)); // it takes
// n number of arguments it converts arguments into an array

function objectHandler(myObj) {
  console.log(myObj);
}

objectHandler({
  name: "Paras",
  age: 23,
});
