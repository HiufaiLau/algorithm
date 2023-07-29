// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  // create empty array of arrays called 'results'
  const results = [];

  for (let i = 0; i < n; i++) {
    // add subarray to results
    results.push([]);
  }
  // create counter variable starting at 1
  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  // first check (start column <= end column) AND (start row <= end row)
  while (startColumn <= endColumn && startRow <= endRow) {
    // as long as the above statement is true, then execute the following:
    // top row
    // 1. loop through start column to end column
    for (let j = startColumn; j <= endColumn; j++) {
      // 2. at results[startRow][j] assign counter variable
      results[startRow][j] = counter;
      // 3. increment counter
      counter++;
    }
    // 4. increment start row
    startRow++;

    // right column
    // 5. loop through start row to end row
    for (let j = startRow; j <= endRow; j++) {
      // 6. at results[j][endColumn] assign counter variable
      results[j][endColumn] = counter;
      // 7. increment counter
      counter++;
    }
    endColumn--;

    // bottom row
    for (let j = endColumn; j >= startColumn; j--) {
      results[endRow][j] = counter;
      counter++;
    }
    endRow--;

    // start column
    for (let j = endRow; j >= startRow; j--) {
      results[j][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }
  return results;
}

module.exports = matrix;
