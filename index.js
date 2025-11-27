function createLoginTracker(userInfo) {
    let attemptCount = 0;
    let isLocked = false;
    const MAX_ATTEMPTS = 3;

    // Inner arrow function (closure)
    const attemptLogin = (passwordAttempt) => {
        if (isLocked) {
            return "Account locked. Too many failed login attempts.";
        }

        attemptCount++;

        if (passwordAttempt === userInfo.password) {
            return "Login successful!";
        }

        if (attemptCount >= MAX_ATTEMPTS) {
            isLocked = true;
            return "Account locked due to too many failed attempts.";
        }

        return `Incorrect password. Attempts left: ${MAX_ATTEMPTS - attemptCount}`;
    };

    return attemptLogin; // Return the closure
}

// TEST CODE
const user = { username: "user1", password: "password123" };
const login = createLoginTracker(user);

console.log(login("wrong"));        // Incorrect password. Attempts left: 2
console.log(login("123"));          // Incorrect password. Attempts left: 1
console.log(login("password123"));  // Login successful!
console.log(login("wrong"));        // Still allowed, since logged in successfully before
