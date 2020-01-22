// const arr = [1,2,3];

// const arr2 = [4,5,6];

// const newArr = [ ...arr, ...arr2, 1000, 4343 ];

// const user = { name: 'Robert', surname: 'placeholder' };

// const admin = {surname: 'Don',...user };

function calculate(arg = '', ...container){
    console.log(container);
}

calculate(1);
calculate(1,2);
calculate(1,5,4,5,6);

debugger;