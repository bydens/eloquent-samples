function countBs(str) {
  var count = 0;
  var numb;
  for (var i = 0; i <= str.length; i++) {
    numb = str.length - i;
    if (str.charAt(numb) === 'B')
      count++;
  }
  return count;
}

console.log(countBs('BBC'));

function countChar(str, sibl) {
  var count = 0;
  var numb;
  for (var i = 0; i <= str.length; i++) {
    numb = str.length - i;
    if (str.charAt(numb) === sibl)
      count++;
  }
  return count;
}

console.log(countChar("kakkerlak", "k"));