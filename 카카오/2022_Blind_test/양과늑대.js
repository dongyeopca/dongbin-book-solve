function solution(info, edges) {
  let answer = 0;
  const array = new Array(info.length).fill(0).map((e) => new Array());
  for (const i of edges) {
    array[i[0]].push(i[1]);
  }
  function dfs(node, sheep, wolf, next) {
    if (info[node] == 0) {
      sheep += 1;
    } else {
      wolf += 1;
    }
    if (wolf >= sheep) {
      return;
    } else {
      answer = Math.max(answer, sheep);
    }
    next.push(...array[node]);
    console.log(next);
    for (let i = 0; i < next.length; i++) {
      const f = [...next];
      f.splice(i, 1);
      dfs(next[i], sheep, wolf, f);
    }
  }
  dfs(0, 0, 0, []);
  return answer;
}
