// function solution(info, query) {
//   let dataCenter = {};
//   let answer = [];
//   for (const person of info) {
//     let parr = person.split(' ');
//     let score = parseInt(parr.pop());
//     const dfs = (arr, depth) => {
//       if (depth == 4) {
//         let key = arr.join(' and ');
//         dataCenter[key] ? dataCenter[key].push(score) : (dataCenter[key] = [score]);
//         return;
//       }
//       dfs([...arr], depth + 1); //선택하는경우
//       arr[depth] = '-';
//       dfs([...arr], depth + 1); //선택안하는경우
//     };
//     dfs(parr, 0);
//   }
//   for (let choose of query) {
//     let chooseArr = choose.split(' ').filter((e) => e != 'and');
//     let score = chooseArr.pop();
//     choose = chooseArr.join(' and ');
//     if (dataCenter[choose]) {
//       dataCenter[choose].sort((a, b) => a - b);
//       let start = 0;
//       let end = dataCenter[choose].length - 1;
//       let index;
//       while (start <= end) {
//         let mid = Math.floor((start + end) / 2);
//         if (dataCenter[choose][mid] >= score) {
//           index = mid;
//           end = mid - 1;
//         } else {
//           start = mid + 1;
//         }
//       }
//     } else {
//       answer.push(0);
//     }
//   }
//   return answer;
// }
// solution(
//   [
//     'java backend junior pizza 150',
//     'python frontend senior chicken 210',
//     'python frontend senior chicken 150',
//     'cpp backend senior pizza 260',
//     'java backend junior chicken 80',
//     'python backend senior chicken 50',
//   ],
//   [
//     'java and backend and junior and pizza 100',
//     'python and frontend and senior and chicken 200',
//     'cpp and - and senior and pizza 250',
//     '- and backend and senior and - 150',
//     '- and - and - and chicken 100',
//     '- and - and - and - 150',
//   ]
// );
const makeKey = (infos) => {
  const Obj = {};
  for (const info of infos) {
    let arr = info.split(' ');
    let score = parseInt(arr.pop());
    let key = arr.join('');
    Obj[key] ? Obj[key].push(score) : (Obj[key] = [score]);
  }
  for (const key in Obj) {
    Obj[key].sort((a, b) => a - b);
  }
  return Obj;
};

const boundUpper = (arr, target) => {
  let start = 0;
  let end = arr.length;
  let index = -1;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] >= target) {
      index = mid;
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  // console.log(arr,target)
  // console.log(index)
  if (index == -1) {
    return arr.length;
  }
  return index;
};
const getResult = (info, query, score) => {
  let possible = Object.keys(info).filter((key) => query.every((e) => key.includes(e)));
  // possible.forEach(e=>info[e].sort((a,b)=>a-b));
  let answer = 0;
  possible.forEach((e) => (answer += info[e].length - boundUpper(info[e], score)));
  return answer;
};

function solution(info, query) {
  var answer = [];
  const Obj = makeKey(info);
  query
    .map((q) => q.split(/and| |-/i).filter((e) => e != ''))
    .forEach((e) => {
      let score = parseInt(e.pop());
      let result = getResult(Obj, e, score);
      answer.push(result);
    });
  return answer;
}
