//

//this can work as a reference variable for an object (Current contax).
let user = {
  username: "Paras",
  price: 999,
  welcomeMessage: function () {
    console.log(`Welcome mr. ${this.username}`);
  },
};

user.welcomeMessage();

console.log(this); // empty object

function chai() {
  let username = "Paras";
  console.log(username);
}
// function chai() {
//   let username = "Paras";
//   console.log(this.username);
// }

chai();

// const sum = (num1, num2) => {
//   return num1 + num2;
// };

// implesit return
const sum = (num1, num2) => num1 + num2; // if the single returns then don't need to use return key word

console.log(sum(23, 34));

const obj = () => ({
  // we need user() if we want to return an object
  name: "Paras",
});
// const obj = () => {
//   name: "Paras",
// }

console.log(obj());

const arr = [1, 2, 3, 4, 5, 6];

arr.forEach((e) => console.log(e)); // handy to use

arr.forEach(function (e) {
  console.log(e);
});
