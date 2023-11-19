// function solution(n) {
//   var answer = 0;
//   //시작지점
//   for (let i = n; i > 0; i--) {
//     let temp = i;
//     if (temp == n) {
//       answer += 1;
//       continue;
//     }
//     for (let j = i - 1; j > 0; j--) {
//       if (temp > n) {
//         break;
//       }
//       temp += j;
//       if (temp == n) {
//         answer += 1;
//         break;
//       }
//     }
//   }
//   return answer;
// }
