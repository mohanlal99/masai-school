let names = ["Charlie", "Alice", "Bob"]

function sortNames(namesArray){
  namesArray.sort((a,b)=>{
    return a.localeCompare(b)
  })
  console.log(namesArray)
}

sortNames(names)