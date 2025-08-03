const LoginService = {
    login: async (username: any, password: any) => {
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            return data; // Return user data or token
        } catch (error) {
            console.error('Login error:', error);
            throw error; // Propagate the error for further handling
        }
    }
}

export default LoginService;








