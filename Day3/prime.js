function primeNumberPrint(N) {
  function pCheck(p) {
    for (let i = 2; i <= Math.sqrt(p); i++) {
      if(p==2 || p == 3)return false
      if (p % i === 0) {
        return true;
      }
    }
    return false;
  }
  for (let i = 2; i < N; i++) {
    pCheck(i) != true && console.log(i);
  }
}

primeNumberPrint(1000);
