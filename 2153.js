let fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().trim();
let answer = 0;
function prime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}

for (let i = 0; i < input.length; i++) {
  let ascii = input.charCodeAt(i);
  if (ascii < 97) {
    answer += ascii - 65 + 27;
  } else {
    answer += ascii - 96;
  }
}
if (prime(answer)) {
  console.log("It is a prime word.");
} else {
  console.log("It is not a prime world.");
}
