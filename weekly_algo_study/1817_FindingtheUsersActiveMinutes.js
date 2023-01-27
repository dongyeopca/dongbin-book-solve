/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function (logs, k) {
  let users_uam = {};
  logs.map((e) => {
    let [user, time] = e;
    if (!users_uam[user]) users_uam[user] = new Set();
    users_uam[user].add(time);
  });
  const uam_list = new Array(k).fill(0);
  for (const value of Object.values(users_uam)) {
    uam_list[value.size - 1] += 1;
  }

  return uam_list;
};
//여러명의 유저가 동시에 활동 가능하며 하나의 유저는
//같은시간에 여러번 활동가능

findingUsersActiveMinutes(
  [
    [0, 5],
    [1, 2],
    [0, 2],
    [1, 3],
  ],
  5
);
