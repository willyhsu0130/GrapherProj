import type { DoubleArray } from "./GraphContextType"

export type Graph = {
    id: number
    title?: string
    series?: Series[];
    data?: DoubleArray<number | string | null>
    snapshot?: string
}

export type Series = {
    xAxis?: Axis
    yAxis?: Axis
    title?: string
}

type Axis = {
    title?: string
    col?: string
}