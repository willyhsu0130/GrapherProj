import { z } from "zod";
import type { DoubleArray } from "../graph/GraphContextType";


export interface ApiResponse<T> {
    success: boolean;
    message?: string;
    data?: T;
}


export interface GraphResponse {
    id: number
    data: DoubleArray<number | string>
}


export const LoginSchema = z.object({
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
    id: z.number().int(),
    title: z.string().nullish(),
    xAxis: z.object({
        title: z.string().nullish(),
        col: z.string().nullish()
    }).nullish(),
    yAxis: z.object({
        title: z.string().nullish(),
        col: z.string().nullish()
    }).nullish(),
    data: z.array(z.array(z.union([z.string(), z.number(), z.null()]))).nullish(),
    snapshot: z.string().nullish()
})

export type PatchGraphRequest = z.infer<typeof PatchGraphSchema>;
export type LoginRequest = z.infer<typeof LoginSchema>;
export type SignupRequest = z.infer<typeof SignupSchema>;
export type FetchGraphRequest = z.infer<typeof FetchGraphSchema>;