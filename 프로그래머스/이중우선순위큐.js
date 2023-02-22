// function solution(operations) {
//   var answer = [];
//   for (const item of operations) {
//     const [order, number] = item.split(" ");
//     if (order === "I") {
//       answer.push(number);
//       answer.sort((a, b) => a - b);
//       continue;
//     }
//     if (order === "D") {
//       if (number === "1") {
//         answer.pop();
//       } else {
//         answer.shift();
//       }
//     }
//   }
//   if (answer.length == 0) {
//     answer = [0, 0];
//   } else {
//     answer = [Math.max(...answer), Math.min(...answer)];
//   }
//   return answer;
// }
function solution(operations) {
  let q = [];
  for (const oper of operations) {
    let [order, number] = oper.split(' ');
    number = parseInt(number);
    switch (order) {
      case 'I':
        q.push(number);
        q.sort((a, b) => a - b);
        break;
      case 'D':
        if (!q.length) continue;
        number == -1 ? q.shift() : q.pop();
        break;
    }
  }
  if (q.length) return [q[q.length - 1], q[0]];
  return [0, 0];
}
