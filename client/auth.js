const API_BASE_URL = 'http://localhost:5054';

class AuthService {
    static async signup(fullName, email, password) {
        try {
            const response = await fetch(`${API_BASE_URL}/auth/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ fullName, email, password })
            });
            const text = await response.text();
            let data = {};
            try { data = text ? JSON.parse(text) : {}; } catch (e) { console.error('Invalid JSON:', text); }
            if (!response.ok) throw new Error(data.message || `Request failed with status ${response.status}`);
            localStorage.setItem('authToken', data.jwt);
            localStorage.setItem('user', JSON.stringify({ email, fullName }));
            return {
                success: true, message: data.message
            };
        } catch (error) {
            return {
                success: false, message: error.message
            };
        }
    }

    static async signin(email, password) {
        try {
            const response = await fetch(`${API_BASE_URL}/auth/signin`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ email, password })
            });
            const text = await response.text();
            let data = {};
            try { data = text ? JSON.parse(text) : {}; } catch (e) { console.error('Invalid JSON:', text); }
            if (!response.ok) throw new Error(data.message || `Request failed with status ${response.status}`);
            localStorage.setItem('authToken', data.jwt);
            localStorage.setItem('user', JSON.stringify({ email, fullName: data.fullName || email }));
            return { success: true, message: data.message };
        } catch (error) {
            return { success: false, message: error.message };
        }
    }

    static getToken() { return localStorage.getItem('authToken'); }
    static isAuthenticated() { return !!localStorage.getItem('authToken'); }
    static getUser() {
        try { return JSON.parse(localStorage.getItem('user') || '{}'); } catch { return {}; }
    }
    static logout() {
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        window.location.href = '/authentication/code.html';
    }
}