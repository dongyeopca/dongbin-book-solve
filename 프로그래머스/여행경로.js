function solution(tickets) {
  var answer = [];
  function dfs(start, visited) {
    if (visited.length == tickets.length) {
      const moved = ["ICN"];
      visited.forEach((e) => {
        moved.push(e[1]);
      });
      answer.push(moved);
      return;
    }
    for (const ticket of tickets) {
      if (ticket[0] == start && !visited.includes(ticket)) {
        dfs(ticket[1], [...visited, ticket]);
      }
    }
  }
  //만약 항공권이 남아있고 현재 티켓의 목적지가 ICN이라면 그거 쓰면안됨 ㅇㅅㅇ
  //cur == nextticket[0]
  //answer의 길이는 tickets.length +1
  for (const i of tickets) {
    if (i[0] == "ICN") {
      dfs(i[1], [i]);
    }
  }
  answer.sort();
  console.log(answer);
  return answer[0];
}
