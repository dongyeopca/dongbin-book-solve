function solution(n) {
  var ans = 0;
  //k칸 앞으로 점프하거나, *2 위치 순간이동
  //greedy
  while (n > 1) {
    if (n % 2 == 0) {
      n /= 2;
    } else {
      n -= 1;
      ans += 1;
    }
  }
  return ans + 1;
}
