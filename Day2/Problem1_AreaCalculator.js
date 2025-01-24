function AreaCalculator(base , height){
    if(base<0 || height <0)return "Invalid Number"
    let res = (base * height)/2
    res = `The area of the triangle: ${res.toFixed(1)}`
    return res
}

console.log(AreaCalculator(base = 10,height =5))
console.log(AreaCalculator(base = 0,height =15))
console.log(AreaCalculator(base = 8,height =0))