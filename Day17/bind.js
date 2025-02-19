
let user = {
    name:"mohanlal",
    age:21,
    gender:'male'
  }
  
  function setTimeoutGreeting(nam){
    console.log('Hello!', nam)
  }
  
  let obj = setTimeoutGreeting.bind(null,'mohanlal')
  obj()