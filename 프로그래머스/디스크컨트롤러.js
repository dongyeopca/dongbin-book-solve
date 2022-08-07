function solution(jobs) {
  var answer = 0;
  let j = 0;
  let time = 0;
  jobs.sort((a, b) => a[0] - b[0]);

  const minHeap = [];
  while (j < jobs.length || minHeap.length !== 0) {
    if (jobs.length > j && time >= jobs[j][0]) {
      minHeap.push(jobs[j]);
      j++;
      minHeap.sort((a, b) => a[1] - b[1]);
      continue;
    }
    if (minHeap.length !== 0) {
      time += minHeap[0][1];
      answer += time - minHeap[0][0];
      minHeap.shift();
    } else {
      time = jobs[j][0];
    }
  }

  return parseInt(answer / jobs.length);
}
