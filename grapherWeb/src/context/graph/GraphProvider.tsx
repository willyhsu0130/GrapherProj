import type { ReactNode } from "react";
import { useCallback, useEffect, useMemo, useState, useRef } from "react";
import { GraphContext, } from "./GraphContext.tsx";
import { useGraphSave } from "../../hooks/useGraphSave.ts";
import { useParams } from "react-router-dom";
import type { GraphChanges } from "@/models/graph/GraphChanges.ts";
// import type { Graph } from "../../models/graph/Graph.ts";
import { fetchGraphById } from "@/services/fetchers.ts";
import { mergeWith } from "lodash";
import type { PatchGraphRequest } from "@/models/API/APITypes.ts";
import type { GraphContextType } from "@/models/graph/GraphContextType.ts";
import { toPng } from "html-to-image";
import { patchGraphById } from "@/services/fetchers.ts";

export const GraphProvider = ({ children }: { children: ReactNode }) => {

    const [graph, setGraph] = useState<PatchGraphRequest | undefined>()
    // Get graph Id from params
    const { graphId } = useParams();

    // Debounced Save function for auto-saving
    const { debouncedSave } = useGraphSave(graphId || "");

    // gridRef to call snapshot
    const gridRef = useRef<HTMLDivElement>(null);

    // TODO: Turn graph.data into graphData continuously 
    const gridData = useMemo(() => {
        const data = graph?.data;
        const series = graph?.series;

        if (!data || !series || data.length < 2) return {};

        const [, ...rows] = data;

        return Object.fromEntries(
            series.map(s => {
                const xColNum = s.xAxis?.col ? s.xAxis.col.toUpperCase().charCodeAt(0) - 65 : undefined;
                const yColNum = s.yAxis?.col ? s.yAxis.col.toUpperCase().charCodeAt(0) - 65 : undefined;

                if (xColNum === undefined || yColNum === undefined) return [s.id, []];

                const points = rows
                    .map(row => ({
                        x: row[xColNum],
                        y: row[yColNum],
                    }))
                    .filter(p =>
                        p.x !== "" && p.y !== "" &&
                        p.x != null && p.y != null
                    )
                    .map(p => ({
                        x: Number(p.x),
                        y: Number(p.y),
                    }))
                    .filter(p => !isNaN(p.x) && !isNaN(p.y))
                    .sort((a, b) => a.x - b.x);

                return [s.id, points];
            })
        );
    }, [graph?.data, graph?.series])

    // Fetch data from external DB
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

    const saveSnapshot = useCallback(async () => {
        if (!gridRef.current || !graph?.id) return;
        try {
            const snapshot = await toPng(gridRef.current, { skipFonts: true });
            if (snapshot && snapshot !== graph.snapshot) {
                await patchGraphById({ snapshot, id: graph.id });
            }
        } catch (err) {
            console.error("Snapshot failed:", err);
        }
    }, [graph]);


    const updateGraph = useCallback((changes: GraphChanges) => {
        setGraph(prev => mergeWith({}, prev, changes, (_, srcVal) => {
            if (Array.isArray(srcVal)) return srcVal
        }));
        console.log(changes)
        saveSnapshot();
        debouncedSave(changes)
    }, [debouncedSave, saveSnapshot])

    const value: GraphContextType | undefined = useMemo(() => ({
        graph,
        updateGraph,
        setGraph,
        gridData,
        gridRef
    }), [graph, updateGraph, gridData])

    return (
        <GraphContext.Provider value={value}>
            {children}
        </GraphContext.Provider>
    );
}
