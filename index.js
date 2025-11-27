function createLoginTracker(user) {
  let attempts = 0;
  let locked = false;

  return function(password) {
    if (locked) return "Account locked";

    if (password === user.password) return "Login successful";

    attempts++;
    if (attempts >= 3) locked = true;

    return "Incorrect password";
  };
}

// Example usage:
const user1 = { username: "user1", password: "password123" };
const login = createLoginTracker(user1);

console.log(login("wrong"));        // Incorrect password
console.log(login("123"));          // Incorrect password
console.log(login("password123"));  // Login successful
console.log(login("wrong"));        // Incorrect password or Account locked if already 3 failed
