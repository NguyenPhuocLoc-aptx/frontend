const API_BASE_URL = 'http://localhost:5054';

class AuthService {
    static async signup(fullName, email, password) {
        try {
            const response = await fetch(`${API_BASE_URL}/auth/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({
                    fullName: fullName,
                    email: email,
                    password: password,

                })
            });

            const text = await response.text();
            let data = {};

            try {
                data = text ? JSON.parse(text) : {};
            } catch (e) {
                console.error('Invalid JSON response:', text);
            }

            if (!response.ok) {
                throw new Error(data.message || `Request failed with status ${response.status}`);
            }

            localStorage.setItem('authToken', data.jwt);
            localStorage.setItem('user', JSON.stringify({ email, fullName }));

            return { success: true, message: data.message };
        } catch (error) {
            return { success: false, message: error.message };
        }
    }

    static async signin(email, password) {
        try {
            const response = await fetch(`${API_BASE_URL}/auth/signin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });

            const text = await response.text();
            let data = {};

            try {
                data = text ? JSON.parse(text) : {};
            } catch (e) {
                console.error('Invalid JSON response:', text);
            }

            if (!response.ok) {
                throw new Error(data.message || `Request failed with status ${response.status}`);
            }

            localStorage.setItem('authToken', data.jwt);
            localStorage.setItem('user', JSON.stringify({ email }));

            return { success: true, message: data.message };
        } catch (error) {
            return { success: false, message: error.message };
        }
    }

    static getToken() {
        return localStorage.getItem('authToken');
    }

    static isAuthenticated() {
        return !!localStorage.getItem('authToken');
    }

    static logout() {
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
    }
}

document.addEventListener('DOMContentLoaded', () => {

    // --- LOGIN LOGIC ---
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;

            console.log("Attempting to login with:", email);

            const result = await AuthService.signin(email, password);

            if (result.success) {
                alert("Login successful!");
            } else {
                alert("Login failed: " + result.message);
            }
        });
    }

    // --- SIGNUP LOGIC ---
    const signupForm = document.getElementById('signup-form');

    if (signupForm) {
        signupForm.addEventListener('submit', async (event) => {
            event.preventDefault(); // Stop the page from refreshing

            // Grab the values typed by the user
            const fullName = document.getElementById('signup-name').value;
            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;

            console.log("Attempting to signup with:", email);

            // Call your signup method
            const result = await AuthService.signup(fullName, email, password);

            if (result.success) {
                alert("Account created successfully!");

                // Automatically switch back to the login screen
                document.getElementById('signup-section').classList.add('hidden');
                document.getElementById('login-section').classList.remove('hidden');
            } else {
                alert("Signup failed: " + result.message);
            }
        });
    }
});