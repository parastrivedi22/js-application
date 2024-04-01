let nums = [1, 2, 3, 4, 5, 6, 9, 7, 8];

let books = [
  {
    name: "bookOne",
    genre: "history",
    publishDate: "1990",
  },
  {
    name: "bookTwo",
    genre: "history",
    publishDate: "2021",
  },
  {
    name: "bookThree",
    genre: "sci-fi",
    publishDate: "2012",
  },
  {
    name: "bookFour",
    genre: "drama",
    publishDate: "2014",
  },
  {
    name: "bookFive",
    genre: "sci-fi",
    publishDate: "2022",
  },
  {
    name: "bookSix",
    genre: "history",
    publishDate: "2002",
  },
];

// map and forEach both work same but the
// forEach does not return anything whereas map returns

// const newNums = nums.map((ele) => {
//   return ele + 10;
// });

// method chaining

// const newNums = nums
//   .map((ele) => {
//     return ele + 10;
//   })
//   .map((ele) => ele * 10);

// [   110, 120, 130,  140, 150, 160,  190, 170, 180]
const newNums = nums
  .map((ele) => {
    return ele + 10;
  })
  .map((ele) => ele * 10)
  .filter((ele) => ele >= 150);

// [ 150, 160, 190, 170, 180 ]

console.log(newNums);
