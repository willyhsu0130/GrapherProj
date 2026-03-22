import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import type { TooltipIndex } from 'recharts';
import { useGraph } from '@/hooks/useGraph';
import { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { toPng } from 'html-to-image';



type GridData = {
    x?: number | string
    y?: number | string
}

export const Grid = ({ defaultIndex }: { defaultIndex?: TooltipIndex }) => {
    const { graph, updateGraph } = useGraph();
    const [xTitle, setXTitle] = useState("")
    const [yTitle, setYTitle] = useState("")

    const ref = useRef<HTMLDivElement>(null);


    const gridData = useMemo((): GridData[] => {
        const data = graph?.data
        const xCol = graph?.xAxis?.col
        const yCol = graph?.yAxis?.col

        if (!data) {
            return []
        }

        // Grab first row of the double array.
        const [headers, ...rows] = data

        // Convert xCol and yCol to numbers.

        const xColNum = xCol ? xCol.charCodeAt(0) - 65 : undefined

        const yColNum = yCol ? yCol.charCodeAt(0) - 65 : undefined


        // if (xCol) {
        //     setXTitle((headers as string[]).indexOf(xCol))
        // }
        // if (yCol) {
        //     setYTitle((headers as string[]).indexOf(yCol))
        // }

        return rows.map(row => ({
            x: Number(xColNum !== undefined ? row[xColNum] : undefined),
            y: Number(yColNum !== undefined ? row[yColNum] : undefined)
        }))
    }, [graph])

    const saveSnapshot = useCallback(async () => {
        if (!ref.current) return;
        console.log("save snapshot")
        try {
            const snapshot = await toPng(ref.current!);
            console.log(snapshot)
            updateGraph({ snapshot: snapshot });
        } catch (err) {
            console.error("Failed to capture snapshot:", err);
        }
    }, [updateGraph]);

    // Save when the component is about to unmount
    useEffect(() => {
        return () => {
            console.log("UseEffect called")
            saveSnapshot();
        };
    }, [saveSnapshot]);



    return (
        <div ref={ref} style={{ width: '100%', height: '100%' }} >
            <ScatterChart
                id="grid"
                style={{ width: '100%', height: '100%' }}
                margin={{ top: 20, right: 0, bottom: 0, left: 0 }}
            >
                <CartesianGrid />
                <XAxis type="number" dataKey="x" />
                <YAxis type="number" dataKey="y" width={50} />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} defaultIndex={defaultIndex} />
                <Scatter data={gridData} fill="#8884d8" />
            </ScatterChart>
        </div>

    );
};