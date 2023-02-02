// function solution(numbers) {
//   var answer = [];
//   numbers.forEach((value, index, origin) => {
//     let flag = true;
//     for (let i = index + 1; i < numbers.length; i++) {
//       if (origin[i] > value) {
//         flag = false;
//         answer.push(origin[i]);
//         break;
//       }
//     }
//     if (flag) answer.push(-1);
//   });
//   return answer;
// }

// //자기랑 가까이 있으면서 자기보다 큰수 => "뒷큰수"
