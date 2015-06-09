var result;
for (var i = 1; i <= 100; i++) {
  result = i;
  if (i % 3 == 0) {
    result = 'Fizz';
  }
  if (i % 5 == 0) {
    result = 'Buzz';
  }
  if (i % 3 == 0 && i % 5 == 0) {
    result = 'FizzBuzz';
  }
  console.log(result);
}