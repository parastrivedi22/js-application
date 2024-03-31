//immediately invoked function expresion

// (function definition)(function execution)
(function dbConnection() {
  console.log("DB IS CONNECTED");
})(); // after function it's a must to end with semicolon otherwise it will throw an error

(() => {
  console.log("DB IS CONNECTED");
})();

((city) => {
  console.log(`Welcome to ${city}`);
})("London");
