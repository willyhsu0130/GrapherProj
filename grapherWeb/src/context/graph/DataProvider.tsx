import type { ReactNode } from "react";
import { useState } from "react";
import { DataContext, } from "./DataContext";
import type { DoubleArray } from "../../models/data/data";

const TEST_DATA = [
    ['', 'Tesla', 'Volvo', 'Toyota', 'Ford'],
    ['2019', 10, 11, 12, 13],
    ['2020', 20, 11, 14, 13],
    ['2021', 30, 15, 12, 13]
]



export const DataProvider = ({ children }: { children: ReactNode }) => {

    const [data, setData] = useState<DoubleArray<string | number>>(TEST_DATA);

    const value = {
        data,
        setData
    }
    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
}
