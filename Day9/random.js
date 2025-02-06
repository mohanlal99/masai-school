// console.log(Date.now()) this is Date lib in provided 1 jan 1970 to now time in seconds
// 1738776569786
// 1,738,713,600

function RandomNumber(range) {
  let msecond = Date.now();
  let arr = msecond.toString().split("").reverse();
  arr.unshift(".");
  let str = arr.join("");
  let random = Number(str);

  if (range) {
    random = Math.floor(random * range);
    return random;
  } else {
    return random;
  }
}
console.log(RandomNumber());

// function patternPrinting(N) {
//     // Write code here
//     let i = 1;
//     while(i<=N){
//       let j= 1;
//       let star = ""
//       while(j<=N-i){
//         star += j
//         j++
//       }
      
//       console.log(star)
//       i++
//     }
// }
