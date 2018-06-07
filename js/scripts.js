const ONES = ["I", "V", "X"];
const TENS = ["X", "L", "C"];
const HUNDREDS = ["X", "D", "M"];
const THOUSANDS = ["M"];
const NAMES = ["ONES","TENS"];

function toRomanNumeral(number) {
  var result = "";
  var numArray = number.split("");
  var counter = 0;
  numArray.forEach(function(num) {
    result += buildRomanNumeral(number, NAMES[counter]);
    counter++;
  });
  return result;
}

function buildRomanNumeral(number, array) {
  var answer = "";
  if ([1,2,3].includes(number)) {
    for(var i = 0; i < number; i++) {
      answer = answer.concat(array[0]);
    }
  } else if (number === 4) {
    answer = answer.concat(array[0] + array[1]);
  } else if ([5,6,7,8].includes(number)) {
    answer = answer.concat(array[1]);
    if ([6,7,8].includes(number)) {
      for(var i = 5; i < number; i++) {
        answer = answer.concat(array[0]);
      }
    }
  } else if (number === 9) {
    answer = answer.concat(array[0] + array[2]);
  }
  return answer;
}

$(document).ready(function() {
  var input = parseInt(12);
  var result = toRomanNumeral(input);
  console.log(result);
});
