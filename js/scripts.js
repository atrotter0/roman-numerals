function toRomanNumeral(number) {
  var answer = "";
  if ([1,2,3].includes(number)) {
    for(var i = 0; i < number; i++) {
      answer = answer.concat("I");
    }
  } else if (number === 4) {
    answer = answer.concat("IV");
  } else if ([5,6,7,8].includes(number)) {
    answer = answer.concat("V");
    if ([6,7,8].includes(number)) {
      for(var i = 5; i < number; i++) {
        answer = answer.concat("I");
      }
    }
  } else if (number === 9) {
    answer = answer.concat("IX");
  }
  return answer;
}

$(document).ready(function() {
  var input = parseInt(9);
  var result = toRomanNumeral(input);
  console.log(result);
});
