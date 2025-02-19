
let userData = {
    name:'mohanlal',
    age:21,
    course:'Software Development'
  }
  
  
  function personInfo(){
    console.log(this.name)
    console.log(this.age)
  }
  personInfo.call(userData)