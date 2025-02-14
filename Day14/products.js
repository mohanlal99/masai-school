let products =[{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }]
function processProducts(key){
  return key.price>50?`${key.name} is above $50`:`${key.name} is below $50`
}
for(let key of products){
 console.log( processProducts(key))
}

