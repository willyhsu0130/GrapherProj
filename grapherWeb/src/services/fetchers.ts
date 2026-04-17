import type { DoubleArray } from "../models/graph/GraphContextType.ts";
import type { Graph } from "../models/graph/Graph.ts";
import type { PatchGraphRequest, LoginRequest, SignupRequest, FetchGraphRequest, DeleteGraphRequest, } from "../models/API/APITypes.ts";
import { PatchGraphSchema, SignupSchema, FetchGraphSchema, LoginSchema, DeleteGraphSchema } from "../models/API/APITypes.ts";

const SERVER_API = import.meta.env.VITE_SERVER_API || ""
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
            console.log(errorText)
            return {
                success: false,
                message: errorText || "Request Failed"
            };
        }
        const data = await res.json() as T;
        return { success: true, data }

    } catch (err) {
        console.log(err)
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
        return await safeFetch<UserResponse>(`${SERVER_API}/users/signup`, {
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
            console.log(errorMsg)
            return { success: false, message: errorMsg };
        }

        return safeFetch<UserResponse>(`${SERVER_API}/users/login`, {
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
        return safeFetch<Graph[]>(`${SERVER_API}/graph/`, {
            method: "GET",
        })

    } catch (err) {
        const message = err instanceof Error ? err.message : "An unexpected error occured";
        return { success: false, message }
    }
}

export const createGraph = async (): Promise<ApiResponse<GraphResponse>> => {
    try {

        return safeFetch<GraphResponse>(`${SERVER_API}/graph/create`, {
            method: "POST",
        })

    } catch (err) {
        const message = err instanceof Error ? err.message : "An unexpected error occured";
        return { success: false, message }

    }
}

export const fetchGraphById = async (data: FetchGraphRequest): Promise<ApiResponse<Graph>> => {
    try {
        const result = FetchGraphSchema.safeParse(data);
        if (!result.success) {
            const errorMsg = result.error.issues[0].message;
            return { success: false, message: errorMsg };
        }
        const graphId = result.data.id;
        return safeFetch<Graph>(`${SERVER_API}/graph/${graphId}`)
    } catch (err) {
        const message = err instanceof Error ? err.message : "An unexpected error occured when fetching graph by id.";
        return { success: false, message }
    }

}

export const deleteGraphByGraphId = async (data: DeleteGraphRequest): Promise<ApiResponse<Graph[]>> => {
    try {
        const result = DeleteGraphSchema.safeParse(data)
        const graphId = result.data?.id;

        return safeFetch<Graph[]>(`${SERVER_API}/graph/${graphId}`, {
            method: "DELETE",
            body: JSON.stringify(result)
        })
    } catch (err) {
        const message = err instanceof Error ? err.message : "An unexpected error occured";
        return { success: false, message }
    }
}

export const patchGraphById = async (data: PatchGraphRequest): Promise<ApiResponse<Graph>> => {
    try {
        const result = PatchGraphSchema.safeParse(data);

        if (!result.success) {
            const errorMsg = result.error.issues[0].message
            return { success: false, message: errorMsg };
        }
        const graphId = result.data.id;
        return safeFetch<Graph>(`${SERVER_API}/graph/${graphId}`, {
            method: "PATCH",
            body: JSON.stringify(data)
        })
    } catch (err) {
        const message = err instanceof Error ? err.message : "An unexpected error occured when saving your graph.";
        return { success: false, message }
    }

}