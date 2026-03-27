import type { ReactNode } from "react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { GraphContext, } from "./GraphContext.tsx";
import { useGraphSave } from "../../hooks/useGraphSave.ts";
import { useParams } from "react-router-dom";
import type { GraphChanges } from "@/models/graph/GraphChanges.ts";
// import type { Graph } from "../../models/graph/Graph.ts";
import { fetchGraphById } from "@/services/fetchers.ts";
import { mergeWith } from "lodash";
import type { PatchGraphRequest } from "@/models/API/APITypes.ts";
import type { GraphContextType } from "@/models/graph/GraphContextType.ts";

export const GraphProvider = ({ children }: { children: ReactNode }) => {

    const [graph, setGraph] = useState<PatchGraphRequest | undefined>()
    console.log(graph)

    const { graphId } = useParams();

    const { debouncedSave } = useGraphSave(graphId || "");

    useEffect(() => {
        const fetcher = async () => {
            if (!graphId) return
            const res = await fetchGraphById({ id: parseInt(graphId) })
            if (!res.success || !res.data) {
                return
            }
            setGraph(res.data)

        }
        fetcher()
    }, [graphId])

    const updateGraph = useCallback((changes: GraphChanges) => {
        setGraph(prev => mergeWith({}, prev, changes, (_, srcVal) => {
            if (Array.isArray(srcVal)) return srcVal 
        }));
        debouncedSave(changes)
    }, [debouncedSave])

    const value: GraphContextType | undefined= useMemo(() => ({
        graph,
        updateGraph,
        setGraph
    }), [graph, updateGraph])

    return (
        <GraphContext.Provider value={value}>
            {children}
        </GraphContext.Provider>
    );
}
