// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// memoization is an optimization technique used primarily
// to speed up computer programs by storing
// the results of expensive function calls
// and returning the cached result when the same inputs occur again.

// memoization is a specific form of caching,
// it is a generic function
function memoize(fn) {
  const cache = {};
  // ...arg is a rest operator,
  // it will take all the arguments
  // and put them into an array
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function memoize(fn) {
  const cache = {};
  // ...arg is a rest operator,
  // it will take all the arguments
  // and put them into an array
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  }else{
    if (n < 2) {
      return n;
    }
  
    return fib(n - 1) + fib(n - 2);
  }
  
  const fib = memoize(slowFib);
  };
}

console.log();

// this single recursive solution will cause a exponantial time complexity
function slowFib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

// function fib(n) {
//   const result = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     const a = result[i - 1];
//     // or const a = result[result.length - 1];
//     const b = result[i - 2];

//     result.push(a + b);
//   }

//   return result[n];
// }

module.exports = fib;
