//Business Logic
function romanNumeralConverter(number) {
  var numArray = number.toString().split('').reverse();
  var numerals = ["I", "V", "X", "L", "C", "D", "M"];
  var romanNumeral = "";
  console.log(numArray);
  for (var i = 0; i < numArray.length; i++) {
    if (parseInt(numArray[i]) < 4) {
      for (var j = 0; j < parseInt(numArray[i]); j++) {
        romanNumeral += numerals[0 + (2*i)];
      }
    } else if (parseInt(numArray[i]) < 9 && parseInt(numArray[i]) >= 5) {
      for (var j = 0; j < parseInt(numArray[i])-5; j++) {
        romanNumeral += numerals[0 + (2*i)];
      }
      romanNumeral += numerals[1 + (2*i)];
    } else if (parseInt(numArray[i]) === 4) {
      romanNumeral += numerals[1 + (2*i)] + numerals[0 + (2*i)];
    } else if(parseInt(numArray[i]) === 9) {
      romanNumeral += numerals[2 + (2*i)] + numerals[0 + (2*i)] ;
    }
  }
  var romanNumeralArray = romanNumeral.split("").reverse();
  var outputRomanNumeral = romanNumeralArray.join("");
  console.log(outputRomanNumeral);
}

//
