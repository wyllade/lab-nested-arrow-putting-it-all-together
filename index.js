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
const user
    = { username: "user1", password: "secure123" };
const login = createLoginTracker(user);


