function solution(plans) {
  var answer = [];
  const temp_stack = [];
  plans.forEach((plan, index) => {
    let [hour, minute] = plan[1].split(":");
    plans[index][1] = Number(hour) * 60 + Number(minute);
    plans[index][2] = Number(plans[index][2]);
  });
  plans.sort((a, b) => b[1] - a[1]);
  let cur_time = plans[plans.length - 1][1];
  while (plans.length) {
    if (temp_stack.length && cur_time < plans[plans.length - 1][1]) {
      let temp = temp_stack.pop();
      let rest = temp[2] - (plans[plans.length - 1][1] - cur_time);
      if (rest > 0) {
        temp[2] = rest;
        temp_stack.push(temp);
        cur_time = plans[plans.length - 1][1];
      } else {
        answer.push(temp[0]);
        cur_time = temp_stack.length
          ? cur_time + temp[2]
          : plans[plans.length - 1][1];
      }
    } else {
      let cur = plans.pop();
      if (plans.length == 0) {
        answer.push(cur[0]);
        break;
      }
      if (plans[plans.length - 1][1] - cur_time >= cur[2]) {
        cur_time = temp_stack.length
          ? cur_time + cur[2]
          : plans[plans.length - 1][1];
        answer.push(cur[0]);
      } else {
        cur[2] -= plans[plans.length - 1][1] - cur_time;
        temp_stack.push(cur);
        cur_time = plans[plans.length - 1][1];
      }
    }
  }
  while (temp_stack.length) {
    answer.push(temp_stack.pop()[0]);
  }

  return answer;
}
