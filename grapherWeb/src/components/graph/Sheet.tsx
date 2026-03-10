import 'handsontable/styles/handsontable.min.css';
import { useCallback } from 'react';
import { registerAllModules } from 'handsontable/registry';
import { HotTable } from '@handsontable/react-wrapper';
import { useData } from '../../hooks/useData';
import type { CellChange } from 'handsontable/common';

registerAllModules();

export const Sheet = () => {
    const { data, setData } = useData();

    const handleChange = useCallback((changes: CellChange[] | null) => {
        if (!changes) return;
        setData(prev => {
            const updated = prev.map(row => [...row]);
            changes.forEach(([row, col, , newVal]) => {
                updated[row][col as number] = newVal ?? '';
            });
            return updated;
        });
    }, [setData]);

    return (
        <div className="w-full h-full border border-black">
            <HotTable
                height="auto"
                width="auto"
                stretchH="all"
                themeName="ht-theme-main-dark-auto"
                data={data}
                rowHeaders={true}
                colHeaders={true}
                autoWrapRow={true}
                autoWrapCol={true}
                afterChange={handleChange}
                licenseKey="non-commercial-and-evaluation"
            />
        </div>
    )
}