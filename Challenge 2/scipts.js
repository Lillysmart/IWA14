function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}
console.log(multiply(2, 6));
console.log(add(5, 4));

function internal(a, c) {
  const added = add(1, 2);
  const multiplied = multiply(this, 2, 1);
  return [multiplied];
}

// Not allowed to change below this

const example1 = {
  internal: {
    a: 2,
    b: 4,
    c: 8,
  },
  add,
  multiply,
  calculate: internal,
};

const example2 = {
  internal: {
    a: 2,
    b: 2,
    c: 3,
  },
  add,
  multiply,
  calculate: internal,
};

example1.calculate();
example2.calculate();
