function solution(numbers) {
  var answer = [];

  for (const num of numbers) {
    let bin = num.toString(2);
    let length = bin.length;
    let height = 0;
    let node = 0;
    while (true) {
      node = 2 ** (height + 1) - 1;
      if (length <= node) {
        break;
      }
      height += 1;
    }
    if (bin.length < node) {
      bin = '0'.repeat(node - bin.length) + bin;
    }
    function divide(b) {
      if (b.length == 1) {
        return b;
      }
      let root = b[Math.floor(b.length / 2)];
      let left = b.slice(0, Math.floor(b.length / 2));
      let right = b.slice(Math.floor(b.length / 2) + 1);
      let lresult = divide(left);
      if (!lresult || (root == '0' && lresult == '1')) {
        return false;
      }
      let rresult = divide(right);
      if (!rresult || (root == '0' && rresult == '1')) {
        return false;
      }
      return root;
    }

    if (!divide(bin)) {
      answer.push(0);
      continue;
    }

    answer.push(1);
  }

  return answer;
}
