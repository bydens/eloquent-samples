function range(startVal, finishVal) {
  var result = [];

  if (arguments.length !== 2 || startVal > finishVal) {
    return ' Incorrect data';
  }

  for (var i = startVal; i <= finishVal; i++) {
    result.push(i);
  }
  return result;
}

function sum(arrVal) {
  var result = 0;

  for (var i = 0; i < arrVal.length; i++) {
    result += arrVal[i];
  }
  return result;
}

console.log(sum(range(10, 15)));