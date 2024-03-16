let num = new Number(131235.2342);

// console.log(num);
// console.log(num.toFixed(2));
// console.log(num.toLocaleString());
// console.log(num.valueOf()); // return the primitive value of object type
//+++++++++++++++++++++--Maths--+++++++++++++++++++++++++++++++++++++++++++++
console.log(num);
// console.log(Math.floor(num));
// console.log(Math.round(num));
// console.log(Math.ceil(num));
// console.log(Math.trunc(num)); // return only the decimal part of the give number
// console.log(Math.sqrt(num));

// get random number under a range 10 to 20

let min = 10;
let max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
