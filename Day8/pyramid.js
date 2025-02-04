function pyramidPrinting(n) {
  for (let i = 1; i <= n; i++) {
    let pyramid = "";
    for (let j = 1; j <= i; j++) {
      if (j % 3 == 0) continue;
      if (j % 7 == 0) break;
      pyramid += j + " ";
    }
    console.log(pyramid);
  }
}

pyramidPrinting(5);
