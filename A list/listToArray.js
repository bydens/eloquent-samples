//-----------------------function listToArray---------
var arr = [];
function listToArray(objVal) {
  for (var value in objVal) {
    if (value == 'value')
      arr.push(objVal[value]);
    if (value == 'rest' && objVal[value]) {
      listToArray(objVal[value]);
    }
  }
  return arr;
}

var list = { value: 1,
              rest: { 
                value: 2, 
                rest: { 
                  value: 3, 
                  rest: null 
                }
              }
            };

console.log(listToArray(list));
//-------------------------------------------------------

//--------------function nth-----------------------------
function nth(arrVal, index) {
  var result;
  if (arrVal[index]) {
    result = arrVal[index];
  }
  return result;
}

console.log(nth(listToArray(list), 1));
console.log(nth(listToArray(list), 10));