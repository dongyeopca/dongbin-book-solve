function solution(msg) {
  var answer = [];
  const dict = new Map();
  for (let i = 65; i < 91; i++) {
    dict.set(String.fromCharCode(i), i - 64);
  }

  loop1: while (true) {
    let temp = '';
    for (const m of msg) {
      if (dict.has(temp + m)) {
        temp += m;
        continue;
      }
      answer.push(dict.get(temp));
      dict.set(temp + m, dict.size + 1);
      msg = msg.slice(temp.length);
      continue loop1;
    }
    if (temp.length) {
      //있는데 루프가 종료된거
      answer.push(dict.get(temp));
      break;
    }
  }

  return answer;
}
