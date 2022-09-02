function solution(survey, choices) {
  var answer = "";
  const type = {
    RT: { R: 0, T: 0 },
    CF: { C: 0, F: 0 },
    JM: { J: 0, M: 0 },
    AN: { A: 0, N: 0 },
  };
  for (let i = 0; i < survey.length; i++) {
    if (survey[i] == "RT" || survey[i] == "TR") {
      if (choices[i] < 4) {
        type.RT[survey[i][0]] += Math.abs(4 - choices[i]);
      } else {
        type.RT[survey[i][1]] += choices[i] - 4;
      }
    } else if (survey[i] == "CF" || survey[i] == "FC") {
      if (choices[i] < 4) {
        type.CF[survey[i][0]] += Math.abs(4 - choices[i]);
      } else {
        type.CF[survey[i][1]] += choices[i] - 4;
      }
    } else if (survey[i] == "JM" || survey[i] == "MJ") {
      if (choices[i] < 4) {
        type.JM[survey[i][0]] += Math.abs(4 - choices[i]);
      } else {
        type.JM[survey[i][1]] += choices[i] - 4;
      }
    } else {
      if (choices[i] < 4) {
        type.AN[survey[i][0]] += Math.abs(4 - choices[i]);
      } else {
        type.AN[survey[i][1]] += choices[i] - 4;
      }
    }
  }
  for (const i in type) {
    if (type[i][i[0]] >= type[i][i[1]]) {
      answer += i[0];
    } else {
      answer += i[1];
    }
  }
  return answer;
}

// 깔끔하게
function solution(survey, choices) {
  var answer = "";
  //dictionary
  const MBTI = {};
  const type = ["RT", "CF", "JM", "AN"];
  for (const i of type) {
    i.split("").map((e) => (MBTI[e] = 0));
  }
  for (let i = 0; i < survey.length; i++) {
    const [disagree, agree] = survey[i].split("");
    MBTI[choices[i] < 4 ? disagree : agree] += Math.abs(choices[i] - 4);
  }
  for (const i of type) {
    MBTI[i[0]] >= MBTI[i[1]] ? (answer += i[0]) : (answer += i[1]);
  }
  return answer;
}
