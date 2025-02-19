// console.log("Welcome To User Management System")

async function fetchUserData(){
    let user = [
      {id:1, name:"mohanlal", email:'mohanlal@gmai.com', age:12},
      {id:2, name:"pawan", email:'pawan@gmai.com', age:52},
      {id:3, name:"ramlal", email:'ramlal@gmai.com', age:23},
      {id:4, name:"masaischool", email:'masaischool@gmai.com', age:30},
      {id:5, name:"amam", email:'aman@gmai.com', age:20},
    ]
   
    return new Promise((res)=>{
      setTimeout(function() {
        res(user)
      }, 1000);
    })
  }
  async function getData(){
    let data = await fetchUserData();
    function processUsers(users, minAge){
      let filteredUser = users.filter((item)=>item.age<=minAge)
      // console.log(filteredUser)
      let user_NE = filteredUser.map((items,index)=>{
        
        let obj = {}
        
        obj["id"] = index +1 
        obj["name"] = items.name
        obj['email'] = items.email
        
        return obj
      })
      // console.log(user_NE) 
      return function createUserManager(){
        return {
          addUser:(name,email,age)=>{
            let id = user_NE.length+1
            let obj = {id,name,email,age}
            let added = user_NE.push(obj)
          // let result = [...user_NE, ...user]
          return user_NE
        },
        getUser:()=>{
          let res = user_NE.map((items,index)=>{
            let userList = {}
            userList['id'] = index+1
            userList['name'] = items.name
            return userList
          })
          return res
        },
        findUserByName:(name)=>{
          let result = user_NE.find(items=>items.name==name)
          return result
        }
        }
      }
    }
    let user = processUsers(data,29)
    console.log("Add User")
    console.log(`user().addUser("mansi",'mansi@gmail.com',9)`)
    user().addUser("mansi",'mansi@gmail.com',9)
    user().addUser("ghanshyam",'ghanshyam@gmail.com',35)
    user().addUser("prem",'prem@gmail.com',50)
    user().addUser("lei",'lei',30)
    
    let getuser = user().getUser()
    console.log("Get user with hidden email")
    console.log(getuser)
    let findeduserbyname = user().findUserByName("prem")
    console.log("Finde user by Name")
    console.log(findeduserbyname)
    
    return data
  }
  getData() 