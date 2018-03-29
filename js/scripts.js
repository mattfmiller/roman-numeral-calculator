function romanNumeralConverter(number) {
  var numerals = ["I", "V", "X", "L", "C", "D", "M"];
  var romanNumeral = "";
  var numArray = number.toString().split('').reverse();
  console.log(numArray);
  for (var i = 0; i < numArray.length; i++) {
    if (parseInt(numArray[i]) < 4) {
      for (var j = 0; j < parseInt(numArray[i]); j++) {
        romanNumeral += numerals[0];
      }
    } else if (parseInt(numArray[i]) < 9 && parseInt(numArray[i]) >= 5) {
      romanNumeral += numerals[1];
      for (var j = 0; j < parseInt(numArray[i])-5; j++) {
        romanNumeral += numerals[0];
      }
    } else if (parseInt(numArray[i]) === 4) {
      romanNumeral += numerals[0] + numerals[1];
    } else if(parseInt(numArray[i]) === 9) {
      romanNumeral = numerals[0] + numerals[2];
    } else if (number[i] === 10) {
      return "X";
    } else if (number === 50) {
      return "L";
    } else if (number === 100) {
      return "C";
    } else if (number === 500) {
      return "D";
    } else if (number === 1000) {
      return "M";
    }
  }
  console.log(romanNumeral);
}
