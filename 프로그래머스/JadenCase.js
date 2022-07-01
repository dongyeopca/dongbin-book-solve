function solution(s) {
  var answer = "";
  s = s.toLowerCase();
  return s
    .split(" ")
    .map((e) => {
      return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
    })
    .join(" ");
}
//인덱스로 접근할시에는 연속으로 공백이 나온 케이스에서 undefined로 인하여 런타임에러 발생
//CharAt을 사용하장
