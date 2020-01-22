const ex1 = ["Java", "javascript", "Python", "C++"];
let ex1_result;

ex1_result = ex1.filter(function(el){
    return el.toLowerCase().includes('java');
});

console.log(ex1_result);//[ 'Java', 'javascript' ]

const ex2 = ["Java", "Javascript", "Python", "C++"];
let ex2_result;

ex2_result = ex2.map(function(el){
    return el.toUpperCase();
});

console.log(ex2_result);//[ 'JAVA', 'JAVASCRIPT', 'PYTHON', 'C++' ]

const ex3 = ["Java", "Javascript", "Python", "C++"];
let ex3_result;

ex3_result = ex3.reduce(function(sum,el){
    debugger;
    return sum + el.length;
},1);

console.log(ex3_result);//23