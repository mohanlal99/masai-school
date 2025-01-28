function solveMatrix(N, M, arr) {
  let newMatrix = [];

  for (let i = 0; i < N; i++) {
    let newRow = [];
    sum = 0;
    for (let j = 0; j < M; j++) {
      matrix[j][i] % 2 != 0 && (sum += matrix[j][i]);
    }
    console.log(sum);
  }
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
];

solveMatrix(3, 3, matrix);
