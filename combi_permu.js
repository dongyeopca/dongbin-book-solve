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

function combination(arr, num) {
  const res = [];
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const rest = arr.slice(idx + 1);
    const combinations = combination(rest, num - 1);
    const attach = combinations.map((combination) => [v, ...combination]);
    res.push(...attach);
  });
  return res;
}

console.log(combination([1, 2, 3, 4], 4));
