// >>>

// filter is returned the value based on the condition

let nums = [1, 2, 3, 4, 5, 6, , 7, 8];

let newNums = nums.filter((ele) => ele >= 5);
console.log(newNums);

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

console.log(books);
// let filteredBooks = books.filter((book) => book.publishDate > "2010");
// let filteredBooks = books.filter(
//   (book) => book.publishDate > "2010" && book.genre == "sci-fi"
// );
let filteredBooks = books.filter(
  (book) => book.publishDate > "2010" && book.genre != "sci-fi"
);

console.log(filteredBooks);
