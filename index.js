// // // 
// // let days = [30,28,29,27,25,40,45]
// // for(let i = 0;i<days.length;i++){
// // i==3&&(days[i] = days[i] + 1)
// // }
// // console.log(days)

// alert("Helo");


// // let name = prompt("Hello enter Your Name");
// function greetUser(name="Guest"){
// console.log(`Hello, ${name}!`)
// }

// greetUser()
// console.log("Frist task start")
// let work = [1,2,3,4,5]
// let newWork = []
// for(let i = 1;i<work.length;i++){
// newWork.push(work[i])
// }
// console.log(newWork)


// console.log("task second start")

// let addNewArray =  []
// let count = 0;
// for(let i = 0 ;i<=newWork.length;i++){
//   let nw = i+"newWork"
//   if(i<2&&count!=2){
//     addNewArray.push(nw)
//     count++
//     if(count==2){
//       i=0
//     }
//   }else{
//     addNewArray.push(newWork[i-1])
//   }
// }
// console.log(addNewArray)

// console.log("Last task replace with new Task")
// addNewArray[addNewArray.length -1] = "LAST Task replace"
// console.log(addNewArray)
// console.log("Thanks for reading")


function calculatePrice(product_price,discount = 10){
    if(discount > 50) return "Discount isn't Avilable"
    if(product_price<0)return "Product Price To Small"
    if(product_price > 10000) return "This product_price in not discount Avilable"
    let discount_price = (discount * product_price )/100
      product_price = product_price - discount_price // 10% discount added 
      let result = `You Got ${discount}% Discount Congrat! Product Price Is ${product_price}`
      
    return result
  }
  
  
  
  console.log(calculatePrice(5000,50))
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  