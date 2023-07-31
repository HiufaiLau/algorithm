const Queue = require("../queue");

describe("testing queue.js", () => {
  test("Queue is a class", () => {
    expect(typeof Queue.prototype.constructor).toEqual("function");
  });

  test("can add elements to a queue", () => {
    const q = new Queue();
    expect(() => {
      q.addFirst(1);
    }).not.toThrow();
  });

  test("can remove elements from a queue", () => {
    const q = new Queue();
    expect(() => {
      q.addFirst(1);
      q.removeLast();
    }).not.toThrow();
  });

  test("Order of elements is maintained", () => {
    const q = new Queue();
    q.addFirst(1);
    q.addFirst(2);
    q.addFirst(3);
    expect(q.removeLast()).toEqual(1);
    expect(q.removeLast()).toEqual(2);
    expect(q.removeLast()).toEqual(3);
    expect(q.removeLast()).toEqual(undefined);
  });
});
