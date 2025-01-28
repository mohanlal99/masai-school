function mangement(array) {
  if (!array) return "Array is not valid";
  array.shift(); // remveo the frist task
  array.unshift("New Task 2");
  array.unshift("New Task 1");
  array[array.length - 1] = "New Task";
  return array;
}

console.log(mangement([5, 34, 32, 453, 65]));
