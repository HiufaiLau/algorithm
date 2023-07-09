// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
// --------------------------------------------------------------------------------------------

// *****Option 1.1:
// reduce function takes two arguments, first is arrow function and second is initial value
// example: [1,2,3].reduce((sum, num) => sum + num, 0) => 6 (0 is initial value)
function reverse(str) {
  debugger;
  return str.split("").reduce((rev, char) => char + rev, "");
}
reverse("asdf");

module.exports = reverse;

// *****Option 1.2:
// function reverse(str) {
//   return str.split("").reduce((rev, char) => {
//     return char + rev;
//   }, "");
// }

// *****Option 2.1:
// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// Option 2.2:
// function reverse(str) {
//   let reversed = str.split("");
//   reversed.reverse();
//   return reversed.join("");
// }

// Option 3:
// instead of for loop, we can use for of loop
// function reverse(str) {
//   let reversed = "";
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }
