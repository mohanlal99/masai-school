let person = {
    name:'mohanlal',
    age:20,
    displayInfo(){
      console.log(this.name,this.age)
    }
  }
  
  let person1 = {
    name:'lalu'
    ,age:22
  }
  let res = person.displayInfo.bind(person1) // bind to help any object data send and use in display
  res()