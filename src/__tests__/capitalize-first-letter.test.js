const capitalize = require("../capitalize-first-letter.js");

describe("testing apitalize function", () => {
  test("Capitalize is a function", () => {
    expect(typeof capitalize).toEqual("function");
  });
});

describe("testing apitalize function", () => {
  test("capitalizes the first letter of every word in a sentence", () => {
    expect(capitalize("hi there, how is it going?")).toEqual(
      "Hi There, How Is It Going?"
    );
  });
});

describe("testing apitalize function", () => {
  test("capitalizes the first letter", () => {
    expect(capitalize("i love breakfast at bill miller bbq")).toEqual(
      "I Love Breakfast At Bill Miller Bbq"
    );
  });
});
