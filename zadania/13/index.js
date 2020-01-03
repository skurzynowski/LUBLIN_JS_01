// function * generator(){
//       yield 'ala ma kota';
// }


// const it = generator();
// // const res = it.return('kot ma ale');
// const res = it.throw('kot ma ale');

   //kod z poprzedniego zadania
   function * sum(){
     const a = yield;
     const b = yield;
     const result = a + b;

     yield result;
   }

   const it = sum();
   it.next(40);
   it.next(2);

   const res = it.next();
   console.log(res);
