const ONES = ["I", "V", "X"];
const TENS = ["X", "L", "C"];
const HUNDREDS = ["C", "D", "M"];
const THOUSANDS = ["M"];
const PLACES_HOLDER = ["", ONES, TENS, HUNDREDS, THOUSANDS];

function toRomanNumeral(number) {
  var result = "";
  var numArray = number.toString().split("");
  var arrLength = numArray.length;
  numArray.forEach(function(num) {
    result += buildRomanNumeral(parseInt(num), PLACES_HOLDER[arrLength]);
    arrLength--;
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
  var input = parseInt(3999);
  var result = toRomanNumeral(input);
  console.log(result);
});
