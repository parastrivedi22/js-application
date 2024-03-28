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

// console.log(JsUser);
// console.log(JsUser.name); // by dot operator
// console.log(JsUser["name"]); // by square bracket notation
// console.log(JsUser["pass out"]); // we can not use coqurt key throgh dot operator

// store symbol in the object

let myAge = Symbol(23);

let JsUser2 = {
  name: "Paras",
  [myAge]: "22", // need to use square notation to use Symbol as a key
  location: "Pune",
  "pass out": 2021, // key should be without space, other wise write inside the coqurt
};

console.log(JsUser2);
console.log(JsUser2.myAge); // can not access Symbol key throgh dot
console.log(JsUser2[myAge]);
