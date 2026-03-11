import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import type { TooltipIndex } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
    { x: 100, y: 200 },
    { x: 120, y: 100 },
    { x: 170, y: 300 },
    { x: 140, y: 250 },
    { x: 150, y: 400 },
    { x: 110, y: 280 },
];

// #endregion
export const Grid = ({ defaultIndex }: { defaultIndex?: TooltipIndex }) => {
    return (
        <ScatterChart
            className="h-full"
            style={{ width: '100%' }}
            responsive
            margin={{
                top: 20,
                right: 0,
                bottom: 0,
                left: 0,
            }}
        >
            <CartesianGrid />
            <XAxis type="number" dataKey="x" name="stature" unit="cm" />
            <YAxis type="number" dataKey="y" name="weight" unit="kg" width="auto" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} defaultIndex={defaultIndex} />
            <Scatter activeShape={{ fill: 'red' }} name="A school" data={data} fill="#8884d8" />
            <RechartsDevtools />
        </ScatterChart>
    );
};