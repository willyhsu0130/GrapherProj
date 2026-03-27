import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip } from 'recharts';
import { useGraph } from '@/hooks/useGraph';
import { useEffect, useMemo, useRef, useCallback } from 'react';
import { toPng } from 'html-to-image';
import { COLORS } from '@/constants/colors';
import { Trendlines } from './Trendlines';
import type { DataPoints } from './Trendlines';

export const Grid = ({ defaultIndex }: { defaultIndex?: number }) => {
    const { graph, updateGraph } = useGraph();
    const ref = useRef<HTMLDivElement>(null);
    const series = useMemo(() => graph?.series ?? [], [graph?.series]);


    const gridData = useMemo(() => {
        const data = graph?.data;
        if (!data || !series || data.length < 2) return [];

        const [, ...rows] = data; // skip headers

        return series.map(s => {
            const xColNum = s.xAxis?.col ? s.xAxis.col.charCodeAt(0) - 65 : undefined;
            const yColNum = s.yAxis?.col ? s.yAxis.col.charCodeAt(0) - 65 : undefined;

            return rows
                .map(row => ({
                    x: xColNum !== undefined ? Number(row[xColNum]) : undefined,
                    y: yColNum !== undefined ? Number(row[yColNum]) : undefined,
                }))
                .filter((p): p is DataPoints =>
                    p.x !== undefined && p.y !== undefined && !isNaN(p.x) && !isNaN(p.y) && (p.x !== 0 || p.y !== 0)
                )
                .sort((a, b) => (a.x ?? 0) - (b.x ?? 0));
        }).filter(points => points.length > 0);
    }, [graph?.data, series]);

    const saveSnapshot = useCallback(async () => {
        if (!ref.current || !graph?.id) return;
        try {
            const snapshot = await toPng(ref.current, { skipFonts: true });
            // Only fire if the image is new and valid
            if (snapshot && snapshot !== graph.snapshot) {
                updateGraph({ snapshot });
            }
        } catch (err) {
            console.error("Snapshot failed:", err);
        }
    }, [updateGraph, graph]);

    useEffect(() => {
        return () => { saveSnapshot(); };
    }, [saveSnapshot]);

    return (
        <div ref={ref} style={{ width: '100%', height: "100%" }}>
            <ScatterChart
                id="grid"
                style={{ width: '100%', height: '100%' }}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                responsive
            >
                <CartesianGrid />
                <XAxis type="number" dataKey="x" name="X-Axis" />
                <YAxis type="number" dataKey="y" name="Y-Axis" />
                <ZAxis type="number" range={[64, 64]} />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} defaultIndex={defaultIndex} />
                {series.map((seriesItem, index) => {
                    const strokeColor = seriesItem.color || COLORS[index % COLORS.length] || "#8884d8";
                    return (
                        <Scatter
                            name={`Series ${index + 1}`}
                            key={index}
                            data={gridData[index] ?? []}
                            fill={strokeColor}
                        />
                    );
                })}
                <Trendlines gridData={gridData} />
            </ScatterChart>

        </div>
    );
};



