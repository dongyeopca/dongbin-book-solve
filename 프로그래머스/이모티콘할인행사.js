// 완탐
//정렬순서는 가입자,그다음 판매액 순으로 정렬

//할인율은 10,20,30,40% 중 하나
// 자신의 기준에따라 일정 비율 이상 할인하는 이모티콘 모두 구매 but 구매 비용이 일정가격 이상이 되면 플러스 가입

// 이모티콘별 할인율 10,20,30,40 적용해봄
// 모든 경우별로 이모티콘 플러스 가입여부,이모티콘 판매액 조사

function solution(users, emoticons) {
  var answer = [];
  const n = users.length;
  const m = emoticons.length;
  //users [구매 할인율, 이모티콘 플러스 구독 여부 금액]

  let discountRate = [10, 20, 30, 40];
  let discount = [];

  const recursion = function (temp, index) {
    if (index == m) {
      discount.push([...temp]);
      return;
    }
    discountRate.forEach((e) => {
      temp[index] += e;
      recursion(temp, index + 1);
      temp[index] -= e;
    });
  };
  recursion(Array(m).fill(0), 0);
  //할인율 모든 경우의 수가 담긴 discount 배열
  discount.forEach((d, di) => {
    //d경우에 유저별 판매액수 기록
    let [subscribe, sales] = [0, Array(n).fill(0)];
    emoticons.forEach((e, ei) => {
      users.forEach((u, ui) => {
        if (u[0] <= d[ei]) {
          sales[ui] += (e * (100 - d[ei])) / 100;
        }
      });
    });
    sales.forEach((s, si) => {
      if (s >= users[si][1]) {
        sales[si] = 0;
        subscribe += 1;
      }
    });
    answer.push([subscribe, sales.reduce((a, c) => a + c, 0)]);
  });
  answer.sort((a, b) => b[1] - a[1]).sort((a, b) => b[0] - a[0]);
  return answer[0];
}
