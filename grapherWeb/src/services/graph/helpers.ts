export const linearRegression = (points: { x: number, y: number }[]) => {
        const n = points.length;
        const sumX = points.reduce((acc, p) => acc + p.x, 0);
        const sumY = points.reduce((acc, p) => acc + p.y, 0);
        const sumXY = points.reduce((acc, p) => acc + p.x * p.y, 0);
        const sumX2 = points.reduce((acc, p) => acc + p.x * p.x, 0);

        const m = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX ** 2);
        const b = (sumY - m * sumX) / n;

        return { m, b }; // y = mx + b
    };
