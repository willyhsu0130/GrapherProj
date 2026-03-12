import { useRef, useState, useEffect } from 'react';
import { useGraph } from '../../hooks/useGraph';
import { IncrementButton } from '../buttons/IncrementButton';


import 'handsontable/styles/handsontable.min.css';
import { registerAllModules } from 'handsontable/registry';
import { HotTable } from '@handsontable/react-wrapper';
import Handsontable from 'handsontable/base';
import type { HotTableRef } from '@handsontable/react-wrapper';


import { Plus } from 'lucide-react';

registerAllModules();

export const Sheet = () => {
    const { graph, updateGraph } = useGraph();
    const [showColPanel, setShowColPanel] = useState(false)
    const [showRowPanel, setShowRowPanel] = useState(false)
    const colPanelRef = useRef<HTMLDivElement>(null);
    const rowPanelRef = useRef<HTMLDivElement>(null);
    const hotRef = useRef<HotTableRef>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (colPanelRef.current && !colPanelRef.current.contains(e.target as Node)) {
                setShowColPanel(false);
            }

            if (rowPanelRef.current && !rowPanelRef.current.contains(e.target as Node)) {
                setShowRowPanel(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [])

    const afterChange = (change: Handsontable.CellChange[] | null, source: Handsontable.ChangeSource) => {
        if (!change) return
        if (source === 'loadData') {
            return;
        }

        const updated = graph?.data?.map(row => [...row]) ?? [];

        change.forEach(([row, col, , newVal]) => {
            updated[row][col as number] = newVal
        })

        updateGraph({ data: updated })
    }

    const handleAddRow = () => {
        const data = graph?.data;
        if (!data) return;

        const newRow = Array(data[0]?.length ?? 5).fill('');

        updateGraph({ data: [...data, newRow] })
    }
    const handleRemoveRow = () => {
        const data = graph?.data;
        if (!data) return
        updateGraph({ data: data.slice(0, -1) })
    }
    
    const handleAddColumn = () => {
        const data = graph?.data
        if (!data) return
        updateGraph({
            data: data.map((row) => [...row, ""])
        })
    }

    const handleRemoveColumn = () => {
        const data = graph?.data
        if (!data) return
        updateGraph({
            data: data.map(row => row.slice(0, -1))
        })
    }
    return (
        <div className="w-full h-full border border-black flex flex-col">
            <div className="flex w-full h-[98%] overflow-scroll">
                <HotTable
                    className="w-[98%] h-full z-10"
                    ref={hotRef}
                    height="100%"
                    width="100%"
                    stretchH="all"
                    themeName="mainTheme"
                    data={graph?.data}
                    rowHeaders={true}
                    colHeaders={true}
                    autoWrapRow={true}
                    autoWrapCol={true}
                    afterChange={afterChange}
                    licenseKey="non-commercial-and-evaluation"
                />
                <div className="relative" ref={colPanelRef}>
                    <button onClick={() => setShowColPanel(prev => !prev)} className=""><Plus /></button>
                    {showColPanel &&
                        <div className="border boder-black flex absolute right-1 top-1 z-100 bg-white items-center">
                            <p className="px-3">{graph?.data && graph?.data[0].length}</p>
                            <IncrementButton increase={handleAddColumn} decrease={handleRemoveColumn} />
                        </div>
                    }
                </div>

            </div>
            <div className="relative" ref={rowPanelRef}>
                <button onClick={() => setShowRowPanel(prev => !prev)}><Plus /></button>
                {showRowPanel &&
                    <div className="border boder-black flex absolute left-1 bottom-1 z-100 bg-white items-center">
                        <p className="px-3">{graph?.data && graph?.data?.length}</p>
                        <IncrementButton increase={handleAddRow} decrease={handleRemoveRow} />
                    </div>
                }
            </div>

        </div>
    )
}