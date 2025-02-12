// ES6 is ECAP js version 2015 in come 
// arrow function is way of write i simple way like useing arrow key ()=>{} and function is a bolck scope code and reuseable readable and write a logic and set i fuction 
var age = 12
let displayAge = ()=>{
  var age  = 25
  function changeAge(a){ // thsi to update changeAge age
    age = a
  }
  changeAge(30);
  console.log(age) // here 30 and 
}

console.log(age) /// 12 here because outside age is 12 and printign 

displayAge() // after calling run and price updayin function


// arrow functions

// // this is one liner functions in retrun statement not requird is only retrun value direct
// // let arr = () => "Hello world!"
// // console.log(arr())

// // let Addition = (a,b)=> a+b
// // console.log(Addition([55+55] ,55))

// let Sub = (a,b)=>{
//   let c = a + b
//   return c
// }
// console.log(Sub(1,2))