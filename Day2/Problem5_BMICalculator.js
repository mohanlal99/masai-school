function Problem5_BMICalculator(W, H){
    
    if(H < 0 || W<0){
        return "Invalid input, height and weight must be positive numbers."
    }
    let BMI = W/(H*H) // weight /(height * height)
    return `Your BMI is: ${BMI.toFixed(2)}`
}
console.log(Problem5_BMICalculator(70,1.75))
console.log(Problem5_BMICalculator(55,1.60))
console.log(Problem5_BMICalculator(90,1.80))