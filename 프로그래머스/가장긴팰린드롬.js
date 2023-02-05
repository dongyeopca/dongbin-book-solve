function solution(s) {
  var answer = 0;
  for (let i = 0; i < s.length; i++) {
    let l = i,
      r = i;
    while (r < s.length - 1 && s[r + 1] == s[i]) {
      r++;
    }
    while (l > 0 && r < s.length - 1 && s[l - 1] == s[r + 1]) {
      l--;
      r++;
    }
    answer = Math.max(answer, r - l + 1);
  }
  return answer;
}
