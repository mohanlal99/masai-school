function Recursion() {
  let sum = 1;
  function fact(N) {
    if (N <= 0) {
      return sum;
    }
    sum = sum * N;
    // console.log();

    return fact(N - 1);
  }
  console.log(fact(5));
  console.log(`Hello I am First Time Running `);
}

Recursion();
