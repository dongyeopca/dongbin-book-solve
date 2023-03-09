function solution(arr) {
  var answer = { 0: 0, 1: 0 };
  //박스사이즈와 시작점
  const recursion = (size, start) => {
    let [x, y] = start;
    if (size == 1) {
      answer[arr[x][y]] += 1;
      return;
    }
    let cur = arr[x][y];
    let flag = true;
    for (const row of arr.slice(x, x + size)) {
      if (row.slice(y, y + size).filter((e) => e != cur).length) {
        flag = false;
        break;
      }
    }
    if (flag) {
      answer[cur] += 1;
      return;
    }
    // console.log('어레이',arr.slice(x,x+size).map(e=>{return e.slice(y,y+size)}))

    recursion(size / 2, [x, y]); //1
    recursion(size / 2, [x, y + size / 2]); //2
    recursion(size / 2, [x + size / 2, y]); //3
    recursion(size / 2, [x + size / 2, y + size / 2]); //4
  };
  recursion(arr.length, [0, 0]);
  return [answer[0], answer[1]];
}
