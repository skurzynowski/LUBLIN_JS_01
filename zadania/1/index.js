const arr = [ { price: 120 }, { price: 100 }, { price: 200 }];

const result = arr.reduce(
  function( colector, el ){
  return colector * el.price
},
 1
);


console.log( result );
