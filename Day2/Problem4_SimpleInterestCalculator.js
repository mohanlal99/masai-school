function SimpleInterestCalculator(P, R, T) {
  if (P == 0) return P.toFixed(1);
  let simple_interst = (P*R*T)/100
  return `The simple interest is: ${simple_interst.toFixed(1)}`
}
console.log(SimpleInterestCalculator(1000, 5, 3));
console.log(SimpleInterestCalculator(1500, 7, 5));
console.log(SimpleInterestCalculator(0, 6, 2));
