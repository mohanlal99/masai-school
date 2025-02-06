function PetternPrinting(n) {
    let any = 0;
    for (let i = 1; i <= n; i++) {
        any++
        let pettren= ""
    for (let j = 1; j <= any; j++) {
        pettren += j + ' '
    }
    console.log(pettren)
  }
}

PetternPrinting(5);



// let str = "Hello./am./i./doing./nothing./"
// let arr = str.split('./')
// console.log(arr.join(" "))
// let newstr = ""
// for(let i = 0;i<str.length ;i++){
//   if((str[i]=='.' && str[i+1] =='/') || (str[i]=='/' && str[i-1] =='.') ) {
//     if(str[i]=='.'){
//     newstr += " "
      
//     }
//     continue
//   }
  
//   newstr += str[i]
// }
// console.log(newstr)