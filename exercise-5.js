const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const {id} = person;
let {firstName: name, lastName: surname, age:old } = person;
//const { id, name, surname, old } = person;
console.log(id, name, surname, old);