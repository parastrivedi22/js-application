let a = [1, 2, 3, 4, 5, 6];
// in javascript array creates shallow copys or refferece type
// javascript arrays are resizeble
// let b = a;
// b.pop(); // remove element from the end
// console.log("array b :" + b);
// console.log("array a :" + a);

// b.push(2342); // add element in the end
// console.log("array b :" + b);

// a.shift(); // remove value from  start
// console.log("array a :" + a);

// a.unshift(89); // add element in the starting
// console.log("array a :" + a);

// let str = a.join(); // join converts array into the string
// console.log("array string  :" + str);

// let str = ; // join converts array into the string
// console.log("array string  :" + str);

// slice() &  splice()

console.log(
  `-------slice 1) its does not 
    include the last idx and not
    implulate the original array---------`
);

let arr1 = a.slice(1, 3);
console.log("arr1 : " + arr1);
console.log("a : " + a);

console.log(
  `-------splice 1) its 
  include the last idx and 
  implulate the original array---------`
);

let arr2 = a.splice(1, 3);
console.log("arr1 : " + arr2);
console.log("a : " + a);
