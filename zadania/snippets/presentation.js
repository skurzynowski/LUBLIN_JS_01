const arr = [1, 5, 4];
const result = arr.filter( (el) => {return el > 1} );
result.filter((el) => {return true})
console.log( result );

const arr = [
{ price: 120 },
{ price: 100 },
{ price: 200 }];
const result = arr.reduce(function( colector, el ){
  return colector + el.price
}, 0);
console.log( result );

const obj = { props: "asd", user : {name : 'Seba'} };

const g = "";
const {
  user : { name : surname = 'K.' }
  ...(g && {id:g})
 } = obj;
const {props, ...obj1} = obj;
console.log(obj1)
console.log(name);




const obj = {value : 5, arr : ['1','2']};

const obj2 = { ...obj, arr :[...obj.arr] };

obj2.arr[0] = 8;

obj.arr[0] = 100;

console.log(obj);
console.log(obj2);

const name = "Seba poza funkcją";

function print(str){
  const name = "Seba w funkcji";
  console.log( str );
}

print( `  testNumber ${name} ` );



const name = "Seba poza funkcją";

function print(str,...rest){
    console.log(str, rest);

    return 'test'
}

console.log(print`  testNumber ${name} tył`);


function upper(strings,...values) {
  return strings.map((el, i)=>{
    return el + (values[i] ? values[i].toUpperCase() : '')
  }).join('');
}

var name = "kyle",
	twitter = "getify",
	classname = "es6 workshop";

console.log(
	upper`Hello ${name} (@${twitter}), welcome to the ${classname}!`
  ===
	"Hello KYLE (@GETIFY), welcome to the ES6 WORKSHOP!"
);

class User{}
class Admin extends User {
  constructor( access ){
    super();
    this.access = access;
  }
}

const obj = new Admin(5);

console.log(obj);

// class Promise{
//   static resolve(){}
//   static reject(){}
// }

const getPr = ( ) => {
  return new Promise((res,rej)=>{
    setTimeout( ()=>{
      rej( 'pr' );
    },1000 );
  });
}
const getPr2 = ( ) => {
  return new Promise((res,rej)=>{
    setTimeout( ()=>{
      res( 'pr 2' );
    },2000 );
  });
}
const getPr3 = ( ) => {
  return new Promise((res,rej)=>{
    setTimeout( ()=>{
      res( 'pr 3' );
    },3000 );
  });
}

// Promise.all([ getPr(),getPr2(),getPr3()])
// .then( data => console.log( data ) )

Promise.race([ getPr(),getPr2(),getPr3()])
.then( data => console.log( data ) )
.catch(err => console.log('sss',err));



function* createId(){
  let counter = 0;
   while(true){
     yield counter;
     counter++;
   }
}

const moja = createId();
console.log(moja.next().value);
console.log(moja.next());
console.log(moja.next());



function* createId(){
  let counter = yield;
  console.log(counter);
}

const moja = createId();
console.log(moja.next());
console.log(moja.next('warotść'));
