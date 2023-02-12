// function solution(s, skip, index) {
//   var answer = '';
//   let skip_charcode = skip.split('').map((e) => e.charCodeAt());
//   s.split('').forEach((value) => {
//     let counter = index;
//     let cur = value.charCodeAt();
//     while (counter > 0) {
//       //문자열이 122이상일때
//       if (cur == 122) {
//         cur -= 26;
//       }
//       if (!skip_charcode.includes(cur + 1)) {
//         counter--;
//       }
//       cur++;
//     }
//     answer += String.fromCharCode(cur);
//   });
//   return answer;
// }
function solution(s, skip, index) {
  var answer = '';
  const possible_alphabet = 'abcdefghijklmnopqrstuvwxyz'.match(new RegExp(`[^${skip}]`, 'g'));
  for (const v of s) {
    let cur = possible_alphabet.indexOf(v) + index;
    answer += possible_alphabet[cur % possible_alphabet.length];
  }
  return answer;
}
