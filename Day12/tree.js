// https://onecompiler.com/javascript/438sftm3w
// // Crismatish tree n = 4

let n = 5;
let st = 1;
for (let i = 1; i <= n; i++) {
  let temp = "";
  for (let j = 1; j <= n - i; j++) {
    temp += "  ";
  }

  for (let k = 1; k <= st; k++) {
    temp += "* ";
  }
  st += 2;

  console.log(temp);
}
let temp = "";
for (let i = 1; i <= n / 2; i++) {
  if (i == n / 2) {
    temp += "  | ";
  } else {
    temp += "    ";
  }
}
console.log(temp);

//                   *
//                 * * *
//               * * * * *
//             * * * * * * *
//           * * * * * * * * *
//         * * * * * * * * * * *
//       * * * * * * * * * * * * *
//     * * * * * * * * * * * * * * *
//   * * * * * * * * * * * * * * * * *
// * * * * * * * * * * * * * * * * * * *
//                   |
