// const arr = ['Seba','Don'];

// const [ name, surname ] = arr;

const user = { data:  {year: 1989}};

const { data: {year} } = user;


console.log(year);

const user = { actor : { name:'Bruce', surname: 'Willis' } };

const { actor : { name : superName, surname: superSurame } } = user;

debugger;