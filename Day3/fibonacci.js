// function fibobacci(N) {
//   let s1 = -1
//   let s2 = 1
//   let s3 = 0

//   let str = ""
//   for (let i = 1; i < N; i++) {
//       s3 = s1 + s2;
//       str += s3 + " "
//       s1 = s2;
//       s2 = s3 ;

//   }
//   return str
// }

function fibobacci(N) {
  let fibo = [0,1]
  for (let i = 0; i < N; i++) {
      // console.log(typeof fibo[i])
      fibo[i+2] = fibo[i]+fibo[i+1]
      // console.log(fibo[i] ,fibo[i+1])
  }
  return fibo
}


console.log(fibobacci(15));
