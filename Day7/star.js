function startPrint(n) {
  n = [...new Set(n)];

  let temp = [];
  for (let i = 0; i < n.length; i++) {
    for (let j = 0; i < n.length; j++) {
      if (n[i] < n[i + 1]) {
      }
    }

  return n.sort();
}
let arr = [9,8,7,6,5,4,3,2,22,222,1];
console.log(startPrint(arr));

// function starPrint(matrix) {

//     for(let i = 0 ;i<matrix.length;i++){
//         for (let j = 0; j < matrix.length; j++) {
//             if(i<1 || j<1){
//                 console.log(matrix[i][j])
//             }

//         }
//     }

// }

// starPrint([[1,2,3],[4,5,6],[7,8,9]])

// function startPrint(n) {
//     for (let i = 1; i <= n; i++) {
//       let star = "";
//       for (let j = 1; j <= i; j++) {
//         if(j<2 &&j>n){
//             star += "*";
//         }
//         if(j==n){
//             star += "*"
//         }
//       }
//       console.log(star);
//     }

//   }

// function startPrint(n) {
//   for (let i = 1; i <= n; i++) {
//     let star = "";
//     for (let j = 1; j <= i; j++) {
//       star += j;
//     }
//     console.log(star);
//   }
//   for (let i = n; i >= 1; i--) {
//     let star = "";
//     for (let j = i; j >= 1; j--) {
//       star += j;
//     }
//     console.log(star);
//   }
// }

// function startPrint(n) {
//   for (let i = 1; i <= n; i++) {
//     let star = "";
//     for (let j = 1; j <= n; j++) {
//         star += i
//         console.log(star)
//     //   if(i==1 || i==n){
//         // star += "*"
//     //   }
//     //   if(i<2 && i<n){
//     //     star += "*"
//     //   }
//     }
//   }
// }

// function startPrint(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log("*");
//   }
// }

// startPrint(6);
