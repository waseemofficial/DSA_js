class Queue {
  constructor() {
    this.queue = [];
    this.head = 0;
    this.tail = 0;
    this.maxSize = 100;
  }
  enqueue(item) {
    if (this.isFull()) {
      return false;
    }
    this.queue[this.tail] = item;
    this.tail++;
    return true;
  }
  dequeue() {
    const item = this.queue[this.head];
    this.head++;
    return item;
  }
  peep() {
    return this.queue[this.head];
  }
  isEmpty() {
    return this.getLength() === 0;
  }
  getLength() {
    return this.tail - this.head;
  }
  isFull() {
    return this.getLength() === this.maxSize;
  }
}
module.exports = Queue;
