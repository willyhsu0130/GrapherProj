import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip } from 'recharts';
import { useGraph } from '@/hooks/useGraph';
import { useMemo } from 'react';
import { COLORS } from '@/constants/colors';
import { Trendlines } from './Trendlines';

export const Grid = ({ defaultIndex }: { defaultIndex?: number }) => {
    const { graph, gridData, gridRef } = useGraph();
    const series = useMemo(() => graph?.series ?? [], [graph?.series]);

    return (
        <div ref={gridRef} style={{ width: '100%', height: "100%" }}>
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
                    if (!seriesItem.id) return null;
                    return (
                        <Scatter
                            name={`Series ${index + 1}`}
                            key={index}
                            data={gridData[seriesItem.id] ?? []}
                            fill={strokeColor}
                        />
                    );
                })}
                <Trendlines />
            </ScatterChart>

        </div>
    );
};



