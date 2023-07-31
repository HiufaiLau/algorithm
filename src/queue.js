// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

// create an new instance
// create an array to store the data in the class
class Queue {
  constructor() {
    this.data = [];
  }

  addFirst(record) {
    this.data.unshift(record);
  }

  addLast(record) {
    this.data.push(record);
  }

  removeFirst() {
    return this.data.shift();
  }

  removeLast() {
    return this.data.pop();
  }

  joinData(separator) {
    return this.data.join(separator);
  }

  addSum() {
    return this.data.reduce((sum, record) => sum + record, 0);
  }

  //   addSum2() {
  //     let sum = 0;
  //     for (let record of this.data) {
  //       sum += record;
  //     }
  //     return sum;
  //   }
}

module.exports = Queue;
