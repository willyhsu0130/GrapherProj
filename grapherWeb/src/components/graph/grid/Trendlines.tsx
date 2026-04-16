import { ReferenceLine } from "recharts";
import { useGraph } from "@/hooks/useGraph";
export type DataPoints = {
    x: number
    y: number
}
export const Trendlines = () => {
    const { graph } = useGraph()

    const trendlines = graph?.trendlines;

    if (!trendlines?.length) return null

    return (
        <>
            {trendlines && trendlines?.map((trendline, index) => {
                const color = trendline?.color;


                if (trendline?.type === "linear") {
                    const gradient = trendline?.gradient || 0
                    const yIntercept = trendline?.yIntercept || 0
                    // y = mx + b ->
                    return (
                        <>

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
                                strokeWidth={trendline.width || 3}
                                strokeDasharray={trendline.lineType === "Dashed" ? "3 3" : ""}
                                ifOverflow="hidden"
                            />
                        </>
                    )
                } else if (trendline?.type === "polynomial") {
                    // Not developd yet
                    return null
                }

            })}
        </>
    );
}
