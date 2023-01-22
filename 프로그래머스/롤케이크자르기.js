function solution(topping) {
  var answer = 0;
  let toping = new Set(topping).size;
  // let toping = 0
  const dict = {};
  for (const i of topping) {
    dict[i] ? (dict[i] += 1) : (dict[i] = 1);
    // if(dict[i]){
    //     dict[i]+=1
    // }else{
    //     dict[i]=1;
    //     toping+=1
    // }
  }
  const chulsu = new Set();
  for (const t of topping) {
    chulsu.add(t);
    dict[t] -= 1;
    if (dict[t] == 0) {
      delete dict[t];
      toping -= 1;
    }
    if (chulsu.size == toping) answer += 1;
  }
  return answer;
}

//동일한 가짓수의 토핑이 올라가면 공평한걸로 추정
