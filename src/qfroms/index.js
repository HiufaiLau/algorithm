// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");

class Queue {
  constructor() {
    // create two stacks
    // assign them to the instance of the Queue class
    this.first = new Stack();
    this.second = new Stack();
  }

  // add method
  // add data to the first stack
  add(data) {
    this.first.push(data);
  }

  // remove method
  // remove data from the first stack
  // and add it to the second stack
  // then remove the data from the second stack
  // and add it back to the first stack
  // then return the data
  remove() {
    // move all the data to second stack
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const data = this.second.pop();

    // move all the data back to first stack
    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return data;
  }

  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const data = this.second.peek();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }
    return data;
  }
}

module.exports = Queue;
