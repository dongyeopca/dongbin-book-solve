function solution(lines) {
  var answer = 0;
  let start_time = [];
  let end_time = [];
  function gettime(time) {
    let [hour, minute, sec] = time.split(":");
    hour = Number(hour) * 3600;
    minute = Number(minute) * 60;
    sec = Number(sec);
    return hour + minute + sec;
  }
  function get_start(time, load) {
    return gettime(time) - Number(load.slice(0, load.length - 1)) + 0.001;
  }
  for (const i of lines) {
    const [a, b, c] = i.split(" ");
    start_time.push(get_start(b, c));
    end_time.push(gettime(b));
  }

  for (let i = 0; i < lines.length; i++) {
    let count = 1;
    let cur = end_time[i];
    for (let j = i + 1; j < lines.length; j++) {
      if (end_time[i] > start_time[j] - 1) {
        count++;
      }
    }
    answer = Math.max(count, answer);
  }
  return answer;
}
