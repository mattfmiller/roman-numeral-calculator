//Business Logic
function romanNumeralConverter(number) {
  var numArray = number.toString().split('').reverse();
  var numerals = ["I", "V", "X", "L", "C", "D", "M"];
  var romanNumeral = "";
  console.log(numArray);
  for (var i = 0; i < numArray.length; i++) {
    var arrayPosition = parseInt(numArray[i])
    if (arrayPosition < 4) {
      //This loop takes number 1-4 and adds appropriate number of "I"s, "X"s or "C"s
      for (var j = 0; j < arrayPosition; j++) {
        //2*i is used to shift which index in numArray is being pointed to on each pass based on ones (i=0), tens(i=1), or hundreds(i=2) place.
        romanNumeral += numerals[0 + (2*i)];
      }
    } else if (arrayPosition < 9 && arrayPosition >= 5) {
      //This loop takes number 5-9 and adds appropriate number of "I"s, "X"s or "C"s
      for (var j = 0; j < arrayPosition-5; j++) {
        romanNumeral += numerals[0 + (2*i)];
      }
      //This adds "V", "L" or "D" after "I"s, "X"s or "C"s
      romanNumeral += numerals[1 + (2*i)];
    } else if (arrayPosition === 4) {
      romanNumeral += numerals[1 + (2*i)] + numerals[0 + (2*i)];
    } else if(arrayPosition === 9) {
      romanNumeral += numerals[2 + (2*i)] + numerals[0 + (2*i)];
    }
  }
  var romanNumeralArray = romanNumeral.split("").reverse();
  var outputRomanNumeral = romanNumeralArray.join("");
  return outputRomanNumeral;
}

//User Logic
$(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#userInput").val();
    var outputString = romanNumeralConverter(userInput);
    $("#output p").text(outputString);
    $("#output").show();
  });
});
