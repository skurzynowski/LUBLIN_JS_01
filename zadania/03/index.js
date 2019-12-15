//return
const sum = (a = 3) => a + 5
sum(5)

arr.map( el => el + 2 )

//ciało funkcji rozbudowane
(a = 3) => { return a + 5 }

//zwraca obiekt
(a = ()=>{}) => ({ value : a })

function(a = 3){
  return { value: a}
}
