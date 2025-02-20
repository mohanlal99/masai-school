let person = {
    name:'mohanlal',
    age:23,
    gender:'male',
    admin:null,
    address: {
      city:'Rawatsar',
      'H.NO.':23
    },
    usermark:[80,89]
    ,
    isVerify:true,
    changeName: function(name){
      this.name = name
      return name
    },
    experience:undefined
    
    
  }
  
  // console.log(person.changeName('pankaj'))
  
  function deepClone(obj){
    
    let orignalobj = obj
    let newobj  = JSON.parse(JSON.stringify(obj))
    newobj.name = 'prem kumar'
    newobj.address.city = 'hanumangarth'
    console.log(orignalobj)
    console.log(newobj)
  }
  
  deepClone(person)