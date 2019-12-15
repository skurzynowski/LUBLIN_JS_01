function upper(strings,...values) {
  return strings.map((el, i)=>{
    return el + values[i] ? values[i].toUpperCase() : ''
  }).join('');
}

var name = "kyle",
	twitter = "getify",
	classname = "es6 workshop";

console.log(
	upper`Hello ${name} (@${twitter}), welcome to the ${classname}!` ===
	"Hello KYLE (@GETIFY), welcome to the ES6 WORKSHOP!"
);



function getPromise(){
  return new Promise(( res, rej )=>{
      setTimeout(()=>{
         // res({ name : 'Seba' });
         rej({ name : 'Seba' });
      },
      2000
    )
  });
}

const obj = {
  [a]:'jjj'
}

getPromise()
.then( data => data );
.then( data => console.log('fsdfsdfsd',data) )
.catch( err => console.log('error', err) );



function* createId(){
  yield* ['Seba','Kamil'];
}

const moja = createId();
console.log(moja.next());
console.log(moja.next());
console.log(moja.next());

//https://app.pluralsight.com/library/courses/rapid-es6-training/table-of-contents


//https://app.pluralsight.com/library/courses/nodejs-advanced/table-of-contents
//https://app.pluralsight.com/library/courses/javascript-development-environment/table-of-contents
