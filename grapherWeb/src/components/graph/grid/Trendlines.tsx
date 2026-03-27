import { ReferenceLine } from "recharts";
import { useGraph } from "@/hooks/useGraph";
import { useEffect, useMemo } from "react";

export type DataPoints = {
    x: number
    y: number
}
export const Trendlines = ({ gridData }: { gridData: DataPoints[][] }) => {
    console.log(gridData)
    const { graph, updateGraph } = useGraph()
    const series = useMemo(() => graph?.series ?? [], [graph?.series]);
    const trendlines = graph?.trendlines;
    const linearRegression = (points: { x: number, y: number }[]) => {
        const n = points.length;
        const sumX = points.reduce((acc, p) => acc + p.x, 0);
        const sumY = points.reduce((acc, p) => acc + p.y, 0);
        const sumXY = points.reduce((acc, p) => acc + p.x * p.y, 0);
        const sumX2 = points.reduce((acc, p) => acc + p.x * p.x, 0);

        const m = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX ** 2);
        const b = (sumY - m * sumX) / n;

        return { m, b }; // y = mx + b
    };

    useEffect(() => {
        if (!trendlines?.length) return;

        const updated = trendlines.map((trendline) => {
            if (trendline?.type !== "linear") return trendline;

            const seriesIndex = series.findIndex(s => s.id === trendline.seriesId);
            const currentData = gridData[seriesIndex];
            if (!currentData) return trendline;

            const { m, b } = linearRegression(currentData);

            return {
                ...trendline,
                gradient: trendline.gradient ?? m,      // only set if not already set
                yIntercept: trendline.yIntercept ?? b,  // only set if not already set
            };
        });

        updateGraph({ trendlines: updated });
    }, [gridData, series, trendlines, updateGraph]);

    if (!trendlines?.length) return null

    return (
        <>
            {trendlines && trendlines?.map((trendline, index) => {
                if (!trendline) return
                const color = trendline.color;
                const seriesIndex = series.findIndex(s => s.id === trendline.seriesId);

                const currentData = gridData[seriesIndex];
                if (!currentData) return

                if (trendline.type === "linear") {
                    const gradient = trendline?.gradient || 0
                    const yIntercept = trendline?.yIntercept || 0 
                    // y = mx + b ->
                    return (
                        <ReferenceLine
                            key={trendline.id ?? index}
                            segment={[
                                { x: -yIntercept / gradient, y: 0 },
                                { x: 10000, y: gradient * 10000 + yIntercept },
                            ]}
                            label={{
                                value: trendline?.title && "",
                                fill: "black",
                                position: "insideTopRight",
                            }}
                            stroke={color || "green"}
                            ifOverflow="hidden"
                        />
                    )
                } else if (trendline.type === "polynomial") {
                    // Not developd yet
                    return null
                }

            })}
        </>
    );
}
