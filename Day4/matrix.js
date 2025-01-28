// All matrix top and left one 1 col and 1 row with 0 index in
// function Matrix(matrix) {

//     for(let i = 0 ;i<matrix.length;i++){
//         for (let j = 0; j < matrix.length; j++) {
//             if(i<1 || j<1){
//                 console.log(matrix[i][j])
//             }

//         }
//     }

// 1->2->3
// 4
// 7

// }

// all matrix border value print
// function Matrix(matrix) {

//     for(let i = 0 ;i<matrix.length;i++){
//         for (let j = 0; j < matrix.length; j++) {
//             if(i<1 || j<1 || i>matrix.length-2 || j > matrix.length-2){
//                 // console.log(matrix[i][j])
//             }

//         }
//     }

// }

// 1->2->3->31->32
// 4----------->63
// 7----------->92
// 10---------->14
// 15,16,17,18,19

// all matrix center value printing
// function Matrix(matrix) {
//   for (let i = 1; i < matrix.length; i++) {
//     for (let j = 1; j < matrix[i].length; j++) {
//       if (i < matrix.length - 1 && j < matrix[i].length -1 ){
//         console.log(matrix[i][j]);
//       }
//     }
//   }
// }

function Matrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    // console.log(matrix[i][i])
    console.log(matrix[i][matrix[i].length - 1 - i]);
    // for (let j = 0; j < matrix[i].length; j++) {
    //     if(i==j )
    //     console.log((matrix[i][j]))
    // }
  }
}

// Matrix([
//   [1, 2, 3,5],
//   [4, 5, 6,9],
//   [7, 8, 9],
//   [10, 11, 12,43],
//   [13, 15, 16,434,6678],
// ]);

Matrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
