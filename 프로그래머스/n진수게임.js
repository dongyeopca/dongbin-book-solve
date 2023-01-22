function solution(n, t, m, p) {
  var answer = '';
  let tern = 1;
  let ncounter = 0;

  while (true) {
    let c = ncounter.toString(n);
    for (const v of c) {
      if (tern % m == p || (m == p && tern % m == 0)) {
        answer += v;
        t -= 1;
        if (t == 0) {
          return answer.toUpperCase();
        }
      }
      tern += 1;
    }
    ncounter += 1;
  }
  return answer;
}
// function solution(n,t,m,p){
//     let number = 0;
//     let answer = "";
//     let temp = "";
//     while(answer.length<t){
//         if(temp.length<m){
//             temp+=number.toString(n).toUpperCase();
//             number++;
//         }else{
//             answer+=temp[p-1]
//             temp = temp.slice(m);
//         }
//     }
//     return answer
// }
