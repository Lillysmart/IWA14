let firstName = 'John';
let age = 35;
 let hobby = 'Coding';

const logTwice = (parameter) => {
  console.log(parameter)
  console.log(parameter)
}

function hobbies () {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`)
  
}
hobbies()
