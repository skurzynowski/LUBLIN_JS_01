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
