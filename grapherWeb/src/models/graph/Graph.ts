import type { DoubleArray } from "./GraphContextType"

export type Graph = {
    id: number
    title?: string
    sereies?: Series[];
    data?: DoubleArray<number | string | null>
    snapshot?: string
}

type Series = {
    xAxis?: Axis
    yAxis?: Axis
}

type Axis = {
    title?: string
    col?: string
}