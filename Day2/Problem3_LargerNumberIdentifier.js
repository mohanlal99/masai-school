function LargerNumberIdentifier(N1, N2) {
  if (N1 == N2) {
    return "Both numbers are equal";
  }
  else if(N1>N2){
    return `"${N1} is larger than ${N2}"`
  }
  else{
    return `"${N2} is larger than ${N1}"`
  }
}

console.log(LargerNumberIdentifier(5,10))
console.log(LargerNumberIdentifier(7,7))
console.log(LargerNumberIdentifier(-1,-10))
