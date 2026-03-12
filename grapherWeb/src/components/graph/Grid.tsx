import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import type { TooltipIndex } from 'recharts';
import { useGraph } from '@/hooks/useGraph';
import { useMemo, useState } from 'react';

type GridData = {
    x?: number | string
    y?: number | string
}

export const Grid = ({ defaultIndex }: { defaultIndex?: TooltipIndex }) => {
    const { graph } = useGraph();
    const [xTitle, setXTitle] = useState("")
    const [yTitle, setYTitle] = useState("")
    const gridData = useMemo((): GridData[] => {
        const data = graph?.data
        const xCol = graph?.xAxis?.col
        const yCol = graph?.yAxis?.col

        if (!data) {
            console.log("early return — missing:", { data: !!data, xCol: !!xCol, yCol: !!yCol })
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

        console.log("xColNum: " + xColNum)
        console.log("yColNum: " + yColNum)
        console.log("rows: " + rows)

        rows.map(row => (
            console.log(xColNum ? row[xColNum] : undefined)
        ))

        return rows.map(row => ({
            x: Number(xColNum !== undefined ? row[xColNum] : undefined),
            y: Number(yColNum !== undefined ? row[yColNum] : undefined)
        }))
    }, [graph])

    console.log(gridData)
    return (
        <ScatterChart
            style={{ width: '100%', height: '100%' }}
            margin={{ top: 20, right: 0, bottom: 0, left: 0 }}
        >
            <CartesianGrid />
            <XAxis type="number" dataKey="x" />
            <YAxis type="number" dataKey="y" width={50} />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} defaultIndex={defaultIndex} />
            <Scatter data={gridData} fill="#8884d8" />
        </ScatterChart>
    );
};