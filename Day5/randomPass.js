function getRandomPassword(N = 10, isNumber = false, isChar = false) {
  let randomPassword = "";
  let abc = "abcdefghijklmnopqrstuvwxyz";
  let Abc = abc.toUpperCase();
  let num = "0123456789";
  let char = "~!@#$%^&";
  for (let i = 0; i < N; i++) {
    let r1 = Math.floor(Math.random() * abc.length-1);
    let r2 = Math.floor(Math.random() * Abc.length-1);
    let r3 = Math.floor(Math.random() * char.length-1);
    let r4 = Math.floor(Math.random() * num.length-1);

    randomPassword = randomPassword +`${Abc[r2]}${isNumber && num[r4]}${abc[r1]}${
      isChar &&char[r4]
    }`;
  }
  let passwrod = "";
  for (let i = 0; i < N; i++) {
    passwrod += randomPassword[Math.floor(Math.random() * N)];
  }
  return passwrod;
}


console.log(getRandomPassword(12,true,true));
