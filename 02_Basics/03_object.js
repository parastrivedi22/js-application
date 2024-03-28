// in js we can create object by constructor or by literal,
// js object can be singalton or prototype

// Object.create -> is use the create object

let JsUser = {
  name: "Paras",
  age: "22",
  location: "Pune",
  "pass out": 2021, // key should be without space, other wise write inside the coqurt
};

//note -> internally keys store as a string

// we can access object's value in two way

console.log(JsUser);
console.log(JsUser.name); // by dot operator
console.log(JsUser["name"]); // by square bracket notation
console.log(JsUser["pass out"]); // we can not use coqurt key throgh dot operator
