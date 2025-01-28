function Temprature(array){
    if(array.length < 4) return "Not valid array"
    for (let i = 0; i < array.length; i++) {
        if(i==4){
            array[i] = array[i] + 2
        }
        
    }
    return array
    
}

console.log(Temprature([25,28,32,33,37,43,49]))