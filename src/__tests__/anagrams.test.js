const anagrams = require('../anagrams.js');
describe('testing anagrams.js', () => {
  test('anagrams function exists', () => {
    expect(typeof anagrams).toEqual('function');
  });
});
describe('testing anagrams.js', () => {
  test('"hello" is an anagram of "llohe"', () => {
    expect(anagrams('hello', 'llohe')).toBeTruthy();
  });
});
describe('testing anagrams.js', () => {
  test('"Whoa! Hi!" is an anagram of "Hi! Whoa!"', () => {
    expect(anagrams('Whoa! Hi!', 'Hi! Whoa!')).toBeTruthy();
  });
});
describe('testing anagrams.js', () => {
  test('"One One" is not an anagram of "Two two two"', () => {
    expect(anagrams('One One', 'Two two two')).toBeFalsy();
  });
});

describe('testing anagrams.js', () => {
  test('"One one" is not an anagram of "One one c"', () => {
    expect(anagrams('One one', 'One one c')).toBeFalsy();
  });
});
describe('testing anagrams.js', () => {
  test('"A tree, a life, a bench" is not an anagram of "A tree, a fence, a yard"', () => {
    expect(
      anagrams('A tree, a life, a bench', 'A tree, a fence, a yard')
    ).toBeFalsy();
  });
});
