import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import type { TooltipIndex } from 'recharts';
import { useGraph } from '@/hooks/useGraph';
import { useEffect, useMemo, useRef, useCallback } from 'react';
import { toPng } from 'html-to-image';
import { COLORS } from '@/constants/colors';

// #region Sample data
const data01 = [
    { x: 10, y: 30 },
    { x: 30, y: 200 },
    { x: 45, y: 100 },
    { x: 50, y: 400 },
    { x: 70, y: 150 },
    { x: 100, y: 250 },
];
const data02 = [
    { x: 30, y: 20 },
    { x: 50, y: 180 },
    { x: 75, y: 240 },
    { x: 100, y: 100 },
    { x: 120, y: 190 },
];

type GridData = {
    x?: number
    y?: number
}

export const Grid = ({ defaultIndex }: { defaultIndex?: TooltipIndex }) => {
    const { graph, updateGraph } = useGraph();
    const ref = useRef<HTMLDivElement>(null);


    const series = graph?.series ?? [];

    const gridData = useMemo((): GridData[][] => {
        const data = graph?.data;
        const series = graph?.series;
        const trendlines = graph?.trendlines;

        if (!data || !series || data.length < 2) return [];

        const [, ...rows] = data;
        return series.map(s => {
            const xColNum = s.xAxis?.col ? s.xAxis.col.charCodeAt(0) - 65 : undefined;
            const yColNum = s.yAxis?.col ? s.yAxis.col.charCodeAt(0) - 65 : undefined;

            return rows.map(row => ({
                x: xColNum !== undefined ? Number(row[xColNum]) : undefined,
                y: yColNum !== undefined ? Number(row[yColNum]) : undefined,
            }));
        });
    }, [graph]);

    const saveSnapshot = useCallback(async () => {
        if (!ref.current) return;
        try {
            const snapshot = await toPng(ref.current, {
                skipFonts: true,
            });
            updateGraph({ snapshot });
        } catch (err) {
            console.error("Failed to capture snapshot:", err);
        }
    }, [updateGraph]);
    console.log(gridData)
    useEffect(() => {
        return () => { saveSnapshot(); };
    }, [saveSnapshot]);

    return (
        <div ref={ref} style={{ width: '100%', height: '100%' }}>
            <ScatterChart
                id="grid"
                style={{ width: '100%', height: '100%' }}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                responsive
            >
                <CartesianGrid />
                <XAxis type="number"
                    dataKey="x"
                    width={50}
                    name={graph?.xAxis?.title?.content ?? undefined}
                    fontSize={graph?.xAxis?.title?.size ?? 12}
                    label={{
                        value: graph?.xAxis?.title?.content,
                        angle: 0,
                        position: 'bottom', // Positions it inside the left margin
                        offset: -10,             // Distance from the axis line
                        style: {
                            textAnchor: 'middle',
                            fill: graph?.xAxis?.title?.color ?? "",
                            fontFamily: graph?.xAxis?.title?.font ?? 'inherit',
                            fontSize: graph?.xAxis?.title?.size ?? 14
                        }
                    }}
                />
                <YAxis
                    type="number"
                    dataKey="y"
                    width={50}
                    name={graph?.yAxis?.title?.content ?? ""}
                    fontSize={graph?.yAxis?.title?.size ?? 12}
                    label={{
                        value: graph?.yAxis?.title?.content,
                        angle: -90,
                        position: 'insideLeft', // Positions it inside the left margin
                        offset: 0,             // Distance from the axis line
                        style: {
                            textAnchor: 'middle',
                            fill: graph?.yAxis?.title?.color ?? "",
                            fontFamily: graph?.yAxis?.title?.font ?? 'inherit',
                            fontSize: graph?.yAxis?.title?.size ?? 14
                        }
                    }}
                />
                <ZAxis type="number" range={[64, 64]} />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} defaultIndex={defaultIndex} />
                {series.map((_, index) => (
                    <Scatter
                        name="Scatter"
                        key={index}
                        // data={gridData[index] ?? []}
                        data={data02}
                        fill={series[index]?.color ?? COLORS[index % COLORS.length]}
                        line
                        lineJointType="monotone"
                    />
                ))}
            </ScatterChart>
        </div>
    );
};