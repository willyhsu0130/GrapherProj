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


const zText = z.object({
    content: z.string().nullish(),
    color: z.string().nullish(),
    font: z.string().nullish(),
    size: z.number().nullish(),
}).nullish()

const zGridAxis = z.object({
    title: zText,
    col: z.string().nullish(),
    color: z.string().nullish(),
    width: z.number().nullish()
}).nullish()

const zSeries = z.object({
    title: zText.nullish(),
    color: z.string().nullish(),
    xAxis: zGridAxis.nullish(),
    yAxis: zGridAxis.nullish(),
    id: z.string().nullish(),
    width: z.number().nullish()
})

const zTrendlineBase = z.object({
    // .nullish() allows null AND undefined AND string
    id: z.string().nullish(),
    seriesId: z.string().nullish(),
    color: z.string().nullish(),
    title: zText.nullish(),
    width: z.number().nullish(),
    lineType: z.enum(["Dashed", "Solid", "Dotted"])
})

const zTrendline = z.discriminatedUnion("type", [
    zTrendlineBase.extend({
        type: z.literal("linear"), // MUST NOT BE NULLISH
        gradient: z.number().nullish(),
        yIntercept: z.number().nullish(),
    }),
    zTrendlineBase.extend({
        type: z.literal("polynomial"),
        degree: z.number().int().nullish()
    }),
]).nullish();


export const PatchGraphSchema = z.object({
    id: z.number().int(),
    title: z.string().nullish(),
    xAxis: zGridAxis,
    yAxis: zGridAxis,
    series: z.array(zSeries).nullish(),
    data: z.array(z.array(z.union([z.string(), z.number(), z.null()]))).nullish(),
    snapshot: z.string().nullish(),
    trendlines: z.array(zTrendline).nullish()
})

export type PatchGraphRequest = z.infer<typeof PatchGraphSchema>;
export type LoginRequest = z.infer<typeof LoginSchema>;
export type SignupRequest = z.infer<typeof SignupSchema>;
export type FetchGraphRequest = z.infer<typeof FetchGraphSchema>;
export type Series = z.infer<typeof zSeries>
export type Trendline = z.infer<typeof zTrendline>
