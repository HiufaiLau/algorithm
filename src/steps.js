// // --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// recursion solution
// row starts at 0, counts the first row and counts up to n.
function steps(n, row = 0, stair = "") {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    steps(n, row + 1);
    return;
  }

  const add = stair.length <= row ? "#" : " ";
  // call function again
  steps(n, row, stair + add);

  //   if (stair.length <= row) {
  //     stair += "#";
  //   } else {
  //     stair += " ";
  //   }
  //   //   call function again
  //   steps(n, row, stair);
}

module.exports = steps;

// 2D Array iteration solution
// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = '';

//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }

//     console.log(stair);
//   }
// }
