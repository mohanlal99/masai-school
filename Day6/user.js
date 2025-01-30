function UserAuthticationChecking(user) {
  if (user.role == "admin" && user.active) console.log("Admin Access Granted!");
  else if (user.role == "admin" && !user.active)
    console.log("Admin Access Revoked");
  else if (user.role == "user" && user.active)
    console.log("User Access Granted!");
  else if (user.role == "user" && !user.active)
    console.log("User Access Revoked");
  else {
    console.log("Access Denied");
  }
}

let user1 = { name: "Alice", role: "admin", active: false };
let user2 = { name: "Bob", role: "user", active: true };

UserAuthticationChecking(user1);
UserAuthticationChecking(user2);
