// const arr = [1,10,100];

// const iterator  =  arr[Symbol.iterator]();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

const user = {
    [Symbol.iterator]() {
        let id = 5;
        return {
            next() {
                return id < 10 ? {
                    done: false,
                    value: id++
                } : {
                    done: true,
                    value: undefined
                    }
            }
        }
    }
}

for(let item of 'user'){
  console.log(item);
}

const arr = [...user];

console.log(arr);