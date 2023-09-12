function solution(players, callings) {
  let answer = {};
  let rank = {};
  players.forEach((player, idx) => {
    rank[idx] = player;
    answer[player] = idx;
  });
  callings.forEach((call) => {
    // 앞에사람
    const curIdx = answer[call];
    const forwardPlayer = rank[curIdx - 1];
    answer[call] -= 1;
    rank[curIdx - 1] = call;
    rank[curIdx] = forwardPlayer;
    answer[forwardPlayer] += 1;
  });
  return Object.values(rank);
}
