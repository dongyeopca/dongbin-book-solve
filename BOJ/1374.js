let fs = require('fs');
let dev = true;
let input = fs
  .readFileSync(dev ? 'test.txt' : './dev/stdin')
  .toString()
  .trim()
  .split('\n');

class Heap {
  constructor() {
    this.items = [];
  }
  swap(index1, index2) {
    let temp = this.items[index1];
    this.items[index1] = this.items[index2];
    this.items[index2] = temp;
  }
  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  leftChildIndex(index) {
    return index * 2 + 1;
  }
  rightChildIndex(index) {
    return index * 2 + 2;
  }
  parent(index) {
    return this.items[this.parentIndex(index)];
  }
  leftChild(index) {
    return this.items[this.leftChildIndex(index)];
  }
  rightChild(index) {
    return this.items[this.rightChildIndex(index)];
  }
  peek() {
    return this.items[0];
  }
  size() {
    return this.items.length;
  }
}

class MinHeap extends Heap {
  bubbleUp() {
    let index = this.items.length - 1;
    while (this.parent(index) !== undefined && this.parent(index) > this.items[index]) {
      this.swap(index, this.parentIndex(index));
      index = this.parentIndex(index);
    }
  }

  bubbleUpDown() {
    let index = 0;
    while (this.leftChild(index) !== undefined && (this.leftChild(index) < this.items[index] || this.rightChild(index) < this.items[index])) {
      let smallerIndex = this.leftChildIndex(index);
      if (this.rightChild(index) !== undefined && this.rightChild(index) < this.items[smallerIndex]) {
        smallerIndex = this.rightChildIndex(index);
      }
      this.swap(index, smallerIndex);
      index = smallerIndex;
    }
  }
  add(item) {
    this.items.push(item);
    this.bubbleUp();
  }

  poll() {
    let item = this.items[0];
    this.items[0] = this.items[this.items.length - 1];
    this.items.pop();
    this.bubbleUpDown();
    return item;
  }
}

const n = Number(input.shift());
const lectures = input.map((e) => e.split(' ').map(Number));
lectures.sort((a, b) => {
  if (a[1] == b[1]) return a[2] - b[2];
  return a[1] - b[1];
});
const Rooms = new MinHeap();
let counter = 0;
for (const lecture of lectures) {
  while (Rooms.size() && Rooms.items[0] <= lecture[1]) {
    //해당 강의실의 강의 끝나는 시간이 다음 강의의 시작 시간보다 빠르면
    Rooms.poll();
  }
  Rooms.add(lecture[2]);
  counter = Math.max(counter, Rooms.size());
}
console.log(counter);
