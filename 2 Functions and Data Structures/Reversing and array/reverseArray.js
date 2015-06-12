function reverseArray(arrVal) {
  var result = [];
  for (var i = arrVal.length - 1 ; i >= 0; i--) {
    result.push(arrVal[i]);
  }
  return result;
}

var arr1 = ["A", "C", "D", "F", "E"];
console.log(reverseArray(arr1));

function reverseArrayInPlace(arrRev) {
  var result = [];
  result[0] = arrRev[0];

  for (var i = 0; i < arrRev.length; i++) {
    for (var j = result.length; j >= 0 ; j--) {
      if (result[j] < arrRev[i]) {
        // result[0] = arrRev[i];
        result.unshift(arrRev[i]);
        // result.push(arrRev[i]);
        // break;
       } 
    }
    // console.log(result.length);
  }
  return result;
}


var arr2 = [1, 2, 13, 4, 5, 6];
console.log(reverseArrayInPlace(arr2));