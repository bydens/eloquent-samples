//----------------function arrayToList-----------------------
function arrayToList(arrVal) {
  var obj = {};

  obj.value = arrVal[0];
  obj.rest = null;

  arrVal.shift();
  if ( arrVal.length > 0 ) {
    obj.rest = arrayToList(arrVal);
  }

  return obj;
}

// console.log(arrayToList([1, 2, 3, 45]));
//----------------------------------------------------------

//----------------function prepend--------------------------
function prepend(val1, val2) {
  var obj = {};
  
  obj.value = val1;
  obj.rest = val2;

  return obj;
}

// console.log(prepend(2, prepend(1, null)));
//-----------------------------------------------------------

//--------------function listToArray-------------------------
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
            
// console.log(listToArray(list));
//------------------------------------------------------

console.log(listToArray(arrayToList([10, 20, 30])));