import { z } from "zod";

// const SERVER_API = import.meta.env.VITE_SERVER_API;
const SERVER_API = "";

export interface ApiResponse<T> {
    success: boolean;
    message?: string;
    data?: T;
}

interface UserResponse {
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    token: string;
}

const LoginSchema = z.object({
    username: z.string().min(1, "Required"),
    password: z.string().min(6, "Too short"),
})

export const SignupSchema = z.object({
    username: z.string().min(3, "Username must be 3+ chars"),
    email: z.email("Invalid email format"),
    password: z.string().min(8, "Password must be 8+ chars"),
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
});

type LoginRequest = z.infer<typeof LoginSchema>;
type SignupRequest = z.infer<typeof SignupSchema>;


const safeFetch = async <T>(
    url: string,
    options?: RequestInit
): Promise<ApiResponse<T>> => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            "Content-Type": "application/json",
            ...options?.headers,
            ...(token ? { "Authorization": `Bearer ${token}` } : {}),
        };
        const res = await fetch(url, { ...options, headers });
        if (res.status === 401) {
            localStorage.clear();
            return Promise.reject("Unauthorized");
        }

        // Network or HTTP failure
        if (!res.ok) {
            const errorText = await res.text();
            return {
                success: false,
                message: errorText || "Request Failed"
            };
        }
        const data = await res.json() as T;
        return { success: true, data }

    } catch (err) {
        const message = err instanceof Error ? err.message : "An unexpected error occurred";
        return { success: false, message };
    }
};

export const signup = async (data: SignupRequest): Promise<ApiResponse<SignupRequest>> => {
    try {
        const result = SignupSchema.safeParse(data);

        if (!result.success) {
            const errorMsg = result.error.issues[0].message;
            return { success: false, message: errorMsg };
        }
        return await safeFetch<SignupRequest>(`${SERVER_API}/api/users/signup`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(result.data)
        });
    } catch (err) {
        const message = err instanceof Error ? err.message : "An unexpected error occurred";
        return { success: false, message };
    }
};


export const login = async (data: LoginRequest): Promise<ApiResponse<UserResponse>> => {
    try {
        const result = LoginSchema.safeParse(data);

        if (!result.success) {
            const errorMsg = result.error.issues[0].message;
            return { success: false, message: errorMsg };
        }

        return safeFetch<UserResponse>(`${SERVER_API}/api/users/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(result.data)
        });

    } catch (err) {
        const message = err instanceof Error ? err.message : "An unexpected error occurred";
        return { success: false, message };
    }
};