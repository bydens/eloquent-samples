var box = {
  locked: true,
  unlock: function() { this.locked = false; },
  lock: function() { this.locked = true;  },
  _content: [],
  get content() {
    if (this.locked) {
      throw new Error("Closed!");
    }
    return this._content;
  }
};

function withBoxUnlocked(body) {
  box.unlock();
  try {
    body();
  }
  catch (e) {

  } finally {
    box.lock();
  } 
}

withBoxUnlocked(function() {
  box.content.push("gold");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Cansel!");
  });
} catch (e) {
  console.log("Error:", e);
}
console.log(box.locked);
// → true