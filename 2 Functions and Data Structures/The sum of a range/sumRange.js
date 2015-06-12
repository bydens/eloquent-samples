function range(startVal, finishVal, step) {
  var result = [];
  var count = 1;

  if (isNaN(step)) step = 1;

  if (arguments.length < 2 || arguments.length > 3 || startVal > finishVal) {
    return ' Incorrect data';
  }

  if (step > 0) {
    for (var i = startVal; i <= finishVal; i++) {
      if (step == 1 || count % step !== 0) result.push(i);
      count++;
    }
  } else {
    for (var j = finishVal; j >= startVal; j--) {
      if (step == 1 || step == -1 || count % step !== 0) result.push(j);
      count++;
    }
  }

  return result;
}

console.log(range(1, 10, -2));
console.log(range(2, 5, -1));

function sum(arrVal) {
  var result = 0;

  for (var i = 0; i < arrVal.length; i++) {
    result += arrVal[i];
  }
  return result;
}

console.log(sum(range(10, 15)));
console.log(sum(range(1, 10, 2)));
console.log(sum(range(1, 10, -2)));