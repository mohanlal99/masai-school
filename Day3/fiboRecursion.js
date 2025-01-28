let s2 = 1;
function Fibonacci(N, M) {
    if(N<-1)return
  if (N >= M) return;
  let s3 = N + s2;
  console.log(s3)
  N =s2
  s2 = s3;

  return Fibonacci(N, M);
}

Fibonacci(-1, 200);
