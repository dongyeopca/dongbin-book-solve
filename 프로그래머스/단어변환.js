function solution(begin, target, words) {
  var answer = 0;
  //한번에 하나의 알파벳만 바꿀수있음
  //즉 words안에 있는 녀석들중에서 한단어 바꿔서 점진적으로 Target으로 나아가야함.
  const visited = [];
  const queue = [[begin, 0]];
  if (!words.includes(target)) {
    return answer;
  }
  while (queue.length != 0) {
    const [v, cnt] = queue.shift();
    if (v === target) {
      return cnt;
    }

    words.forEach((word) => {
      if (!visited.includes(word)) {
        let notequal = 0;
        for (let i = 0; i < word.length; i++) {
          if (word[i] != v[i]) {
            notequal++;
          }
        }
        if (notequal == 1) {
          visited.push(word);
          queue.push([word, cnt + 1]);
        }
      }
    });
  }
  return answer;
}
