import type { RefObject } from "react";
import type { PatchGraphRequest } from "../API/APITypes";

import type { GraphChanges } from "./GraphChanges";

export type DoubleArray<T> = Array<Array<T>>;

export type DataPoint = {
    x: number;
    y: number;
};

export interface GraphContextType {
    graph: PatchGraphRequest | undefined;
    setGraph: React.Dispatch<React.SetStateAction<PatchGraphRequest | undefined>>;
    updateGraph: (changes: GraphChanges) => void;
    gridRef: RefObject<HTMLDivElement | null>;
    gridData: Record<string, { x: number; y: number }[]>
    saveSnapshot: () => Promise<string | undefined>
   
}

