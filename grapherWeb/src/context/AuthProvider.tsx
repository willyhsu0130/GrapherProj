import type { ReactNode } from "react";
import { useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {

    const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
    const [username, setUsername] = useState<string>(JSON.parse(localStorage.getItem("username") || "null"));

    const loginToken = (token: string, username: string) => {
        setToken(token);
        setUsername(username);
        localStorage.setItem("token", token);
        localStorage.setItem("username", JSON.stringify(username));
    };

    const logoutToken = () => {
        setToken(null);
        setUsername("");
        localStorage.clear();
    };

    const value = {
        username,
        token,
        loginToken,
        logoutToken,
        isAuthenticated: !!token,
        checkAuth: () => !!localStorage.getItem("token")
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}
