import type { DoubleArray } from "./GraphContextType"
import type { Series, PatchGraphRequest } from "@/models/API/APITypes"

export type Graph = {
    id: number
    title?: string | null
    series?: Series[]
    data?: DoubleArray<number | string | null>
    snapshot?: string | null
    xAxis?: PatchGraphRequest["xAxis"]
    yAxis?: PatchGraphRequest["yAxis"]
}