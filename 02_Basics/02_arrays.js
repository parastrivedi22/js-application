// merge two arrays

let a = [1, 2, 3, 4];
let b = [6, 7, 8, 9];
let mergedArr = a.concat(b);
console.log(mergedArr);

// we can use spread operator to concate two or more aarys

let mergedArr2 = [...a, ...b];
// console.log(mergedArr2);

// make array fate ->

let flatenArr = [1, 2, 3, [9, 7, 4], 4, [1, 3, 4, 5, 5, 6, [23, 4, 4, 5]]];

// console.log(flatenArr);
// console.log(flatenArr.flat(Infinity));

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// only conver iterable objects
// on the case of object we need to tell them, make array of key or value

console.log(Array.from("Paras"));
console.log(Array.from({ name: "paras" }));
let score1 = 100;
let score2 = 200;
let score3 = 300;

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Returns a new array from a set of elements.
console.log(Array.of(score1, score2, score3));
console.log(Array.of("paras"));
console.log(Array.of(1, 2, 3, 4));
