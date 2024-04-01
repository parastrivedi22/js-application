// redue((accumelator, currentValue)=>{},intialInitialize )

let nums = [1, 2, 3, 4, 5, 6, 9, 7, 8];

let newNums = nums.reduce((acc, curval) => {
  return acc + curval;
}, 0);

console.log(newNums);

let books = [
  {
    name: "bookOne",
    genre: "history",
    publishDate: "1990",
    price: 220,
  },
  {
    name: "bookTwo",
    genre: "history",
    publishDate: "2021",
    price: 290,
  },
  {
    name: "bookThree",
    genre: "sci-fi",
    publishDate: "2012",
    price: 150,
  },
  {
    name: "bookFour",
    genre: "drama",
    publishDate: "2014",
    price: 220,
  },
  {
    name: "bookFive",
    genre: "sci-fi",
    publishDate: "2022",
    price: 190,
  },
  {
    name: "bookSix",
    genre: "history",
    publishDate: "2002",
    price: 199,
  },
];

// create the total sum of books wich are added in the cart

let totalToPay = books.reduce((acc, books) => acc + books.price, 0);
console.log(totalToPay);
