const sum = require('../sum.js');
describe('testing sum.js', () => {
  test('2 + 2 is 4', () => {
    expect(sum(2, 2)).toBe(4);
  });
});

describe('testing sum.js', () => {
  test('3 + 3 is 6', () => {
    expect(sum(3, 3)).toBe(6);
  });
});
