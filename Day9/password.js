function generatePassword(length,includeNumbers=true,includeSpecialChars=true){
let abc = 'abcdefghijklmnopqrstuvwxyz'
let inNum = '1234567890'
let inChar = '~!@#$%^&*'
let pool = `${abc}${abc.toUpperCase()}${includeNumbers&&inNum}${includeSpecialChars&&inChar}`
let maxlength = length ;
let paaswrod = []

if(includeSpecialChars){
    paaswrod.push(inChar[Math.floor(Math.random()*inChar.length)])

}
if(includeNumbers){
    paaswrod.push(inNum[Math.floor(Math.random()*inNum.length)])
}

let pending = maxlength  - paaswrod.length
for(let i = 0;i<=pending;i++){
    if(i<=5){
        paaswrod.push(pool[Math.floor(Math.random()*pool.length)])
    }else{
        paaswrod.unshift(pool[Math.floor(Math.random()*pool.length)])
    }
}
return paaswrod.join('')
}
console.log(generatePassword(10))
