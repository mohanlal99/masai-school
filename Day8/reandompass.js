function generatePassword(length, isNum = true, isChar = true) {
  if (length < 3) return "length is too small";
  let Password_length = length;
  let abc = "abcdefghijklmnopqrstuvwxyz";
  let spchar = "~!@#$%^&*";
  let num = "0123456789";
  let allItems = `${abc}${abc.toUpperCase()}${isNum && num}${isChar && spchar}`;
  console.log(allItems);
  let newPass = [];
  if (isNum) {
    newPass.push(num[Math.floor(Math.random() * spchar.length)]);
  }
  if (isChar) {
    newPass.push(spchar[Math.floor(Math.random() * num.length)]);
  }
  Password_length -= newPass.length;
  for (let i = 0; i < Password_length; i++) {
    newPass.push(allItems[Math.floor(Math.random() * allItems.length)]);
  }

  console.log(newPass.join(""));
}

generatePassword(10, true, true);
