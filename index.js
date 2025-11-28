// DO NOT change this username or password
const USERNAME = "admin";
const PASSWORD = "password123";

function createLoginTracker() {

  let attempts = 0;
  let locked = false;

  return function (username, password) {

    if (locked) {
      return "Account locked. Please contact support.";
    }

    if (username === USERNAME && password === PASSWORD) {
      attempts = 0; 
      return "Login successful!";
    }

    attempts++;

    if (attempts >= 3) {
      locked = true;
      return "Account locked. Too many failed attempts.";
    }

    return "Incorrect username or password.";
  };
}

module.exports = { createLoginTracker };
