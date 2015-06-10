var row = 8, collumn = 8, result = '', count = 1, mark = '.';

for (var i = 1; i <= collumn; i++) {
  for (var j = 1; j <= row; j++) {
    if (mark == '.') {
      mark = '#';
    } else {
      mark = '.';
    }
    result += mark;
  }
  result += '\n';
  if (mark == '.') {
    mark = '#';
  } else {
    mark = '.';
  }
}

console.log(result);