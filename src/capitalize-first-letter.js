// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const strArr = str.split(" ");

  let w = strArr.map((word) => word[0].toUpperCase() + word.slice(1));

  return w.join(" ");
}

// Option-2.1:
// function capitalize(str) {
//   const strArr = str[0].toUpperCase();
//   for (i of str) {
//     if (str.length[i - 1] === " ") {
//       strArr += str[i].toUpperCase();
//     } else {
//       strArr += str[i];
//     }
//   }
//   return strArr;
// }

// Option-2.2:
// function capitalize(str) {
//   const words = [];
//   const strArr = str.split(" ");
//   for (let word of strArr) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }

//   return words.join(" ");
// }

// Option-2.2:
// function capitalize(str) {
//   const words = [];
//
//   for (let word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }
//
//   return words.join(' ');
// }

// Option-3:
// function capitalize(str) {
//   let result = str[0].toUpperCase();

//   for (let i = 1; i < str.length; i++) {
//     if (str[i - 1] === " ") {
//       result += str[i].toUpperCase();
//     } else {
//       result += str[i];
//     }
//   }

//   return result;
// }

module.exports = capitalize;
