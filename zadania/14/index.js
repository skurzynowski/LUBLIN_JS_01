const getPromise = () => {
    return Promise.reject({name:'test'});
};

getPromise()
  .then(res => console.log(res))
  .catch(err => console.log(err));
