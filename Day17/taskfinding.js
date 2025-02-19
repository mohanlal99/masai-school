function manageStudents() {
    let students = ["Alice", "Bob", "Charlie"];

    // Add "David" at index 1
    students.splice(1, 0, "David");
    students.splice(1, 2, "prem");
    students.splice(1, 0, "mohanlal");
    students.splice(1, 0, "krish");

    // Check if "Eve" is in the list
    console.log(students.includes("Eve"));  // Should return false
    console.log(students.includes("krish"));  // Should return true
    console.log(students.includes("mohanlal"));  // Should return true
    console.log(students.includes("David"));  // Should return false

    // Convert the array to a string with names separated by commas
    console.log(students.join(","));   //Alice,krish,mohanlal,prem,Charlie
    console.log(students.join(","));  //Alice,krish,mohanlal,prem,Charlie
    console.log(students.join(","));  //Alice,krish,mohanlal,prem,Charlie
    console.log(students.join(","));  //Alice,krish,mohanlal,prem,Charlie
}

manageStudents();

