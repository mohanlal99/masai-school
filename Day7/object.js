function checkString(str){

    let arr = str.split("")
    let arr1 = 'asaischl'.split('')
    console.log(arr.filter(key=>arr1.includes(key)).join(''))
    // let newS = [...new Set(arr)]
    // let newS = "dfsdfsdaf"
    // newS = newS.slice(1)
    // let obj = {}
    // for (let i = 0; i < arr.length; i++) {
    //     let onevalue= arr[i] 
    //     if(obj[onevalue]){

    //         obj[onevalue] =  obj[onevalue]+1
    //     }
    //     else{
    //         obj[onevalue]= 1
    //     }
        
    // }
    // let newS = ""
    // for (const key in obj) {
    //    newS += key + obj[key]
    // }
    
    // return newS
}

console.log(checkString("masaischool"))



// function objectPrint(arr){
//     let obj = {}
//     for (let i = 0; i < arr.length; i++) {
//         let key = i
//         obj[key]=arr[i]
//     }
// return obj
// }

// console.log(objectPrint(['a','b','c',"d",'e','f','g','h','i']))