function createLoginTracker() {
    const correctUsername = "admin";
    const correctPassword = "password123";

    let attempts = 0;
    let locked = false;

    return function (username, password) {

        // If account is already locked
        if (locked) {
            return "Account locked due to too many failed login attempts";
        }

        // Correct login
        if (username === correctUsername && password === correctPassword) {
            return "Login successful";
        }

        // Wrong login
        attempts++;

        // Format: "Attempt X: Login failed"
        const failedMessage = `Attempt ${attempts}: Login failed`;

        // If 3rd wrong attempt → lock
        if (attempts >= 3) {
            locked = true;
            return "Account locked due to too many failed login attempts";
        }

        return failedMessage;
    };
}

module.exports = { createLoginTracker };
