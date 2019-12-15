(name => {
  console.log(name);
})("Seba");

const calculate = ( a, b, operationClb ) => {
  let parsA = parseFloat(a);
  let parsB = parseFloat(b);

  return (c) => operationClb( parsA, parsB, c );
}

const add = ( a, b) => a + b ;
const substraction = ( a, b, c) => a - b - c ;

const result = calculate(4,'6', substraction);

console.log(result(10));
