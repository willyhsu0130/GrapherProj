export type DoubleArray<T> = Array<Array<T>>;


export type DataContextType = {
    data: DoubleArray<number | string>;
    setData: React.Dispatch<React.SetStateAction<DoubleArray<number | string>>>
}