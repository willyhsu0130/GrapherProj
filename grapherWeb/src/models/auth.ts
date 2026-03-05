export type User = {
    _id: string;
    username: string;
    email: string;
    role: "user" | "admin";
};

export type AuthContextType = {
    username: string;
    token: string | null;
    loginToken: (token: string, username: string) => void;
    logoutToken: () => void;
    isAuthenticated: boolean;
    checkAuth: () => boolean;
};