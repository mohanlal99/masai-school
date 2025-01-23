console.log("Welcome To student manager");

let student_marks = [45, 56, 76, 87, 56, 34, 96, 76, 45, 85];

for (let i in student_marks) {
  let mark = student_marks[i] + 20;
  if (mark > 90) {
    continue;
  }
  student_marks[i] < 40 && (student_marks[i] = student_marks[i] + 20);
}

for (const element of student_marks) {
  console.log(element > 50
    ? `Student Pass with ${element} Marks!`
    : `Student Number ${element}`)
}


