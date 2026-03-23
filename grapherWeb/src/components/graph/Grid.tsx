import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import type { TooltipIndex } from 'recharts';
import { useGraph } from '@/hooks/useGraph';
import { useEffect, useMemo, useRef, useCallback } from 'react';
import { toPng } from 'html-to-image';
import { COLORS } from '@/constants/colors';

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
            const snapshot = await toPng(ref.current);
            updateGraph({ snapshot });
        } catch (err) {
            console.error("Failed to capture snapshot:", err);
        }
    }, [updateGraph]);

    useEffect(() => {
        return () => { saveSnapshot(); };
    }, [saveSnapshot]);

    return (
        <div ref={ref} style={{ width: '100%', height: '100%' }}>
            <ScatterChart
                id="grid"
                style={{ width: '100%', height: '100%' }}
                margin={{ top: 20, right: 0, bottom: 0, left: 0 }}
            >
                <CartesianGrid />
                <XAxis type="number" dataKey="x" />
                <YAxis type="number" dataKey="y" width={50} />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} defaultIndex={defaultIndex} />
                {series.map((_, index) => (
                    <Scatter
                        key={index}
                        data={gridData[index] ?? []}
                        fill={COLORS[index % COLORS.length]}
                    />
                ))}
            </ScatterChart>
        </div>
    );
};