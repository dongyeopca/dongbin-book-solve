// function solution(n, paths, gates, summits) {
//   let answer = [];
//   const board = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));
//   paths.forEach((e) => {
//     let [start, end, distance] = e;
//     board[start][end] = distance;
//     board[end][start] = distance;
//   });

//   for (const gate of gates) {
//     for (const summit of summits) {
//       let visited = new Array(n + 1).fill(0);
//       var temp = [];
//       visited[gate] = 1;
//       dfs(gate, summit, visited, []);
//       visited = new Array(n + 1).fill(0);
//       visited[summit] = 1;
//       let intensity = Math.min(...temp);
//       dfs(summit, gate, visited, []);
//       answer.push([summit, intensity]);
//     }
//   }

//   function dfs(s, e, visited, intensity) {
//     for (let i = 1; i < n + 1; i++) {
//       if (board[s][i] && visited[i] == 0) {
//         if (!summits.includes(i) && !gates.includes(i)) {
//           intensity.push(board[s][i]);
//           visited[i] = 1;
//           dfs(i, e, visited, intensity);
//           intensity.pop();
//         } else if (i == e) {
//           intensity.push(board[s][i]);
//           temp.push(Math.max(...intensity));
//           intensity.pop();
//         }
//       }
//     }
//   }
//   return answer.sort((a, b) => a[1] - b[1])[0];
// }
// function solution(n, paths, gates, summits) {
//   var answer = [];
//   let board = Array.from({ length: n + 1 }, () => new Array());
//   let distance = new Array(n + 1).fill(Infinity); //[전체비용보다 단거리가 짧은거로가야함]
//   for (const path of paths) {
//     let [s, e, d] = path;
//     board[s].push([d, e]); //distance와 노드
//     board[e].push([d, s]);
//   }

//   function dijkstra(s, d) {
//     let q = [];
//     q.push([0, s]);
//     while (q.length > 0) {
//       let [intensity, node] = q.shift();
//       if (distance[node] < intensity) {
//         continue;
//       }
//       console.log('노드', node);
//       for (const next of board[node]) {
//         let [nintensity, nnode] = next;
//         nintensity = Math.max(intensity, nintensity);
//         if (!gates.includes(nnode) && !summits.includes(nnode)) {
//           if (nintensity < distance[nnode]) {
//             distance[nnode] = nintensity;
//           }
//           console.log(nnode);
//           q.push([nintensity, nnode]);
//         } else {
//           if (nnode == d) {
//             if (nintensity < distance[nnode]) distance[nnode] = nintensity;
//           }
//         }
//       }
//     }
//   }
//   dijkstra(gates[0], summits[0]);
//   console.log(distance);
//   return answer;
// }

function solution(n, paths, gates, summits) {
  var answer = [];
  let board = Array.from(Array(n + 1), () => new Array());
  for (const path of paths) {
    let [s, e, d] = path;
    board[s].push([e, d]);
    board[e].push([s, d]);
  }

  for (const summit of summits) {
    board[summit] = [];
  }

  let q = gates;
  let distance = new Array(n + 1).fill(Infinity);
  for (const g of q) {
    distance[g] = 0;
  }
  while (q.length > 0) {
    let set = new Set();
    while (q.length > 0) {
      let node = q.shift();
      for (let [next_node, next_weight] of board[node]) {
        let maxw = Math.max(next_weight, distance[node]);
        if (distance[next_node] > maxw) {
          distance[next_node] = maxw;
          set.add(next_node);
        }
      }
    }
    q = [...set];
  }
  return summits
    .map((e) => [e, distance[e]])
    .sort((a, b) => {
      if (a[1] == b[1]) return a[0] - b[0];
      return a[1] - b[1];
    })[0];
}
solution(
  6,
  [
    [1, 2, 3],
    [2, 3, 5],
    [2, 4, 2],
    [2, 5, 4],
    [3, 4, 4],
    [4, 5, 3],
    [4, 6, 1],
    [5, 6, 1],
  ],
  [1, 3],
  [5],
  [5, 3]
);
