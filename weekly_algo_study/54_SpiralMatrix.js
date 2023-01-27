/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const visited = matrix.map((e) => new Array(e.length).fill(0));
  const answer = [matrix[0][0]];
  let [m, n] = [matrix.length, matrix[0].length];
  let counter = matrix.map((e) => e.length).reduce((acc, cur) => acc + cur) - 1;
  //우 하 좌 상 반복
  let direction = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let [x, y] = [0, 0];
  while (counter > 0) {
    //나선형 시작
    for (let i = 0; i < 4; i++) {
      //방향성
      while (true) {
        visited[x][y] = 1;
        let nx = x + direction[i][0];
        let ny = y + direction[i][1];
        if (-1 < nx && nx < m && -1 < ny && ny < n && visited[nx][ny] != 1) {
          [x, y] = [nx, ny];
          answer.push(matrix[x][y]);
          counter -= 1;
        } else {
          break;
        }
      }
    }
  }
  console.log(answer);
};
spiralOrder([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]);
