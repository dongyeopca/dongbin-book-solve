function solution(fees, records) {
  let [base_time, base_fee, unit_time, unit_fee] = fees;
  //fees=[기본시간,기본요금,단위시간,단위요금]
  //records = [[입차&출차 시간,차량번호,타입],...]

  //차량 번호가 낮은순부터 리턴
  const parking = {};
  const parking_fee = {};
  const calculate_fee = (time) => {
    switch (true) {
      case time <= base_time:
        console.log('기본요금');
        return base_fee;
      case time > base_time:
        console.log('초과');
        return base_fee + Math.ceil((time - base_time) / unit_time) * unit_fee;
    }
  };
  const time_translator = (time) => {
    let [hour, minute] = time.split(':');
    return Number(hour) * 60 + Number(minute);
  };
  //차량별 입출차 기록 딕셔너리와 차량별 요금 딕셔너리 따로구분
  for (const record of records) {
    const [t, car, type] = record.split(' ');
    if (parking[car]) {
      if (parking_fee[car]) {
        parking_fee[car] += time_translator(t) - time_translator(parking[car]);
      } else {
        parking_fee[car] = time_translator(t) - time_translator(parking[car]);
      }
      delete parking[car];
      continue;
    }
    parking[car] = t;
  }
  //아직 주차장에 남아있는 차가있다면
  for (const car in parking) {
    if (parking_fee[car]) {
      parking_fee[car] += time_translator('23:59') - time_translator(parking[car]);
    } else {
      parking_fee[car] = time_translator('23:59') - time_translator(parking[car]);
    }
  }
  //요금 계산
  for (const [car, time] of Object.entries(parking_fee)) {
    parking_fee[car] = calculate_fee(time);
  }
  return Object.keys(parking_fee)
    .sort()
    .map((e) => parking_fee[e]);
}
