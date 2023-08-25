function add(b, c) {
  return (b + c)  }

function multiply(b, c) {
  return b * c;
}
/**
 * this function calls the add() function and it substitute 
 * the value of (b+c) from the object {example 1 & example 2} 
 * it also calls the multiply() function and substitute the values 
 * (b * c) from the object {example 1 &Example 2}
 * @returns {number} 
 */
function internal( ) {
  const added = add (this.internal.c,  this.internal.c);
  const multiplied = multiply(this.internal.c , this.internal.b);
  return [added+ multiplied]
  ;
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

console.log (example1.calculate())
console.log (example2.calculate())
