let user1 = { name: "Alice", role: "admin", active: false };
let user2 = { name: "Bob", role: "user", active: true };

function checkUserAuth(user){
  if(user.role == 'admin' && user.active==true){
  console.log("Admin Access Granted!")
}
else if(user.role == 'admin' && user.active!=true){
  console.log("Admin Access Revoked")
}
else if(user.role == 'user' && user.active == true){
  console.log("User Access Granted!")
}
else if(user.role == 'user' && user.active != true){
  console.log("User Access Revoked")
}
}

checkUserAuth(user2)