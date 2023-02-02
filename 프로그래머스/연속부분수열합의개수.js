function solution(elements) {
  let sets = new Set();
  let el = [...elements, ...elements];
  //부분 수열의 길이
  for (let i = 1; i < elements.length; i++) {
    console.log('배열의길이:', i);
    //부분 수열의 시작점
    for (let start = 0; start < elements.length; start++) {
      console.log(el.slice(start, start + i));
      sets.add(
        el.slice(start, start + i).reduce((a, c) => a + c),
        0
      );
    }
  }

  sets.add(
    elements.reduce((a, c) => a + c),
    0
  );
  return sets.size;
}
