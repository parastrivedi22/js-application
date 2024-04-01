// for of and for in loops

const arr = [1, 3, 4, 5, 6];

for (const ar of arr) {
  //   console.log(typeof ar);
}
for (const ar in arr) {
  //   console.log(typeof ar);
}

const map = new Map(); // map store only unique values;
map.set("IN", "INDIA");
map.set("UK", "INDIA");
map.set("UK", "INDIA");

//  key should be unique

// console.log(map);

for (const [key] of map) {
  //  destructure, give you only key
  //   console.log(key);
  //   IN
  //   UK
}
for (const value of map) {
  //  destructure, give you only key
  //   console.log(value);
  // [ 'IN', 'INDIA' ]
  // [ 'UK', 'INDIA' ]
}

for (const [key, value] of map) {
  //  destructure, give you only key
  //   console.log(key, value);
  //  'IN', 'INDIA'
  //  'UK', 'INDIA'
}

for (const key in map) {
  //  for in not work with map
  console.log(key);
}

// && object can not be iterable through for of loop
// but we can do this through for in loop //  TypeError: myObj is not iterable

const myObj = {
  "first name": "Paras",
  age: 23,
  location: "Pune",
};

for (const key in myObj) {
  //   console.log(key, ", ", myObj[key]);
  //   console.log(key, ", ", myObj.key); // this will not work, undefined
}

for (const index in arr) {
  // in the case of array for in return the indices of elements
  //   console.log(index);
}

// ** for of returns value
// ** for in returns keys or index

// call back function does not have name

// **************************************

arr.forEach((ele, idx, arr) => {
  console.log(ele, idx, arr);
});
