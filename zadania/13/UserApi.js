export const getUser = () => {
  return new Promise((res, rej)=>{
    if( Date.now() % 2 === 0 ){
      setTimeout(()=>{
        res({name: 'Grzegorz', surname : 'Bratnik'});
      },3000)
    }else{
      return rej('Error in server');
    }
  })
}
