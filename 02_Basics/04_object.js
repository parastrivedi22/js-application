// there are some userful methods of Object class

let person = {
  name: "Paras",
  age: 22,
  location: "Pune",
};

let person2 = {
  name: "Ajay",
  age: 22,
  location: "Pune",
};

// console.log(Object.keys(person)); // it returns an array of keys
// console.log(Object.values(person));

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// merge two object
// let obj = Object.assign({}, person, person2);
const obj = { ...person, ...person2 }; // spread operator
console.log(obj);
