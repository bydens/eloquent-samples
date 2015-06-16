function ArraySeq(array) {
  this.pos = -1;
  this.array = array;
}
ArraySeq.prototype.next = function() {
  if (this.pos >= this.array.leng - 1) {
    return false;
  }
  this.pos++;
  return true;
};
ArraySeq.prototype.current = function() {
  return this.array[this.pos];
};

function RangeSeq(from, to) {
  this.pos = from - 1;
  this.to = to;
}
RangeSeq.prototype.next = function() {
  if (this.pos >= this.to)
    return false;
  this.pos++;
  return true;
};
RangeSeq.prototype.current = function() {
  return this.pos;
};

function logFive(sequence) {
  for (var i = 0; i < 5; i++) {
    if (!sequence.next()) {
      break;
    }
    console.log(sequence.current());
  }
}


logFive(new ArraySeq([1, 2]));
// // → 1
// // → 2
logFive(new RangeSeq(100, 1000));
// // → 100
// // → 101
// // → 102
// // → 103
// // → 104

console.log('//////////////////////////////////////////////////////////');
function logFive2(sequence) {
  for (var i = 0; i < 5 && sequence != null; i++) {
    console.log(sequence.head());
    sequence = sequence.rest();
  }
}

function ArraySeq2(array, offset) {
  this.array = array;
  this.offset = offset;
}
ArraySeq2.prototype.rest = function() {
  return ArraySeq2.make(this.array, this.offset + 1);
};
ArraySeq2.prototype.head = function() {
  return this.array[this.offset];
};
ArraySeq2.make = function(array, offset) {
  if (offset == null) offset = 0;
  if (offset >= array.length)
    return null;
  else
    return new ArraySeq2(array, offset);
};

logFive2(ArraySeq2.make([1, 2]));