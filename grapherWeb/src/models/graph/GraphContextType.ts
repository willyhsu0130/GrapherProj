import type { Graph } from "./Graph";
import type { GraphChanges } from "./GraphChanges";

export type DoubleArray<T> = Array<Array<T>>;


export interface GraphContextType {
    graph: Graph | undefined;
    setGraph: React.Dispatch<React.SetStateAction<Graph | undefined>>;
    updateGraph: (changes: GraphChanges) => void;
}

