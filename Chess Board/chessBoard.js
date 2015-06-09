var row = 8, collumn = 8, result = '#', count = 1;

for (var i = 2; i <= row * collumn; i++) {
  if (i % 2 == 0) {
    result += '.';
  } else {
    result += '#';
  }
  count++;
  if (count == row) {
    result += '\n';
    count = 0;
  }
  if (i % row == 0 && i % (2 * row) != 0) {
    result += '.';
  }
}

console.log(result);