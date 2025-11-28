function createLoginTracker() {
    const correctUsername = "admin";
    const correctPassword = "password123";

    let attempts = 0;
    let locked = false;

    return function (username, password) {

        // If locked already
        if (locked) {
            return "Account locked due to too many failed login attempts";
        }

        // CORRECT LOGIN
        if (username === correctUsername && password === correctPassword) {
            return "Login successful";
        }

        // WRONG LOGIN
        attempts++;

        // Must return: Attempt X: Login failed
        const msg = `Attempt ${attempts}: Login failed`;

        // Lock AFTER 3 failed attempts
        if (attempts >= 3) {
            // Only lock AFTER returning Attempt 3
            if (attempts === 3) {
                return msg;
            }

            // 4th bad attempt and beyond — now locked
            locked = true;
            return "Account locked due to too many failed login attempts";
        }

        return msg;
    };
}

module.exports = { createLoginTracker };
