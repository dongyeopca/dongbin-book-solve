//dfs
function solution(n, wires) {
  let answer = Infinity;
  for (let i = 0; i < wires.length; i++) {
    let board = Array.from(Array(n + 1), () => new Array());
    let copy_wires = [...wires];
    let visited = new Array(n + 1).fill(false);
    let cnt = 0;
    copy_wires.splice(i, 1);
    for (const item of copy_wires) {
      let [a, b] = item;
      board[a].push(b);
      board[b].push(a);
    }
    function dfs(node) {
      for (const item of board[node]) {
        if (visited[Number(item)] == false) {
          visited[Number(item)] = true;
          cnt++;
          dfs(item);
        }
      }
    }
    dfs(1);
    answer = Math.min(answer, Math.abs(n - 2 * cnt));
  }

  return answer;
}

//bfs

function solution(n, wires) {
  var answer = 100;
  let board = Array.from(Array(n + 1), () => new Array());
  for (const item of wires) {
    const [a, b] = item;
    board[a].push(b);
    board[b].push(a);
  }
  function bfs(start, exception, cnt) {
    let visited = new Array(n + 1).fill(0);
    visited[start] = 1;
    let queue = [start];
    while (queue.length > 0) {
      let node = queue.shift();
      for (const item of board[node]) {
        if (visited[item] == 0 && item != exception) {
          visited[item] = 1;
          queue.push(item);
          cnt++;
        }
      }
    }
    return cnt;
  }
  wires.map((item) => {
    const [a, b] = item;
    answer = Math.min(answer, Math.abs(n - 2 * bfs(a, b, 1)));
  });
  return answer;
}
