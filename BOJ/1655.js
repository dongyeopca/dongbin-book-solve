// const Heap = function () {
//   this.q = [];
//   this.push = function (value) {
//     this.q.push(value);
//     let cur_index = this.q.length - 1;
//     while (this.q[Math.floor((cur_index - 1) / 2)] > this.q[cur_index]) {
//       [this.q[Math.floor((cur_index - 1) / 2)], this.q[cur_index]] = [this.q[cur_index], this.q[Math.floor((cur_index - 1) / 2)]];
//       cur_index = Math.floor((cur_index - 1) / 2);
//     }
//   };
//   this.pop = function (copy) {
//     let min = copy[0];
//     [copy[0], copy[copy.length - 1]] = [copy[copy.length - 1], copy[0]];
//     copy.pop();
//     let index = 0;
//     while (copy[index * 2 + 1] != undefined && copy[index] > copy[index * 2 + 1]) {
//       let smaller = index * 2 + 1;
//       if (copy[index * 2 + 2] != undefined && copy[index * 2 + 2] > copy[smaller]) {
//         smaller = index * 2 + 2;
//       }
//       [copy[index], copy[smaller]] = [copy[smaller], copy[index]];
//       index = smaller;
//     }
//     console.log('카피', copy);
//     return min;
//   };
//   this.mid = function () {
//     return Math.floor((this.q.length - 1) / 2);
//   };
// };
// let fs = require('fs');
// let dev = true;
// let input = fs
//   .readFileSync(dev ? 'test.txt' : './dev/stdin')
//   .toString()
//   .trim()
//   .split('\n');
// let n = Number(input.shift());
// input = input.map(Number);
// const heap = new Heap();
// for (let i = 0; i < n; i++) {
//   heap.push(input[i]);
//   //뽑을떄 카피를뽑자
//   let temp = [];
//   let copy = [...heap.q];
//   for (let i = 0; i <= heap.mid(); i++) {
//     temp.push(heap.pop(copy));
//   }
//   console.log('힙상태', heap.q);
//   console.log(temp);
// }
