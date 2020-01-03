
// (
//     (name = "default")=>{console.log(name,'test')}
// )('name')

// const add = (a,b) => a + b
// const substraction = (a,b) => a - b

// const calculator = (a, b, operations = () => {}) => {
//     const parsedA = parseFloat(a);
//     const parsedB = parseFloat(b);

//     return operations(parsedA,parsedB)
// }

// const resultAdd = calculator(4,5, add);
// const resultSub = calculator(4,5, substraction);

// debugger;

var x = 2, fns = [];

(function() {
  var x = 5;

  for (let i = 0; i < x; i++) {
    // .. dopisać kod aby równanie było prawdziwe
    fns[i] = function(){
        return i;
    }
  }
})();

console.log(x * 2 === fns[x * 2]())
debugger;