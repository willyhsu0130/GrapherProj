import type { DoubleArray } from "./GraphContextType"

export type Graph = {
    id: number
    title?: string
    xAxis?: Axis
    yAxis?: Axis
    data?: DoubleArray<number | string | null>
}


type Axis = {
    title?: string
    col?: string
}