//최소공배수  const lcd = a*b/gcd(a,b)
//최대공약수 const gcd = function(a,b){if(b==0) return return gcd(b,a%b)}
function solution(arrayA, arrayB) {
  var answer = 0;
  function gcd(a, b) {
    if (b == 0) return a;
    return gcd(b, a % b);
  }
  function checker(t, c) {
    let g = t[0];
    for (let i = 1; i < t.length; i++) {
      g = gcd(g, t[i]);
    }
    if (
      c.filter((e) => {
        return e % g == 0;
      }).length != 0
    ) {
      return 0;
    } else {
      return g;
    }
  }
  answer = Math.max(checker(arrayA, arrayB), checker(arrayB, arrayA));

  return answer;
}
