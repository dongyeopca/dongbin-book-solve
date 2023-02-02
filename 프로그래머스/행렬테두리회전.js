function solution(rows, columns, queries) {
  const map = [];
  let n = 1;
  for (let i = 0; i < rows; i++) {
    let temp = [];
    for (let j = 0; j < columns; j++) {
      temp.push(n);
      n++;
    }
    map.push(temp);
  }
  console.log(map);
  const rotation = function (query) {
    let [top, left, bottom, right] = query.map((e) => e - 1);
    let temp = [];
    for (let r = left; r < right; r++) {
      if (temp.length == 1) {
        temp.push(map[top][r + 1]);
        map[top][r + 1] = temp.shift();
      } else {
        temp.push(map[top][r + 1]);
        map[top][r + 1] = map[top][r];
      }
    }
    console.log(temp);
    for (let l = top; l < bottom; l++) {
      temp.push(map[l + 1][right]);
      map[l + 1][right] = temp.shift();
    }
    for (let r = right; r > left; r--) {
      temp.push(map[bottom][r - 1]);
      map[bottom][r - 1] = temp.shift();
    }
    for (let l = bottom; l > top; l--) {
      temp.push(map[l - 1][left]);
      map[l - 1][left] = temp.shift();
    }
  };
  queries.forEach((e) => rotation(e));
  n=0;
  for(let i=0; i<rows; i++){
    for(let j=0; j<columns; j++){
        if(board[i][j]!=n) answer.push(n)
        n++
    }
  }
}

solution(6, 6, [
  [2, 2, 5, 4],
  [3, 3, 6, 6],
  [5, 1, 6, 3],
]);
