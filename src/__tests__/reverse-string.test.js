const reverse = require("../reverse-string");

describe("testing reverse-string.js", () => {
  test("reverse function exists", () => {
    expect(reverse).toBeDefined();
  });
});

describe("testing reverse-string.js", () => {
  test("it reverses a string", () => {
    expect(reverse("abcd")).toEqual("dcba");
  });
});

describe("testing reverse-string.js", () => {
  test("it reverses a string", () => {
    expect(reverse("  abcd")).toEqual("dcba  ");
  });
});
