function Fact(N) {
  let sum = 1;
  for (let i = N; i > 0; i--) {
    sum = sum * i;
  }
  console.log(sum);
}
Fact(20);
