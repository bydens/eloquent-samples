function isEven(value) {
  if (value >= 0) {
    switch (value) {
      case 0: 
        return true;
        break;
      case 1: 
        return false;
        break;
      default:
        return isEven(value - 2);
    }
  }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));