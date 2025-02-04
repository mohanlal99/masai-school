function PetternPrinting(n) {
    let any = 0;
    for (let i = 1; i <= n; i++) {
        any++
        let pettren= ""
    for (let j = 1; j <= any; j++) {
        pettren += j + ' '
    }
    console.log(pettren)
  }
}

PetternPrinting(5);
