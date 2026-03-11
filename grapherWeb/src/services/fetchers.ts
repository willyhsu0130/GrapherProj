import { z } from "zod";
import type { DoubleArray } from "../models/graph/GraphContextType.ts";
import type { Graph } from "../models/graph/Graph.ts";
import type { PatchGraphRequest, LoginRequest, SignupRequest, FetchGraphRequest } from "../models/API/APITypes.ts";

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

interface GraphResponse {
    id: number
    data: DoubleArray<number | string>
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

export const FetchGraphSchema = z.object({
    id: z.int()
})

export const FetchAllGraphsSchema = z.object({
    token: z.jwt()
})

export const PatchGraphSchema = z.object({
    id: z.int(),
    title: z.string().optional(),
    xAxis: z.string().optional(),
    yAxis: z.string().optional()
})



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

export const signup = async (data: SignupRequest): Promise<ApiResponse<UserResponse>> => {
    try {
        const result = SignupSchema.safeParse(data);

        if (!result.success) {
            const errorMsg = result.error.issues[0].message;
            return { success: false, message: errorMsg };
        }
        return await safeFetch<UserResponse>(`${SERVER_API}/api/users/signup`, {
            method: "POST",
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

export const fetchAllGraphs = async (): Promise<ApiResponse<Graph[]>> => {
    try {
        return safeFetch<Graph[]>(`${SERVER_API}/api/graph/`, {
            method: "GET",
        })

    } catch (err) {
        const message = err instanceof Error ? err.message : "An unexpected error occured";
        return { success: false, message }
    }
}

export const createGraph = async (): Promise<ApiResponse<GraphResponse>> => {
    try {

        return safeFetch<GraphResponse>(`${SERVER_API}/api/graph/create`, {
            method: "POST",
        })

    } catch (err) {
        const message = err instanceof Error ? err.message : "An unexpected error occured";
        return { success: false, message }

    }
}

export const fetchGraphById = async (data: FetchGraphRequest): Promise<ApiResponse<Graph>> => {
    try {
        const result = FetchGraphSchema.parse(data);
        const graphId = result.id;
        return safeFetch<Graph>(`${SERVER_API}/api/graph/${graphId}`)
    } catch (err) {
        const message = err instanceof Error ? err.message : "An unexpected error occured when fetching graph by id.";
        return { success: false, message }
    }

}

export const patchGraphById = async (data: PatchGraphRequest): Promise<ApiResponse<Graph>> => {
    try {
        const result = PatchGraphSchema.safeParse(data);

        if (!result.success) {
            const errorMsg = result.error.issues[0].message;
            return { success: false, message: errorMsg };
        }
        const graphId = result.data.id;

        return safeFetch<Graph>(`${SERVER_API}/api/graph/${graphId}`, {
            method: "PATCH",
            body: JSON.stringify(data)
        })
    } catch (err) {
        const message = err instanceof Error ? err.message : "An unexpected error occured when saving your graph.";
        return { success: false, message }
    }

}