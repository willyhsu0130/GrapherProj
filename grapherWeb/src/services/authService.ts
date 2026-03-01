const API_URL = "/api/users"; // Proxied to http://localhost:8080

interface loginRequest {
    email: string;
    password: string;
}

export const login = async ({ email, password }: loginRequest) => {

    const userData = {
        email: email,
        password: password
    };
    const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
    }
    );


    const data = await response.json();
    if (data.token) {
        localStorage.setItem("userToken", data.token);
    }
    return data;
};

export const signup = async (email, password, firstName, lastName) => {
    return fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, firstName, lastName }),
    });
};