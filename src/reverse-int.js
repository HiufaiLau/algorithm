// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Option-1:
function reverseInt(n) {
  let reversed = n.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(n);
}
// function reverseInt(n) {
//   let reversed = n.toString().split("").reverse().join("");
//   if (n < 0) {
//     return parseInt(reversed) * -1;
//   }
//   return parseInt(reversed);
// }

// Option-2:
// function reverseInt(n) {
//   return parseFloat(n.toString().split("").reverse().join("")) * Math.sign(n);
// }
// const reverseInt = (n) =>
//   parseFloat(n.toString().split("").reverse().join("")) * Math.sign(n);

// Option-3:
// function reverseInt(n) {
//   let reversedNum = parseInt(n.toString().split("").reverse().join(""));
//   return n < 0 ? -reversedNum : reversedNum;
// }
console.log(reverseInt(-12345));

module.exports = reverseInt;
