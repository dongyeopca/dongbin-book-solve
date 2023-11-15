const fs = require("fs");
const test = true;
const input = fs
  .readFileSync(test ? "./test.txt" : "./dev/stdin")
  .toString()
  .trim()
  .split("\n");

//보석무게 m,가격 v
//k개의 가방이 있고 가방당 c가 최대무게(가방당 한개만 넣을수있음)
class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  size() {
    return this.heap.length - 1;
  }

  shift() {
    return this.heap[1] ? this.heap[1] : null;
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  heappush(value) {
    this.heap.push(value);
    let curIdx = this.heap.length - 1;
    let parIdx = Math.floor(curIdx / 2);
    while (curIdx > 1 && this.heap[parIdx] < this.heap[curIdx]) {
      this.swap(parIdx, curIdx);
      curIdx = parIdx;
      parIdx = Math.floor(curIdx / 2);
    }
  }

  heappop() {
    const max = this.heap[1];
    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    let curIdx = 1;
    let leftIdx = curIdx * 2;
    let rightIdx = curIdx * 2 + 1;

    while (this.heap[leftIdx]) {
      let compareIdx = leftIdx;
      if (this.heap[rightIdx] && this.heap[leftIdx] > this.heap[rightIdx]) {
        compareIdx = rightIdx;
      }
      if (this.heap[curIdx] < this.heap[compareIdx]) {
        this.swap(curIdx, compareIdx);
        curIdx = compareIdx;
      }
      leftIdx = curIdx * 2;
      rightIdx = curIdx * 2 + 1;
    }

    return max;
  }
}

const jewerly = [];
const backpack = [];

let [n, k] = input[0].split(" ").map(Number);
for (let i = 1; i <= n; i++) {
  jewerly.push(input[i].split(" ").map(Number));
}
for (let i = 1; i <= k; i++) {
  backpack.push(Number(input[n + i]));
}
backpack.sort((a, b) => a - b);
jewerly.sort((a, b) => a[0] - b[0]);
let result = 0;
let q = new MaxHeap();
let cur = 0;
for (let i = 0; i < k; i++) {
  while (cur < n && jewerly[cur][0] <= backpack[i]) {
    q.heappush(jewerly[cur++][1]);
  }
  if (q.size() > 0) {
    result += q.heappop();
  }
}
console.log(result);
