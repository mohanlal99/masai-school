// Title: Brick Wall Pattern


// let arr = []
// for(let i = 0;i<5;i++){
//   let temp = []
// for(let j = 0;j<4;j++){
//   temp.push([])
  
// }
  
// arr.push(temp)
// }
// console.log(arr)


// console.log(arr)
let N = 10
for(let i =1;i<=N;i++){
  let temp = ''
  for(let j =1;j<=N;j++){
  
   if(j%2==0 && i%2==0){
     temp += '_ '
   }else{
     temp+= " "
   }
   if(j%2==1&& i%2==1){
     temp += "_ "
   }else{
     temp += " "
   }
  
  
  
  }
  console.log(temp)
}