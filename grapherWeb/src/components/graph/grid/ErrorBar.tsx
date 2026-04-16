import { ReferenceLine } from "recharts";

export interface ErrorBarProps {
    x: number;
    y: number;
    color?: string;
    width?: number;
    lineType?: string;
    key: string

};

export const ErrorBar = ({ x, y, color, width, lineType, key}: ErrorBarProps) => {
    // 1. Calculate the top and bottom of the error bar
    // We use useMemo because these are static values based on the props
    const segmentPoints = [
        { x: x, y: y + 3 }, // Top point
        { x: x, y: y - 3 }, // Bottom point
    ] as const;

    return (
        <ReferenceLine
            // 2. Pass the two points to define the vertical segment
            key={key}
            segment={segmentPoints}
            stroke={color || "red"}
            strokeWidth={width || 2}
            // 3. Match the dash array to your user settings
            strokeDasharray={lineType === "Dashed" ? "3 3" : ""}
            ifOverflow="extendDomain"
        />
    );
};