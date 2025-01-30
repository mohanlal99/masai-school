// let Calc = {
//     a :1,
//     b: 2,
//     add:function (a,b) {
//         if(a!=undefined && b!=undefined){
//             return a + b
//         }
//         return this.a+this.b
//     }
// }

// console.log(Calc.add(3,4))

let str = './home./images./img1'
let newstr = str.split("./")

console.log(newstr.join("->"))