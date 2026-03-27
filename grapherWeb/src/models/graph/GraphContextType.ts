import type { PatchGraphRequest } from "../API/APITypes";

import type { GraphChanges } from "./GraphChanges";

export type DoubleArray<T> = Array<Array<T>>;

export interface GraphContextType {
    graph: PatchGraphRequest | undefined;
    setGraph: React.Dispatch<React.SetStateAction<PatchGraphRequest | undefined>>;
    updateGraph: (changes: GraphChanges) => void;
}

