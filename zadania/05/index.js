const obj = { props: "asd", user : {name : 'Seba'} };

const g = "";
const { 
  user : { name : surname = 'K.' }
  ...(g && {id:g})
 } = obj;
const {props, ...obj1} = obj;
console.log(obj1)
console.log(name);
// console.log(user);
