const items = [
    { name: 'Shirt', category: 'Clothing' },
    { name: 'Jeans', category: 'Clothing' },
    { name: 'Laptop', category: 'Electronics' },
    { name: 'Phone', category: 'Electronics' }
  ];
  let result = items.reduce((acc,item)=>{
    if(!acc[item.category]){
      acc[item.category] = []
    }
    acc[item.category].push(item)
    return acc
  },{})
  console.log(result)
  
  // let arr = [1,2,3,4,5]
  // let result = arr.reduce((acc,curr)=>acc*curr)
  // console.log(result)
  
  // let result = arr.reduce((c,a)=>{
  //   return c+a
  // })
  // console.log(result)
  
  // let newarr = arr.map((key,index)=>{
  //   // console.log(arr)
  //   return arr[arr.length-index-1]
  //   })
  //   console.log(newarr)
  //   console.log("for")
  // let newfor = arr.forEach((index,key)=>{
  //   return index
  //   })
  // console.log(newfor)
  
  
  
  
  
  
  
  // // function closerFunction(){
  // //   let count = 0
  // //   return function(){
  // //     return ++count
  // //   }
  // // }
  
  // // let res = closerFunction();
  // // console.log(res());
  
  // // let c = 1
  
  // // console.log(c++)
  
  
  // // function outerFunction(){
  // //   let a=5;
  // //   function innerFuntion(){
  // //     console.log(a)
  // //   }
  // //   innerFuntion();
  // // }
  // // outerFunction();
  
  
  // let HandleInnerFuntion = (function IIFE(){
  //   let a=4,b=20;
  //   return function innerFuntion(){
  //     return a+b
  //   }
  // })()
  // let res = HandleInnerFuntion()
  // console.log(res)