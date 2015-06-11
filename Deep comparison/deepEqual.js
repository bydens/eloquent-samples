function deepEqual(data1, data2) {
  if (data1 && data2) {
    if (typeof(data1) === 'object' && typeof(data2) === 'object') {
      for (var val1 in data1) {
        for (var val2 in data2) {
          if (typeof(data1[val1]) === 'object' && typeof(data2[val2]) === 'object') {
            deepEqual(data1[val1], data2[val2]);
console.log(typeof(data2[val2]), typeof(data1[val1]));
console.log(data2[val2], data1[val1]);
          }
          if (val2 === val1 && data2[val2] == data1[val1]) {
console.log(val1 + " = " + data1[val1], val2 + " = " + data2[val2]);
            return true;
          } else {
            return false;
          }
        }
      }
    } else {
      if (data1 === data2) return true;
      else return false;
    }
  } else {
    return 'Data not null';
  }
}

var obj = {here: {is: "an"}, object: 2};
var obj1 = {a: 3, b : 'as'};
// console.log(typeof(obj));
// console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// console.log(deepEqual(obj1, {a: 3, b : 'as'}));