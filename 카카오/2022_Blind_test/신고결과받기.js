function solution(id_list, report, k) {
  var answer = [];
  let users = {};
  for (const id of id_list) {
    users[id] = 0;
  }
  let reported_user = {};
  //{'신고된유저':set{'신고한 유저'}}
  for (const re of report) {
    const [reporter, reported] = re.split(' ');
    if (reported_user[reported]) {
      reported_user[reported].add(reporter);
    } else {
      reported_user[reported] = new Set([reporter]);
    }
  }

  for (const reported of Object.keys(reported_user)) {
    if (reported_user[reported].size >= k) {
      reported_user[reported].forEach((e) => {
        users[e] += 1;
      });
    }
  }
  for (const count of Object.values(users)) {
    answer.push(count);
  }
  return answer;
}
