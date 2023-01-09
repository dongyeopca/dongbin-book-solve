const makeTrie = function (root, word) {
  cur_node = root;
  for (const letter of word) {
    cur_node[0] += 1;
    if (!cur_node[1][letter]) {
      cur_node[1][letter] = [0, {}];
    }
    cur_node = cur_node[1][letter];
  }
  cur_node[0] += 1;
};

const countTrie = function (root, word) {
  cur_node = root;
  counting = 0;
  for (const letter of word) {
    if (cur_node[0] == 1) {
      return counting;
    }
    counting += 1;
    cur_node = cur_node[1][letter];
  }
  return counting;
};

function solution(words) {
  var answer = 0;
  let root = [0, {}];
  for (const word of words) {
    makeTrie(root, words);
  }
  for (const word of words) {
    answer += countTrie(root, word);
  }

  return answer;
}
