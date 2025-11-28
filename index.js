function createLoginTracker() {
    const correctUsername = "admin";
    const correctPassword = "password123";

    let attempts = 0;
    let locked = false;

    return function (username, password) {

        if (locked) {
            return "Account locked due to too many failed login attempts";
        }

        // SUCCESSFUL LOGIN
        if (username === correctUsername && password === correctPassword) {
            return "Login successful";
        }

        // FAILED LOGIN
        attempts++;

        // On failed attempt, return: Attempt X: Login failed
        const msg = `Attempt ${attempts}: Login failed`;

        // Lock AFTER 3 failed attempts
        if (attempts >= 3) {
            if (attempts === 3) {
                return msg; // third failure must NOT lock yet
            }

            // FOURTH failure → lock
            locked = true;
            return "Account locked due to too many failed login attempts";
        }

        return msg;
    };
}

module.exports = { createLoginTracker };
