function checkDepartmentAccess(person) {
    if(person.role == 'admin' && person.experience > 5 && person.active == true && person.department == 'IT'){
        console.log("Full IT Admin Access")
    }
    else if(person.role == 'admin' && person.experience > 5 && person.active == true ){
        console.log("Full General Admin Access")
    }
    else if(person.role == 'admin' && person.experience <= 5 && person.active == true  ){
        console.log("Limited Admin Access")
    }
    else if(person.role == 'admin' && person.experience <= 5 && person.active != true  ){
        console.log("Admin Access Revoked")
    }
    else if(person.role == 'manager' && person.experience > 3 && person.active == true && person.department =='Salse'  ){
        console.log("Full Sales Manager Access")
    }
    else if(person.role == 'manager' && person.experience > 3 && person.active == true){
        console.log("Full Manager Access")
    }
    else if(person.role == 'manager' && person.experience <= 3 && person.active == true){
        console.log("Limited Manager Access")
    }
    else if(person.role == 'manager' && person.experience <= 3 && person.active != true){
        console.log("Manager Access Revoked")
    }
    else if(person.role == 'user' && person.experience <= 3 && person.active == true && person.department == 'Support'){
        console.log("Priority Support Access")
    }
    else if(person.role == 'user' && person.experience <= 3 && person.active == true){
        console.log("User Access")
    }
    else if(person.role == 'user' && person.experience <= 3 && person.active != true){
        console.log("User Access Revoked")
    }
    else{
        console.log("Invalid Role")
    }
}

let person = { role: "admin", experience: 7, active: true, department: "IT" };
let person1 = {
  role: "manager",
  experience: 4,
  active: true,
  department: "Marketing",
};
let person2 = {
  role: "user",
  experience: 2,
  active: true,
  department: "Support",
};
let person3 = {
  role: "admin",
  experience: 3,
  active: false,
  department: "Finance",
};
checkDepartmentAccess(person);
checkDepartmentAccess(person1);
checkDepartmentAccess(person2);
checkDepartmentAccess(person3);
