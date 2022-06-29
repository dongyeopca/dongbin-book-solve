function solution(numbers) {
  var answer = 0;
  const candidate = new Set();
  const prime = (n) => {
    if (n < 2) {
      return false;
    } else if (n == 2) {
      return true;
    } else {
      for (let i = 2; i < Math.round(n / 2) + 1; i++) {
        if (n % i == 0) {
          return false;
        }
      }
    }
    return true;
  };
  function permutation(arr, num) {
    const res = [];
    if (num === 1) return arr.map((v) => [v]);
    arr.forEach((v, idx, arr) => {
      const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
      const permutations = permutation(rest, num - 1);
      const attach = permutations.map((permutation) => [v, ...permutation]);
      res.push(...attach);
    });
    return res;
  }
  for (let i = 1; i < numbers.length + 1; i++) {
    for (const permu of permutation(numbers.split(""), i)) {
      candidate.add(Number(permu.join("")));
    }
  }
  console.log(candidate);
  for (const candi of candidate) {
    if (prime(candi)) {
      answer++;
    }
  }
  return answer;
}
