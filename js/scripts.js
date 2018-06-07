const ONES = ["I", "V", "X"];
const TENS = ["X", "L", "C"];
const HUNDREDS = ["C", "D", "M"];
const THOUSANDS = ["M"];
const PLACES_HOLDER = ["", ONES, TENS, HUNDREDS, THOUSANDS];

function toRomanNumeral(input) {
  var result = "";
  var numbers = input.toString().split("");
  var placesElement = numbers.length;
  numbers.forEach(function(number) {
    result += buildRomanNumeral(parseInt(number), PLACES_HOLDER[placesElement]);
    placesElement--;
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

function displayResult(results) {
  $("#converter").hide();
  $("#results-box").fadeIn(800);
  $("#results").text(results);
}

$(document).ready(function() {
  $("#submit").click(function(e) {
    e.preventDefault();

    var input = $("#input").val();
    if (input !== "" && input < 4000 && input > 0) {
      input = parseInt(input);
      var result = toRomanNumeral(input);
    } else {
      var result = "You need to enter a value between 1 and 3999";
    }
    displayResult(result);
  });

  $("#try-again").click(function() {
    location.reload();
  });
});
